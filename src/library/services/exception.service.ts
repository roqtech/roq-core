import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { ErrorCodeEnum } from '@src/library/enums';
import { ExceptionPayload } from '@src/library/interfaces';
import { JsonObject } from '@src/library/scalars';

@Injectable()
export class ExceptionService {
  constructor(
  ) {}

  static getProcessedNestedValidationErrorMessage(errMessage: string): JsonObject | string {
    const messageParts = errMessage.split('.');

    const stringifiedJsonAtIndex = messageParts.findIndex(
      (element) => element.startsWith('{') || element.startsWith('['),
    );

    if (stringifiedJsonAtIndex !== -1 && stringifiedJsonAtIndex !== 0) {
      try {
        const completeStringifiedObject = messageParts.slice(stringifiedJsonAtIndex).join('.');

        const details = JSON.parse(completeStringifiedObject);

        const nonAbidingProperty = details?.variables?.property;

        if (nonAbidingProperty) {
          const basePropertyPath = messageParts.slice(0, stringifiedJsonAtIndex).join('.');

          details.variables.propertyPath = `${basePropertyPath}.${nonAbidingProperty}`;
        }

        return details;
      } catch (_) {
        /* NOTHING TO DO */
      }
    } else {
      return errMessage;
    }
  }

  static getProcessedErrorInstance(
    err: GraphQLError,
    customMessage?: string,
    customResponseExtension?: Record<string, unknown>,
    customHttpCode?: string,
  ): GraphQLFormattedError {
    const exceptionDetails = err?.extensions?.exception;
    let appendStack = false;

    const extensionsObject: Record<string, unknown> = {
      response: customResponseExtension ? customResponseExtension : err?.extensions?.response,
      code: customHttpCode ? customHttpCode : err?.extensions?.code,
    };

    if (!err?.extensions?.isProd || err?.extensions?.isProd === false) {
      // development
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
      const { isProd, errorResponseFromFederatedService, response, code, ...partialExtensionsObject } = err.extensions;
      // Complete extensions object with custom response object and code if provided
      Object.assign(extensionsObject, partialExtensionsObject);
      appendStack = true;
    }

    const newGQLException = new GraphQLError(
      customMessage || err.message,
      err.nodes,
      err.source,
      err.positions,
      err.path,
      err.originalError,
      extensionsObject,
    );

    if (appendStack) {
      // only in dev mode
      if (err.stack) {
        newGQLException.stack = err.stack;
      } else if (!err.stack && exceptionDetails?.stacktrace) {
        newGQLException.stack = exceptionDetails?.stacktrace;
      }
    }
    return newGQLException;
  }

  static processGraphqlValidationError(err: GraphQLError): GraphQLFormattedError {
    const exceptionDetails = err?.extensions?.exception; // So in prod as well we get the error subcode
    const errorStatusCode = 'GRAPHQL_VALIDATION_FAILED';
    const errorResponseObj = {
      statusCode: 400,
      error: 'ValidationError',
      errorCode: ErrorCodeEnum.GRAPHQL_VALIDATION_FAILED,
      errorSubCode: exceptionDetails?.code,
      message: err.message,
      variables: {},
    };

    return ExceptionService.getProcessedErrorInstance(err, errorResponseObj.message, errorResponseObj, errorStatusCode);
  }

  static processInternalServerError(err: GraphQLError): GraphQLFormattedError {
    const exceptionDetails = err?.extensions?.exception; // So in prod as well we get the error subcode
    const errorStatusCode = 'INTERNAL_SERVER_ERROR';
    const errorResponseObj = {
      statusCode: 500,
      error: 'Internal Server Error',
      errorCode: ErrorCodeEnum.INTERNAL_SERVER_ERROR,
      errorSubCode: exceptionDetails?.code,
      message: 'Something Went Wrong. Please Try Later',
      variables: {},
    };

    return ExceptionService.getProcessedErrorInstance(err, errorResponseObj.message, errorResponseObj, errorStatusCode);
  }

  static processOtherErrorType(err: GraphQLError): GraphQLFormattedError {
    let errorMessageToEvaluate = err.message;
    let parsedErrorMessage = null;
    if (err?.extensions?.response?.message && Array.isArray(err?.extensions?.response?.message)) {
      const response = ExceptionService.getProcessedNestedValidationErrorMessage(err.extensions.response.message[0]);
      if (typeof response === 'object') {
        parsedErrorMessage = response;
      } else {
        errorMessageToEvaluate = response;
      }
    }
    const errorObject: ExceptionPayload = parsedErrorMessage || JSON.parse(errorMessageToEvaluate);
    const extensionsResponseObj = { ...err.extensions.response, ...errorObject };
    let httpCode = null;
    for (const enumLiteral in HttpStatus) {
      /* This ensures code is always a string and not a number */
      if (HttpStatus[enumLiteral]) {
        const statusCode = extensionsResponseObj?.statusCode;
        if (statusCode !== 400 && HttpStatus[enumLiteral] === statusCode) {
          // WE ALLOW BAD_USER_INPUT code
          httpCode = enumLiteral;
          break;
        }
      }
    }
    return ExceptionService.getProcessedErrorInstance(err, errorObject.message, extensionsResponseObj, httpCode);
  }

  static formatGqlErrors(err: GraphQLError): GraphQLFormattedError {
    if (err?.extensions?.errorResponseFromFederatedService) {
      return ExceptionService.getProcessedErrorInstance(err);
    }
    if (err?.extensions?.code === 'GRAPHQL_VALIDATION_FAILED') {
      return ExceptionService.processGraphqlValidationError(err);
    }
    try {
      return ExceptionService.processOtherErrorType(err);
    } catch (parsingError) {
      /* Errors thrown from interceptors don't actually need to be stringfied, but we do it for consistency reasons */
      return ExceptionService.processInternalServerError(err);
    }
  }
}

import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { JsonObject } from '../../library/scalars';
export declare class ExceptionService {
    constructor();
    static getProcessedNestedValidationErrorMessage(errMessage: string): JsonObject | string;
    static getProcessedErrorInstance(err: GraphQLError, customMessage?: string, customResponseExtension?: Record<string, unknown>, customHttpCode?: string): GraphQLFormattedError;
    static processGraphqlValidationError(err: GraphQLError): GraphQLFormattedError;
    static processInternalServerError(err: GraphQLError): GraphQLFormattedError;
    static processOtherErrorType(err: GraphQLError): GraphQLFormattedError;
    static formatGqlErrors(err: GraphQLError): GraphQLFormattedError;
}

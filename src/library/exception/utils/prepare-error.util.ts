import { UtilityService } from '@src/library/services';

export const prepareError = (defaultMessage: string, errorCode: string, error?: any): string => {
  const variables = error && error.variables ? error.variables : {};
  const message =
    error && error.message ? error.message : UtilityService.compileHandleBarTemplate(defaultMessage, variables);
  return JSON.stringify({
    message,
    variables,
    errorCode,
  });
};

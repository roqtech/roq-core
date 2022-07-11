// eslint-disable-next-line @roq/filename-suffix-mismatch
import { isObject } from 'lodash';
import { TransformableInfo } from 'logform';

export const skipFields = (log: TransformableInfo, skipKeys: string[] = []): void => {
  if (isObject(log)) {
    Object.keys(log).forEach((key) => {
      if (skipKeys.find((k) => k === key)) {
        delete log[key];
      } else {
        skipFields(log[key], skipKeys);
      }
    });
  }
};

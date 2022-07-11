// eslint-disable-next-line @roq/filename-suffix-mismatch
import { isObject } from 'lodash';
import { protectedVars } from 'src/library/utilities';

const filterVariables = (env: NodeJS.ProcessEnv) => {
  if (!isObject(env)) {
    return env;
  }
  Object.keys(env).forEach((key) => {
    if (check(key)) {
      env[key] = mask(env[key]);
    }
  });
  return env;
};

function check(str: string): boolean {
  const re = new RegExp(protectedVars.map((el) => `${el}\\b`).join('|'));
  return re.test(str);
}

function mask(value: string) {
  let range = Math.floor(value.length / 3);
  if (range < 1) {
    return value;
  }
  if (range > 15) {
    range = 15;
  }

  return value.slice(0, range) + '***' + value.slice(-range);
}

export function getEnvVars(): NodeJS.ProcessEnv {
  return filterVariables(process.env);
}

import { JsonObject } from '@src/library/scalars';

export const compileMessage = (content: string, contentVars: JsonObject): string =>
  Object.keys(contentVars).reduce(
    (acc, propName) => acc.replace(new RegExp(`{{${propName}}}`, 'g'), contentVars[propName]),
    content,
  );

import Handlebars from 'handlebars'
import { JsonObject } from '../../scalars'

export const compileMessage = (content: string, contentVars: JsonObject): string =>
  Object.keys(contentVars).reduce(
    (acc, propName) => acc.replace(new RegExp(`{{${propName}}}`, 'g'), contentVars[propName]),
    content,
  )

export const compileHandleBarTemplate = (content: string, contentVars: JsonObject): string => {
  const template = Handlebars.compile(content)
  return template(contentVars)
}
  
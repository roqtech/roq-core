import { LoggingTypeEnum } from '../../logger/enums';
import { GraphqlRequestLogInterface } from '../../logger/interfaces';
export interface IncomingQueryLogInterface {
    type: LoggingTypeEnum.incomingQuery;
    request: GraphqlRequestLogInterface;
}

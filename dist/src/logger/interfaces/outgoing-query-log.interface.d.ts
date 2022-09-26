import { LoggingTypeEnum } from '../../logger/enums';
import { GraphqlRequestLogInterface } from '../../logger/interfaces';
export interface OutgoingQueryLogInterface {
    type: LoggingTypeEnum.outgoingQuery;
    request: GraphqlRequestLogInterface;
}

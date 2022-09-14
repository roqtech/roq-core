import { OrderEnum } from "src/library/enums";

export interface QueryOrderInterface {
    order: OrderEnum;
    sort: string;
}

import { GraphQLResolveInfo } from 'graphql';
export interface LocalizedDtoInterface {
    locales: LocalizationInterface[];
}
export interface LocalizationInterface {
    locale: string;
}
export declare class UtilityService {
    constructor();
    getInfoFields(info: GraphQLResolveInfo): string[];
}

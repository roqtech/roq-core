import { UserLoginHistoryPageType } from '../../../platformClient/platformUserClient/types';
export interface User {
    id: string;
    email: string;
    password: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    locale?: string;
    timezone?: string;
    roqIdentifier: string;
    optedInAt?: Date;
    active?: boolean;
    sync?: boolean;
    userLoginHistories: UserLoginHistoryPageType;
    createdAt?: Date;
    updatedAt?: Date;
}

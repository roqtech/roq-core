import { User } from '../../../platformClient/platformUserClient/types';
export declare class UserLoginHistoryType {
    id: string;
    ip: string;
    host: string;
    timestamp: Date;
    userId: string;
    user: User;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserCreateInterface {
    email: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    locale?: string;
    timezone?: string;
    roqIdentifier?: string;
    optedInAt?: Date;
    sync?: boolean;
}

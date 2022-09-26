import { MailSendDto } from '../../../platformClient/platformMailClient/types';
import { PlatformServiceAccountClientService } from '../../../platformClient/services';
export declare class PlatformMailClientService {
    protected readonly platformServiceAccountClientService: PlatformServiceAccountClientService;
    constructor(platformServiceAccountClientService: PlatformServiceAccountClientService);
    sendMail(payload: MailSendDto): Promise<boolean>;
}

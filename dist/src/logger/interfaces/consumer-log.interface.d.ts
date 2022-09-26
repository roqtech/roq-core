export interface ConsumerLogInterface {
    id: string;
    consumer: string;
    parameters?: Record<string, unknown>;
    condition?: string;
    eventType: string;
    api?: string;
}

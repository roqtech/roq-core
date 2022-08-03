export interface PlatformEventSubscriber {
  key: string;
  eventType: string;
  consumer: string;
  parameters?: Record<string, unknown>;
  api?: string;
  condition?: string;
}

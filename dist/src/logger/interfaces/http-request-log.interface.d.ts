export interface HttpRequestLogInterface {
    headers?: unknown;
    body?: unknown;
    query?: unknown;
    url?: string;
    method: string;
}

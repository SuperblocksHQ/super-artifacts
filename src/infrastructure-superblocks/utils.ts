export function getApiBaseUrl(): string {
    if (process.env.LOCAL) {
        return 'http://localhost:2999/v1';
    } else if (process.env.DEVELOP) {
        return `https://api-dev.superblocks.com/v1`;
    } else {
        return `https://api.superblocks.com/v1`;
    }
}

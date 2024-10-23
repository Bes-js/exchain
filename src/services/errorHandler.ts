export default class ExchangeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ExchangeError';
        this.message = message;
    }
}
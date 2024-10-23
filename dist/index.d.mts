import { RatesOptions, RatesResponse, CurrencyList } from './services/types.mjs';
export { Currency } from './services/types.mjs';
export { default as ExchangeError } from './services/errorHandler.mjs';

/**
 * The main class for the Exchange module.
 */
declare class Exchange {
    /**
     * Retrieves exchange rates based on the provided options.
     *
     * @param RatesOptions - The options for fetching exchange rates.
     * @param RatesOptions.amount - The amount to convert. Defaults to 1 if not provided or invalid.
     * @param RatesOptions.base - The base currency code. Defaults to 'USD' if not provided or invalid.
     * @param RatesOptions.to - An array of target currency codes. Defaults to ['EUR', 'AUD', 'CAD', 'GBP', 'JPY', 'TRY'] if not provided or empty.
     * @param RatesOptions.startDate - The start date for historical rates (optional).
     * @param RatesOptions.endDate - The end date for historical rates (optional).
     * @param RatesOptions.toFixed - The number of decimal places to round the rates to (optional). Cannot be used with multiple dates.
     *
     * @returns A promise that resolves to a `RatesResponse` object containing the exchange rates.
     *
     * @throws {ExchangeError} If an error occurs during the request or if `toFixed` is used with multiple dates.
     */
    static getRates(RatesOptions: RatesOptions): Promise<RatesResponse>;
    /**
     * Retrieves a list of available currencies.
     *
     * @returns A promise that resolves to a `CurrencyList` object containing the available currencies.
     *
     * @throws {ExchangeError} If an error occurs during the request.
     */
    static getCurrencies(): Promise<CurrencyList>;
}

export { CurrencyList, RatesOptions, RatesResponse, Exchange as default };

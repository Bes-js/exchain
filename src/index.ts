import Router from "./services/router";
import {
 Currency,
 RatesOptions,
 CurrencyList,
 RatesResponse
} from './services/types';
import ExchangeError from "./services/errorHandler";

export {
    Currency,
    RatesOptions,
    CurrencyList,
    RatesResponse,
    ExchangeError
};


/**
 * The main class for the Exchange module.
 */
export default class Exchange {

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
    static async getRates(
        RatesOptions: RatesOptions
    ) {
        return new Promise<RatesResponse>(async (resolve, reject) => {
        if(
            !RatesOptions.amount || 
            typeof RatesOptions.amount !== 'number'
        ) RatesOptions.amount = 1;
        if(
            !RatesOptions.base ||
            ['AUD','BGN','BRL','CAD','CHF','CNY','CZK','DKK','EUR','GBP','HKD','HUF','IDR','ILS','INR','ISK','JPY','KRW','MXN','MYR','NOK','NZD','PHP','PLN','RON','SEK','SGD','THB','TRY','USD','ZAR'].indexOf(RatesOptions.base) === -1
        ) RatesOptions.base = 'USD';
        if(
            !RatesOptions.to || 
            RatesOptions.to.length == 0
        ) RatesOptions.to = ['EUR','AUD','CAD','GBP','JPY','TRY'];

        try {
        var response = await Router.request(
            'GET',
             `https://api.frankfurter.app/${
                RatesOptions.startDate && 
                RatesOptions.endDate
                    ? `${
                    RatesOptions.startDate
                    }${
                    RatesOptions.endDate ? 
                    `..${
                    RatesOptions.endDate
                    }`: ''
                    }`
                    : 'latest'
             }?base=${
                RatesOptions.base
            }&symbols=${
                RatesOptions.to && RatesOptions.to.length > 0 ?
                RatesOptions.to.join(',') :
                ''
                }&amount=${
                    RatesOptions.amount
                }`
            ) as RatesResponse;

            if(RatesOptions.toFixed && RatesOptions.toFixed > 0) {
                if(
                    RatesOptions.startDate || 
                    RatesOptions.endDate
                ) {
                    throw new ExchangeError('Cannot use toFixed with multiple dates');
                } else {
                    Object.keys(response.rates).forEach((key) => {
                        response.rates[key] = Number(Number(response.rates[key]).toFixed(RatesOptions.toFixed)) as number;
                    });
                }
            };

            resolve(response);
        } catch (error) {
            reject(new ExchangeError((error as Error)?.message));
        }
    });
};

    

/**
 * Retrieves a list of available currencies.
 * 
 * @returns A promise that resolves to a `CurrencyList` object containing the available currencies.
 * 
 * @throws {ExchangeError} If an error occurs during the request.
 */
    static async getCurrencies(): Promise<CurrencyList> {
        return new Promise<CurrencyList>(async (resolve, reject) => {
        try {
            var response = await Router.request('GET', 'https://api.frankfurter.app/currencies') as CurrencyList;
            resolve(response);
        } catch (error) {
            reject(new ExchangeError((error as Error)?.message));
        }
    });
};

};
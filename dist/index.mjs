import nyro, { ResponseType } from 'nyro';

/* Package */
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var _Router = class _Router {
  static async request(method, url) {
    return nyro({
      method,
      url,
      responseType: ResponseType.Json
    }).then((response) => {
      return response.body;
    }).catch((error) => {
      throw new Error(error);
    });
  }
};
__name(_Router, "Router");
var Router = _Router;

// src/services/errorHandler.ts
var _ExchangeError = class _ExchangeError extends Error {
  constructor(message) {
    super(message);
    this.name = "ExchangeError";
    this.message = message;
  }
};
__name(_ExchangeError, "ExchangeError");
var ExchangeError = _ExchangeError;

// src/index.ts
var _Exchange = class _Exchange {
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
  static async getRates(RatesOptions2) {
    return new Promise(async (resolve, reject) => {
      if (!RatesOptions2.amount || typeof RatesOptions2.amount !== "number") RatesOptions2.amount = 1;
      if (!RatesOptions2.base || ["AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK", "EUR", "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON", "SEK", "SGD", "THB", "TRY", "USD", "ZAR"].indexOf(RatesOptions2.base) === -1) RatesOptions2.base = "USD";
      if (!RatesOptions2.to || RatesOptions2.to.length == 0) RatesOptions2.to = ["EUR", "AUD", "CAD", "GBP", "JPY", "TRY"];
      try {
        var response = await Router.request(
          "GET",
          `https://api.frankfurter.app/${RatesOptions2.startDate && RatesOptions2.endDate ? `${RatesOptions2.startDate}${RatesOptions2.endDate ? `..${RatesOptions2.endDate}` : ""}` : "latest"}?base=${RatesOptions2.base}&symbols=${RatesOptions2.to && RatesOptions2.to.length > 0 ? RatesOptions2.to.join(",") : ""}&amount=${RatesOptions2.amount}`
        );
        if (RatesOptions2.toFixed && RatesOptions2.toFixed > 0) {
          if (RatesOptions2.startDate || RatesOptions2.endDate) {
            throw new ExchangeError("Cannot use toFixed with multiple dates");
          } else {
            Object.keys(response.rates).forEach((key) => {
              response.rates[key] = Number(Number(response.rates[key]).toFixed(RatesOptions2.toFixed));
            });
          }
        }
        ;
        resolve(response);
      } catch (error) {
        reject(new ExchangeError(error == null ? void 0 : error.message));
      }
    });
  }
  /**
   * Retrieves a list of available currencies.
   * 
   * @returns A promise that resolves to a `CurrencyList` object containing the available currencies.
   * 
   * @throws {ExchangeError} If an error occurs during the request.
   */
  static async getCurrencies() {
    return new Promise(async (resolve, reject) => {
      try {
        var response = await Router.request("GET", "https://api.frankfurter.app/currencies");
        resolve(response);
      } catch (error) {
        reject(new ExchangeError(error == null ? void 0 : error.message));
      }
    });
  }
};
__name(_Exchange, "Exchange");
var Exchange = _Exchange;
/* Package */

export { ExchangeError, Exchange as default };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map
type Currency = 'AUD' | 'BGN' | 'BRL' | 'CAD' | 'CHF' | 'CNY' | 'CZK' | 'DKK' | 'EUR' | 'GBP' | 'HKD' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'ISK' | 'JPY' | 'KRW' | 'MXN' | 'MYR' | 'NOK' | 'NZD' | 'PHP' | 'PLN' | 'RON' | 'SEK' | 'SGD' | 'THB' | 'TRY' | 'USD' | 'ZAR';
interface CurrencyList {
    'AUD': string;
    'BGN': string;
    'BRL': string;
    'CAD': string;
    'CHF': string;
    'CNY': string;
    'CZK': string;
    'DKK': string;
    'EUR': string;
    'GBP': string;
    'HKD': string;
    'HUF': string;
    'IDR': string;
    'ILS': string;
    'INR': string;
    'ISK': string;
    'JPY': string;
    'KRW': string;
    'MXN': string;
    'MYR': string;
    'NOK': string;
    'NZD': string;
    'PHP': string;
    'PLN': string;
    'RON': string;
    'SEK': string;
    'SGD': string;
    'THB': string;
    'TRY': string;
    'USD': string;
    'ZAR': string;
}
interface RatesResponse {
    amount: number;
    base: Currency;
    date?: string;
    start_date?: string;
    end_date?: string;
    rates: {
        [key: string]: number;
    } | {
        [key: string]: {
            [key: string]: number;
        };
    };
    toFixed?: number;
}
interface RatesOptions {
    amount?: number;
    base?: Currency;
    to?: Currency[];
    startDate?: string;
    endDate?: string;
    toFixed?: number;
}

export type { Currency, CurrencyList, RatesOptions, RatesResponse };

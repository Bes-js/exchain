<br/>
<p align="center">
<img src="./assets/exchain_logo.png" align="center">
</p>
<h4 align="center">A fast and flexible currency exchange package for handling multiple currencies.</h6>
<p align="center">
<img src="https://img.shields.io/npm/v/exchain?style=for-the-badge&logo=npm&logoColor=red">
<img src="https://img.shields.io/github/repo-size/Bes-js/exchain?style=for-the-badge&logo=github&logoColor=white"> 
<img src="https://img.shields.io/npm/l/exchain?style=for-the-badge">
<img src="https://img.shields.io/npm/unpacked-size/exchain?style=for-the-badge"> 
<img src="https://img.shields.io/npm/dt/exchain?style=for-the-badge&logoColor=blue"> 
<img src="https://img.shields.io/github/package-json/dependency-version/Bes-js/exchain/sequelize?style=for-the-badge">
<a href="https://discord.gg/luppux" target="_blank"> 
<img alt="Discord" src="https://img.shields.io/badge/Support-Click%20here-7289d9?style=for-the-badge&logo=discord"> 
</a>
<a href="https://www.buymeacoffee.com/beykant" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee">
</a>
</p>


## Installation

Using npm:
```shell
$ npm install exchain
```

Other Installations:

```bash
$ yarn add exchain
```

```bash
$ pnpm add exchain
```

## Usage
```js
import exchain from 'exchain';

(async () => {

// Get Rates
var getRates = await exchain.getRates({
    amount: 2,
    base: 'USD',
    to: ['AUD', 'EUR', 'GBP', 'TRY'],
    toFixed: 2
});

console.log(getRates);
/*
{
  amount: 2,
  base: 'USD',
  date: '2024-10-22',
  rates: { AUD: 2.99, EUR: 1.85, GBP: 1.54, TRY: 68.5 }
}
*/



// Get Rates with date
var getRatesWithDate = await exchain.getRates({
    amount: 2,
    base: 'USD',
    to: ['AUD', 'EUR', 'GBP', 'TRY'],
    startDate: '2024-10-15',
    endDate: '2024-10-22',
});

console.log(getRatesWithDate);
/*
{
  amount: 2,
  base: 'USD',
  start_date: '2024-10-15',
  end_date: '2024-10-22',
  rates: {
    '2024-10-15': { AUD: 2.9783, EUR: 1.8344, GBP: 1.529, TRY: 68.516 },
    '2024-10-16': { AUD: 2.99, EUR: 1.8354, GBP: 1.5345, TRY: 68.421 },
    '2024-10-17': { AUD: 2.9869, EUR: 1.8406, GBP: 1.5361, TRY: 68.318 },
    '2024-10-18': { AUD: 2.9805, EUR: 1.8438, GBP: 1.5334, TRY: 68.585 },
    '2024-10-21': { AUD: 2.9909, EUR: 1.8428, GBP: 1.5353, TRY: 68.509 },
    '2024-10-22': { AUD: 2.9899, EUR: 1.8483, GBP: 1.5403, TRY: 68.496 }
  }
}
*/



// Get Currencies
var getCurrencies = await exchain.getCurrencies();

console.log(getCurrencies);
/*
{
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Renminbi Yuan',
  CZK: 'Czech Koruna',
  DKK: 'Danish Krone',
  EUR: 'Euro',
  GBP: 'British Pound',
  HKD: 'Hong Kong Dollar',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  ISK: 'Icelandic Króna',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Złoty',
  RON: 'Romanian Leu',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  USD: 'United States Dollar',
  ZAR: 'South African Rand'
}
*/

})();
```

## License

exchain is licensed under the **MIT** License. See the [LICENSE](./LICENSE.md) file for details.

## Support

[![Discord Banner](https://api.weblutions.com/discord/invite/luppux/)](https://discord.gg/luppux)

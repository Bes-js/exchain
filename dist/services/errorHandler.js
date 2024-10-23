'use strict';

/* Package */
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

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
/* Package */

module.exports = ExchangeError;
//# sourceMappingURL=errorHandler.js.map
//# sourceMappingURL=errorHandler.js.map
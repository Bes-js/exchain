'use strict';

var nyro = require('nyro');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var nyro__default = /*#__PURE__*/_interopDefault(nyro);

/* Package */
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var _Router = class _Router {
  static async request(method, url) {
    return nyro__default.default({
      method,
      url,
      responseType: nyro.ResponseType.Json
    }).then((response) => {
      return response.body;
    }).catch((error) => {
      throw new Error(error);
    });
  }
};
__name(_Router, "Router");
var Router = _Router;
/* Package */

module.exports = Router;
//# sourceMappingURL=router.js.map
//# sourceMappingURL=router.js.map
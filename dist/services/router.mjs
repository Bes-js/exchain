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
/* Package */

export { Router as default };
//# sourceMappingURL=router.mjs.map
//# sourceMappingURL=router.mjs.map
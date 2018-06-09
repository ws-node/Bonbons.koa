"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json_1 = require("./result/json");
const string_1 = require("./result/string");
class BaseController {
    get context() { return this._ctx; }
    /**
     * Returns in JSON format, and supports the use of options to configure serialization behavior
     * @description
     * @author Big Mogician
     * @protected
     * @param {*} json
     * @param {JsonResultOptions} [options]
     * @returns {JsonResult}
     * @memberof BaseController
     */
    toJSON(json, options) {
        return new json_1.JsonResult(json, options);
    }
    /**
     * Returns the body of a string. You can use the encoding of the options configuration string, etc.
     * @description
     * @author Big Mogician
     * @protected
     * @param {string} str
     * @param {StringResultOptions} [options]
     * @returns {StringResult}
     * @memberof BaseController
     */
    toStringfy(str, options) {
        return new string_1.StringResult(str, options);
    }
    /**
     * Let the current execution sleep for a certain period of time
     * @param time
     * @async
     */
    sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time || 0));
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.js.map
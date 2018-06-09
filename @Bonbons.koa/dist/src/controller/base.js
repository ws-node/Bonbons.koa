import { JsonResult } from "./result/json";
import { StringResult } from "./result/string";
export class BaseController {
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
        return new JsonResult(json, options);
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
        return new StringResult(str, options);
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
//# sourceMappingURL=base.js.map
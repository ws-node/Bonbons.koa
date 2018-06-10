import { Context } from "./context";
import { JsonResultOptions, StringResultOptions } from "../metadata/options";
import { JsonResult } from "./result/json";
import { StringResult } from "./result/string";
import { Async } from "../metadata/controller";
export declare abstract class BaseController {
    private _ctx;
    readonly context: Context;
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
    protected toJSON(json: any, options?: JsonResultOptions): JsonResult;
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
    protected toStringfy(str: string, options?: StringResultOptions): StringResult;
    /**
     * Let the current execution sleep for a certain period of time
     * @param time
     * @async
     */
    protected sleep(time: number): Async<void>;
}

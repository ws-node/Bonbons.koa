import { BonbonsConfigCollection as ConfigCollection } from "../../metadata/di";
import { IMethodResult } from "../../metadata/controller";
import { JsonResultOptions } from "./../../metadata/options";
/**
 * Represent the json to send by response.
 */
export declare class JsonResult implements IMethodResult {
    private json;
    private options;
    constructor(json: any, options?: JsonResultOptions);
    toString(configs: ConfigCollection): string;
}
export declare const JsonResultResolvers: {
    decamelize(key: string): string;
    camel(key: string): string;
};

import { BonbonsConfigCollection as ConfigCollection } from "../../metadata/di";
import { JsonResultOptions } from "../../metadata/base";
import { IBonbonsMethodResult as SyncResult } from "../../metadata/controller";
/**
 * Represent the json to send by response.
 */
export declare class JsonResult implements SyncResult {
    private json;
    private options;
    constructor(json: any, options?: JsonResultOptions);
    toString(configs: ConfigCollection): string;
}
export declare const JsonResultResolvers: {
    decamelize(key: string): string;
    camel(key: string): string;
};

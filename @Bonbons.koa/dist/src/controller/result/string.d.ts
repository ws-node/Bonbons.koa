import { StringResultOptions } from "../../metadata/options";
import { IBonbonsMethodResult as SyncResult } from "../../metadata/controller";
import { BonbonsConfigCollection as ConfigCollection } from "../../metadata/di";
export declare class StringResult implements SyncResult {
    private value;
    private options;
    constructor(value: string, options?: StringResultOptions);
    toString(configs: ConfigCollection): string;
}

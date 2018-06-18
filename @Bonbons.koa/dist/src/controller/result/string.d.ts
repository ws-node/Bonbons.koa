import { StringResultOptions } from "../../metadata/options";
import { IMethodResult } from "../../metadata/controller";
import { BonbonsConfigCollection as ConfigCollection } from "../../metadata/di";
export declare class StringResult implements IMethodResult {
    private value;
    private options;
    constructor(value: string, options?: StringResultOptions);
    toString(configs: ConfigCollection): string;
}

import { BonbonsConfigCollection, BonbonsEntry, BonbonsToken } from "../metadata/di";
export declare class ConfigCollection implements BonbonsConfigCollection {
    protected _pool: Map<symbol, {
        value: any;
    }>;
    set<T>(token: BonbonsToken<T>, entry: T): void;
    get<T>(token: BonbonsToken<T>): T;
    toArray(): BonbonsEntry<any>[];
}

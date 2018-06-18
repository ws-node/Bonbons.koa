import { BonbonsToken, ConfigsCollection } from "../metadata/di";
export declare abstract class ConfigService implements ConfigsCollection {
    abstract get<T>(token: BonbonsToken<T>): T;
}

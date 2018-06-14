import { BonbonsToken, ConfigsCollection } from "../metadata/di";

export abstract class ConfigService implements ConfigsCollection {
  abstract get<T>(token: BonbonsToken<T>): T;
}
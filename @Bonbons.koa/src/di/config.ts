import { DIContainer } from "./container";
import { BonbonsConfigCollection, BonbonsEntry } from "../metadata/di";

export class ConfigCollection extends DIContainer implements BonbonsConfigCollection {

  public toArray(): BonbonsEntry<any>[] {
    return Array.from(this._di.entries()).map(([sb, { value }]) => ({ token: { key: sb }, value }));
  }

}

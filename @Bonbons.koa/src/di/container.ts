import { BonbonsDIContainer, BonbonsToken } from "../metadata/di";

export class DIContainer implements BonbonsDIContainer {

  protected _di = new Map<symbol, { value: any }>();

  public set<T>(token: BonbonsToken<T>, entry: T): void {
    this._di.set(token.key, { value: entry });
  }

  public get<T>(token: BonbonsToken<T>): T {
    const entry = this._di.get(token.key);
    return entry && entry.value;
  }

}

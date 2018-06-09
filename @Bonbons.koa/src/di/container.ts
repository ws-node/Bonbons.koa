import { BonbonsDIContainer, BonbonsToken, BonbonsTokenGenerator } from "../metadata/di";

export class DIContainer implements BonbonsDIContainer {

  protected _di = new Map<symbol, { value: any }>();

  set<T>(token: BonbonsToken<T>, entry: T): void {
    this._di.set(token.key, { value: entry });
  }

  get<T>(token: BonbonsToken<T>): T {
    const entry = this._di.get(token.key);
    return entry && entry.value;
  }

}

export const createToken: BonbonsTokenGenerator = (key: string) => ({ key: Symbol(`bonbons.koa-di-token:${key}`) });

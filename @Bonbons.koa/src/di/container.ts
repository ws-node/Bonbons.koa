import { BonbonsDIContainer, BonbonsDIToken, BonbonsDITokenGenerator } from "../metadata/di";

export class DIContainer implements BonbonsDIContainer {

  private _di = new Map<symbol, { value: any }>();

  set<T>(token: BonbonsDIToken<T>, entry: T): void {
    this._di.set(token.key, { value: entry });
  }

  get<T>(token: BonbonsDIToken<T>): T {
    const entry = this._di.get(token.key);
    return entry && entry.value;
  }

}

export const createToken: BonbonsDITokenGenerator = (key: string) => ({ key: Symbol(`bonbons.koa-di-token:${key}`) });

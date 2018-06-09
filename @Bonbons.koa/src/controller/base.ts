import { Context } from "./context";

export abstract class BaseController {

  private _ctx: Context;
  public get context() { return this._ctx; }

}

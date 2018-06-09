import { default as Koa } from "koa";
import { IBonbonsServer } from "../metadata/core";
import { IController } from "../metadata/controller";
import { DIContainer, CONFIG_COLLECTION, ConfigCollection, DI_CONTAINER } from "../di";
import {
  BonbonsEntry as Entry,
  BonbonsToken as Token,
  BonbonsConfigCollection as IConfigs,
  BonbonsDIContainer as DIs
} from "../metadata/di";
import { invalidOperation } from "../utils";

export class BonbonsServer implements IBonbonsServer {

  public static Create() { return new BonbonsServer(); }

  private _app = new Koa();
  private _ctlrs: IController[] = [];
  private _di: DIs = new DIContainer();
  private _configs: IConfigs = new ConfigCollection();

  constructor() {
    this._init();
  }

  private _init() {
    this.option(CONFIG_COLLECTION, this._configs);
    this.option(DI_CONTAINER, this._di);
  }

  option<T>(entry: Entry<T>): IBonbonsServer;
  option<T>(token: Token<T>, value: T): IBonbonsServer;
  option(...args: any[]): IBonbonsServer {
    const [e1, e2] = args;
    if (!e1) throw invalidOperation("DI token or entry is empty, you shouldn't call BonbonsServer.use<T>(...) without any param.");
    if (!e2 || args.length === 2) {
      this._configs.set(e1, e2);
    } else {
      const entry = <Entry<any>>e1;
      this._configs.set(entry.token, entry.value);
    }
    return this;
  }

  controller<T extends IController>(ctlr: T): IBonbonsServer {
    this._ctlrs.push(ctlr);
    return this;
  }

  scope(srv: any): IBonbonsServer;
  scope(token: any, srv: any): IBonbonsServer;
  scope(...args: any[]): IBonbonsServer {
    throw new Error("Method not implemented.");
  }

  singleton(srv: any): IBonbonsServer;
  singleton(token: any, srv: any): IBonbonsServer;
  singleton(...args: any[]): IBonbonsServer {
    throw new Error("Method not implemented.");
  }

  host(host?: string): IBonbonsServer {
    throw new Error("Method not implemented.");
  }

  port(port?: number): IBonbonsServer {
    throw new Error("Method not implemented.");
  }

  start(): void {
    throw new Error("Method not implemented.");
  }


}
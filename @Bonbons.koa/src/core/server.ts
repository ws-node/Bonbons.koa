import { IBonbonsServer as IServer } from "../metadata/core";
import { IController } from "../metadata/controller";
import { DIContainer, CONFIG_COLLECTION, ConfigCollection, DI_CONTAINER } from "../di";
import {
  BonbonsEntry as Entry,
  BonbonsToken as Token,
  BonbonsConfigCollection as IConfigs,
  BonbonsDIContainer as DIs
} from "../metadata/di";
import { invalidOperation, invalidParam } from "../utils";
import { KOAMiddleware, KOA } from "../metadata/source";
import { InjectScope } from "../metadata/injectable";

export class BonbonsServer implements IServer {

  public static Create() { return new BonbonsServer(); }

  private _app = new KOA();
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

  public use(middleware: KOAMiddleware): IServer {
    this._app.use(middleware);
    return this;
  }

  public option<T>(entry: Entry<T>): IServer;
  public option<T>(token: Token<T>, value: T): IServer;
  public option(...args: any[]): IServer {
    const [e1, e2] = args;
    if (!e1) {
      throw invalidOperation("DI token or entry is empty, you shouldn't call BonbonsServer.use<T>(...) without any param.");
    }
    if (!e2 || args.length === 2) {
      this._configs.set(e1, e2);
    } else {
      const { token, value } = <Entry<any>>e1;
      this._configs.set(token, value);
    }
    return this;
  }

  public controller<T extends IController>(ctlr: T): IServer {
    if (!ctlr || !ctlr.prototype.getConfig) {
      throw invalidParam("Controller to be add is invalid. You can only add the controller been decorated by @Controller(...).", { className: ctlr && ctlr.name });
    }
    this._ctlrs.push(ctlr);
    return this;
  }

  private injectable(provide: any, type: InjectScope): IServer;
  private injectable(provide: any, classType: any, type?: InjectScope): IServer;
  private injectable(provide: any, classType?: any, type?: InjectScope): IServer {
    if (!provide) return this;
    type = type || InjectScope.Singleton;
    this._di.register(provide, classType || provide, type);
    return this;
  }

  public scope(srv: any): IServer;
  public scope(token: any, srv: any): IServer;
  public scope(...args: any[]): IServer {
    return this.injectable(args[0], args[1], InjectScope.Scoped);
  }

  public singleton(srv: any): IServer;
  public singleton(token: any, srv: any): IServer;
  public singleton(...args: any[]): IServer {
    return this.injectable(args[0], args[1], InjectScope.Singleton);
  }

  public host(host?: string): IServer {
    throw new Error("Method not implemented.");
  }

  public port(port?: number): IServer {
    throw new Error("Method not implemented.");
  }

  public start(): void {
    throw new Error("Method not implemented.");
  }


}
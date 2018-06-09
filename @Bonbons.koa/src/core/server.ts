import { IBonbonsServer } from "../metadata/core";
import { IBonbonsController, IController } from "../metadata/controller";
import { DIContainer } from "../di";
import { BonbonsDIEntry, BonbonsDIToken } from "../metadata/di";

export class BonbonsServer implements IBonbonsServer {

  private _ctlrs: IController[] = [];
  private _di = new DIContainer();

  use<T>(entry: BonbonsDIEntry<T>): IBonbonsServer;
  use<T>(token: BonbonsDIToken<T>, value: T): IBonbonsServer;
  use(...args: any[]): IBonbonsServer {
    const [e1, e2] = args;
    if (!e1) throw new Error(`bonbons di config error : token or entry is empty`);
    if (!e2 || args.length === 2) {
      this._di.set(e1, e2);
    } else {
      const entry = <BonbonsDIEntry<any>>e1;
      this._di.set(entry.token, entry.value);
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
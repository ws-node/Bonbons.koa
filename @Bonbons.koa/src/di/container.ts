import { BonbonsDIContainer, BonbonsDIEntry } from "../metadata/di";
import { InjectScope, IInjectable } from "../metadata/injectable";
import { DependencyQueue } from "./dependency";
import { invalidOperation } from "../utils";
import { getDependencies } from "./reflect";

class DIEntry implements BonbonsDIEntry {
  private _instance: any;
  private _fac?: any;
  constructor(private scope: InjectScope) { }
  getInstance() {
    return this.scope === InjectScope.Singleton ? (this._instance || (this._instance = this._fac())) : this._fac();
  }
}

export class DIContainer implements BonbonsDIContainer<DIEntry> {

  private deps_queue = new DependencyQueue();
  protected _pool = new Map<IInjectable, DIEntry>();

  public get<T>(token: IInjectable): T {
    return this._pool.get(token) as any;
  }

  public register(selector: any, value: any, scope: InjectScope) {
    this.deps_queue.addNode(selector, value, getDependencies(value), scope);
  }

  public resolveDeps(value) {
    return getDependencies(value).map(dep => this.get(dep));
  }

  public complete() {
    const finals = this.deps_queue.sort();
    finals.forEach(node => {
      const exist = this._pool.get(node.el);
      if (exist) throw registerError(node.el);
      const entry = new DIEntry(node.scope);
      const isConstructor = !!node.realel.prototype;
      (<any>entry)._fac = () => (isConstructor ? new node.realel(...node.deps.map(dep => this.get(dep))) : node.realel);
      this._pool.set(node.el, entry);
    });
  }

}

function registerError(selector: any) {
  return invalidOperation(`injectable register error : injectable element with name [${(selector && selector.name) || "unknown name"}] is exist already.`);
}

function resolveError(selector: any) {
  return invalidOperation(`resolve injectable dependencies error : can not resolve dept name [${(selector && selector.name) || "unknown name"}] .`);
}

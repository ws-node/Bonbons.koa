import { BonbonsDIContainer, BonbonsDIEntry } from "../metadata/di";
import { InjectScope, IInjectable, IBonbonsInjectable } from "../metadata/injectable";
declare class DIEntry implements BonbonsDIEntry {
    private scope;
    private _instance;
    private _fac?;
    constructor(scope: InjectScope);
    getInstance(): any;
}
export declare class DIContainer implements BonbonsDIContainer<DIEntry> {
    private deps_queue;
    protected _pool: Map<import("../metadata/base").IConstructor<IBonbonsInjectable>, DIEntry>;
    get<T>(token: IInjectable): T;
    register(selector: any, value: any, scope: InjectScope): void;
    resolveDeps(value: any): {}[];
    complete(): void;
}
export {};

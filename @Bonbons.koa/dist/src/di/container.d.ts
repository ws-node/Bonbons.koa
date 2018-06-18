import { BonbonsDIContainer, BonbonsDIEntry } from "../metadata/di";
import { InjectScope, InjectDIToken, ImplementDIValue } from "../metadata/injectable";
declare class DIEntry implements BonbonsDIEntry {
    private scope;
    private _instance;
    private _fac?;
    constructor(scope: InjectScope);
    getInstance(): any;
}
export declare class DIContainer implements BonbonsDIContainer {
    private deps_queue;
    protected _pool: Map<InjectDIToken<import("../metadata/injectable").IBonbonsInjectable>, DIEntry>;
    readonly count: number;
    get<T>(token: InjectDIToken): T;
    register(selector: InjectDIToken, value: ImplementDIValue, scope: InjectScope): void;
    resolveDeps(value: any): {}[];
    complete(): void;
}
export {};

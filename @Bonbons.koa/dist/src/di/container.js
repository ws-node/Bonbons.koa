import { InjectScope } from "../metadata/injectable";
import { DependencyQueue } from "./dependency";
import { invalidOperation, invalidParam } from "../utils";
import { getDependencies } from "./reflect";
class DIEntry {
    constructor(scope) {
        this.scope = scope;
    }
    getInstance() {
        return this.scope === InjectScope.Singleton ? (this._instance || (this._instance = this._fac())) : this._fac();
    }
}
export class DIContainer {
    constructor() {
        this.deps_queue = new DependencyQueue();
        this._pool = new Map();
    }
    get(token) {
        const entry = this._pool.get(token);
        return entry && entry.getInstance();
    }
    register(selector, value, scope) {
        if (!value || !value.prototype.__valid)
            throw serviceError(value);
        this.deps_queue.addNode(selector, value, getDependencies(value), scope);
    }
    resolveDeps(value) {
        return getDependencies(value).map(dep => this.get(dep));
    }
    complete() {
        const finals = this.deps_queue.sort();
        finals.forEach(node => {
            const exist = this._pool.get(node.el);
            if (exist)
                throw registerError(node.el);
            const entry = new DIEntry(node.scope);
            const isConstructor = !!node.realel.prototype;
            entry._fac = () => (isConstructor ? new node.realel(...node.deps.map(dep => this.get(dep))) : node.realel);
            this._pool.set(node.el, entry);
        });
    }
}
function serviceError(selector) {
    return invalidParam("Service to be add is invalid. You can only add the service been decorated by @Injectable(...).", { className: selector && selector.name });
}
function registerError(selector) {
    return invalidOperation(`injectable register error : injectable element with name [${(selector && selector.name) || "unknown name"}] is exist already.`);
}
function resolveError(selector) {
    return invalidOperation(`resolve injectable dependencies error : can not resolve dept name [${(selector && selector.name) || "unknown name"}] .`);
}
//# sourceMappingURL=container.js.map
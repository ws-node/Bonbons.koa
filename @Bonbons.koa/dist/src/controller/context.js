"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Context {
    constructor(source) {
        this.source = source;
    }
    get request() { return this.source.request; }
    get response() { return this.source.response; }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map
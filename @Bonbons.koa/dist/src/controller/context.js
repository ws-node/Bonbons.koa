export class Context {
    constructor(source) {
        this.source = source;
    }
    get request() { return this.source.request; }
    get response() { return this.source.response; }
}
//# sourceMappingURL=context.js.map
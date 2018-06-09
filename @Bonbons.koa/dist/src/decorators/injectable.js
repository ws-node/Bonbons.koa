import "reflect-metadata";
export function Injectable(config) {
    return function (target) {
        const prototype = target.prototype;
        prototype.__valid = true;
    };
}
//# sourceMappingURL=injectable.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function Injectable(config) {
    return function (target) {
        target.prototype.__valid = true;
    };
}
exports.Injectable = Injectable;
//# sourceMappingURL=injectable.js.map
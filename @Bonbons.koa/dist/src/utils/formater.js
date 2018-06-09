"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decamelize = require("decamelize");
const camel = require("camelcase");
exports.Formater = {
    ToCamelCase(str) {
        return (camel.default || camel)(str);
    },
    DeCamelCase(str, sec = "-") {
        return (decamelize.default || decamelize)(str, sec);
    }
};
//# sourceMappingURL=formater.js.map
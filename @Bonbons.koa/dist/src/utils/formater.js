import * as decamelize from "decamelize";
import * as camel from "camelcase";
export const Formater = {
    ToCamelCase(str) {
        return (camel.default || camel)(str);
    },
    DeCamelCase(str, sec = "-") {
        return (decamelize.default || decamelize)(str, sec);
    }
};
//# sourceMappingURL=formater.js.map
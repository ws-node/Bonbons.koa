"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BonbonsError extends Error {
    constructor(error) {
        super(error);
        this.name = "BonbonsError";
        this.message = `[Bonbons.koa] throws : \n\n${error}\n`;
    }
}
exports.BonbonsError = BonbonsError;
function ERROR(error, more) {
    return new BonbonsError(`${error} \n[ more details ] : ${(JSON.stringify(more)) || "none"}`);
}
exports.ERROR = ERROR;
function invalidOperation(error, more) {
    return ERROR(`[ INVALID OPERATION ] : ${error}`, more);
}
exports.invalidOperation = invalidOperation;
function invalidParam(error, more) {
    return ERROR(`[ INVALID PARAM ] : ${error}`, more);
}
exports.invalidParam = invalidParam;
//# sourceMappingURL=errors.js.map
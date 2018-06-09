export class BonbonsError extends Error {
    constructor(error) {
        super(error);
        this.name = "BonbonsError";
        this.message = `[Bonbons.koa] throws : \n\n${error}\n`;
    }
}
export function ERROR(error, more) {
    return new BonbonsError(`${error} \n[ more details ] : ${(JSON.stringify(more)) || "none"}`);
}
export function invalidOperation(error, more) {
    return ERROR(`[ INVALID OPERATION ] : ${error}`, more);
}
export function invalidParam(error, more) {
    return ERROR(`[ INVALID PARAM ] : ${error}`, more);
}
//# sourceMappingURL=errors.js.map
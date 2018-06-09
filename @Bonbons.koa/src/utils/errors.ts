
export class BonbonsError extends Error {

  constructor(error?: string) {
    super(error);
    this.name = "BonbonsError";
    this.message = `[Bonbons.koa] throws : \n\n${error}\n`;
  }

}

export function ERROR(error: string, more?: any) {
  return new BonbonsError(`${error} \n[ more details ] : ${(JSON.stringify(more)) || "none"}`);
}

export function invalidOperation(error: string, more?: any) {
  return ERROR(`[ INVALID OPERATION ] : ${error}`, more);
}

export function invalidParam(error: string, more?: any) {
  return ERROR(`[ INVALID PARAM ] : ${error}`, more);
}

export class BonbonsError extends Error {

  constructor(error?: string) {
    super(error);
    this.name = "BonbonsError";
    this.message = `[Bonbons.koa] throws : \n\n${error}\n`;
  }

}

export function ERROR(error?: string) {
  return new BonbonsError(error);
}

export function invalidOperation(error?: string) {
  return ERROR(`[ invalid operation ] : ${error}`);
}
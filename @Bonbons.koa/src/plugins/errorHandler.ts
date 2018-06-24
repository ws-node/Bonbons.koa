import * as iconv from "iconv-lite";
import { default as fs } from "fs";
import { createToken, ENV_MODE, DI_CONTAINER } from "../di";
import { KOAContext } from "../metadata/source";
import { ConfigsCollection } from "../metadata/di";
import { GlobalLogger } from "./logger";
import { TPL_RENDER } from "./render";
import { BonbonsGlobal as GLOBAL } from "../utils/global";

async function readAssets(xpath: string): Promise<string> {
  return new Promise<any>((resolve, reject) => {
    fs.readFile((GLOBAL.folderRoot + `/assets/${xpath}`), (error, data) => {
      if (error) reject(error);
      else resolve(iconv.decode(data, "utf8"));
    });
  });
}

export interface ErrorHandler {
  (configs: ConfigsCollection): (ctx, next) => Promise<any>;
}

export interface ErrorPageTemplate {
  (configs: ConfigsCollection): { render: (error) => Promise<string | Buffer> };
}

export const ERROR_HANDLER = createToken<ErrorHandler>("ERROR_HANDLER");
export const ERROR_PAGE_TEMPLATE = createToken<ErrorPageTemplate>("ERROR_PAGE_TEMPLATE");

export function defaultErrorHandler(configs: ConfigsCollection) {
  return async function (ctx: KOAContext, next: () => Promise<any>) {
    try {
      await next();
    } catch (error) {
      const logger = configs.get(DI_CONTAINER).get<GlobalLogger>(GlobalLogger);
      const tplHandler = configs.get(ERROR_PAGE_TEMPLATE)(configs);
      ctx.status = 500;
      ctx.type = "text/html";
      ctx.body = await tplHandler.render(error);
      logger.error("core", "defaultErrorHandler", error.stack);
    }
  };
}

export function defaultErrorPageTemplate(configs: ConfigsCollection) {
  const { mode } = configs.get(ENV_MODE);
  const render = configs.get(TPL_RENDER);
  let fileName = "500.html";
  if (mode === "development") {
    fileName = "500.dev.html";
  }
  return ({
    render: async (error) => {
      try {
        const file = await readAssets(`templates/${fileName}`);
        return render(file, { stack: error && error.stack });
      } catch (error) {
        return error;
      }
    }
  });
}
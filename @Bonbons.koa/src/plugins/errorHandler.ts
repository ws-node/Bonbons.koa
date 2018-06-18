import { createToken, ENV_MODE, DI_CONTAINER } from "../di";
import { KOAContext } from "../metadata/source";
import { ConfigsCollection } from "../metadata/di";
import { GlobalLogger } from "./logger";
import { default as fs } from "fs";

async function readFile(path: string) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (!err) reject(err);
      else resolve(data);
    });
  });
}

export interface ErrorHandler {
  (configs: ConfigsCollection): (ctx, next) => Promise<any>;
}

export interface ErrorPageTemplate {
  (configs: ConfigsCollection): { render(error): string };
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
      ctx.body = await tplHandler.render(error);
      logger.error("core", "defaultErrorHandler", error.stack);
    }
  };
}

export function defaultErrorPageTemplate(configs: ConfigsCollection) {
  const { mode } = configs.get(ENV_MODE);
  if (mode === "development") {
    return ({
      render: (error) => !error ? "unhandled error." : `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error - Development</title>
    </head>
    <body>
    <pre>${error.stack || ""}</pre>
    </body>
    </html>
    `});
  }
  return ({
    render: async () => {
      const file = await readFile("assets/error.html");
      console.log(file);
      return file;
    }
  });
}
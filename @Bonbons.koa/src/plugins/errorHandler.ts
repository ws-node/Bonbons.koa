import { createToken, ENV_MODE, DI_CONTAINER } from "../di";
import { KOAContext } from "../metadata/source";
import { ConfigsCollection } from "../metadata/di";
import { GlobalLogger } from "./logger";
import { TPL_RENDER_COMPILER, TPL_RENDER_OPTIONS, ViewTplRenderOptions, defaultViewTplRender, CompiledRenderFunction } from "./render";
import { BonbonsGlobal as GLOBAL } from "../utils/global";
import { invalidOperation } from "../utils/errors";
import { FILE_LOADER } from "./fileLoader";

export interface ErrorHandler {
  (configs: ConfigsCollection): (ctx, next) => Promise<any>;
}

export interface ErrorPageTemplate {
  (configs: ConfigsCollection): ErrorTemplateOptions;
}

export interface ErrorRenderOptions extends ViewTplRenderOptions { }

interface ErrorTemplateOptions {
  render: (error) => Promise<string | Buffer | undefined>;
}

let tplHanderCache: ErrorTemplateOptions;
let loggerCache: GlobalLogger;
let compilerCache: (name: string, ispath?: boolean) => Promise<CompiledRenderFunction<any>>;

export const ERROR_HANDLER = createToken<ErrorHandler>("ERROR_HANDLER");
export const ERROR_PAGE_TEMPLATE = createToken<ErrorPageTemplate>("ERROR_PAGE_TEMPLATE");
export const ERROR_RENDER_OPRIONS = createToken<ErrorRenderOptions>("ERROR_RENDER_OPRIONS");

export const defaultErrorPageRenderOptions = {
  render: defaultViewTplRender,
  extensions: "html",
  cache: {},
  options: {}
};

export function defaultErrorHandler(configs: ConfigsCollection) {
  return async function (ctx: KOAContext, next: () => Promise<any>) {
    try {
      await next();
    } catch (error) {
      const logger = loggerCache || (loggerCache = configs.get(DI_CONTAINER).get<GlobalLogger>(GlobalLogger));
      const tplHandler = tplHanderCache || (tplHanderCache = configs.get(ERROR_PAGE_TEMPLATE)(configs));
      ctx.status = 500;
      ctx.type = "text/html";
      try {
        ctx.body = await tplHandler.render(error);
        logger.error("core", "defaultErrorHandler", error.stack);
      } catch (ex) {
        ctx.body = `<pre>${ex.stack}</pre>`;
        logger.error("core", "defaultErrorHandler", ex.stack);
      }
    }
  };
}

export function defaultErrorPageTemplate(configs: ConfigsCollection) {
  const { mode } = configs.get(ENV_MODE);
  const { extensions } = configs.get(ERROR_RENDER_OPRIONS);
  const compiler = compilerCache || (compilerCache = defaultErrorRenderCompiler(configs));
  let fileName = "500";
  if (mode === "development") {
    fileName = "500.dev";
  }
  return ({
    render: async (error) => {
      try {
        const filePath = `${GLOBAL.folderRoot}/assets/templates/${fileName}.${extensions || "html"}`;
        const compiledFn = await (compiler && compiler(filePath, true));
        return compiledFn && compiledFn({ stack: error && error.stack });
      } catch (error) {
        throw error;
      }
    }
  });
}

function defaultErrorRenderCompiler(configs: ConfigsCollection) {
  const { render, cache, root, extensions, options: defaultOptions } = configs.get(ERROR_RENDER_OPRIONS);
  const { stringLoader: loader } = configs.get(FILE_LOADER);
  if (!loader) {
    throw invalidOperation("no string-file loader found.");
  }
  return async (filename: string, ispath = false) => {
    const prefix = (root && (root + "/")) || "";
    const filepath = ispath ? filename : `${prefix}${filename}.${extensions || "html"}`;
    if (cache && cache[filepath]) return cache[filepath];
    const tpl = await loader(filepath) || "";
    const compiledFn = (data, options) => render && render(tpl, data, Object.assign(defaultOptions, options));
    if (cache && !cache[filepath]) cache[filepath] = compiledFn;
    return compiledFn;
  };
}
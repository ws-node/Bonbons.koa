export * from "./di";
export * from "./core";
export * from "./decorators";
export * from "./controller";
export * from "./pipe";

export * from "./plugins/logger";
export * from "./plugins/injector";
export * from "./plugins/configs";
export {
  ERROR_HANDLER,
  ERROR_PAGE_TEMPLATE
} from "./plugins/errorHandler";
export {
  TPL_RENDER_OPTIONS,
  TPL_RENDER_COMPILER,
  Renders,
  RenderService
} from "./plugins/render";

export * from "./utils/uuid";
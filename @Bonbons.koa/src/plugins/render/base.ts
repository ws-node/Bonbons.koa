import { createToken } from "../../di";
import { ConfigsCollection } from "../../metadata/di";

export interface RenderFunction<TOptions = any> {
  (tpl: string, data?: any, options?: TOptions): string | undefined;
}

export interface CompiledRenderFunction<TOptions = any> {
  (data?: any, options?: TOptions): string | undefined;
}

export interface TplRenderCompiler {
  (configs: ConfigsCollection): (filename: string, ispath?: boolean) => Promise<CompiledRenderFunction>;
}

export interface TplRenderCompilerOptions {
  compilerFactory?: TplRenderCompiler;
  compiler?: (filename: string, ispath?: boolean) => Promise<CompiledRenderFunction>;
}

export interface ViewTplRenderOptions<TOptions = any> {
  render?: RenderFunction<TOptions>;
  root?: string;
  extensions?: string | string[];
  cache?: { [prop: string]: CompiledRenderFunction<TOptions> };
  options?: TOptions;
}

export const TPL_RENDER_OPTIONS = createToken<ViewTplRenderOptions>("TPL_RENDER_OPTIONS");
export const TPL_RENDER_COMPILER = createToken<TplRenderCompilerOptions>("TPL_RENDER_COMPILER");

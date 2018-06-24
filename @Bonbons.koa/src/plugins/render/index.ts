import { createToken } from "../../di";
import { defaultViewTplRender } from "./simple.render";

export interface ViewTplRender {
  render?: (tpl: string, data?: any) => string;
  root?: string;
  extensions?: string | string[];
}

export const TPL_RENDER = createToken<ViewTplRender>("TPL_RENDER");

export { defaultViewTplRender };

export const defaultViewTplRenderOptions = {
  render: defaultViewTplRender,
  extensions: "html",
  root: ""
};
import { createToken } from "../di";
import { ConfigsCollection } from "../metadata/di";

export interface ViewTplRender {
  (tpl: string, data?: any): string;
}

export const TPL_RENDER = createToken<ViewTplRender>("TPL_RENDER");

export function defaultViewTplRender(tpl: string, data?: any) {
  const reg = /{{([^}{]+)}}/g;
  if (!data) return tpl;
  return tpl.replace(reg, ($match: string, $1: string) => {
    try {
      const ps = ($1 || "").split(".");
      let value = data;
      ps.forEach(key => {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
          value = value[key];
        }
      });
      return value;
    } catch (error) {
      return $match;
    }
  });
}
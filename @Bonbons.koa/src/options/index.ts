import { JsonResultOptions, StringResultOptions } from "../metadata/options";

function defaultJsonResultOptions(): JsonResultOptions {
  return { indentation: true, staticType: false };
}

function defaultStringResultOptions(): StringResultOptions {
  return { encoding: "utf8", decoding: "utf8" };
}

export const DEFAULTS = {
  jsonOptions: defaultJsonResultOptions(),
  stringOption: defaultStringResultOptions()
};

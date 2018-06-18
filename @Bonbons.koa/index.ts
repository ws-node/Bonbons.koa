import path from "path";
export * from "./src";

declare interface Global extends NodeJS.Global {
  $BonbonsRoot: string;
}
declare const global: Global;

global.$BonbonsRoot = path.resolve(__dirname);

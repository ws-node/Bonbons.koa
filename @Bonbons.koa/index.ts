import path from "path";
import { BonbonsGlobal } from "./src/utils/global";
export * from "./src";

BonbonsGlobal.folderRoot = path.resolve(__dirname);

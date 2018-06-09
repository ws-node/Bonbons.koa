import { default as Koa } from "koa";
const app = new Koa();

export { app };

export * from "./src";
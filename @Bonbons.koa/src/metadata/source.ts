import { default as Koa } from "koa";
import { Middleware, Context, Request, Response } from "koa";
import { default as Router } from "koa-router";

// const _koa = Koa["default"] && Koa;
// const _roter = Router["default"] && Router;

export {
  Koa as KOA,
  Router as KOARouter,
  // Koa as KOAType,
  // Router as KOARouterType,
  Context as KOAContext,
  Request as KOARequest,
  Response as KOAResponse,
  Middleware as KOAMiddleware
};

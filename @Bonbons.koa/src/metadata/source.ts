import Koa from "koa";
import { Middleware, Context, Request, Response } from "koa";
import Router from "koa-router";

const _koa = Koa["default"] && Koa;
const _roter = Router["default"] && Router;

export {
  _koa as KOA,
  _roter as KOARouter,
  Koa as KOAType,
  Router as KOARouterType,
  Context as KOAContext,
  Request as KOARequest,
  Response as KOAResponse,
  Middleware as KOAMiddleware
};

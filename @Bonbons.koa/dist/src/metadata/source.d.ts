import Koa from "koa";
import { Middleware, Context, Request, Response } from "koa";
import Router from "koa-router";
declare const _koa: typeof Koa;
declare const _roter: typeof Router;
export { _koa as KOA, _roter as KOARouter, Koa as KOAType, Router as KOARouterType, Context as KOAContext, Request as KOARequest, Response as KOAResponse, Middleware as KOAMiddleware };

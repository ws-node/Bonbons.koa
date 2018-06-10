import { default as Koa } from "koa";
import { Middleware, Context, Request, Response } from "koa";
import { default as Router } from "koa-router";
import { default as bodyParser } from "koa-bodyparser";

interface KOABodyParseOptions {
  /**  parser will only parse when request type hits enableTypes, default is ['json', 'form']. */
  enableTypes?: string[];
  /** requested encoding. Default is utf-8 by co-body */
  encode?: string;
  /**
   * limit of the urlencoded body. If the body ends up being larger than this limit
   * a 413 error code is returned. Default is 56kb
   */
  formLimit?: string;
  /** limit of the json body. Default is 1mb */
  jsonLimit?: string;
  /** when set to true, JSON parser will only accept arrays and objects. Default is true */
  strict?: boolean;
  /** custom json request detect function. Default is null */
  detectJSON?: (ctx: Context) => boolean;
  /** support extend types */
  extendTypes?: {
    json?: string[];
    form?: string[];
    text?: string[];
  };
  /** support custom error handle */
  onerror?: (err: Error, ctx: Context) => void;
}

export {
  Koa as KOA,
  Router as KOARouter,
  Context as KOAContext,
  Request as KOARequest,
  Response as KOAResponse,
  Middleware as KOAMiddleware,
  bodyParser as KOABodyParser,
  KOABodyParseOptions
};

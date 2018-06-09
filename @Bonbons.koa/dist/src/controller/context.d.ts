/// <reference path="../../../node_modules/@types/koa-router/index.d.ts" />
/// <reference types="koa" />
/// <reference types="koa-router" />
import { KOAContext } from "../metadata/source";
export declare class Context {
    private source;
    readonly request: Application.Request;
    readonly response: Application.Response;
    constructor(source: KOAContext);
}

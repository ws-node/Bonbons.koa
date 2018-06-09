/// <reference types="koa" />
/// <reference types="koa-router" />
import { KOAContext, KOARequest, KOAResponse } from "../metadata/source";
export declare class Context {
    private source;
    readonly request: KOARequest;
    readonly response: KOAResponse;
    constructor(source: KOAContext);
}

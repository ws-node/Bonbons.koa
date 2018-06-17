/// <reference types="koa" />
/// <reference types="koa-bodyparser" />
/// <reference types="koa-router" />
import { KOAContext, KOARequest, KOAResponse } from "../metadata/source";
import { IBonbonsContext } from "../metadata/base";
export declare class Context implements IBonbonsContext {
    private source;
    readonly request: KOARequest;
    readonly response: KOAResponse;
    constructor(source: KOAContext);
}

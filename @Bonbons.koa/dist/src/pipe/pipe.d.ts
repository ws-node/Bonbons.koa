import { IPipe, PipeOnInit, PipeParamType, PipeMapParams, IPipeBundle } from "../metadata/pipe";
import { Async, IBonbonsContext, IConstructor } from "../metadata/base";
export { PipeOnInit };
/**
 * Base BONBONS Pipe
 * ---
 * * you should always extends this Class
 * * contains input params and request/response context support
 *
 * @description
 * @author Big Mogician
 * @export
 * @abstract
 * @class PipeMiddleware
 * @implements {IPipe<T>}
 * @template T
 */
export declare abstract class PipeMiddleware<T = any> implements IPipe<T> {
    readonly params: T;
    constructor();
    readonly context: IBonbonsContext;
    abstract process(next?: () => Async<any>): Async<void> | void;
}
/**
 * Bonbons Pipe Factory Generator
 * ---
 * use this generator to create factory and params bundle.
 */
export declare const PipeFactory: {
    /**
     * Create a generic pipe
     * -----
     * Create a bundle with pipe which input params is a typed-object.
     * @description
     * @author Big Mogician
     * @template T
     * @param {IConstructor<IPipe<T>>} type
     * @returns
     */
    generic<T extends PipeMapParams>(type: IConstructor<IPipe<T>>): (params: T) => IPipeBundle<T>;
    /**
     * Create a array pipe
     * -----
     * Create a bundle with pipe which input params is an array.
     * @description
     * @author Big Mogician
     * @template T
     * @param {IConstructor<IPipe<T>>} type
     * @returns
     */
    fromArray<T extends PipeParamType[]>(type: IConstructor<IPipe<T>>): (params: T) => IPipeBundle<T>;
    /**
     *    * Create a common pipe
     * -----
     * Create a bundle with pipe which input params is an object.
     * @description
     * @author Big Mogician
     * @template T
     * @param {IConstructor<IPipe<T>>} type
     * @returns
     */
    fromMap<T = any>(type: IConstructor<IPipe<T>>): (params: T) => IPipeBundle<T>;
};
export declare function createPipeInstance<T extends IPipe>(type: IPipeBundle<T>, depts: any[], $$ctx?: IBonbonsContext): IPipe<T>;

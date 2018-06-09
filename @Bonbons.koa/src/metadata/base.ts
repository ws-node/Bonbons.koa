export interface IConstructor<T> {
  new(...args: any[]): T;
  prototype: T;
}
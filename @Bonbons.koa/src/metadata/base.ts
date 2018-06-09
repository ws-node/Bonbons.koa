export interface IConstructor<T> {
  new(...args: any[]): T;
  prototype: T;
}

export interface IStaticTypedResolver {
  /** Convert static typed instance to JSON text */
  ToJSON(obj: any, format?: boolean): string;
  /** Convert JSON text to static typed instance */
  FromJSON<T>(json: string, type?: IConstructor<T>): T;
  /** Convert static typed instance to javascript object */
  ToObject(obj: any, format?: boolean): any;
  /** Convert javascript object to static typed instance */
  FromObject<T>(json: any, type?: IConstructor<T>): T;
}

export interface JsonResultResolver {
  (propertyKey: string): string;
}

export interface JsonResultOptions {
  /** Whether to enable indentation */
  indentation?: boolean;
  /** Handle JSON keys ,return a new key to replace old one for each */
  resolver?: JsonResultResolver;
  /** Whether to enable static type processing according to a serialization contract */
  staticType?: boolean;
}

export interface ErrorPageTemplate {
  render(error): string;
}
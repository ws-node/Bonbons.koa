
function isObject(target: any) {
  return Object.prototype.toString.call(target) === "[object Object]";
}

function isArray(target: any) {
  return Object.prototype.toString.call(target) === "[object Array]";
}

function getPrototypeConstructor(obj) {
  const proto = Object.getPrototypeOf(obj);
  return proto && proto.constructor;
}

function isCustomClassInstance(obj: any, type?: any) {
  return !type ?
    (getPrototypeConstructor(obj) !== Object) :
    (getPrototypeConstructor(obj) === type);
}

export const TypeCheck = {
  IsObject(target: any) { return isObject(target); },
  IsArray(target: any) { return isArray(target); },
  getClass(target: any) { return getPrototypeConstructor(target); },
  isFromCustomClass(target: any, type?: any) { return isCustomClassInstance(target, type); }
};

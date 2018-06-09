function isObject(target) {
    return Object.prototype.toString.call(target) === "[object Object]";
}
function isArray(target) {
    return Object.prototype.toString.call(target) === "[object Array]";
}
function getPrototypeConstructor(obj) {
    const proto = Object.getPrototypeOf(obj);
    return proto && proto.constructor;
}
function isCustomClassInstance(obj, type) {
    return !type ?
        (getPrototypeConstructor(obj) !== Object) :
        (getPrototypeConstructor(obj) === type);
}
export const TypeCheck = {
    IsObject(target) { return isObject(target); },
    IsArray(target) { return isArray(target); },
    getClass(target) { return getPrototypeConstructor(target); },
    isFromCustomClass(target, type) { return isCustomClassInstance(target, type); }
};
//# sourceMappingURL=type-check.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../@Bonbons.koa/index.ts":
/*!********************************!*\
  !*** ../@Bonbons.koa/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(__webpack_require__(/*! koa */ "../@Bonbons.koa/node_modules/koa/lib/application.js"));
console.log(koa_1.default);
const app = new koa_1.default();
exports.app = app;


/***/ }),

/***/ "../@Bonbons.koa/node_modules/accepts/index.js":
/*!*****************************************************!*\
  !*** ../@Bonbons.koa/node_modules/accepts/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * accepts
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var Negotiator = __webpack_require__(/*! negotiator */ "../@Bonbons.koa/node_modules/negotiator/index.js")
var mime = __webpack_require__(/*! mime-types */ "../@Bonbons.koa/node_modules/mime-types/index.js")

/**
 * Module exports.
 * @public
 */

module.exports = Accepts

/**
 * Create a new Accepts object for the given req.
 *
 * @param {object} req
 * @public
 */

function Accepts (req) {
  if (!(this instanceof Accepts)) {
    return new Accepts(req)
  }

  this.headers = req.headers
  this.negotiator = new Negotiator(req)
}

/**
 * Check if the given `type(s)` is acceptable, returning
 * the best match when true, otherwise `undefined`, in which
 * case you should respond with 406 "Not Acceptable".
 *
 * The `type` value may be a single mime type string
 * such as "application/json", the extension name
 * such as "json" or an array `["json", "html", "text/plain"]`. When a list
 * or array is given the _best_ match, if any is returned.
 *
 * Examples:
 *
 *     // Accept: text/html
 *     this.types('html');
 *     // => "html"
 *
 *     // Accept: text/*, application/json
 *     this.types('html');
 *     // => "html"
 *     this.types('text/html');
 *     // => "text/html"
 *     this.types('json', 'text');
 *     // => "json"
 *     this.types('application/json');
 *     // => "application/json"
 *
 *     // Accept: text/*, application/json
 *     this.types('image/png');
 *     this.types('png');
 *     // => undefined
 *
 *     // Accept: text/*;q=.5, application/json
 *     this.types(['html', 'json']);
 *     this.types('html', 'json');
 *     // => "json"
 *
 * @param {String|Array} types...
 * @return {String|Array|Boolean}
 * @public
 */

Accepts.prototype.type =
Accepts.prototype.types = function (types_) {
  var types = types_

  // support flattened arguments
  if (types && !Array.isArray(types)) {
    types = new Array(arguments.length)
    for (var i = 0; i < types.length; i++) {
      types[i] = arguments[i]
    }
  }

  // no types, return all requested types
  if (!types || types.length === 0) {
    return this.negotiator.mediaTypes()
  }

  // no accept header, return first given type
  if (!this.headers.accept) {
    return types[0]
  }

  var mimes = types.map(extToMime)
  var accepts = this.negotiator.mediaTypes(mimes.filter(validMime))
  var first = accepts[0]

  return first
    ? types[mimes.indexOf(first)]
    : false
}

/**
 * Return accepted encodings or best fit based on `encodings`.
 *
 * Given `Accept-Encoding: gzip, deflate`
 * an array sorted by quality is returned:
 *
 *     ['gzip', 'deflate']
 *
 * @param {String|Array} encodings...
 * @return {String|Array}
 * @public
 */

Accepts.prototype.encoding =
Accepts.prototype.encodings = function (encodings_) {
  var encodings = encodings_

  // support flattened arguments
  if (encodings && !Array.isArray(encodings)) {
    encodings = new Array(arguments.length)
    for (var i = 0; i < encodings.length; i++) {
      encodings[i] = arguments[i]
    }
  }

  // no encodings, return all requested encodings
  if (!encodings || encodings.length === 0) {
    return this.negotiator.encodings()
  }

  return this.negotiator.encodings(encodings)[0] || false
}

/**
 * Return accepted charsets or best fit based on `charsets`.
 *
 * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
 * an array sorted by quality is returned:
 *
 *     ['utf-8', 'utf-7', 'iso-8859-1']
 *
 * @param {String|Array} charsets...
 * @return {String|Array}
 * @public
 */

Accepts.prototype.charset =
Accepts.prototype.charsets = function (charsets_) {
  var charsets = charsets_

  // support flattened arguments
  if (charsets && !Array.isArray(charsets)) {
    charsets = new Array(arguments.length)
    for (var i = 0; i < charsets.length; i++) {
      charsets[i] = arguments[i]
    }
  }

  // no charsets, return all requested charsets
  if (!charsets || charsets.length === 0) {
    return this.negotiator.charsets()
  }

  return this.negotiator.charsets(charsets)[0] || false
}

/**
 * Return accepted languages or best fit based on `langs`.
 *
 * Given `Accept-Language: en;q=0.8, es, pt`
 * an array sorted by quality is returned:
 *
 *     ['es', 'pt', 'en']
 *
 * @param {String|Array} langs...
 * @return {Array|String}
 * @public
 */

Accepts.prototype.lang =
Accepts.prototype.langs =
Accepts.prototype.language =
Accepts.prototype.languages = function (languages_) {
  var languages = languages_

  // support flattened arguments
  if (languages && !Array.isArray(languages)) {
    languages = new Array(arguments.length)
    for (var i = 0; i < languages.length; i++) {
      languages[i] = arguments[i]
    }
  }

  // no languages, return all requested languages
  if (!languages || languages.length === 0) {
    return this.negotiator.languages()
  }

  return this.negotiator.languages(languages)[0] || false
}

/**
 * Convert extnames to mime.
 *
 * @param {String} type
 * @return {String}
 * @private
 */

function extToMime (type) {
  return type.indexOf('/') === -1
    ? mime.lookup(type)
    : type
}

/**
 * Check if mime is valid.
 *
 * @param {String} type
 * @return {String}
 * @private
 */

function validMime (type) {
  return typeof type === 'string'
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/any-promise sync recursive":
/*!*****************************************************!*\
  !*** ../@Bonbons.koa/node_modules/any-promise sync ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../@Bonbons.koa/node_modules/any-promise sync recursive";

/***/ }),

/***/ "../@Bonbons.koa/node_modules/any-promise/index.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/any-promise/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./register */ "../@Bonbons.koa/node_modules/any-promise/register.js")().Promise


/***/ }),

/***/ "../@Bonbons.koa/node_modules/any-promise/loader.js":
/*!**********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/any-promise/loader.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

    // global key for user preferred registration
var REGISTRATION_KEY = '@@any-promise/REGISTRATION',
    // Prior registration (preferred or detected)
    registered = null

/**
 * Registers the given implementation.  An implementation must
 * be registered prior to any call to `require("any-promise")`,
 * typically on application load.
 *
 * If called with no arguments, will return registration in
 * following priority:
 *
 * For Node.js:
 *
 * 1. Previous registration
 * 2. global.Promise if node.js version >= 0.12
 * 3. Auto detected promise based on first sucessful require of
 *    known promise libraries. Note this is a last resort, as the
 *    loaded library is non-deterministic. node.js >= 0.12 will
 *    always use global.Promise over this priority list.
 * 4. Throws error.
 *
 * For Browser:
 *
 * 1. Previous registration
 * 2. window.Promise
 * 3. Throws error.
 *
 * Options:
 *
 * Promise: Desired Promise constructor
 * global: Boolean - Should the registration be cached in a global variable to
 * allow cross dependency/bundle registration?  (default true)
 */
module.exports = function(root, loadImplementation){
  return function register(implementation, opts){
    implementation = implementation || null
    opts = opts || {}
    // global registration unless explicitly  {global: false} in options (default true)
    var registerGlobal = opts.global !== false;

    // load any previous global registration
    if(registered === null && registerGlobal){
      registered = root[REGISTRATION_KEY] || null
    }

    if(registered !== null
        && implementation !== null
        && registered.implementation !== implementation){
      // Throw error if attempting to redefine implementation
      throw new Error('any-promise already defined as "'+registered.implementation+
        '".  You can only register an implementation before the first '+
        ' call to require("any-promise") and an implementation cannot be changed')
    }

    if(registered === null){
      // use provided implementation
      if(implementation !== null && typeof opts.Promise !== 'undefined'){
        registered = {
          Promise: opts.Promise,
          implementation: implementation
        }
      } else {
        // require implementation if implementation is specified but not provided
        registered = loadImplementation(implementation)
      }

      if(registerGlobal){
        // register preference globally in case multiple installations
        root[REGISTRATION_KEY] = registered
      }
    }

    return registered
  }
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/any-promise/register.js":
/*!************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/any-promise/register.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./loader */ "../@Bonbons.koa/node_modules/any-promise/loader.js")(global, loadImplementation);

/**
 * Node.js version of loadImplementation.
 *
 * Requires the given implementation and returns the registration
 * containing {Promise, implementation}
 *
 * If implementation is undefined or global.Promise, loads it
 * Otherwise uses require
 */
function loadImplementation(implementation){
  var impl = null

  if(shouldPreferGlobalPromise(implementation)){
    // if no implementation or env specified use global.Promise
    impl = {
      Promise: global.Promise,
      implementation: 'global.Promise'
    }
  } else if(implementation){
    // if implementation specified, require it
    var lib = __webpack_require__("../@Bonbons.koa/node_modules/any-promise sync recursive")(implementation)
    impl = {
      Promise: lib.Promise || lib,
      implementation: implementation
    }
  } else {
    // try to auto detect implementation. This is non-deterministic
    // and should prefer other branches, but this is our last chance
    // to load something without throwing error
    impl = tryAutoDetect()
  }

  if(impl === null){
    throw new Error('Cannot find any-promise implementation nor'+
      ' global.Promise. You must install polyfill or call'+
      ' require("any-promise/register") with your preferred'+
      ' implementation, e.g. require("any-promise/register/bluebird")'+
      ' on application load prior to any require("any-promise").')
  }

  return impl
}

/**
 * Determines if the global.Promise should be preferred if an implementation
 * has not been registered.
 */
function shouldPreferGlobalPromise(implementation){
  if(implementation){
    return implementation === 'global.Promise'
  } else if(typeof global.Promise !== 'undefined'){
    // Load global promise if implementation not specified
    // Versions < 0.11 did not have global Promise
    // Do not use for version < 0.12 as version 0.11 contained buggy versions
    var version = (/v(\d+)\.(\d+)\.(\d+)/).exec(process.version)
    return !(version && +version[1] == 0 && +version[2] < 12)
  }

  // do not have global.Promise or another implementation was specified
  return false
}

/**
 * Look for common libs as last resort there is no guarantee that
 * this will return a desired implementation or even be deterministic.
 * The priority is also nearly arbitrary. We are only doing this
 * for older versions of Node.js <0.12 that do not have a reasonable
 * global.Promise implementation and we the user has not registered
 * the preference. This preserves the behavior of any-promise <= 0.1
 * and may be deprecated or removed in the future
 */
function tryAutoDetect(){
  var libs = [
      "es6-promise",
      "promise",
      "native-promise-only",
      "bluebird",
      "rsvp",
      "when",
      "q",
      "pinkie",
      "lie",
      "vow"]
  var i = 0, len = libs.length
  for(; i < len; i++){
    try {
      return loadImplementation(libs[i])
    } catch(e){}
  }
  return null
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/co/index.js":
/*!************************************************!*\
  !*** ../@Bonbons.koa/node_modules/co/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * slice() reference.
 */

var slice = Array.prototype.slice;

/**
 * Expose `co`.
 */

module.exports = co['default'] = co.co = co;

/**
 * Wrap the given generator `fn` into a
 * function that returns a promise.
 * This is a separate function so that
 * every `co()` call doesn't create a new,
 * unnecessary closure.
 *
 * @param {GeneratorFunction} fn
 * @return {Function}
 * @api public
 */

co.wrap = function (fn) {
  createPromise.__generatorFunction__ = fn;
  return createPromise;
  function createPromise() {
    return co.call(this, fn.apply(this, arguments));
  }
};

/**
 * Execute the generator function or a generator
 * and return a promise.
 *
 * @param {Function} fn
 * @return {Promise}
 * @api public
 */

function co(gen) {
  var ctx = this;
  var args = slice.call(arguments, 1)

  // we wrap everything in a promise to avoid promise chaining,
  // which leads to memory leak errors.
  // see https://github.com/tj/co/issues/180
  return new Promise(function(resolve, reject) {
    if (typeof gen === 'function') gen = gen.apply(ctx, args);
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    onFulfilled();

    /**
     * @param {Mixed} res
     * @return {Promise}
     * @api private
     */

    function onFulfilled(res) {
      var ret;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    /**
     * @param {Error} err
     * @return {Promise}
     * @api private
     */

    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    /**
     * Get the next value in the generator,
     * return a promise.
     *
     * @param {Object} ret
     * @return {Promise}
     * @api private
     */

    function next(ret) {
      if (ret.done) return resolve(ret.value);
      var value = toPromise.call(ctx, ret.value);
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
        + 'but the following object was passed: "' + String(ret.value) + '"'));
    }
  });
}

/**
 * Convert a `yield`ed value into a promise.
 *
 * @param {Mixed} obj
 * @return {Promise}
 * @api private
 */

function toPromise(obj) {
  if (!obj) return obj;
  if (isPromise(obj)) return obj;
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
  if (isObject(obj)) return objectToPromise.call(this, obj);
  return obj;
}

/**
 * Convert a thunk to a promise.
 *
 * @param {Function}
 * @return {Promise}
 * @api private
 */

function thunkToPromise(fn) {
  var ctx = this;
  return new Promise(function (resolve, reject) {
    fn.call(ctx, function (err, res) {
      if (err) return reject(err);
      if (arguments.length > 2) res = slice.call(arguments, 1);
      resolve(res);
    });
  });
}

/**
 * Convert an array of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Array} obj
 * @return {Promise}
 * @api private
 */

function arrayToPromise(obj) {
  return Promise.all(obj.map(toPromise, this));
}

/**
 * Convert an object of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Object} obj
 * @return {Promise}
 * @api private
 */

function objectToPromise(obj){
  var results = new obj.constructor();
  var keys = Object.keys(obj);
  var promises = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var promise = toPromise.call(this, obj[key]);
    if (promise && isPromise(promise)) defer(promise, key);
    else results[key] = obj[key];
  }
  return Promise.all(promises).then(function () {
    return results;
  });

  function defer(promise, key) {
    // predefine the key in the result
    results[key] = undefined;
    promises.push(promise.then(function (res) {
      results[key] = res;
    }));
  }
}

/**
 * Check if `obj` is a promise.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

/**
 * Check if `obj` is a generator.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGenerator(obj) {
  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
}

/**
 * Check if `obj` is a generator function.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */
function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  if (!constructor) return false;
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
  return isGenerator(constructor.prototype);
}

/**
 * Check for plain object.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isObject(val) {
  return Object == val.constructor;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/content-disposition/index.js":
/*!*****************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/content-disposition/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * content-disposition
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 */

module.exports = contentDisposition
module.exports.parse = parse

/**
 * Module dependencies.
 */

var basename = __webpack_require__(/*! path */ "path").basename

/**
 * RegExp to match non attr-char, *after* encodeURIComponent (i.e. not including "%")
 */

var ENCODE_URL_ATTR_CHAR_REGEXP = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g // eslint-disable-line no-control-regex

/**
 * RegExp to match percent encoding escape.
 */

var HEX_ESCAPE_REGEXP = /%[0-9A-Fa-f]{2}/
var HEX_ESCAPE_REPLACE_REGEXP = /%([0-9A-Fa-f]{2})/g

/**
 * RegExp to match non-latin1 characters.
 */

var NON_LATIN1_REGEXP = /[^\x20-\x7e\xa0-\xff]/g

/**
 * RegExp to match quoted-pair in RFC 2616
 *
 * quoted-pair = "\" CHAR
 * CHAR        = <any US-ASCII character (octets 0 - 127)>
 */

var QESC_REGEXP = /\\([\u0000-\u007f])/g

/**
 * RegExp to match chars that must be quoted-pair in RFC 2616
 */

var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp for various RFC 2616 grammar
 *
 * parameter     = token "=" ( token | quoted-string )
 * token         = 1*<any CHAR except CTLs or separators>
 * separators    = "(" | ")" | "<" | ">" | "@"
 *               | "," | ";" | ":" | "\" | <">
 *               | "/" | "[" | "]" | "?" | "="
 *               | "{" | "}" | SP | HT
 * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
 * qdtext        = <any TEXT except <">>
 * quoted-pair   = "\" CHAR
 * CHAR          = <any US-ASCII character (octets 0 - 127)>
 * TEXT          = <any OCTET except CTLs, but including LWS>
 * LWS           = [CRLF] 1*( SP | HT )
 * CRLF          = CR LF
 * CR            = <US-ASCII CR, carriage return (13)>
 * LF            = <US-ASCII LF, linefeed (10)>
 * SP            = <US-ASCII SP, space (32)>
 * HT            = <US-ASCII HT, horizontal-tab (9)>
 * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
 * OCTET         = <any 8-bit sequence of data>
 */

var PARAM_REGEXP = /;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g // eslint-disable-line no-control-regex
var TEXT_REGEXP = /^[\x20-\x7e\x80-\xff]+$/
var TOKEN_REGEXP = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/

/**
 * RegExp for various RFC 5987 grammar
 *
 * ext-value     = charset  "'" [ language ] "'" value-chars
 * charset       = "UTF-8" / "ISO-8859-1" / mime-charset
 * mime-charset  = 1*mime-charsetc
 * mime-charsetc = ALPHA / DIGIT
 *               / "!" / "#" / "$" / "%" / "&"
 *               / "+" / "-" / "^" / "_" / "`"
 *               / "{" / "}" / "~"
 * language      = ( 2*3ALPHA [ extlang ] )
 *               / 4ALPHA
 *               / 5*8ALPHA
 * extlang       = *3( "-" 3ALPHA )
 * value-chars   = *( pct-encoded / attr-char )
 * pct-encoded   = "%" HEXDIG HEXDIG
 * attr-char     = ALPHA / DIGIT
 *               / "!" / "#" / "$" / "&" / "+" / "-" / "."
 *               / "^" / "_" / "`" / "|" / "~"
 */

var EXT_VALUE_REGEXP = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/

/**
 * RegExp for various RFC 6266 grammar
 *
 * disposition-type = "inline" | "attachment" | disp-ext-type
 * disp-ext-type    = token
 * disposition-parm = filename-parm | disp-ext-parm
 * filename-parm    = "filename" "=" value
 *                  | "filename*" "=" ext-value
 * disp-ext-parm    = token "=" value
 *                  | ext-token "=" ext-value
 * ext-token        = <the characters in token, followed by "*">
 */

var DISPOSITION_TYPE_REGEXP = /^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/ // eslint-disable-line no-control-regex

/**
 * Create an attachment Content-Disposition header.
 *
 * @param {string} [filename]
 * @param {object} [options]
 * @param {string} [options.type=attachment]
 * @param {string|boolean} [options.fallback=true]
 * @return {string}
 * @api public
 */

function contentDisposition (filename, options) {
  var opts = options || {}

  // get type
  var type = opts.type || 'attachment'

  // get parameters
  var params = createparams(filename, opts.fallback)

  // format into string
  return format(new ContentDisposition(type, params))
}

/**
 * Create parameters object from filename and fallback.
 *
 * @param {string} [filename]
 * @param {string|boolean} [fallback=true]
 * @return {object}
 * @api private
 */

function createparams (filename, fallback) {
  if (filename === undefined) {
    return
  }

  var params = {}

  if (typeof filename !== 'string') {
    throw new TypeError('filename must be a string')
  }

  // fallback defaults to true
  if (fallback === undefined) {
    fallback = true
  }

  if (typeof fallback !== 'string' && typeof fallback !== 'boolean') {
    throw new TypeError('fallback must be a string or boolean')
  }

  if (typeof fallback === 'string' && NON_LATIN1_REGEXP.test(fallback)) {
    throw new TypeError('fallback must be ISO-8859-1 string')
  }

  // restrict to file base name
  var name = basename(filename)

  // determine if name is suitable for quoted string
  var isQuotedString = TEXT_REGEXP.test(name)

  // generate fallback name
  var fallbackName = typeof fallback !== 'string'
    ? fallback && getlatin1(name)
    : basename(fallback)
  var hasFallback = typeof fallbackName === 'string' && fallbackName !== name

  // set extended filename parameter
  if (hasFallback || !isQuotedString || HEX_ESCAPE_REGEXP.test(name)) {
    params['filename*'] = name
  }

  // set filename parameter
  if (isQuotedString || hasFallback) {
    params.filename = hasFallback
      ? fallbackName
      : name
  }

  return params
}

/**
 * Format object to Content-Disposition header.
 *
 * @param {object} obj
 * @param {string} obj.type
 * @param {object} [obj.parameters]
 * @return {string}
 * @api private
 */

function format (obj) {
  var parameters = obj.parameters
  var type = obj.type

  if (!type || typeof type !== 'string' || !TOKEN_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  // start with normalized type
  var string = String(type).toLowerCase()

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      var val = param.substr(-1) === '*'
        ? ustring(parameters[param])
        : qstring(parameters[param])

      string += '; ' + param + '=' + val
    }
  }

  return string
}

/**
 * Decode a RFC 6987 field value (gracefully).
 *
 * @param {string} str
 * @return {string}
 * @api private
 */

function decodefield (str) {
  var match = EXT_VALUE_REGEXP.exec(str)

  if (!match) {
    throw new TypeError('invalid extended field value')
  }

  var charset = match[1].toLowerCase()
  var encoded = match[2]
  var value

  // to binary string
  var binary = encoded.replace(HEX_ESCAPE_REPLACE_REGEXP, pdecode)

  switch (charset) {
    case 'iso-8859-1':
      value = getlatin1(binary)
      break
    case 'utf-8':
      value = new Buffer(binary, 'binary').toString('utf8')
      break
    default:
      throw new TypeError('unsupported charset in extended field')
  }

  return value
}

/**
 * Get ISO-8859-1 version of string.
 *
 * @param {string} val
 * @return {string}
 * @api private
 */

function getlatin1 (val) {
  // simple Unicode -> ISO-8859-1 transformation
  return String(val).replace(NON_LATIN1_REGEXP, '?')
}

/**
 * Parse Content-Disposition header string.
 *
 * @param {string} string
 * @return {object}
 * @api private
 */

function parse (string) {
  if (!string || typeof string !== 'string') {
    throw new TypeError('argument string is required')
  }

  var match = DISPOSITION_TYPE_REGEXP.exec(string)

  if (!match) {
    throw new TypeError('invalid type format')
  }

  // normalize type
  var index = match[0].length
  var type = match[1].toLowerCase()

  var key
  var names = []
  var params = {}
  var value

  // calculate index to start at
  index = PARAM_REGEXP.lastIndex = match[0].substr(-1) === ';'
    ? index - 1
    : index

  // match parameters
  while ((match = PARAM_REGEXP.exec(string))) {
    if (match.index !== index) {
      throw new TypeError('invalid parameter format')
    }

    index += match[0].length
    key = match[1].toLowerCase()
    value = match[2]

    if (names.indexOf(key) !== -1) {
      throw new TypeError('invalid duplicate parameter')
    }

    names.push(key)

    if (key.indexOf('*') + 1 === key.length) {
      // decode extended value
      key = key.slice(0, -1)
      value = decodefield(value)

      // overwrite existing value
      params[key] = value
      continue
    }

    if (typeof params[key] === 'string') {
      continue
    }

    if (value[0] === '"') {
      // remove quotes and escapes
      value = value
        .substr(1, value.length - 2)
        .replace(QESC_REGEXP, '$1')
    }

    params[key] = value
  }

  if (index !== -1 && index !== string.length) {
    throw new TypeError('invalid parameter format')
  }

  return new ContentDisposition(type, params)
}

/**
 * Percent decode a single character.
 *
 * @param {string} str
 * @param {string} hex
 * @return {string}
 * @api private
 */

function pdecode (str, hex) {
  return String.fromCharCode(parseInt(hex, 16))
}

/**
 * Percent encode a single character.
 *
 * @param {string} char
 * @return {string}
 * @api private
 */

function pencode (char) {
  var hex = String(char)
    .charCodeAt(0)
    .toString(16)
    .toUpperCase()
  return hex.length === 1
    ? '%0' + hex
    : '%' + hex
}

/**
 * Quote a string for HTTP.
 *
 * @param {string} val
 * @return {string}
 * @api private
 */

function qstring (val) {
  var str = String(val)

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Encode a Unicode string for HTTP (RFC 5987).
 *
 * @param {string} val
 * @return {string}
 * @api private
 */

function ustring (val) {
  var str = String(val)

  // percent encode as UTF-8
  var encoded = encodeURIComponent(str)
    .replace(ENCODE_URL_ATTR_CHAR_REGEXP, pencode)

  return 'UTF-8\'\'' + encoded
}

/**
 * Class for parsed Content-Disposition header for v8 optimization
 */

function ContentDisposition (type, parameters) {
  this.type = type
  this.parameters = parameters
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/content-type/index.js":
/*!**********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/content-type/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
 *
 * parameter     = token "=" ( token / quoted-string )
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
 * obs-text      = %x80-FF
 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
 */
var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g
var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/
var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
 *
 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
 * obs-text    = %x80-FF
 */
var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g

/**
 * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
 */
var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp to match type in RFC 7231 sec 3.1.1.1
 *
 * media-type = type "/" subtype
 * type       = token
 * subtype    = token
 */
var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * Module exports.
 * @public
 */

exports.format = format
exports.parse = parse

/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @public
 */

function format (obj) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('argument obj is required')
  }

  var parameters = obj.parameters
  var type = obj.type

  if (!type || !TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  var string = type

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      if (!TOKEN_REGEXP.test(param)) {
        throw new TypeError('invalid parameter name')
      }

      string += '; ' + param + '=' + qstring(parameters[param])
    }
  }

  return string
}

/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @public
 */

function parse (string) {
  if (!string) {
    throw new TypeError('argument string is required')
  }

  // support req/res-like objects as argument
  var header = typeof string === 'object'
    ? getcontenttype(string)
    : string

  if (typeof header !== 'string') {
    throw new TypeError('argument string is required to be a string')
  }

  var index = header.indexOf(';')
  var type = index !== -1
    ? header.substr(0, index).trim()
    : header.trim()

  if (!TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid media type')
  }

  var obj = new ContentType(type.toLowerCase())

  // parse parameters
  if (index !== -1) {
    var key
    var match
    var value

    PARAM_REGEXP.lastIndex = index

    while ((match = PARAM_REGEXP.exec(header))) {
      if (match.index !== index) {
        throw new TypeError('invalid parameter format')
      }

      index += match[0].length
      key = match[1].toLowerCase()
      value = match[2]

      if (value[0] === '"') {
        // remove quotes and escapes
        value = value
          .substr(1, value.length - 2)
          .replace(QESC_REGEXP, '$1')
      }

      obj.parameters[key] = value
    }

    if (index !== header.length) {
      throw new TypeError('invalid parameter format')
    }
  }

  return obj
}

/**
 * Get content-type from req/res objects.
 *
 * @param {object}
 * @return {Object}
 * @private
 */

function getcontenttype (obj) {
  var header

  if (typeof obj.getHeader === 'function') {
    // res-like
    header = obj.getHeader('content-type')
  } else if (typeof obj.headers === 'object') {
    // req-like
    header = obj.headers && obj.headers['content-type']
  }

  if (typeof header !== 'string') {
    throw new TypeError('content-type header is missing from object')
  }

  return header
}

/**
 * Quote a string if necessary.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function qstring (val) {
  var str = String(val)

  // no need to quote tokens
  if (TOKEN_REGEXP.test(str)) {
    return str
  }

  if (str.length > 0 && !TEXT_REGEXP.test(str)) {
    throw new TypeError('invalid parameter value')
  }

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Class to represent a content type.
 * @private
 */
function ContentType (type) {
  this.parameters = Object.create(null)
  this.type = type
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/cookies/index.js":
/*!*****************************************************!*\
  !*** ../@Bonbons.koa/node_modules/cookies/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookies
 * Copyright(c) 2014 Jed Schmidt, http://jed.is/
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */



var deprecate = __webpack_require__(/*! depd */ "../@Bonbons.koa/node_modules/depd/index.js")('cookies')
var Keygrip = __webpack_require__(/*! keygrip */ "../@Bonbons.koa/node_modules/keygrip/index.js")
var http = __webpack_require__(/*! http */ "http")
var cache = {}

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * RegExp to match Same-Site cookie attribute value.
 */

var sameSiteRegExp = /^(?:lax|strict)$/i

function Cookies(request, response, options) {
  if (!(this instanceof Cookies)) return new Cookies(request, response, options)

  this.secure = undefined
  this.request = request
  this.response = response

  if (options) {
    if (Array.isArray(options)) {
      // array of key strings
      deprecate('"keys" argument; provide using options {"keys": [...]}')
      this.keys = new Keygrip(options)
    } else if (options.constructor && options.constructor.name === 'Keygrip') {
      // any keygrip constructor to allow different versions
      deprecate('"keys" argument; provide using options {"keys": keygrip}')
      this.keys = options
    } else {
      this.keys = Array.isArray(options.keys) ? new Keygrip(options.keys) : options.keys
      this.secure = options.secure
    }
  }
}

Cookies.prototype.get = function(name, opts) {
  var sigName = name + ".sig"
    , header, match, value, remote, data, index
    , signed = opts && opts.signed !== undefined ? opts.signed : !!this.keys

  header = this.request.headers["cookie"]
  if (!header) return

  match = header.match(getPattern(name))
  if (!match) return

  value = match[1]
  if (!opts || !signed) return value

  remote = this.get(sigName)
  if (!remote) return

  data = name + "=" + value
  if (!this.keys) throw new Error('.keys required for signed cookies');
  index = this.keys.index(data, remote)

  if (index < 0) {
    this.set(sigName, null, {path: "/", signed: false })
  } else {
    index && this.set(sigName, this.keys.sign(data), { signed: false })
    return value
  }
};

Cookies.prototype.set = function(name, value, opts) {
  var res = this.response
    , req = this.request
    , headers = res.getHeader("Set-Cookie") || []
    , secure = this.secure !== undefined ? !!this.secure : req.protocol === 'https' || req.connection.encrypted
    , cookie = new Cookie(name, value, opts)
    , signed = opts && opts.signed !== undefined ? opts.signed : !!this.keys

  if (typeof headers == "string") headers = [headers]

  if (!secure && opts && opts.secure) {
    throw new Error('Cannot send secure cookie over unencrypted connection')
  }

  cookie.secure = secure
  if (opts && "secure" in opts) cookie.secure = opts.secure

  if (opts && "secureProxy" in opts) {
    deprecate('"secureProxy" option; use "secure" option, provide "secure" to constructor if needed')
    cookie.secure = opts.secureProxy
  }

  headers = pushCookie(headers, cookie)

  if (opts && signed) {
    if (!this.keys) throw new Error('.keys required for signed cookies');
    cookie.value = this.keys.sign(cookie.toString())
    cookie.name += ".sig"
    headers = pushCookie(headers, cookie)
  }

  var setHeader = res.set ? http.OutgoingMessage.prototype.setHeader : res.setHeader
  setHeader.call(res, 'Set-Cookie', headers)
  return this
};

function Cookie(name, value, attrs) {
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument value is invalid');
  }

  value || (this.expires = new Date(0))

  this.name = name
  this.value = value || ""

  for (var name in attrs) {
    this[name] = attrs[name]
  }

  if (this.path && !fieldContentRegExp.test(this.path)) {
    throw new TypeError('option path is invalid');
  }

  if (this.domain && !fieldContentRegExp.test(this.domain)) {
    throw new TypeError('option domain is invalid');
  }

  if (this.sameSite && this.sameSite !== true && !sameSiteRegExp.test(this.sameSite)) {
    throw new TypeError('option sameSite is invalid')
  }
}

Cookie.prototype.path = "/";
Cookie.prototype.expires = undefined;
Cookie.prototype.domain = undefined;
Cookie.prototype.httpOnly = true;
Cookie.prototype.sameSite = false;
Cookie.prototype.secure = false;
Cookie.prototype.overwrite = false;

Cookie.prototype.toString = function() {
  return this.name + "=" + this.value
};

Cookie.prototype.toHeader = function() {
  var header = this.toString()

  if (this.maxAge) this.expires = new Date(Date.now() + this.maxAge);

  if (this.path     ) header += "; path=" + this.path
  if (this.expires  ) header += "; expires=" + this.expires.toUTCString()
  if (this.domain   ) header += "; domain=" + this.domain
  if (this.sameSite ) header += "; samesite=" + (this.sameSite === true ? 'strict' : this.sameSite.toLowerCase())
  if (this.secure   ) header += "; secure"
  if (this.httpOnly ) header += "; httponly"

  return header
};

// back-compat so maxage mirrors maxAge
Object.defineProperty(Cookie.prototype, 'maxage', {
  configurable: true,
  enumerable: true,
  get: function () { return this.maxAge },
  set: function (val) { return this.maxAge = val }
});
deprecate.property(Cookie.prototype, 'maxage', '"maxage"; use "maxAge" instead')

function getPattern(name) {
  if (cache[name]) return cache[name]

  return cache[name] = new RegExp(
    "(?:^|;) *" +
    name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") +
    "=([^;]*)"
  )
}

function pushCookie(cookies, cookie) {
  if (cookie.overwrite) {
    cookies = cookies.filter(function(c) { return c.indexOf(cookie.name+'=') !== 0 })
  }
  cookies.push(cookie.toHeader())
  return cookies
}

Cookies.connect = Cookies.express = function(keys) {
  return function(req, res, next) {
    req.cookies = res.cookies = new Cookies(req, res, {
      keys: keys
    })

    next()
  }
}

Cookies.Cookie = Cookie

module.exports = Cookies


/***/ }),

/***/ "../@Bonbons.koa/node_modules/debug/src/browser.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/debug/src/browser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "../@Bonbons.koa/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  '#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC',
  '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF',
  '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC',
  '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF',
  '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC',
  '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033',
  '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366',
  '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933',
  '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC',
  '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF',
  '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // Internet Explorer and Edge do not support colors.
  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/debug/src/debug.js":
/*!*******************************************************!*\
  !*** ../@Bonbons.koa/node_modules/debug/src/debug.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "../@Bonbons.koa/node_modules/ms/index.js");

/**
 * Active `debug` instances.
 */
exports.instances = [];

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy;

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);

  return debug;
}

function destroy () {
  var index = exports.instances.indexOf(this);
  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/debug/src/index.js":
/*!*******************************************************!*\
  !*** ../@Bonbons.koa/node_modules/debug/src/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer') {
  module.exports = __webpack_require__(/*! ./browser.js */ "../@Bonbons.koa/node_modules/debug/src/browser.js");
} else {
  module.exports = __webpack_require__(/*! ./node.js */ "../@Bonbons.koa/node_modules/debug/src/node.js");
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/debug/src/node.js":
/*!******************************************************!*\
  !*** ../@Bonbons.koa/node_modules/debug/src/node.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(/*! tty */ "tty");
var util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "../@Bonbons.koa/node_modules/debug/src/debug.js");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [ 6, 2, 3, 4, 5, 1 ];

try {
  var supportsColor = __webpack_require__(/*! supports-color */ "../@Bonbons.koa/node_modules/supports-color/index.js");
  if (supportsColor && supportsColor.level >= 2) {
    exports.colors = [
      20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68,
      69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134,
      135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171,
      172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204,
      205, 206, 207, 208, 209, 214, 215, 220, 221
    ];
  }
} catch (err) {
  // swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(process.stderr.fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var colorCode = '\u001b[3' + (c < 8 ? c : '8;5;' + c);
    var prefix = '  ' + colorCode + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push(colorCode + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = getDate() + name + ' ' + args[0];
  }
}

function getDate() {
  if (exports.inspectOpts.hideDate) {
    return '';
  } else {
    return new Date().toISOString() + ' ';
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log() {
  return process.stderr.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),

/***/ "../@Bonbons.koa/node_modules/deep-equal/index.js":
/*!********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/deep-equal/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(/*! ./lib/keys.js */ "../@Bonbons.koa/node_modules/deep-equal/lib/keys.js");
var isArguments = __webpack_require__(/*! ./lib/is_arguments.js */ "../@Bonbons.koa/node_modules/deep-equal/lib/is_arguments.js");

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/deep-equal/lib/is_arguments.js":
/*!*******************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/deep-equal/lib/is_arguments.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),

/***/ "../@Bonbons.koa/node_modules/deep-equal/lib/keys.js":
/*!***********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/deep-equal/lib/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/delegates/index.js":
/*!*******************************************************!*\
  !*** ../@Bonbons.koa/node_modules/delegates/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Delegator`.
 */

module.exports = Delegator;

/**
 * Initialize a delegator.
 *
 * @param {Object} proto
 * @param {String} target
 * @api public
 */

function Delegator(proto, target) {
  if (!(this instanceof Delegator)) return new Delegator(proto, target);
  this.proto = proto;
  this.target = target;
  this.methods = [];
  this.getters = [];
  this.setters = [];
  this.fluents = [];
}

/**
 * Delegate method `name`.
 *
 * @param {String} name
 * @return {Delegator} self
 * @api public
 */

Delegator.prototype.method = function(name){
  var proto = this.proto;
  var target = this.target;
  this.methods.push(name);

  proto[name] = function(){
    return this[target][name].apply(this[target], arguments);
  };

  return this;
};

/**
 * Delegator accessor `name`.
 *
 * @param {String} name
 * @return {Delegator} self
 * @api public
 */

Delegator.prototype.access = function(name){
  return this.getter(name).setter(name);
};

/**
 * Delegator getter `name`.
 *
 * @param {String} name
 * @return {Delegator} self
 * @api public
 */

Delegator.prototype.getter = function(name){
  var proto = this.proto;
  var target = this.target;
  this.getters.push(name);

  proto.__defineGetter__(name, function(){
    return this[target][name];
  });

  return this;
};

/**
 * Delegator setter `name`.
 *
 * @param {String} name
 * @return {Delegator} self
 * @api public
 */

Delegator.prototype.setter = function(name){
  var proto = this.proto;
  var target = this.target;
  this.setters.push(name);

  proto.__defineSetter__(name, function(val){
    return this[target][name] = val;
  });

  return this;
};

/**
 * Delegator fluent accessor
 *
 * @param {String} name
 * @return {Delegator} self
 * @api public
 */

Delegator.prototype.fluent = function (name) {
  var proto = this.proto;
  var target = this.target;
  this.fluents.push(name);

  proto[name] = function(val){
    if ('undefined' != typeof val) {
      this[target][name] = val;
      return this;
    } else {
      return this[target][name];
    }
  };

  return this;
};


/***/ }),

/***/ "../@Bonbons.koa/node_modules/depd/index.js":
/*!**************************************************!*\
  !*** ../@Bonbons.koa/node_modules/depd/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * depd
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var callSiteToString = __webpack_require__(/*! ./lib/compat */ "../@Bonbons.koa/node_modules/depd/lib/compat/index.js").callSiteToString
var eventListenerCount = __webpack_require__(/*! ./lib/compat */ "../@Bonbons.koa/node_modules/depd/lib/compat/index.js").eventListenerCount
var relative = __webpack_require__(/*! path */ "path").relative

/**
 * Module exports.
 */

module.exports = depd

/**
 * Get the path to base files on.
 */

var basePath = process.cwd()

/**
 * Determine if namespace is contained in the string.
 */

function containsNamespace (str, namespace) {
  var vals = str.split(/[ ,]+/)
  var ns = String(namespace).toLowerCase()

  for (var i = 0; i < vals.length; i++) {
    var val = vals[i]

    // namespace contained
    if (val && (val === '*' || val.toLowerCase() === ns)) {
      return true
    }
  }

  return false
}

/**
 * Convert a data descriptor to accessor descriptor.
 */

function convertDataDescriptorToAccessor (obj, prop, message) {
  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)
  var value = descriptor.value

  descriptor.get = function getter () { return value }

  if (descriptor.writable) {
    descriptor.set = function setter (val) { return (value = val) }
  }

  delete descriptor.value
  delete descriptor.writable

  Object.defineProperty(obj, prop, descriptor)

  return descriptor
}

/**
 * Create arguments string to keep arity.
 */

function createArgumentsString (arity) {
  var str = ''

  for (var i = 0; i < arity; i++) {
    str += ', arg' + i
  }

  return str.substr(2)
}

/**
 * Create stack string from stack.
 */

function createStackString (stack) {
  var str = this.name + ': ' + this.namespace

  if (this.message) {
    str += ' deprecated ' + this.message
  }

  for (var i = 0; i < stack.length; i++) {
    str += '\n    at ' + callSiteToString(stack[i])
  }

  return str
}

/**
 * Create deprecate for namespace in caller.
 */

function depd (namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required')
  }

  var stack = getStack()
  var site = callSiteLocation(stack[1])
  var file = site[0]

  function deprecate (message) {
    // call to self as log
    log.call(deprecate, message)
  }

  deprecate._file = file
  deprecate._ignored = isignored(namespace)
  deprecate._namespace = namespace
  deprecate._traced = istraced(namespace)
  deprecate._warned = Object.create(null)

  deprecate.function = wrapfunction
  deprecate.property = wrapproperty

  return deprecate
}

/**
 * Determine if namespace is ignored.
 */

function isignored (namespace) {
  /* istanbul ignore next: tested in a child processs */
  if (process.noDeprecation) {
    // --no-deprecation support
    return true
  }

  var str = process.env.NO_DEPRECATION || ''

  // namespace ignored
  return containsNamespace(str, namespace)
}

/**
 * Determine if namespace is traced.
 */

function istraced (namespace) {
  /* istanbul ignore next: tested in a child processs */
  if (process.traceDeprecation) {
    // --trace-deprecation support
    return true
  }

  var str = process.env.TRACE_DEPRECATION || ''

  // namespace traced
  return containsNamespace(str, namespace)
}

/**
 * Display deprecation message.
 */

function log (message, site) {
  var haslisteners = eventListenerCount(process, 'deprecation') !== 0

  // abort early if no destination
  if (!haslisteners && this._ignored) {
    return
  }

  var caller
  var callFile
  var callSite
  var depSite
  var i = 0
  var seen = false
  var stack = getStack()
  var file = this._file

  if (site) {
    // provided site
    depSite = site
    callSite = callSiteLocation(stack[1])
    callSite.name = depSite.name
    file = callSite[0]
  } else {
    // get call site
    i = 2
    depSite = callSiteLocation(stack[i])
    callSite = depSite
  }

  // get caller of deprecated thing in relation to file
  for (; i < stack.length; i++) {
    caller = callSiteLocation(stack[i])
    callFile = caller[0]

    if (callFile === file) {
      seen = true
    } else if (callFile === this._file) {
      file = this._file
    } else if (seen) {
      break
    }
  }

  var key = caller
    ? depSite.join(':') + '__' + caller.join(':')
    : undefined

  if (key !== undefined && key in this._warned) {
    // already warned
    return
  }

  this._warned[key] = true

  // generate automatic message from call site
  var msg = message
  if (!msg) {
    msg = callSite === depSite || !callSite.name
      ? defaultMessage(depSite)
      : defaultMessage(callSite)
  }

  // emit deprecation if listeners exist
  if (haslisteners) {
    var err = DeprecationError(this._namespace, msg, stack.slice(i))
    process.emit('deprecation', err)
    return
  }

  // format and write message
  var format = process.stderr.isTTY
    ? formatColor
    : formatPlain
  var output = format.call(this, msg, caller, stack.slice(i))
  process.stderr.write(output + '\n', 'utf8')
}

/**
 * Get call site location as array.
 */

function callSiteLocation (callSite) {
  var file = callSite.getFileName() || '<anonymous>'
  var line = callSite.getLineNumber()
  var colm = callSite.getColumnNumber()

  if (callSite.isEval()) {
    file = callSite.getEvalOrigin() + ', ' + file
  }

  var site = [file, line, colm]

  site.callSite = callSite
  site.name = callSite.getFunctionName()

  return site
}

/**
 * Generate a default message from the site.
 */

function defaultMessage (site) {
  var callSite = site.callSite
  var funcName = site.name

  // make useful anonymous name
  if (!funcName) {
    funcName = '<anonymous@' + formatLocation(site) + '>'
  }

  var context = callSite.getThis()
  var typeName = context && callSite.getTypeName()

  // ignore useless type name
  if (typeName === 'Object') {
    typeName = undefined
  }

  // make useful type name
  if (typeName === 'Function') {
    typeName = context.name || typeName
  }

  return typeName && callSite.getMethodName()
    ? typeName + '.' + funcName
    : funcName
}

/**
 * Format deprecation message without color.
 */

function formatPlain (msg, caller, stack) {
  var timestamp = new Date().toUTCString()

  var formatted = timestamp +
    ' ' + this._namespace +
    ' deprecated ' + msg

  // add stack trace
  if (this._traced) {
    for (var i = 0; i < stack.length; i++) {
      formatted += '\n    at ' + callSiteToString(stack[i])
    }

    return formatted
  }

  if (caller) {
    formatted += ' at ' + formatLocation(caller)
  }

  return formatted
}

/**
 * Format deprecation message with color.
 */

function formatColor (msg, caller, stack) {
  var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' + // bold cyan
    ' \x1b[33;1mdeprecated\x1b[22;39m' + // bold yellow
    ' \x1b[0m' + msg + '\x1b[39m' // reset

  // add stack trace
  if (this._traced) {
    for (var i = 0; i < stack.length; i++) {
      formatted += '\n    \x1b[36mat ' + callSiteToString(stack[i]) + '\x1b[39m' // cyan
    }

    return formatted
  }

  if (caller) {
    formatted += ' \x1b[36m' + formatLocation(caller) + '\x1b[39m' // cyan
  }

  return formatted
}

/**
 * Format call site location.
 */

function formatLocation (callSite) {
  return relative(basePath, callSite[0]) +
    ':' + callSite[1] +
    ':' + callSite[2]
}

/**
 * Get the stack as array of call sites.
 */

function getStack () {
  var limit = Error.stackTraceLimit
  var obj = {}
  var prep = Error.prepareStackTrace

  Error.prepareStackTrace = prepareObjectStackTrace
  Error.stackTraceLimit = Math.max(10, limit)

  // capture the stack
  Error.captureStackTrace(obj)

  // slice this function off the top
  var stack = obj.stack.slice(1)

  Error.prepareStackTrace = prep
  Error.stackTraceLimit = limit

  return stack
}

/**
 * Capture call site stack from v8.
 */

function prepareObjectStackTrace (obj, stack) {
  return stack
}

/**
 * Return a wrapped function in a deprecation message.
 */

function wrapfunction (fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  var args = createArgumentsString(fn.length)
  var deprecate = this // eslint-disable-line no-unused-vars
  var stack = getStack()
  var site = callSiteLocation(stack[1])

  site.name = fn.name

   // eslint-disable-next-line no-eval
  var deprecatedfn = eval('(function (' + args + ') {\n' +
    '"use strict"\n' +
    'log.call(deprecate, message, site)\n' +
    'return fn.apply(this, arguments)\n' +
    '})')

  return deprecatedfn
}

/**
 * Wrap property in a deprecation message.
 */

function wrapproperty (obj, prop, message) {
  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new TypeError('argument obj must be object')
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)

  if (!descriptor) {
    throw new TypeError('must call property on owner object')
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable')
  }

  var deprecate = this
  var stack = getStack()
  var site = callSiteLocation(stack[1])

  // set site name
  site.name = prop

  // convert data descriptor
  if ('value' in descriptor) {
    descriptor = convertDataDescriptorToAccessor(obj, prop, message)
  }

  var get = descriptor.get
  var set = descriptor.set

  // wrap getter
  if (typeof get === 'function') {
    descriptor.get = function getter () {
      log.call(deprecate, message, site)
      return get.apply(this, arguments)
    }
  }

  // wrap setter
  if (typeof set === 'function') {
    descriptor.set = function setter () {
      log.call(deprecate, message, site)
      return set.apply(this, arguments)
    }
  }

  Object.defineProperty(obj, prop, descriptor)
}

/**
 * Create DeprecationError for deprecation
 */

function DeprecationError (namespace, message, stack) {
  var error = new Error()
  var stackString

  Object.defineProperty(error, 'constructor', {
    value: DeprecationError
  })

  Object.defineProperty(error, 'message', {
    configurable: true,
    enumerable: false,
    value: message,
    writable: true
  })

  Object.defineProperty(error, 'name', {
    enumerable: false,
    configurable: true,
    value: 'DeprecationError',
    writable: true
  })

  Object.defineProperty(error, 'namespace', {
    configurable: true,
    enumerable: false,
    value: namespace,
    writable: true
  })

  Object.defineProperty(error, 'stack', {
    configurable: true,
    enumerable: false,
    get: function () {
      if (stackString !== undefined) {
        return stackString
      }

      // prepare stack trace
      return (stackString = createStackString.call(this, stack))
    },
    set: function setter (val) {
      stackString = val
    }
  })

  return error
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/depd/lib/compat/callsite-tostring.js":
/*!*************************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/depd/lib/compat/callsite-tostring.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * depd
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 */

module.exports = callSiteToString

/**
 * Format a CallSite file location to a string.
 */

function callSiteFileLocation (callSite) {
  var fileName
  var fileLocation = ''

  if (callSite.isNative()) {
    fileLocation = 'native'
  } else if (callSite.isEval()) {
    fileName = callSite.getScriptNameOrSourceURL()
    if (!fileName) {
      fileLocation = callSite.getEvalOrigin()
    }
  } else {
    fileName = callSite.getFileName()
  }

  if (fileName) {
    fileLocation += fileName

    var lineNumber = callSite.getLineNumber()
    if (lineNumber != null) {
      fileLocation += ':' + lineNumber

      var columnNumber = callSite.getColumnNumber()
      if (columnNumber) {
        fileLocation += ':' + columnNumber
      }
    }
  }

  return fileLocation || 'unknown source'
}

/**
 * Format a CallSite to a string.
 */

function callSiteToString (callSite) {
  var addSuffix = true
  var fileLocation = callSiteFileLocation(callSite)
  var functionName = callSite.getFunctionName()
  var isConstructor = callSite.isConstructor()
  var isMethodCall = !(callSite.isToplevel() || isConstructor)
  var line = ''

  if (isMethodCall) {
    var methodName = callSite.getMethodName()
    var typeName = getConstructorName(callSite)

    if (functionName) {
      if (typeName && functionName.indexOf(typeName) !== 0) {
        line += typeName + '.'
      }

      line += functionName

      if (methodName && functionName.lastIndexOf('.' + methodName) !== functionName.length - methodName.length - 1) {
        line += ' [as ' + methodName + ']'
      }
    } else {
      line += typeName + '.' + (methodName || '<anonymous>')
    }
  } else if (isConstructor) {
    line += 'new ' + (functionName || '<anonymous>')
  } else if (functionName) {
    line += functionName
  } else {
    addSuffix = false
    line += fileLocation
  }

  if (addSuffix) {
    line += ' (' + fileLocation + ')'
  }

  return line
}

/**
 * Get constructor name of reviver.
 */

function getConstructorName (obj) {
  var receiver = obj.receiver
  return (receiver.constructor && receiver.constructor.name) || null
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/depd/lib/compat/event-listener-count.js":
/*!****************************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/depd/lib/compat/event-listener-count.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = eventListenerCount

/**
 * Get the count of listeners on an event emitter of a specific type.
 */

function eventListenerCount (emitter, type) {
  return emitter.listeners(type).length
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/depd/lib/compat/index.js":
/*!*************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/depd/lib/compat/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * depd
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter

/**
 * Module exports.
 * @public
 */

lazyProperty(module.exports, 'callSiteToString', function callSiteToString () {
  var limit = Error.stackTraceLimit
  var obj = {}
  var prep = Error.prepareStackTrace

  function prepareObjectStackTrace (obj, stack) {
    return stack
  }

  Error.prepareStackTrace = prepareObjectStackTrace
  Error.stackTraceLimit = 2

  // capture the stack
  Error.captureStackTrace(obj)

  // slice the stack
  var stack = obj.stack.slice()

  Error.prepareStackTrace = prep
  Error.stackTraceLimit = limit

  return stack[0].toString ? toString : __webpack_require__(/*! ./callsite-tostring */ "../@Bonbons.koa/node_modules/depd/lib/compat/callsite-tostring.js")
})

lazyProperty(module.exports, 'eventListenerCount', function eventListenerCount () {
  return EventEmitter.listenerCount || __webpack_require__(/*! ./event-listener-count */ "../@Bonbons.koa/node_modules/depd/lib/compat/event-listener-count.js")
})

/**
 * Define a lazy property.
 */

function lazyProperty (obj, prop, getter) {
  function get () {
    var val = getter()

    Object.defineProperty(obj, prop, {
      configurable: true,
      enumerable: true,
      value: val
    })

    return val
  }

  Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: true,
    get: get
  })
}

/**
 * Call toString() on the obj
 */

function toString (obj) {
  return obj.toString()
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/destroy/index.js":
/*!*****************************************************!*\
  !*** ../@Bonbons.koa/node_modules/destroy/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * destroy
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var ReadStream = __webpack_require__(/*! fs */ "fs").ReadStream
var Stream = __webpack_require__(/*! stream */ "stream")

/**
 * Module exports.
 * @public
 */

module.exports = destroy

/**
 * Destroy a stream.
 *
 * @param {object} stream
 * @public
 */

function destroy(stream) {
  if (stream instanceof ReadStream) {
    return destroyReadStream(stream)
  }

  if (!(stream instanceof Stream)) {
    return stream
  }

  if (typeof stream.destroy === 'function') {
    stream.destroy()
  }

  return stream
}

/**
 * Destroy a ReadStream.
 *
 * @param {object} stream
 * @private
 */

function destroyReadStream(stream) {
  stream.destroy()

  if (typeof stream.close === 'function') {
    // node.js core bug work-around
    stream.on('open', onOpenClose)
  }

  return stream
}

/**
 * On open handler to close stream.
 * @private
 */

function onOpenClose() {
  if (typeof this.fd === 'number') {
    // actually close down the fd
    this.close()
  }
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/ee-first/index.js":
/*!******************************************************!*\
  !*** ../@Bonbons.koa/node_modules/ee-first/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ee-first
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = first

/**
 * Get the first event in a set of event emitters and event pairs.
 *
 * @param {array} stuff
 * @param {function} done
 * @public
 */

function first(stuff, done) {
  if (!Array.isArray(stuff))
    throw new TypeError('arg must be an array of [ee, events...] arrays')

  var cleanups = []

  for (var i = 0; i < stuff.length; i++) {
    var arr = stuff[i]

    if (!Array.isArray(arr) || arr.length < 2)
      throw new TypeError('each array member must be [ee, events...]')

    var ee = arr[0]

    for (var j = 1; j < arr.length; j++) {
      var event = arr[j]
      var fn = listener(event, callback)

      // listen to the event
      ee.on(event, fn)
      // push this listener to the list of cleanups
      cleanups.push({
        ee: ee,
        event: event,
        fn: fn,
      })
    }
  }

  function callback() {
    cleanup()
    done.apply(null, arguments)
  }

  function cleanup() {
    var x
    for (var i = 0; i < cleanups.length; i++) {
      x = cleanups[i]
      x.ee.removeListener(x.event, x.fn)
    }
  }

  function thunk(fn) {
    done = fn
  }

  thunk.cancel = cleanup

  return thunk
}

/**
 * Create the event listener.
 * @private
 */

function listener(event, done) {
  return function onevent(arg1) {
    var args = new Array(arguments.length)
    var ee = this
    var err = event === 'error'
      ? arg1
      : null

    // copy args to prevent arguments escaping scope
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }

    done(err, ee, event, args)
  }
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/error-inject/index.js":
/*!**********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/error-inject/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stream = __webpack_require__(/*! stream */ "stream");

module.exports = function (stream, error) {
  if (stream instanceof Stream
    && !~stream.listeners('error').indexOf(error)) {
    stream.on('error', error);
  }
  return stream;
};


/***/ }),

/***/ "../@Bonbons.koa/node_modules/escape-html/index.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/escape-html/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/fresh/index.js":
/*!***************************************************!*\
  !*** ../@Bonbons.koa/node_modules/fresh/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * RegExp to check for no-cache token in Cache-Control.
 * @private
 */

var CACHE_CONTROL_NO_CACHE_REGEXP = /(?:^|,)\s*?no-cache\s*?(?:,|$)/

/**
 * Module exports.
 * @public
 */

module.exports = fresh

/**
 * Check freshness of the response using request and response headers.
 *
 * @param {Object} reqHeaders
 * @param {Object} resHeaders
 * @return {Boolean}
 * @public
 */

function fresh (reqHeaders, resHeaders) {
  // fields
  var modifiedSince = reqHeaders['if-modified-since']
  var noneMatch = reqHeaders['if-none-match']

  // unconditional request
  if (!modifiedSince && !noneMatch) {
    return false
  }

  // Always return stale when Cache-Control: no-cache
  // to support end-to-end reload requests
  // https://tools.ietf.org/html/rfc2616#section-14.9.4
  var cacheControl = reqHeaders['cache-control']
  if (cacheControl && CACHE_CONTROL_NO_CACHE_REGEXP.test(cacheControl)) {
    return false
  }

  // if-none-match
  if (noneMatch && noneMatch !== '*') {
    var etag = resHeaders['etag']

    if (!etag) {
      return false
    }

    var etagStale = true
    var matches = parseTokenList(noneMatch)
    for (var i = 0; i < matches.length; i++) {
      var match = matches[i]
      if (match === etag || match === 'W/' + etag || 'W/' + match === etag) {
        etagStale = false
        break
      }
    }

    if (etagStale) {
      return false
    }
  }

  // if-modified-since
  if (modifiedSince) {
    var lastModified = resHeaders['last-modified']
    var modifiedStale = !lastModified || !(parseHttpDate(lastModified) <= parseHttpDate(modifiedSince))

    if (modifiedStale) {
      return false
    }
  }

  return true
}

/**
 * Parse an HTTP Date into a number.
 *
 * @param {string} date
 * @private
 */

function parseHttpDate (date) {
  var timestamp = date && Date.parse(date)

  // istanbul ignore next: guard against date.js Date.parse patching
  return typeof timestamp === 'number'
    ? timestamp
    : NaN
}

/**
 * Parse a HTTP token list.
 *
 * @param {string} str
 * @private
 */

function parseTokenList (str) {
  var end = 0
  var list = []
  var start = 0

  // gather tokens
  for (var i = 0, len = str.length; i < len; i++) {
    switch (str.charCodeAt(i)) {
      case 0x20: /*   */
        if (start === end) {
          start = end = i + 1
        }
        break
      case 0x2c: /* , */
        list.push(str.substring(start, end))
        start = end = i + 1
        break
      default:
        end = i + 1
        break
    }
  }

  // final token
  list.push(str.substring(start, end))

  return list
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/http-assert/index.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/http-assert/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createError = __webpack_require__(/*! http-errors */ "../@Bonbons.koa/node_modules/http-errors/index.js");
var eql = __webpack_require__(/*! deep-equal */ "../@Bonbons.koa/node_modules/deep-equal/index.js");

module.exports = assert;

function assert(value, status, msg, opts) {
  if (value) return;
  throw createError(status, msg, opts);
}

assert.equal = function(a, b, status, msg, opts) {
  assert(a == b, status, msg, opts);
};

assert.notEqual = function(a, b, status, msg, opts) {
  assert(a != b, status, msg, opts);
};

assert.strictEqual = function(a, b, status, msg, opts) {
  assert(a === b, status, msg, opts);
};

assert.notStrictEqual = function(a, b, status, msg, opts) {
  assert(a !== b, status, msg, opts);
};

assert.deepEqual = function(a, b, status, msg, opts) {
  assert(eql(a, b), status, msg, opts);
};

assert.notDeepEqual = function(a, b, status, msg, opts) {
  assert(!eql(a, b), status, msg, opts);
};


/***/ }),

/***/ "../@Bonbons.koa/node_modules/http-errors/index.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/http-errors/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var deprecate = __webpack_require__(/*! depd */ "../@Bonbons.koa/node_modules/depd/index.js")('http-errors')
var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "../@Bonbons.koa/node_modules/setprototypeof/index.js")
var statuses = __webpack_require__(/*! statuses */ "../@Bonbons.koa/node_modules/statuses/index.js")
var inherits = __webpack_require__(/*! inherits */ "../@Bonbons.koa/node_modules/inherits/inherits.js")

/**
 * Module exports.
 * @public
 */

module.exports = createError
module.exports.HttpError = createHttpErrorConstructor()

// Populate exports for all constructors
populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError)

/**
 * Get the code class of a status code.
 * @private
 */

function codeClass (status) {
  return Number(String(status).charAt(0) + '00')
}

/**
 * Create a new HTTP Error.
 *
 * @returns {Error}
 * @public
 */

function createError () {
  // so much arity going on ~_~
  var err
  var msg
  var status = 500
  var props = {}
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i]
    if (arg instanceof Error) {
      err = arg
      status = err.status || err.statusCode || status
      continue
    }
    switch (typeof arg) {
      case 'string':
        msg = arg
        break
      case 'number':
        status = arg
        if (i !== 0) {
          deprecate('non-first-argument status code; replace with createError(' + arg + ', ...)')
        }
        break
      case 'object':
        props = arg
        break
    }
  }

  if (typeof status === 'number' && (status < 400 || status >= 600)) {
    deprecate('non-error status code; use only 4xx or 5xx status codes')
  }

  if (typeof status !== 'number' ||
    (!statuses[status] && (status < 400 || status >= 600))) {
    status = 500
  }

  // constructor
  var HttpError = createError[status] || createError[codeClass(status)]

  if (!err) {
    // create error
    err = HttpError
      ? new HttpError(msg)
      : new Error(msg || statuses[status])
    Error.captureStackTrace(err, createError)
  }

  if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
    // add properties to generic error
    err.expose = status < 500
    err.status = err.statusCode = status
  }

  for (var key in props) {
    if (key !== 'status' && key !== 'statusCode') {
      err[key] = props[key]
    }
  }

  return err
}

/**
 * Create HTTP error abstract base class.
 * @private
 */

function createHttpErrorConstructor () {
  function HttpError () {
    throw new TypeError('cannot construct abstract class')
  }

  inherits(HttpError, Error)

  return HttpError
}

/**
 * Create a constructor for a client error.
 * @private
 */

function createClientErrorConstructor (HttpError, name, code) {
  var className = name.match(/Error$/) ? name : name + 'Error'

  function ClientError (message) {
    // create the error object
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ClientError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ClientError.prototype)

    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ClientError, HttpError)

  ClientError.prototype.status = code
  ClientError.prototype.statusCode = code
  ClientError.prototype.expose = true

  return ClientError
}

/**
 * Create a constructor for a server error.
 * @private
 */

function createServerErrorConstructor (HttpError, name, code) {
  var className = name.match(/Error$/) ? name : name + 'Error'

  function ServerError (message) {
    // create the error object
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ServerError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ServerError.prototype)

    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ServerError, HttpError)

  ServerError.prototype.status = code
  ServerError.prototype.statusCode = code
  ServerError.prototype.expose = false

  return ServerError
}

/**
 * Populate the exports object with constructors for every error class.
 * @private
 */

function populateConstructorExports (exports, codes, HttpError) {
  codes.forEach(function forEachCode (code) {
    var CodeError
    var name = toIdentifier(statuses[code])

    switch (codeClass(code)) {
      case 400:
        CodeError = createClientErrorConstructor(HttpError, name, code)
        break
      case 500:
        CodeError = createServerErrorConstructor(HttpError, name, code)
        break
    }

    if (CodeError) {
      // export the constructor
      exports[code] = CodeError
      exports[name] = CodeError
    }
  })

  // backwards-compatibility
  exports["I'mateapot"] = deprecate.function(exports.ImATeapot,
    '"I\'mateapot"; use "ImATeapot" instead')
}

/**
 * Convert a string of words to a JavaScript identifier.
 * @private
 */

function toIdentifier (str) {
  return str.split(' ').map(function (token) {
    return token.slice(0, 1).toUpperCase() + token.slice(1)
  }).join('').replace(/[^ _0-9a-z]/gi, '')
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/inherits/inherits.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/inherits/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

try {
  var util = __webpack_require__(/*! util */ "util");
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  module.exports = __webpack_require__(/*! ./inherits_browser.js */ "../@Bonbons.koa/node_modules/inherits/inherits_browser.js");
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/inherits/inherits_browser.js":
/*!*****************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/inherits/inherits_browser.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/is-generator-function/index.js":
/*!*******************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/is-generator-function/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
var generatorFunc = getGeneratorFunc();
var GeneratorFunction = generatorFunc ? getProto(generatorFunc) : {};

module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr.call(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr.call(fn);
		return str === '[object GeneratorFunction]';
	}
	return getProto(fn) === GeneratorFunction;
};


/***/ }),

/***/ "../@Bonbons.koa/node_modules/keygrip/index.js":
/*!*****************************************************!*\
  !*** ../@Bonbons.koa/node_modules/keygrip/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * keygrip
 * Copyright(c) 2011-2014 Jed Schmidt
 * MIT Licensed
 */

var crypto = __webpack_require__(/*! crypto */ "crypto")
  
function Keygrip(keys, algorithm, encoding) {
  if (!algorithm) algorithm = "sha1";
  if (!encoding) encoding = "base64";
  if (!(this instanceof Keygrip)) return new Keygrip(keys, algorithm, encoding)

  if (!keys || !(0 in keys)) {
    throw new Error("Keys must be provided.")
  }

  function sign(data, key) {
    return crypto
      .createHmac(algorithm, key)
      .update(data).digest(encoding)
      .replace(/\/|\+|=/g, function(x) {
        return ({ "/": "_", "+": "-", "=": "" })[x]
      })
  }

  this.sign = function(data){ return sign(data, keys[0]) }

  this.verify = function(data, digest) {
    return this.index(data, digest) > -1
  }

  this.index = function(data, digest) {
    for (var i = 0, l = keys.length; i < l; i++) {
      if (constantTimeCompare(digest, sign(data, keys[i]))) return i
    }

    return -1
  }
}

Keygrip.sign = Keygrip.verify = Keygrip.index = function() {
  throw new Error("Usage: require('keygrip')(<array-of-keys>)")
}

//http://codahale.com/a-lesson-in-timing-attacks/
var constantTimeCompare = function(val1, val2){
    if(val1 == null && val2 != null){
        return false;
    } else if(val2 == null && val1 != null){
        return false;
    } else if(val1 == null && val2 == null){
        return true;
    }

    if(val1.length !== val2.length){
        return false;
    }

    var result = 0;

    for(var i = 0; i < val1.length; i++){
        result |= val1.charCodeAt(i) ^ val2.charCodeAt(i); //Don't short circuit
    }

    return result === 0;
};

module.exports = Keygrip


/***/ }),

/***/ "../@Bonbons.koa/node_modules/koa-compose/index.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/koa-compose/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose compositor.
 */

module.exports = compose

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */

function compose (middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/koa-convert/index.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/koa-convert/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const co = __webpack_require__(/*! co */ "../@Bonbons.koa/node_modules/co/index.js")
const compose = __webpack_require__(/*! koa-compose */ "../@Bonbons.koa/node_modules/koa-convert/node_modules/koa-compose/index.js")

module.exports = convert

function convert (mw) {
  if (typeof mw !== 'function') {
    throw new TypeError('middleware must be a function')
  }
  if (mw.constructor.name !== 'GeneratorFunction') {
    // assume it's Promise-based middleware
    return mw
  }
  const converted = function (ctx, next) {
    return co.call(ctx, mw.call(ctx, createGenerator(next)))
  }
  converted._name = mw._name || mw.name
  return converted
}

function * createGenerator (next) {
  return yield next()
}

// convert.compose(mw, mw, mw)
// convert.compose([mw, mw, mw])
convert.compose = function (arr) {
  if (!Array.isArray(arr)) {
    arr = Array.from(arguments)
  }
  return compose(arr.map(convert))
}

convert.back = function (mw) {
  if (typeof mw !== 'function') {
    throw new TypeError('middleware must be a function')
  }
  if (mw.constructor.name === 'GeneratorFunction') {
    // assume it's generator middleware
    return mw
  }
  const converted = function * (next) {
    let ctx = this
    let called = false
    // no need try...catch here, it's ok even `mw()` throw exception
    yield Promise.resolve(mw(ctx, function () {
      if (called) {
        // guard against multiple next() calls
        // https://github.com/koajs/compose/blob/4e3e96baf58b817d71bd44a8c0d78bb42623aa95/index.js#L36
        return Promise.reject(new Error('next() called multiple times'))
      }
      called = true
      return co.call(ctx, next)
    }))
  }
  converted._name = mw._name || mw.name
  return converted
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/koa-convert/node_modules/koa-compose/index.js":
/*!**********************************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/koa-convert/node_modules/koa-compose/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Promise = __webpack_require__(/*! any-promise */ "../@Bonbons.koa/node_modules/any-promise/index.js")

/**
 * Expose compositor.
 */

module.exports = compose

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */

function compose (middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        return Promise.resolve(fn(context, function next () {
          return dispatch(i + 1)
        }))
      } catch (err) {
        return Promise.reject(err)
      }
    }
  }
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/koa-is-json/index.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/koa-is-json/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = isJSON;

/**
 * Check if `body` should be interpreted as json.
 */

function isJSON(body) {
  if (!body) return false;
  if ('string' == typeof body) return false;
  if ('function' == typeof body.pipe) return false;
  if (Buffer.isBuffer(body)) return false;
  return true;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/koa/lib/application.js":
/*!***********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/koa/lib/application.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * Module dependencies.
 */

const isGeneratorFunction = __webpack_require__(/*! is-generator-function */ "../@Bonbons.koa/node_modules/is-generator-function/index.js");
const debug = __webpack_require__(/*! debug */ "../@Bonbons.koa/node_modules/debug/src/index.js")('koa:application');
const onFinished = __webpack_require__(/*! on-finished */ "../@Bonbons.koa/node_modules/on-finished/index.js");
const response = __webpack_require__(/*! ./response */ "../@Bonbons.koa/node_modules/koa/lib/response.js");
const compose = __webpack_require__(/*! koa-compose */ "../@Bonbons.koa/node_modules/koa-compose/index.js");
const isJSON = __webpack_require__(/*! koa-is-json */ "../@Bonbons.koa/node_modules/koa-is-json/index.js");
const context = __webpack_require__(/*! ./context */ "../@Bonbons.koa/node_modules/koa/lib/context.js");
const request = __webpack_require__(/*! ./request */ "../@Bonbons.koa/node_modules/koa/lib/request.js");
const statuses = __webpack_require__(/*! statuses */ "../@Bonbons.koa/node_modules/statuses/index.js");
const Cookies = __webpack_require__(/*! cookies */ "../@Bonbons.koa/node_modules/cookies/index.js");
const accepts = __webpack_require__(/*! accepts */ "../@Bonbons.koa/node_modules/accepts/index.js");
const Emitter = __webpack_require__(/*! events */ "events");
const assert = __webpack_require__(/*! assert */ "assert");
const Stream = __webpack_require__(/*! stream */ "stream");
const http = __webpack_require__(/*! http */ "http");
const only = __webpack_require__(/*! only */ "../@Bonbons.koa/node_modules/only/index.js");
const convert = __webpack_require__(/*! koa-convert */ "../@Bonbons.koa/node_modules/koa-convert/index.js");
const deprecate = __webpack_require__(/*! depd */ "../@Bonbons.koa/node_modules/depd/index.js")('koa');

/**
 * Expose `Application` class.
 * Inherits from `Emitter.prototype`.
 */

module.exports = class Application extends Emitter {
  /**
   * Initialize a new `Application`.
   *
   * @api public
   */

  constructor() {
    super();

    this.proxy = false;
    this.middleware = [];
    this.subdomainOffset = 2;
    this.env = "development" || 'development';
    this.context = Object.create(context);
    this.request = Object.create(request);
    this.response = Object.create(response);
  }

  /**
   * Shorthand for:
   *
   *    http.createServer(app.callback()).listen(...)
   *
   * @param {Mixed} ...
   * @return {Server}
   * @api public
   */

  listen(...args) {
    debug('listen');
    const server = http.createServer(this.callback());
    return server.listen(...args);
  }

  /**
   * Return JSON representation.
   * We only bother showing settings.
   *
   * @return {Object}
   * @api public
   */

  toJSON() {
    return only(this, [
      'subdomainOffset',
      'proxy',
      'env'
    ]);
  }

  /**
   * Inspect implementation.
   *
   * @return {Object}
   * @api public
   */

  inspect() {
    return this.toJSON();
  }

  /**
   * Use the given middleware `fn`.
   *
   * Old-style middleware will be converted.
   *
   * @param {Function} fn
   * @return {Application} self
   * @api public
   */

  use(fn) {
    if (typeof fn !== 'function') throw new TypeError('middleware must be a function!');
    if (isGeneratorFunction(fn)) {
      deprecate('Support for generators will be removed in v3. ' +
                'See the documentation for examples of how to convert old middleware ' +
                'https://github.com/koajs/koa/blob/master/docs/migration.md');
      fn = convert(fn);
    }
    debug('use %s', fn._name || fn.name || '-');
    this.middleware.push(fn);
    return this;
  }

  /**
   * Return a request handler callback
   * for node's native http server.
   *
   * @return {Function}
   * @api public
   */

  callback() {
    const fn = compose(this.middleware);

    if (!this.listeners('error').length) this.on('error', this.onerror);

    const handleRequest = (req, res) => {
      const ctx = this.createContext(req, res);
      return this.handleRequest(ctx, fn);
    };

    return handleRequest;
  }

  /**
   * Handle request in callback.
   *
   * @api private
   */

  handleRequest(ctx, fnMiddleware) {
    const res = ctx.res;
    res.statusCode = 404;
    const onerror = err => ctx.onerror(err);
    const handleResponse = () => respond(ctx);
    onFinished(res, onerror);
    return fnMiddleware(ctx).then(handleResponse).catch(onerror);
  }

  /**
   * Initialize a new context.
   *
   * @api private
   */

  createContext(req, res) {
    const context = Object.create(this.context);
    const request = context.request = Object.create(this.request);
    const response = context.response = Object.create(this.response);
    context.app = request.app = response.app = this;
    context.req = request.req = response.req = req;
    context.res = request.res = response.res = res;
    request.ctx = response.ctx = context;
    request.response = response;
    response.request = request;
    context.originalUrl = request.originalUrl = req.url;
    context.cookies = new Cookies(req, res, {
      keys: this.keys,
      secure: request.secure
    });
    request.ip = request.ips[0] || req.socket.remoteAddress || '';
    context.accept = request.accept = accepts(req);
    context.state = {};
    return context;
  }

  /**
   * Default error handler.
   *
   * @param {Error} err
   * @api private
   */

  onerror(err) {
    assert(err instanceof Error, `non-error thrown: ${err}`);

    if (404 == err.status || err.expose) return;
    if (this.silent) return;

    const msg = err.stack || err.toString();
    console.error();
    console.error(msg.replace(/^/gm, '  '));
    console.error();
  }
};

/**
 * Response helper.
 */

function respond(ctx) {
  // allow bypassing koa
  if (false === ctx.respond) return;

  const res = ctx.res;
  if (!ctx.writable) return;

  let body = ctx.body;
  const code = ctx.status;

  // ignore body
  if (statuses.empty[code]) {
    // strip headers
    ctx.body = null;
    return res.end();
  }

  if ('HEAD' == ctx.method) {
    if (!res.headersSent && isJSON(body)) {
      ctx.length = Buffer.byteLength(JSON.stringify(body));
    }
    return res.end();
  }

  // status body
  if (null == body) {
    body = ctx.message || String(code);
    if (!res.headersSent) {
      ctx.type = 'text';
      ctx.length = Buffer.byteLength(body);
    }
    return res.end(body);
  }

  // responses
  if (Buffer.isBuffer(body)) return res.end(body);
  if ('string' == typeof body) return res.end(body);
  if (body instanceof Stream) return body.pipe(res);

  // body: json
  body = JSON.stringify(body);
  if (!res.headersSent) {
    ctx.length = Buffer.byteLength(body);
  }
  res.end(body);
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/koa/lib/context.js":
/*!*******************************************************!*\
  !*** ../@Bonbons.koa/node_modules/koa/lib/context.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * Module dependencies.
 */

const util = __webpack_require__(/*! util */ "util");
const createError = __webpack_require__(/*! http-errors */ "../@Bonbons.koa/node_modules/http-errors/index.js");
const httpAssert = __webpack_require__(/*! http-assert */ "../@Bonbons.koa/node_modules/http-assert/index.js");
const delegate = __webpack_require__(/*! delegates */ "../@Bonbons.koa/node_modules/delegates/index.js");
const statuses = __webpack_require__(/*! statuses */ "../@Bonbons.koa/node_modules/statuses/index.js");

/**
 * Context prototype.
 */

const proto = module.exports = {

  /**
   * util.inspect() implementation, which
   * just returns the JSON output.
   *
   * @return {Object}
   * @api public
   */

  inspect() {
    if (this === proto) return this;
    return this.toJSON();
  },

  /**
   * Return JSON representation.
   *
   * Here we explicitly invoke .toJSON() on each
   * object, as iteration will otherwise fail due
   * to the getters and cause utilities such as
   * clone() to fail.
   *
   * @return {Object}
   * @api public
   */

  toJSON() {
    return {
      request: this.request.toJSON(),
      response: this.response.toJSON(),
      app: this.app.toJSON(),
      originalUrl: this.originalUrl,
      req: '<original node req>',
      res: '<original node res>',
      socket: '<original node socket>'
    };
  },

  /**
   * Similar to .throw(), adds assertion.
   *
   *    this.assert(this.user, 401, 'Please login!');
   *
   * See: https://github.com/jshttp/http-assert
   *
   * @param {Mixed} test
   * @param {Number} status
   * @param {String} message
   * @api public
   */

  assert: httpAssert,

  /**
   * Throw an error with `msg` and optional `status`
   * defaulting to 500. Note that these are user-level
   * errors, and the message may be exposed to the client.
   *
   *    this.throw(403)
   *    this.throw('name required', 400)
   *    this.throw(400, 'name required')
   *    this.throw('something exploded')
   *    this.throw(new Error('invalid'), 400);
   *    this.throw(400, new Error('invalid'));
   *
   * See: https://github.com/jshttp/http-errors
   *
   * @param {String|Number|Error} err, msg or status
   * @param {String|Number|Error} [err, msg or status]
   * @param {Object} [props]
   * @api public
   */

  throw(...args) {
    throw createError(...args);
  },

  /**
   * Default error handling.
   *
   * @param {Error} err
   * @api private
   */

  onerror(err) {
    // don't do anything if there is no error.
    // this allows you to pass `this.onerror`
    // to node-style callbacks.
    if (null == err) return;

    if (!(err instanceof Error)) err = new Error(util.format('non-error thrown: %j', err));

    let headerSent = false;
    if (this.headerSent || !this.writable) {
      headerSent = err.headerSent = true;
    }

    // delegate
    this.app.emit('error', err, this);

    // nothing we can do here other
    // than delegate to the app-level
    // handler and log.
    if (headerSent) {
      return;
    }

    const { res } = this;

    // first unset all headers
    if (typeof res.getHeaderNames === 'function') {
      res.getHeaderNames().forEach(name => res.removeHeader(name));
    } else {
      res._headers = {}; // Node < 7.7
    }

    // then set those specified
    this.set(err.headers);

    // force text/plain
    this.type = 'text';

    // ENOENT support
    if ('ENOENT' == err.code) err.status = 404;

    // default to 500
    if ('number' != typeof err.status || !statuses[err.status]) err.status = 500;

    // respond
    const code = statuses[err.status];
    const msg = err.expose ? err.message : code;
    this.status = err.status;
    this.length = Buffer.byteLength(msg);
    this.res.end(msg);
  }
};

/**
 * Response delegation.
 */

delegate(proto, 'response')
  .method('attachment')
  .method('redirect')
  .method('remove')
  .method('vary')
  .method('set')
  .method('append')
  .method('flushHeaders')
  .access('status')
  .access('message')
  .access('body')
  .access('length')
  .access('type')
  .access('lastModified')
  .access('etag')
  .getter('headerSent')
  .getter('writable');

/**
 * Request delegation.
 */

delegate(proto, 'request')
  .method('acceptsLanguages')
  .method('acceptsEncodings')
  .method('acceptsCharsets')
  .method('accepts')
  .method('get')
  .method('is')
  .access('querystring')
  .access('idempotent')
  .access('socket')
  .access('search')
  .access('method')
  .access('query')
  .access('path')
  .access('url')
  .getter('origin')
  .getter('href')
  .getter('subdomains')
  .getter('protocol')
  .getter('host')
  .getter('hostname')
  .getter('URL')
  .getter('header')
  .getter('headers')
  .getter('secure')
  .getter('stale')
  .getter('fresh')
  .getter('ips')
  .getter('ip');


/***/ }),

/***/ "../@Bonbons.koa/node_modules/koa/lib/request.js":
/*!*******************************************************!*\
  !*** ../@Bonbons.koa/node_modules/koa/lib/request.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * Module dependencies.
 */

const URL = __webpack_require__(/*! url */ "url").URL;
const net = __webpack_require__(/*! net */ "net");
const contentType = __webpack_require__(/*! content-type */ "../@Bonbons.koa/node_modules/content-type/index.js");
const stringify = __webpack_require__(/*! url */ "url").format;
const parse = __webpack_require__(/*! parseurl */ "../@Bonbons.koa/node_modules/parseurl/index.js");
const qs = __webpack_require__(/*! querystring */ "querystring");
const typeis = __webpack_require__(/*! type-is */ "../@Bonbons.koa/node_modules/type-is/index.js");
const fresh = __webpack_require__(/*! fresh */ "../@Bonbons.koa/node_modules/fresh/index.js");
const only = __webpack_require__(/*! only */ "../@Bonbons.koa/node_modules/only/index.js");

/**
 * Prototype.
 */

module.exports = {

  /**
   * Return request header.
   *
   * @return {Object}
   * @api public
   */

  get header() {
    return this.req.headers;
  },

  /**
   * Set request header.
   *
   * @api public
   */

  set header(val) {
    this.req.headers = val;
  },

  /**
   * Return request header, alias as request.header
   *
   * @return {Object}
   * @api public
   */

  get headers() {
    return this.req.headers;
  },

  /**
   * Set request header, alias as request.header
   *
   * @api public
   */

  set headers(val) {
    this.req.headers = val;
  },

  /**
   * Get request URL.
   *
   * @return {String}
   * @api public
   */

  get url() {
    return this.req.url;
  },

  /**
   * Set request URL.
   *
   * @api public
   */

  set url(val) {
    this.req.url = val;
  },

  /**
   * Get origin of URL.
   *
   * @return {String}
   * @api public
   */

  get origin() {
    return `${this.protocol}://${this.host}`;
  },

  /**
   * Get full request URL.
   *
   * @return {String}
   * @api public
   */

  get href() {
    // support: `GET http://example.com/foo`
    if (/^https?:\/\//i.test(this.originalUrl)) return this.originalUrl;
    return this.origin + this.originalUrl;
  },

  /**
   * Get request method.
   *
   * @return {String}
   * @api public
   */

  get method() {
    return this.req.method;
  },

  /**
   * Set request method.
   *
   * @param {String} val
   * @api public
   */

  set method(val) {
    this.req.method = val;
  },

  /**
   * Get request pathname.
   *
   * @return {String}
   * @api public
   */

  get path() {
    return parse(this.req).pathname;
  },

  /**
   * Set pathname, retaining the query-string when present.
   *
   * @param {String} path
   * @api public
   */

  set path(path) {
    const url = parse(this.req);
    if (url.pathname === path) return;

    url.pathname = path;
    url.path = null;

    this.url = stringify(url);
  },

  /**
   * Get parsed query-string.
   *
   * @return {Object}
   * @api public
   */

  get query() {
    const str = this.querystring;
    const c = this._querycache = this._querycache || {};
    return c[str] || (c[str] = qs.parse(str));
  },

  /**
   * Set query-string as an object.
   *
   * @param {Object} obj
   * @api public
   */

  set query(obj) {
    this.querystring = qs.stringify(obj);
  },

  /**
   * Get query string.
   *
   * @return {String}
   * @api public
   */

  get querystring() {
    if (!this.req) return '';
    return parse(this.req).query || '';
  },

  /**
   * Set querystring.
   *
   * @param {String} str
   * @api public
   */

  set querystring(str) {
    const url = parse(this.req);
    if (url.search === `?${str}`) return;

    url.search = str;
    url.path = null;

    this.url = stringify(url);
  },

  /**
   * Get the search string. Same as the querystring
   * except it includes the leading ?.
   *
   * @return {String}
   * @api public
   */

  get search() {
    if (!this.querystring) return '';
    return `?${this.querystring}`;
  },

  /**
   * Set the search string. Same as
   * response.querystring= but included for ubiquity.
   *
   * @param {String} str
   * @api public
   */

  set search(str) {
    this.querystring = str;
  },

  /**
   * Parse the "Host" header field host
   * and support X-Forwarded-Host when a
   * proxy is enabled.
   *
   * @return {String} hostname:port
   * @api public
   */

  get host() {
    const proxy = this.app.proxy;
    let host = proxy && this.get('X-Forwarded-Host');
    host = host || this.get('Host');
    if (!host) return '';
    return host.split(/\s*,\s*/)[0];
  },

  /**
   * Parse the "Host" header field hostname
   * and support X-Forwarded-Host when a
   * proxy is enabled.
   *
   * @return {String} hostname
   * @api public
   */

  get hostname() {
    const host = this.host;
    if (!host) return '';
    if ('[' == host[0]) return this.URL.hostname || ''; // IPv6
    return host.split(':')[0];
  },

  /**
   * Get WHATWG parsed URL.
   * Lazily memoized.
   *
   * @return {URL|Object}
   * @api public
   */

  get URL() {
    if (!this.memoizedURL) {
      const protocol = this.protocol;
      const host = this.host;
      const originalUrl = this.originalUrl || ''; // avoid undefined in template string
      try {
        this.memoizedURL = new URL(`${protocol}://${host}${originalUrl}`);
      } catch (err) {
        this.memoizedURL = Object.create(null);
      }
    }
    return this.memoizedURL;
  },

  /**
   * Check if the request is fresh, aka
   * Last-Modified and/or the ETag
   * still match.
   *
   * @return {Boolean}
   * @api public
   */

  get fresh() {
    const method = this.method;
    const s = this.ctx.status;

    // GET or HEAD for weak freshness validation only
    if ('GET' != method && 'HEAD' != method) return false;

    // 2xx or 304 as per rfc2616 14.26
    if ((s >= 200 && s < 300) || 304 == s) {
      return fresh(this.header, this.response.header);
    }

    return false;
  },

  /**
   * Check if the request is stale, aka
   * "Last-Modified" and / or the "ETag" for the
   * resource has changed.
   *
   * @return {Boolean}
   * @api public
   */

  get stale() {
    return !this.fresh;
  },

  /**
   * Check if the request is idempotent.
   *
   * @return {Boolean}
   * @api public
   */

  get idempotent() {
    const methods = ['GET', 'HEAD', 'PUT', 'DELETE', 'OPTIONS', 'TRACE'];
    return !!~methods.indexOf(this.method);
  },

  /**
   * Return the request socket.
   *
   * @return {Connection}
   * @api public
   */

  get socket() {
    return this.req.socket;
  },

  /**
   * Get the charset when present or undefined.
   *
   * @return {String}
   * @api public
   */

  get charset() {
    let type = this.get('Content-Type');
    if (!type) return '';

    try {
      type = contentType.parse(type);
    } catch (e) {
      return '';
    }

    return type.parameters.charset || '';
  },

  /**
   * Return parsed Content-Length when present.
   *
   * @return {Number}
   * @api public
   */

  get length() {
    const len = this.get('Content-Length');
    if (len == '') return;
    return ~~len;
  },

  /**
   * Return the protocol string "http" or "https"
   * when requested with TLS. When the proxy setting
   * is enabled the "X-Forwarded-Proto" header
   * field will be trusted. If you're running behind
   * a reverse proxy that supplies https for you this
   * may be enabled.
   *
   * @return {String}
   * @api public
   */

  get protocol() {
    const proxy = this.app.proxy;
    if (this.socket.encrypted) return 'https';
    if (!proxy) return 'http';
    const proto = this.get('X-Forwarded-Proto') || 'http';
    return proto.split(/\s*,\s*/)[0];
  },

  /**
   * Short-hand for:
   *
   *    this.protocol == 'https'
   *
   * @return {Boolean}
   * @api public
   */

  get secure() {
    return 'https' == this.protocol;
  },

  /**
   * When `app.proxy` is `true`, parse
   * the "X-Forwarded-For" ip address list.
   *
   * For example if the value were "client, proxy1, proxy2"
   * you would receive the array `["client", "proxy1", "proxy2"]`
   * where "proxy2" is the furthest down-stream.
   *
   * @return {Array}
   * @api public
   */

  get ips() {
    const proxy = this.app.proxy;
    const val = this.get('X-Forwarded-For');
    return proxy && val
      ? val.split(/\s*,\s*/)
      : [];
  },

  /**
   * Return subdomains as an array.
   *
   * Subdomains are the dot-separated parts of the host before the main domain
   * of the app. By default, the domain of the app is assumed to be the last two
   * parts of the host. This can be changed by setting `app.subdomainOffset`.
   *
   * For example, if the domain is "tobi.ferrets.example.com":
   * If `app.subdomainOffset` is not set, this.subdomains is
   * `["ferrets", "tobi"]`.
   * If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.
   *
   * @return {Array}
   * @api public
   */

  get subdomains() {
    const offset = this.app.subdomainOffset;
    const hostname = this.hostname;
    if (net.isIP(hostname)) return [];
    return hostname
      .split('.')
      .reverse()
      .slice(offset);
  },

  /**
   * Check if the given `type(s)` is acceptable, returning
   * the best match when true, otherwise `false`, in which
   * case you should respond with 406 "Not Acceptable".
   *
   * The `type` value may be a single mime type string
   * such as "application/json", the extension name
   * such as "json" or an array `["json", "html", "text/plain"]`. When a list
   * or array is given the _best_ match, if any is returned.
   *
   * Examples:
   *
   *     // Accept: text/html
   *     this.accepts('html');
   *     // => "html"
   *
   *     // Accept: text/*, application/json
   *     this.accepts('html');
   *     // => "html"
   *     this.accepts('text/html');
   *     // => "text/html"
   *     this.accepts('json', 'text');
   *     // => "json"
   *     this.accepts('application/json');
   *     // => "application/json"
   *
   *     // Accept: text/*, application/json
   *     this.accepts('image/png');
   *     this.accepts('png');
   *     // => false
   *
   *     // Accept: text/*;q=.5, application/json
   *     this.accepts(['html', 'json']);
   *     this.accepts('html', 'json');
   *     // => "json"
   *
   * @param {String|Array} type(s)...
   * @return {String|Array|false}
   * @api public
   */

  accepts(...args) {
    return this.accept.types(...args);
  },

  /**
   * Return accepted encodings or best fit based on `encodings`.
   *
   * Given `Accept-Encoding: gzip, deflate`
   * an array sorted by quality is returned:
   *
   *     ['gzip', 'deflate']
   *
   * @param {String|Array} encoding(s)...
   * @return {String|Array}
   * @api public
   */

  acceptsEncodings(...args) {
    return this.accept.encodings(...args);
  },

  /**
   * Return accepted charsets or best fit based on `charsets`.
   *
   * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
   * an array sorted by quality is returned:
   *
   *     ['utf-8', 'utf-7', 'iso-8859-1']
   *
   * @param {String|Array} charset(s)...
   * @return {String|Array}
   * @api public
   */

  acceptsCharsets(...args) {
    return this.accept.charsets(...args);
  },

  /**
   * Return accepted languages or best fit based on `langs`.
   *
   * Given `Accept-Language: en;q=0.8, es, pt`
   * an array sorted by quality is returned:
   *
   *     ['es', 'pt', 'en']
   *
   * @param {String|Array} lang(s)...
   * @return {Array|String}
   * @api public
   */

  acceptsLanguages(...args) {
    return this.accept.languages(...args);
  },

  /**
   * Check if the incoming request contains the "Content-Type"
   * header field, and it contains any of the give mime `type`s.
   * If there is no request body, `null` is returned.
   * If there is no content type, `false` is returned.
   * Otherwise, it returns the first `type` that matches.
   *
   * Examples:
   *
   *     // With Content-Type: text/html; charset=utf-8
   *     this.is('html'); // => 'html'
   *     this.is('text/html'); // => 'text/html'
   *     this.is('text/*', 'application/json'); // => 'text/html'
   *
   *     // When Content-Type is application/json
   *     this.is('json', 'urlencoded'); // => 'json'
   *     this.is('application/json'); // => 'application/json'
   *     this.is('html', 'application/*'); // => 'application/json'
   *
   *     this.is('html'); // => false
   *
   * @param {String|Array} types...
   * @return {String|false|null}
   * @api public
   */

  is(types) {
    if (!types) return typeis(this.req);
    if (!Array.isArray(types)) types = [].slice.call(arguments);
    return typeis(this.req, types);
  },

  /**
   * Return the request mime type void of
   * parameters such as "charset".
   *
   * @return {String}
   * @api public
   */

  get type() {
    const type = this.get('Content-Type');
    if (!type) return '';
    return type.split(';')[0];
  },

  /**
   * Return request header.
   *
   * The `Referrer` header field is special-cased,
   * both `Referrer` and `Referer` are interchangeable.
   *
   * Examples:
   *
   *     this.get('Content-Type');
   *     // => "text/plain"
   *
   *     this.get('content-type');
   *     // => "text/plain"
   *
   *     this.get('Something');
   *     // => undefined
   *
   * @param {String} field
   * @return {String}
   * @api public
   */

  get(field) {
    const req = this.req;
    switch (field = field.toLowerCase()) {
      case 'referer':
      case 'referrer':
        return req.headers.referrer || req.headers.referer || '';
      default:
        return req.headers[field] || '';
    }
  },

  /**
   * Inspect implementation.
   *
   * @return {Object}
   * @api public
   */

  inspect() {
    if (!this.req) return;
    return this.toJSON();
  },

  /**
   * Return JSON representation.
   *
   * @return {Object}
   * @api public
   */

  toJSON() {
    return only(this, [
      'method',
      'url',
      'header'
    ]);
  }
};


/***/ }),

/***/ "../@Bonbons.koa/node_modules/koa/lib/response.js":
/*!********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/koa/lib/response.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/**
 * Module dependencies.
 */

const contentDisposition = __webpack_require__(/*! content-disposition */ "../@Bonbons.koa/node_modules/content-disposition/index.js");
const ensureErrorHandler = __webpack_require__(/*! error-inject */ "../@Bonbons.koa/node_modules/error-inject/index.js");
const getType = __webpack_require__(/*! mime-types */ "../@Bonbons.koa/node_modules/mime-types/index.js").contentType;
const onFinish = __webpack_require__(/*! on-finished */ "../@Bonbons.koa/node_modules/on-finished/index.js");
const isJSON = __webpack_require__(/*! koa-is-json */ "../@Bonbons.koa/node_modules/koa-is-json/index.js");
const escape = __webpack_require__(/*! escape-html */ "../@Bonbons.koa/node_modules/escape-html/index.js");
const typeis = __webpack_require__(/*! type-is */ "../@Bonbons.koa/node_modules/type-is/index.js").is;
const statuses = __webpack_require__(/*! statuses */ "../@Bonbons.koa/node_modules/statuses/index.js");
const destroy = __webpack_require__(/*! destroy */ "../@Bonbons.koa/node_modules/destroy/index.js");
const assert = __webpack_require__(/*! assert */ "assert");
const extname = __webpack_require__(/*! path */ "path").extname;
const vary = __webpack_require__(/*! vary */ "../@Bonbons.koa/node_modules/vary/index.js");
const only = __webpack_require__(/*! only */ "../@Bonbons.koa/node_modules/only/index.js");

/**
 * Prototype.
 */

module.exports = {

  /**
   * Return the request socket.
   *
   * @return {Connection}
   * @api public
   */

  get socket() {
    return this.ctx.req.socket;
  },

  /**
   * Return response header.
   *
   * @return {Object}
   * @api public
   */

  get header() {
    const { res } = this;
    return typeof res.getHeaders === 'function'
      ? res.getHeaders()
      : res._headers || {};  // Node < 7.7
  },

  /**
   * Return response header, alias as response.header
   *
   * @return {Object}
   * @api public
   */

  get headers() {
    return this.header;
  },

  /**
   * Get response status code.
   *
   * @return {Number}
   * @api public
   */

  get status() {
    return this.res.statusCode;
  },

  /**
   * Set response status code.
   *
   * @param {Number} code
   * @api public
   */

  set status(code) {
    if (this.headerSent) return;

    assert('number' == typeof code, 'status code must be a number');
    assert(statuses[code], `invalid status code: ${code}`);
    this._explicitStatus = true;
    this.res.statusCode = code;
    if (this.req.httpVersionMajor < 2) this.res.statusMessage = statuses[code];
    if (this.body && statuses.empty[code]) this.body = null;
  },

  /**
   * Get response status message
   *
   * @return {String}
   * @api public
   */

  get message() {
    return this.res.statusMessage || statuses[this.status];
  },

  /**
   * Set response status message
   *
   * @param {String} msg
   * @api public
   */

  set message(msg) {
    this.res.statusMessage = msg;
  },

  /**
   * Get response body.
   *
   * @return {Mixed}
   * @api public
   */

  get body() {
    return this._body;
  },

  /**
   * Set response body.
   *
   * @param {String|Buffer|Object|Stream} val
   * @api public
   */

  set body(val) {
    const original = this._body;
    this._body = val;

    // no content
    if (null == val) {
      if (!statuses.empty[this.status]) this.status = 204;
      this.remove('Content-Type');
      this.remove('Content-Length');
      this.remove('Transfer-Encoding');
      return;
    }

    // set the status
    if (!this._explicitStatus) this.status = 200;

    // set the content-type only if not yet set
    const setType = !this.header['content-type'];

    // string
    if ('string' == typeof val) {
      if (setType) this.type = /^\s*</.test(val) ? 'html' : 'text';
      this.length = Buffer.byteLength(val);
      return;
    }

    // buffer
    if (Buffer.isBuffer(val)) {
      if (setType) this.type = 'bin';
      this.length = val.length;
      return;
    }

    // stream
    if ('function' == typeof val.pipe) {
      onFinish(this.res, destroy.bind(null, val));
      ensureErrorHandler(val, err => this.ctx.onerror(err));

      // overwriting
      if (null != original && original != val) this.remove('Content-Length');

      if (setType) this.type = 'bin';
      return;
    }

    // json
    this.remove('Content-Length');
    this.type = 'json';
  },

  /**
   * Set Content-Length field to `n`.
   *
   * @param {Number} n
   * @api public
   */

  set length(n) {
    this.set('Content-Length', n);
  },

  /**
   * Return parsed response Content-Length when present.
   *
   * @return {Number}
   * @api public
   */

  get length() {
    const len = this.header['content-length'];
    const body = this.body;

    if (null == len) {
      if (!body) return;
      if ('string' == typeof body) return Buffer.byteLength(body);
      if (Buffer.isBuffer(body)) return body.length;
      if (isJSON(body)) return Buffer.byteLength(JSON.stringify(body));
      return;
    }

    return ~~len;
  },

  /**
   * Check if a header has been written to the socket.
   *
   * @return {Boolean}
   * @api public
   */

  get headerSent() {
    return this.res.headersSent;
  },

  /**
   * Vary on `field`.
   *
   * @param {String} field
   * @api public
   */

  vary(field) {
    if (this.headerSent) return;

    vary(this.res, field);
  },

  /**
   * Perform a 302 redirect to `url`.
   *
   * The string "back" is special-cased
   * to provide Referrer support, when Referrer
   * is not present `alt` or "/" is used.
   *
   * Examples:
   *
   *    this.redirect('back');
   *    this.redirect('back', '/index.html');
   *    this.redirect('/login');
   *    this.redirect('http://google.com');
   *
   * @param {String} url
   * @param {String} [alt]
   * @api public
   */

  redirect(url, alt) {
    // location
    if ('back' == url) url = this.ctx.get('Referrer') || alt || '/';
    this.set('Location', url);

    // status
    if (!statuses.redirect[this.status]) this.status = 302;

    // html
    if (this.ctx.accepts('html')) {
      url = escape(url);
      this.type = 'text/html; charset=utf-8';
      this.body = `Redirecting to <a href="${url}">${url}</a>.`;
      return;
    }

    // text
    this.type = 'text/plain; charset=utf-8';
    this.body = `Redirecting to ${url}.`;
  },

  /**
   * Set Content-Disposition header to "attachment" with optional `filename`.
   *
   * @param {String} filename
   * @api public
   */

  attachment(filename) {
    if (filename) this.type = extname(filename);
    this.set('Content-Disposition', contentDisposition(filename));
  },

  /**
   * Set Content-Type response header with `type` through `mime.lookup()`
   * when it does not contain a charset.
   *
   * Examples:
   *
   *     this.type = '.html';
   *     this.type = 'html';
   *     this.type = 'json';
   *     this.type = 'application/json';
   *     this.type = 'png';
   *
   * @param {String} type
   * @api public
   */

  set type(type) {
    type = getType(type);
    if (type) {
      this.set('Content-Type', type);
    } else {
      this.remove('Content-Type');
    }
  },

  /**
   * Set the Last-Modified date using a string or a Date.
   *
   *     this.response.lastModified = new Date();
   *     this.response.lastModified = '2013-09-13';
   *
   * @param {String|Date} type
   * @api public
   */

  set lastModified(val) {
    if ('string' == typeof val) val = new Date(val);
    this.set('Last-Modified', val.toUTCString());
  },

  /**
   * Get the Last-Modified date in Date form, if it exists.
   *
   * @return {Date}
   * @api public
   */

  get lastModified() {
    const date = this.get('last-modified');
    if (date) return new Date(date);
  },

  /**
   * Set the ETag of a response.
   * This will normalize the quotes if necessary.
   *
   *     this.response.etag = 'md5hashsum';
   *     this.response.etag = '"md5hashsum"';
   *     this.response.etag = 'W/"123456789"';
   *
   * @param {String} etag
   * @api public
   */

  set etag(val) {
    if (!/^(W\/)?"/.test(val)) val = `"${val}"`;
    this.set('ETag', val);
  },

  /**
   * Get the ETag of a response.
   *
   * @return {String}
   * @api public
   */

  get etag() {
    return this.get('ETag');
  },

  /**
   * Return the response mime type void of
   * parameters such as "charset".
   *
   * @return {String}
   * @api public
   */

  get type() {
    const type = this.get('Content-Type');
    if (!type) return '';
    return type.split(';')[0];
  },

  /**
   * Check whether the response is one of the listed types.
   * Pretty much the same as `this.request.is()`.
   *
   * @param {String|Array} types...
   * @return {String|false}
   * @api public
   */

  is(types) {
    const type = this.type;
    if (!types) return type || false;
    if (!Array.isArray(types)) types = [].slice.call(arguments);
    return typeis(type, types);
  },

  /**
   * Return response header.
   *
   * Examples:
   *
   *     this.get('Content-Type');
   *     // => "text/plain"
   *
   *     this.get('content-type');
   *     // => "text/plain"
   *
   * @param {String} field
   * @return {String}
   * @api public
   */

  get(field) {
    return this.header[field.toLowerCase()] || '';
  },

  /**
   * Set header `field` to `val`, or pass
   * an object of header fields.
   *
   * Examples:
   *
   *    this.set('Foo', ['bar', 'baz']);
   *    this.set('Accept', 'application/json');
   *    this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
   *
   * @param {String|Object|Array} field
   * @param {String} val
   * @api public
   */

  set(field, val) {
    if (this.headerSent) return;

    if (2 == arguments.length) {
      if (Array.isArray(val)) val = val.map(String);
      else val = String(val);
      this.res.setHeader(field, val);
    } else {
      for (const key in field) {
        this.set(key, field[key]);
      }
    }
  },

  /**
   * Append additional header `field` with value `val`.
   *
   * Examples:
   *
   * ```
   * this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
   * this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
   * this.append('Warning', '199 Miscellaneous warning');
   * ```
   *
   * @param {String} field
   * @param {String|Array} val
   * @api public
   */

  append(field, val) {
    const prev = this.get(field);

    if (prev) {
      val = Array.isArray(prev)
        ? prev.concat(val)
        : [prev].concat(val);
    }

    return this.set(field, val);
  },

  /**
   * Remove header `field`.
   *
   * @param {String} name
   * @api public
   */

  remove(field) {
    if (this.headerSent) return;

    this.res.removeHeader(field);
  },

  /**
   * Checks if the request is writable.
   * Tests for the existence of the socket
   * as node sometimes does not set it.
   *
   * @return {Boolean}
   * @api private
   */

  get writable() {
    // can't write any more after response finished
    if (this.res.finished) return false;

    const socket = this.res.socket;
    // There are already pending outgoing res, but still writable
    // https://github.com/nodejs/node/blob/v4.4.7/lib/_http_server.js#L486
    if (!socket) return true;
    return socket.writable;
  },

  /**
   * Inspect implementation.
   *
   * @return {Object}
   * @api public
   */

  inspect() {
    if (!this.res) return;
    const o = this.toJSON();
    o.body = this.body;
    return o;
  },

  /**
   * Return JSON representation.
   *
   * @return {Object}
   * @api public
   */

  toJSON() {
    return only(this, [
      'status',
      'message',
      'header'
    ]);
  },

  /**
   * Flush any set headers, and begin the body
   */
  flushHeaders() {
    this.res.flushHeaders();
  }
};


/***/ }),

/***/ "../@Bonbons.koa/node_modules/media-typer/index.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/media-typer/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * media-typer
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * RegExp to match *( ";" parameter ) in RFC 2616 sec 3.7
 *
 * parameter     = token "=" ( token | quoted-string )
 * token         = 1*<any CHAR except CTLs or separators>
 * separators    = "(" | ")" | "<" | ">" | "@"
 *               | "," | ";" | ":" | "\" | <">
 *               | "/" | "[" | "]" | "?" | "="
 *               | "{" | "}" | SP | HT
 * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
 * qdtext        = <any TEXT except <">>
 * quoted-pair   = "\" CHAR
 * CHAR          = <any US-ASCII character (octets 0 - 127)>
 * TEXT          = <any OCTET except CTLs, but including LWS>
 * LWS           = [CRLF] 1*( SP | HT )
 * CRLF          = CR LF
 * CR            = <US-ASCII CR, carriage return (13)>
 * LF            = <US-ASCII LF, linefeed (10)>
 * SP            = <US-ASCII SP, space (32)>
 * SHT           = <US-ASCII HT, horizontal-tab (9)>
 * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
 * OCTET         = <any 8-bit sequence of data>
 */
var paramRegExp = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u0020-\u007e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g;
var textRegExp = /^[\u0020-\u007e\u0080-\u00ff]+$/
var tokenRegExp = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/

/**
 * RegExp to match quoted-pair in RFC 2616
 *
 * quoted-pair = "\" CHAR
 * CHAR        = <any US-ASCII character (octets 0 - 127)>
 */
var qescRegExp = /\\([\u0000-\u007f])/g;

/**
 * RegExp to match chars that must be quoted-pair in RFC 2616
 */
var quoteRegExp = /([\\"])/g;

/**
 * RegExp to match type in RFC 6838
 *
 * type-name = restricted-name
 * subtype-name = restricted-name
 * restricted-name = restricted-name-first *126restricted-name-chars
 * restricted-name-first  = ALPHA / DIGIT
 * restricted-name-chars  = ALPHA / DIGIT / "!" / "#" /
 *                          "$" / "&" / "-" / "^" / "_"
 * restricted-name-chars =/ "." ; Characters before first dot always
 *                              ; specify a facet name
 * restricted-name-chars =/ "+" ; Characters after last plus always
 *                              ; specify a structured syntax suffix
 * ALPHA =  %x41-5A / %x61-7A   ; A-Z / a-z
 * DIGIT =  %x30-39             ; 0-9
 */
var subtypeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/
var typeNameRegExp = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/
var typeRegExp = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;

/**
 * Module exports.
 */

exports.format = format
exports.parse = parse

/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @api public
 */

function format(obj) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('argument obj is required')
  }

  var parameters = obj.parameters
  var subtype = obj.subtype
  var suffix = obj.suffix
  var type = obj.type

  if (!type || !typeNameRegExp.test(type)) {
    throw new TypeError('invalid type')
  }

  if (!subtype || !subtypeNameRegExp.test(subtype)) {
    throw new TypeError('invalid subtype')
  }

  // format as type/subtype
  var string = type + '/' + subtype

  // append +suffix
  if (suffix) {
    if (!typeNameRegExp.test(suffix)) {
      throw new TypeError('invalid suffix')
    }

    string += '+' + suffix
  }

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      if (!tokenRegExp.test(param)) {
        throw new TypeError('invalid parameter name')
      }

      string += '; ' + param + '=' + qstring(parameters[param])
    }
  }

  return string
}

/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @api public
 */

function parse(string) {
  if (!string) {
    throw new TypeError('argument string is required')
  }

  // support req/res-like objects as argument
  if (typeof string === 'object') {
    string = getcontenttype(string)
  }

  if (typeof string !== 'string') {
    throw new TypeError('argument string is required to be a string')
  }

  var index = string.indexOf(';')
  var type = index !== -1
    ? string.substr(0, index)
    : string

  var key
  var match
  var obj = splitType(type)
  var params = {}
  var value

  paramRegExp.lastIndex = index

  while (match = paramRegExp.exec(string)) {
    if (match.index !== index) {
      throw new TypeError('invalid parameter format')
    }

    index += match[0].length
    key = match[1].toLowerCase()
    value = match[2]

    if (value[0] === '"') {
      // remove quotes and escapes
      value = value
        .substr(1, value.length - 2)
        .replace(qescRegExp, '$1')
    }

    params[key] = value
  }

  if (index !== -1 && index !== string.length) {
    throw new TypeError('invalid parameter format')
  }

  obj.parameters = params

  return obj
}

/**
 * Get content-type from req/res objects.
 *
 * @param {object}
 * @return {Object}
 * @api private
 */

function getcontenttype(obj) {
  if (typeof obj.getHeader === 'function') {
    // res-like
    return obj.getHeader('content-type')
  }

  if (typeof obj.headers === 'object') {
    // req-like
    return obj.headers && obj.headers['content-type']
  }
}

/**
 * Quote a string if necessary.
 *
 * @param {string} val
 * @return {string}
 * @api private
 */

function qstring(val) {
  var str = String(val)

  // no need to quote tokens
  if (tokenRegExp.test(str)) {
    return str
  }

  if (str.length > 0 && !textRegExp.test(str)) {
    throw new TypeError('invalid parameter value')
  }

  return '"' + str.replace(quoteRegExp, '\\$1') + '"'
}

/**
 * Simply "type/subtype+siffx" into parts.
 *
 * @param {string} string
 * @return {Object}
 * @api private
 */

function splitType(string) {
  var match = typeRegExp.exec(string.toLowerCase())

  if (!match) {
    throw new TypeError('invalid media type')
  }

  var type = match[1]
  var subtype = match[2]
  var suffix

  // suffix after last +
  var index = subtype.lastIndexOf('+')
  if (index !== -1) {
    suffix = subtype.substr(index + 1)
    subtype = subtype.substr(0, index)
  }

  var obj = {
    type: type,
    subtype: subtype,
    suffix: suffix
  }

  return obj
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/mime-db/db.json":
/*!****************************************************!*\
  !*** ../@Bonbons.koa/node_modules/mime-db/db.json ***!
  \****************************************************/
/*! exports provided: application/1d-interleaved-parityfec, application/3gpdash-qoe-report+xml, application/3gpp-ims+xml, application/a2l, application/activemessage, application/alto-costmap+json, application/alto-costmapfilter+json, application/alto-directory+json, application/alto-endpointcost+json, application/alto-endpointcostparams+json, application/alto-endpointprop+json, application/alto-endpointpropparams+json, application/alto-error+json, application/alto-networkmap+json, application/alto-networkmapfilter+json, application/aml, application/andrew-inset, application/applefile, application/applixware, application/atf, application/atfx, application/atom+xml, application/atomcat+xml, application/atomdeleted+xml, application/atomicmail, application/atomsvc+xml, application/atxml, application/auth-policy+xml, application/bacnet-xdd+zip, application/batch-smtp, application/bdoc, application/beep+xml, application/calendar+json, application/calendar+xml, application/call-completion, application/cals-1840, application/cbor, application/cccex, application/ccmp+xml, application/ccxml+xml, application/cdfx+xml, application/cdmi-capability, application/cdmi-container, application/cdmi-domain, application/cdmi-object, application/cdmi-queue, application/cdni, application/cea, application/cea-2018+xml, application/cellml+xml, application/cfw, application/clue_info+xml, application/cms, application/cnrp+xml, application/coap-group+json, application/coap-payload, application/commonground, application/conference-info+xml, application/cose, application/cose-key, application/cose-key-set, application/cpl+xml, application/csrattrs, application/csta+xml, application/cstadata+xml, application/csvm+json, application/cu-seeme, application/cybercash, application/dart, application/dash+xml, application/dashdelta, application/davmount+xml, application/dca-rft, application/dcd, application/dec-dx, application/dialog-info+xml, application/dicom, application/dicom+json, application/dicom+xml, application/dii, application/dit, application/dns, application/docbook+xml, application/dskpp+xml, application/dssc+der, application/dssc+xml, application/dvcs, application/ecmascript, application/edi-consent, application/edi-x12, application/edifact, application/efi, application/emergencycalldata.comment+xml, application/emergencycalldata.control+xml, application/emergencycalldata.deviceinfo+xml, application/emergencycalldata.ecall.msd, application/emergencycalldata.providerinfo+xml, application/emergencycalldata.serviceinfo+xml, application/emergencycalldata.subscriberinfo+xml, application/emergencycalldata.veds+xml, application/emma+xml, application/emotionml+xml, application/encaprtp, application/epp+xml, application/epub+zip, application/eshop, application/exi, application/fastinfoset, application/fastsoap, application/fdt+xml, application/fhir+xml, application/fido.trusted-apps+json, application/fits, application/font-sfnt, application/font-tdpfr, application/font-woff, application/framework-attributes+xml, application/geo+json, application/geo+json-seq, application/geoxacml+xml, application/gml+xml, application/gpx+xml, application/gxf, application/gzip, application/h224, application/held+xml, application/hjson, application/http, application/hyperstudio, application/ibe-key-request+xml, application/ibe-pkg-reply+xml, application/ibe-pp-data, application/iges, application/im-iscomposing+xml, application/index, application/index.cmd, application/index.obj, application/index.response, application/index.vnd, application/inkml+xml, application/iotp, application/ipfix, application/ipp, application/isup, application/its+xml, application/java-archive, application/java-serialized-object, application/java-vm, application/javascript, application/jf2feed+json, application/jose, application/jose+json, application/jrd+json, application/json, application/json-patch+json, application/json-seq, application/json5, application/jsonml+json, application/jwk+json, application/jwk-set+json, application/jwt, application/kpml-request+xml, application/kpml-response+xml, application/ld+json, application/lgr+xml, application/link-format, application/load-control+xml, application/lost+xml, application/lostsync+xml, application/lxf, application/mac-binhex40, application/mac-compactpro, application/macwriteii, application/mads+xml, application/manifest+json, application/marc, application/marcxml+xml, application/mathematica, application/mathml+xml, application/mathml-content+xml, application/mathml-presentation+xml, application/mbms-associated-procedure-description+xml, application/mbms-deregister+xml, application/mbms-envelope+xml, application/mbms-msk+xml, application/mbms-msk-response+xml, application/mbms-protection-description+xml, application/mbms-reception-report+xml, application/mbms-register+xml, application/mbms-register-response+xml, application/mbms-schedule+xml, application/mbms-user-service-description+xml, application/mbox, application/media-policy-dataset+xml, application/media_control+xml, application/mediaservercontrol+xml, application/merge-patch+json, application/metalink+xml, application/metalink4+xml, application/mets+xml, application/mf4, application/mikey, application/mmt-usd+xml, application/mods+xml, application/moss-keys, application/moss-signature, application/mosskey-data, application/mosskey-request, application/mp21, application/mp4, application/mpeg4-generic, application/mpeg4-iod, application/mpeg4-iod-xmt, application/mrb-consumer+xml, application/mrb-publish+xml, application/msc-ivr+xml, application/msc-mixer+xml, application/msword, application/mud+json, application/mxf, application/n-quads, application/n-triples, application/nasdata, application/news-checkgroups, application/news-groupinfo, application/news-transmission, application/nlsml+xml, application/node, application/nss, application/ocsp-request, application/ocsp-response, application/octet-stream, application/oda, application/odx, application/oebps-package+xml, application/ogg, application/omdoc+xml, application/onenote, application/oxps, application/p2p-overlay+xml, application/parityfec, application/passport, application/patch-ops-error+xml, application/pdf, application/pdx, application/pgp-encrypted, application/pgp-keys, application/pgp-signature, application/pics-rules, application/pidf+xml, application/pidf-diff+xml, application/pkcs10, application/pkcs12, application/pkcs7-mime, application/pkcs7-signature, application/pkcs8, application/pkcs8-encrypted, application/pkix-attr-cert, application/pkix-cert, application/pkix-crl, application/pkix-pkipath, application/pkixcmp, application/pls+xml, application/poc-settings+xml, application/postscript, application/ppsp-tracker+json, application/problem+json, application/problem+xml, application/provenance+xml, application/prs.alvestrand.titrax-sheet, application/prs.cww, application/prs.hpub+zip, application/prs.nprend, application/prs.plucker, application/prs.rdf-xml-crypt, application/prs.xsf+xml, application/pskc+xml, application/qsig, application/raml+yaml, application/raptorfec, application/rdap+json, application/rdf+xml, application/reginfo+xml, application/relax-ng-compact-syntax, application/remote-printing, application/reputon+json, application/resource-lists+xml, application/resource-lists-diff+xml, application/rfc+xml, application/riscos, application/rlmi+xml, application/rls-services+xml, application/route-apd+xml, application/route-s-tsid+xml, application/route-usd+xml, application/rpki-ghostbusters, application/rpki-manifest, application/rpki-publication, application/rpki-roa, application/rpki-updown, application/rsd+xml, application/rss+xml, application/rtf, application/rtploopback, application/rtx, application/samlassertion+xml, application/samlmetadata+xml, application/sbml+xml, application/scaip+xml, application/scim+json, application/scvp-cv-request, application/scvp-cv-response, application/scvp-vp-request, application/scvp-vp-response, application/sdp, application/sep+xml, application/sep-exi, application/session-info, application/set-payment, application/set-payment-initiation, application/set-registration, application/set-registration-initiation, application/sgml, application/sgml-open-catalog, application/shf+xml, application/sieve, application/simple-filter+xml, application/simple-message-summary, application/simplesymbolcontainer, application/slate, application/smil, application/smil+xml, application/smpte336m, application/soap+fastinfoset, application/soap+xml, application/sparql-query, application/sparql-results+xml, application/spirits-event+xml, application/sql, application/srgs, application/srgs+xml, application/sru+xml, application/ssdl+xml, application/ssml+xml, application/tamp-apex-update, application/tamp-apex-update-confirm, application/tamp-community-update, application/tamp-community-update-confirm, application/tamp-error, application/tamp-sequence-adjust, application/tamp-sequence-adjust-confirm, application/tamp-status-query, application/tamp-status-response, application/tamp-update, application/tamp-update-confirm, application/tar, application/tei+xml, application/thraud+xml, application/timestamp-query, application/timestamp-reply, application/timestamped-data, application/tnauthlist, application/trig, application/ttml+xml, application/tve-trigger, application/ulpfec, application/urc-grpsheet+xml, application/urc-ressheet+xml, application/urc-targetdesc+xml, application/urc-uisocketdesc+xml, application/vcard+json, application/vcard+xml, application/vemmi, application/vividence.scriptfile, application/vnd.1000minds.decision-model+xml, application/vnd.3gpp-prose+xml, application/vnd.3gpp-prose-pc3ch+xml, application/vnd.3gpp-v2x-local-service-information, application/vnd.3gpp.access-transfer-events+xml, application/vnd.3gpp.bsf+xml, application/vnd.3gpp.gmop+xml, application/vnd.3gpp.mcptt-affiliation-command+xml, application/vnd.3gpp.mcptt-floor-request+xml, application/vnd.3gpp.mcptt-info+xml, application/vnd.3gpp.mcptt-location-info+xml, application/vnd.3gpp.mcptt-mbms-usage-info+xml, application/vnd.3gpp.mcptt-signed+xml, application/vnd.3gpp.mid-call+xml, application/vnd.3gpp.pic-bw-large, application/vnd.3gpp.pic-bw-small, application/vnd.3gpp.pic-bw-var, application/vnd.3gpp.sms, application/vnd.3gpp.sms+xml, application/vnd.3gpp.srvcc-ext+xml, application/vnd.3gpp.srvcc-info+xml, application/vnd.3gpp.state-and-event-info+xml, application/vnd.3gpp.ussd+xml, application/vnd.3gpp2.bcmcsinfo+xml, application/vnd.3gpp2.sms, application/vnd.3gpp2.tcap, application/vnd.3lightssoftware.imagescal, application/vnd.3m.post-it-notes, application/vnd.accpac.simply.aso, application/vnd.accpac.simply.imp, application/vnd.acucobol, application/vnd.acucorp, application/vnd.adobe.air-application-installer-package+zip, application/vnd.adobe.flash.movie, application/vnd.adobe.formscentral.fcdt, application/vnd.adobe.fxp, application/vnd.adobe.partial-upload, application/vnd.adobe.xdp+xml, application/vnd.adobe.xfdf, application/vnd.aether.imp, application/vnd.ah-barcode, application/vnd.ahead.space, application/vnd.airzip.filesecure.azf, application/vnd.airzip.filesecure.azs, application/vnd.amadeus+json, application/vnd.amazon.ebook, application/vnd.amazon.mobi8-ebook, application/vnd.americandynamics.acc, application/vnd.amiga.ami, application/vnd.amundsen.maze+xml, application/vnd.android.package-archive, application/vnd.anki, application/vnd.anser-web-certificate-issue-initiation, application/vnd.anser-web-funds-transfer-initiation, application/vnd.antix.game-component, application/vnd.apache.thrift.binary, application/vnd.apache.thrift.compact, application/vnd.apache.thrift.json, application/vnd.api+json, application/vnd.apothekende.reservation+json, application/vnd.apple.installer+xml, application/vnd.apple.mpegurl, application/vnd.apple.pkpass, application/vnd.arastra.swi, application/vnd.aristanetworks.swi, application/vnd.artsquare, application/vnd.astraea-software.iota, application/vnd.audiograph, application/vnd.autopackage, application/vnd.avalon+json, application/vnd.avistar+xml, application/vnd.balsamiq.bmml+xml, application/vnd.balsamiq.bmpr, application/vnd.bbf.usp.msg, application/vnd.bbf.usp.msg+json, application/vnd.bekitzur-stech+json, application/vnd.bint.med-content, application/vnd.biopax.rdf+xml, application/vnd.blink-idb-value-wrapper, application/vnd.blueice.multipass, application/vnd.bluetooth.ep.oob, application/vnd.bluetooth.le.oob, application/vnd.bmi, application/vnd.businessobjects, application/vnd.cab-jscript, application/vnd.canon-cpdl, application/vnd.canon-lips, application/vnd.capasystems-pg+json, application/vnd.cendio.thinlinc.clientconf, application/vnd.century-systems.tcp_stream, application/vnd.chemdraw+xml, application/vnd.chess-pgn, application/vnd.chipnuts.karaoke-mmd, application/vnd.cinderella, application/vnd.cirpack.isdn-ext, application/vnd.citationstyles.style+xml, application/vnd.claymore, application/vnd.cloanto.rp9, application/vnd.clonk.c4group, application/vnd.cluetrust.cartomobile-config, application/vnd.cluetrust.cartomobile-config-pkg, application/vnd.coffeescript, application/vnd.collabio.xodocuments.document, application/vnd.collabio.xodocuments.document-template, application/vnd.collabio.xodocuments.presentation, application/vnd.collabio.xodocuments.presentation-template, application/vnd.collabio.xodocuments.spreadsheet, application/vnd.collabio.xodocuments.spreadsheet-template, application/vnd.collection+json, application/vnd.collection.doc+json, application/vnd.collection.next+json, application/vnd.comicbook+zip, application/vnd.comicbook-rar, application/vnd.commerce-battelle, application/vnd.commonspace, application/vnd.contact.cmsg, application/vnd.coreos.ignition+json, application/vnd.cosmocaller, application/vnd.crick.clicker, application/vnd.crick.clicker.keyboard, application/vnd.crick.clicker.palette, application/vnd.crick.clicker.template, application/vnd.crick.clicker.wordbank, application/vnd.criticaltools.wbs+xml, application/vnd.ctc-posml, application/vnd.ctct.ws+xml, application/vnd.cups-pdf, application/vnd.cups-postscript, application/vnd.cups-ppd, application/vnd.cups-raster, application/vnd.cups-raw, application/vnd.curl, application/vnd.curl.car, application/vnd.curl.pcurl, application/vnd.cyan.dean.root+xml, application/vnd.cybank, application/vnd.d2l.coursepackage1p0+zip, application/vnd.dart, application/vnd.data-vision.rdz, application/vnd.datapackage+json, application/vnd.dataresource+json, application/vnd.debian.binary-package, application/vnd.dece.data, application/vnd.dece.ttml+xml, application/vnd.dece.unspecified, application/vnd.dece.zip, application/vnd.denovo.fcselayout-link, application/vnd.desmume-movie, application/vnd.desmume.movie, application/vnd.dir-bi.plate-dl-nosuffix, application/vnd.dm.delegation+xml, application/vnd.dna, application/vnd.document+json, application/vnd.dolby.mlp, application/vnd.dolby.mobile.1, application/vnd.dolby.mobile.2, application/vnd.doremir.scorecloud-binary-document, application/vnd.dpgraph, application/vnd.dreamfactory, application/vnd.drive+json, application/vnd.ds-keypoint, application/vnd.dtg.local, application/vnd.dtg.local.flash, application/vnd.dtg.local.html, application/vnd.dvb.ait, application/vnd.dvb.dvbj, application/vnd.dvb.esgcontainer, application/vnd.dvb.ipdcdftnotifaccess, application/vnd.dvb.ipdcesgaccess, application/vnd.dvb.ipdcesgaccess2, application/vnd.dvb.ipdcesgpdd, application/vnd.dvb.ipdcroaming, application/vnd.dvb.iptv.alfec-base, application/vnd.dvb.iptv.alfec-enhancement, application/vnd.dvb.notif-aggregate-root+xml, application/vnd.dvb.notif-container+xml, application/vnd.dvb.notif-generic+xml, application/vnd.dvb.notif-ia-msglist+xml, application/vnd.dvb.notif-ia-registration-request+xml, application/vnd.dvb.notif-ia-registration-response+xml, application/vnd.dvb.notif-init+xml, application/vnd.dvb.pfr, application/vnd.dvb.service, application/vnd.dxr, application/vnd.dynageo, application/vnd.dzr, application/vnd.easykaraoke.cdgdownload, application/vnd.ecdis-update, application/vnd.ecip.rlp, application/vnd.ecowin.chart, application/vnd.ecowin.filerequest, application/vnd.ecowin.fileupdate, application/vnd.ecowin.series, application/vnd.ecowin.seriesrequest, application/vnd.ecowin.seriesupdate, application/vnd.efi.img, application/vnd.efi.iso, application/vnd.emclient.accessrequest+xml, application/vnd.enliven, application/vnd.enphase.envoy, application/vnd.eprints.data+xml, application/vnd.epson.esf, application/vnd.epson.msf, application/vnd.epson.quickanime, application/vnd.epson.salt, application/vnd.epson.ssf, application/vnd.ericsson.quickcall, application/vnd.espass-espass+zip, application/vnd.eszigno3+xml, application/vnd.etsi.aoc+xml, application/vnd.etsi.asic-e+zip, application/vnd.etsi.asic-s+zip, application/vnd.etsi.cug+xml, application/vnd.etsi.iptvcommand+xml, application/vnd.etsi.iptvdiscovery+xml, application/vnd.etsi.iptvprofile+xml, application/vnd.etsi.iptvsad-bc+xml, application/vnd.etsi.iptvsad-cod+xml, application/vnd.etsi.iptvsad-npvr+xml, application/vnd.etsi.iptvservice+xml, application/vnd.etsi.iptvsync+xml, application/vnd.etsi.iptvueprofile+xml, application/vnd.etsi.mcid+xml, application/vnd.etsi.mheg5, application/vnd.etsi.overload-control-policy-dataset+xml, application/vnd.etsi.pstn+xml, application/vnd.etsi.sci+xml, application/vnd.etsi.simservs+xml, application/vnd.etsi.timestamp-token, application/vnd.etsi.tsl+xml, application/vnd.etsi.tsl.der, application/vnd.eudora.data, application/vnd.evolv.ecig.profile, application/vnd.evolv.ecig.settings, application/vnd.evolv.ecig.theme, application/vnd.ezpix-album, application/vnd.ezpix-package, application/vnd.f-secure.mobile, application/vnd.fastcopy-disk-image, application/vnd.fdf, application/vnd.fdsn.mseed, application/vnd.fdsn.seed, application/vnd.ffsns, application/vnd.filmit.zfc, application/vnd.fints, application/vnd.firemonkeys.cloudcell, application/vnd.flographit, application/vnd.fluxtime.clip, application/vnd.font-fontforge-sfd, application/vnd.framemaker, application/vnd.frogans.fnc, application/vnd.frogans.ltf, application/vnd.fsc.weblaunch, application/vnd.fujitsu.oasys, application/vnd.fujitsu.oasys2, application/vnd.fujitsu.oasys3, application/vnd.fujitsu.oasysgp, application/vnd.fujitsu.oasysprs, application/vnd.fujixerox.art-ex, application/vnd.fujixerox.art4, application/vnd.fujixerox.ddd, application/vnd.fujixerox.docuworks, application/vnd.fujixerox.docuworks.binder, application/vnd.fujixerox.docuworks.container, application/vnd.fujixerox.hbpl, application/vnd.fut-misnet, application/vnd.fuzzysheet, application/vnd.genomatix.tuxedo, application/vnd.geo+json, application/vnd.geocube+xml, application/vnd.geogebra.file, application/vnd.geogebra.tool, application/vnd.geometry-explorer, application/vnd.geonext, application/vnd.geoplan, application/vnd.geospace, application/vnd.gerber, application/vnd.globalplatform.card-content-mgt, application/vnd.globalplatform.card-content-mgt-response, application/vnd.gmx, application/vnd.google-apps.document, application/vnd.google-apps.presentation, application/vnd.google-apps.spreadsheet, application/vnd.google-earth.kml+xml, application/vnd.google-earth.kmz, application/vnd.gov.sk.e-form+xml, application/vnd.gov.sk.e-form+zip, application/vnd.gov.sk.xmldatacontainer+xml, application/vnd.grafeq, application/vnd.gridmp, application/vnd.groove-account, application/vnd.groove-help, application/vnd.groove-identity-message, application/vnd.groove-injector, application/vnd.groove-tool-message, application/vnd.groove-tool-template, application/vnd.groove-vcard, application/vnd.hal+json, application/vnd.hal+xml, application/vnd.handheld-entertainment+xml, application/vnd.hbci, application/vnd.hc+json, application/vnd.hcl-bireports, application/vnd.hdt, application/vnd.heroku+json, application/vnd.hhe.lesson-player, application/vnd.hp-hpgl, application/vnd.hp-hpid, application/vnd.hp-hps, application/vnd.hp-jlyt, application/vnd.hp-pcl, application/vnd.hp-pclxl, application/vnd.httphone, application/vnd.hydrostatix.sof-data, application/vnd.hyper-item+json, application/vnd.hyperdrive+json, application/vnd.hzn-3d-crossword, application/vnd.ibm.afplinedata, application/vnd.ibm.electronic-media, application/vnd.ibm.minipay, application/vnd.ibm.modcap, application/vnd.ibm.rights-management, application/vnd.ibm.secure-container, application/vnd.iccprofile, application/vnd.ieee.1905, application/vnd.igloader, application/vnd.imagemeter.folder+zip, application/vnd.imagemeter.image+zip, application/vnd.immervision-ivp, application/vnd.immervision-ivu, application/vnd.ims.imsccv1p1, application/vnd.ims.imsccv1p2, application/vnd.ims.imsccv1p3, application/vnd.ims.lis.v2.result+json, application/vnd.ims.lti.v2.toolconsumerprofile+json, application/vnd.ims.lti.v2.toolproxy+json, application/vnd.ims.lti.v2.toolproxy.id+json, application/vnd.ims.lti.v2.toolsettings+json, application/vnd.ims.lti.v2.toolsettings.simple+json, application/vnd.informedcontrol.rms+xml, application/vnd.informix-visionary, application/vnd.infotech.project, application/vnd.infotech.project+xml, application/vnd.innopath.wamp.notification, application/vnd.insors.igm, application/vnd.intercon.formnet, application/vnd.intergeo, application/vnd.intertrust.digibox, application/vnd.intertrust.nncp, application/vnd.intu.qbo, application/vnd.intu.qfx, application/vnd.iptc.g2.catalogitem+xml, application/vnd.iptc.g2.conceptitem+xml, application/vnd.iptc.g2.knowledgeitem+xml, application/vnd.iptc.g2.newsitem+xml, application/vnd.iptc.g2.newsmessage+xml, application/vnd.iptc.g2.packageitem+xml, application/vnd.iptc.g2.planningitem+xml, application/vnd.ipunplugged.rcprofile, application/vnd.irepository.package+xml, application/vnd.is-xpr, application/vnd.isac.fcs, application/vnd.jam, application/vnd.japannet-directory-service, application/vnd.japannet-jpnstore-wakeup, application/vnd.japannet-payment-wakeup, application/vnd.japannet-registration, application/vnd.japannet-registration-wakeup, application/vnd.japannet-setstore-wakeup, application/vnd.japannet-verification, application/vnd.japannet-verification-wakeup, application/vnd.jcp.javame.midlet-rms, application/vnd.jisp, application/vnd.joost.joda-archive, application/vnd.jsk.isdn-ngn, application/vnd.kahootz, application/vnd.kde.karbon, application/vnd.kde.kchart, application/vnd.kde.kformula, application/vnd.kde.kivio, application/vnd.kde.kontour, application/vnd.kde.kpresenter, application/vnd.kde.kspread, application/vnd.kde.kword, application/vnd.kenameaapp, application/vnd.kidspiration, application/vnd.kinar, application/vnd.koan, application/vnd.kodak-descriptor, application/vnd.las.las+json, application/vnd.las.las+xml, application/vnd.liberty-request+xml, application/vnd.llamagraphics.life-balance.desktop, application/vnd.llamagraphics.life-balance.exchange+xml, application/vnd.lotus-1-2-3, application/vnd.lotus-approach, application/vnd.lotus-freelance, application/vnd.lotus-notes, application/vnd.lotus-organizer, application/vnd.lotus-screencam, application/vnd.lotus-wordpro, application/vnd.macports.portpkg, application/vnd.mapbox-vector-tile, application/vnd.marlin.drm.actiontoken+xml, application/vnd.marlin.drm.conftoken+xml, application/vnd.marlin.drm.license+xml, application/vnd.marlin.drm.mdcf, application/vnd.mason+json, application/vnd.maxmind.maxmind-db, application/vnd.mcd, application/vnd.medcalcdata, application/vnd.mediastation.cdkey, application/vnd.meridian-slingshot, application/vnd.mfer, application/vnd.mfmp, application/vnd.micro+json, application/vnd.micrografx.flo, application/vnd.micrografx.igx, application/vnd.microsoft.portable-executable, application/vnd.microsoft.windows.thumbnail-cache, application/vnd.miele+json, application/vnd.mif, application/vnd.minisoft-hp3000-save, application/vnd.mitsubishi.misty-guard.trustweb, application/vnd.mobius.daf, application/vnd.mobius.dis, application/vnd.mobius.mbk, application/vnd.mobius.mqy, application/vnd.mobius.msl, application/vnd.mobius.plc, application/vnd.mobius.txf, application/vnd.mophun.application, application/vnd.mophun.certificate, application/vnd.motorola.flexsuite, application/vnd.motorola.flexsuite.adsi, application/vnd.motorola.flexsuite.fis, application/vnd.motorola.flexsuite.gotap, application/vnd.motorola.flexsuite.kmr, application/vnd.motorola.flexsuite.ttc, application/vnd.motorola.flexsuite.wem, application/vnd.motorola.iprm, application/vnd.mozilla.xul+xml, application/vnd.ms-3mfdocument, application/vnd.ms-artgalry, application/vnd.ms-asf, application/vnd.ms-cab-compressed, application/vnd.ms-color.iccprofile, application/vnd.ms-excel, application/vnd.ms-excel.addin.macroenabled.12, application/vnd.ms-excel.sheet.binary.macroenabled.12, application/vnd.ms-excel.sheet.macroenabled.12, application/vnd.ms-excel.template.macroenabled.12, application/vnd.ms-fontobject, application/vnd.ms-htmlhelp, application/vnd.ms-ims, application/vnd.ms-lrm, application/vnd.ms-office.activex+xml, application/vnd.ms-officetheme, application/vnd.ms-opentype, application/vnd.ms-outlook, application/vnd.ms-package.obfuscated-opentype, application/vnd.ms-pki.seccat, application/vnd.ms-pki.stl, application/vnd.ms-playready.initiator+xml, application/vnd.ms-powerpoint, application/vnd.ms-powerpoint.addin.macroenabled.12, application/vnd.ms-powerpoint.presentation.macroenabled.12, application/vnd.ms-powerpoint.slide.macroenabled.12, application/vnd.ms-powerpoint.slideshow.macroenabled.12, application/vnd.ms-powerpoint.template.macroenabled.12, application/vnd.ms-printdevicecapabilities+xml, application/vnd.ms-printing.printticket+xml, application/vnd.ms-printschematicket+xml, application/vnd.ms-project, application/vnd.ms-tnef, application/vnd.ms-windows.devicepairing, application/vnd.ms-windows.nwprinting.oob, application/vnd.ms-windows.printerpairing, application/vnd.ms-windows.wsd.oob, application/vnd.ms-wmdrm.lic-chlg-req, application/vnd.ms-wmdrm.lic-resp, application/vnd.ms-wmdrm.meter-chlg-req, application/vnd.ms-wmdrm.meter-resp, application/vnd.ms-word.document.macroenabled.12, application/vnd.ms-word.template.macroenabled.12, application/vnd.ms-works, application/vnd.ms-wpl, application/vnd.ms-xpsdocument, application/vnd.msa-disk-image, application/vnd.mseq, application/vnd.msign, application/vnd.multiad.creator, application/vnd.multiad.creator.cif, application/vnd.music-niff, application/vnd.musician, application/vnd.muvee.style, application/vnd.mynfc, application/vnd.ncd.control, application/vnd.ncd.reference, application/vnd.nearst.inv+json, application/vnd.nervana, application/vnd.netfpx, application/vnd.neurolanguage.nlu, application/vnd.nintendo.nitro.rom, application/vnd.nintendo.snes.rom, application/vnd.nitf, application/vnd.noblenet-directory, application/vnd.noblenet-sealer, application/vnd.noblenet-web, application/vnd.nokia.catalogs, application/vnd.nokia.conml+wbxml, application/vnd.nokia.conml+xml, application/vnd.nokia.iptv.config+xml, application/vnd.nokia.isds-radio-presets, application/vnd.nokia.landmark+wbxml, application/vnd.nokia.landmark+xml, application/vnd.nokia.landmarkcollection+xml, application/vnd.nokia.n-gage.ac+xml, application/vnd.nokia.n-gage.data, application/vnd.nokia.n-gage.symbian.install, application/vnd.nokia.ncd, application/vnd.nokia.pcd+wbxml, application/vnd.nokia.pcd+xml, application/vnd.nokia.radio-preset, application/vnd.nokia.radio-presets, application/vnd.novadigm.edm, application/vnd.novadigm.edx, application/vnd.novadigm.ext, application/vnd.ntt-local.content-share, application/vnd.ntt-local.file-transfer, application/vnd.ntt-local.ogw_remote-access, application/vnd.ntt-local.sip-ta_remote, application/vnd.ntt-local.sip-ta_tcp_stream, application/vnd.oasis.opendocument.chart, application/vnd.oasis.opendocument.chart-template, application/vnd.oasis.opendocument.database, application/vnd.oasis.opendocument.formula, application/vnd.oasis.opendocument.formula-template, application/vnd.oasis.opendocument.graphics, application/vnd.oasis.opendocument.graphics-template, application/vnd.oasis.opendocument.image, application/vnd.oasis.opendocument.image-template, application/vnd.oasis.opendocument.presentation, application/vnd.oasis.opendocument.presentation-template, application/vnd.oasis.opendocument.spreadsheet, application/vnd.oasis.opendocument.spreadsheet-template, application/vnd.oasis.opendocument.text, application/vnd.oasis.opendocument.text-master, application/vnd.oasis.opendocument.text-template, application/vnd.oasis.opendocument.text-web, application/vnd.obn, application/vnd.ocf+cbor, application/vnd.oftn.l10n+json, application/vnd.oipf.contentaccessdownload+xml, application/vnd.oipf.contentaccessstreaming+xml, application/vnd.oipf.cspg-hexbinary, application/vnd.oipf.dae.svg+xml, application/vnd.oipf.dae.xhtml+xml, application/vnd.oipf.mippvcontrolmessage+xml, application/vnd.oipf.pae.gem, application/vnd.oipf.spdiscovery+xml, application/vnd.oipf.spdlist+xml, application/vnd.oipf.ueprofile+xml, application/vnd.oipf.userprofile+xml, application/vnd.olpc-sugar, application/vnd.oma-scws-config, application/vnd.oma-scws-http-request, application/vnd.oma-scws-http-response, application/vnd.oma.bcast.associated-procedure-parameter+xml, application/vnd.oma.bcast.drm-trigger+xml, application/vnd.oma.bcast.imd+xml, application/vnd.oma.bcast.ltkm, application/vnd.oma.bcast.notification+xml, application/vnd.oma.bcast.provisioningtrigger, application/vnd.oma.bcast.sgboot, application/vnd.oma.bcast.sgdd+xml, application/vnd.oma.bcast.sgdu, application/vnd.oma.bcast.simple-symbol-container, application/vnd.oma.bcast.smartcard-trigger+xml, application/vnd.oma.bcast.sprov+xml, application/vnd.oma.bcast.stkm, application/vnd.oma.cab-address-book+xml, application/vnd.oma.cab-feature-handler+xml, application/vnd.oma.cab-pcc+xml, application/vnd.oma.cab-subs-invite+xml, application/vnd.oma.cab-user-prefs+xml, application/vnd.oma.dcd, application/vnd.oma.dcdc, application/vnd.oma.dd2+xml, application/vnd.oma.drm.risd+xml, application/vnd.oma.group-usage-list+xml, application/vnd.oma.lwm2m+json, application/vnd.oma.lwm2m+tlv, application/vnd.oma.pal+xml, application/vnd.oma.poc.detailed-progress-report+xml, application/vnd.oma.poc.final-report+xml, application/vnd.oma.poc.groups+xml, application/vnd.oma.poc.invocation-descriptor+xml, application/vnd.oma.poc.optimized-progress-report+xml, application/vnd.oma.push, application/vnd.oma.scidm.messages+xml, application/vnd.oma.xcap-directory+xml, application/vnd.omads-email+xml, application/vnd.omads-file+xml, application/vnd.omads-folder+xml, application/vnd.omaloc-supl-init, application/vnd.onepager, application/vnd.onepagertamp, application/vnd.onepagertamx, application/vnd.onepagertat, application/vnd.onepagertatp, application/vnd.onepagertatx, application/vnd.openblox.game+xml, application/vnd.openblox.game-binary, application/vnd.openeye.oeb, application/vnd.openofficeorg.extension, application/vnd.openstreetmap.data+xml, application/vnd.openxmlformats-officedocument.custom-properties+xml, application/vnd.openxmlformats-officedocument.customxmlproperties+xml, application/vnd.openxmlformats-officedocument.drawing+xml, application/vnd.openxmlformats-officedocument.drawingml.chart+xml, application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml, application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml, application/vnd.openxmlformats-officedocument.extended-properties+xml, application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml, application/vnd.openxmlformats-officedocument.presentationml.comments+xml, application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml, application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml, application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml, application/vnd.openxmlformats-officedocument.presentationml.presprops+xml, application/vnd.openxmlformats-officedocument.presentationml.slide, application/vnd.openxmlformats-officedocument.presentationml.slide+xml, application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml, application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml, application/vnd.openxmlformats-officedocument.presentationml.slideshow, application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml, application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml, application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml, application/vnd.openxmlformats-officedocument.presentationml.tags+xml, application/vnd.openxmlformats-officedocument.presentationml.template, application/vnd.openxmlformats-officedocument.presentationml.template.main+xml, application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.template, application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml, application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml, application/vnd.openxmlformats-officedocument.theme+xml, application/vnd.openxmlformats-officedocument.themeoverride+xml, application/vnd.openxmlformats-officedocument.vmldrawing, application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.template, application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml, application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml, application/vnd.openxmlformats-package.core-properties+xml, application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml, application/vnd.openxmlformats-package.relationships+xml, application/vnd.oracle.resource+json, application/vnd.orange.indata, application/vnd.osa.netdeploy, application/vnd.osgeo.mapguide.package, application/vnd.osgi.bundle, application/vnd.osgi.dp, application/vnd.osgi.subsystem, application/vnd.otps.ct-kip+xml, application/vnd.oxli.countgraph, application/vnd.pagerduty+json, application/vnd.palm, application/vnd.panoply, application/vnd.paos+xml, application/vnd.paos.xml, application/vnd.patentdive, application/vnd.pawaafile, application/vnd.pcos, application/vnd.pg.format, application/vnd.pg.osasli, application/vnd.piaccess.application-licence, application/vnd.picsel, application/vnd.pmi.widget, application/vnd.poc.group-advertisement+xml, application/vnd.pocketlearn, application/vnd.powerbuilder6, application/vnd.powerbuilder6-s, application/vnd.powerbuilder7, application/vnd.powerbuilder7-s, application/vnd.powerbuilder75, application/vnd.powerbuilder75-s, application/vnd.preminet, application/vnd.previewsystems.box, application/vnd.proteus.magazine, application/vnd.publishare-delta-tree, application/vnd.pvi.ptid1, application/vnd.pwg-multiplexed, application/vnd.pwg-xhtml-print+xml, application/vnd.qualcomm.brew-app-res, application/vnd.quarantainenet, application/vnd.quark.quarkxpress, application/vnd.quobject-quoxdocument, application/vnd.radisys.moml+xml, application/vnd.radisys.msml+xml, application/vnd.radisys.msml-audit+xml, application/vnd.radisys.msml-audit-conf+xml, application/vnd.radisys.msml-audit-conn+xml, application/vnd.radisys.msml-audit-dialog+xml, application/vnd.radisys.msml-audit-stream+xml, application/vnd.radisys.msml-conf+xml, application/vnd.radisys.msml-dialog+xml, application/vnd.radisys.msml-dialog-base+xml, application/vnd.radisys.msml-dialog-fax-detect+xml, application/vnd.radisys.msml-dialog-fax-sendrecv+xml, application/vnd.radisys.msml-dialog-group+xml, application/vnd.radisys.msml-dialog-speech+xml, application/vnd.radisys.msml-dialog-transform+xml, application/vnd.rainstor.data, application/vnd.rapid, application/vnd.rar, application/vnd.realvnc.bed, application/vnd.recordare.musicxml, application/vnd.recordare.musicxml+xml, application/vnd.renlearn.rlprint, application/vnd.restful+json, application/vnd.rig.cryptonote, application/vnd.rim.cod, application/vnd.rn-realmedia, application/vnd.rn-realmedia-vbr, application/vnd.route66.link66+xml, application/vnd.rs-274x, application/vnd.ruckus.download, application/vnd.s3sms, application/vnd.sailingtracker.track, application/vnd.sbm.cid, application/vnd.sbm.mid2, application/vnd.scribus, application/vnd.sealed.3df, application/vnd.sealed.csf, application/vnd.sealed.doc, application/vnd.sealed.eml, application/vnd.sealed.mht, application/vnd.sealed.net, application/vnd.sealed.ppt, application/vnd.sealed.tiff, application/vnd.sealed.xls, application/vnd.sealedmedia.softseal.html, application/vnd.sealedmedia.softseal.pdf, application/vnd.seemail, application/vnd.sema, application/vnd.semd, application/vnd.semf, application/vnd.shana.informed.formdata, application/vnd.shana.informed.formtemplate, application/vnd.shana.informed.interchange, application/vnd.shana.informed.package, application/vnd.sigrok.session, application/vnd.simtech-mindmapper, application/vnd.siren+json, application/vnd.smaf, application/vnd.smart.notebook, application/vnd.smart.teacher, application/vnd.software602.filler.form+xml, application/vnd.software602.filler.form-xml-zip, application/vnd.solent.sdkm+xml, application/vnd.spotfire.dxp, application/vnd.spotfire.sfs, application/vnd.sqlite3, application/vnd.sss-cod, application/vnd.sss-dtf, application/vnd.sss-ntf, application/vnd.stardivision.calc, application/vnd.stardivision.draw, application/vnd.stardivision.impress, application/vnd.stardivision.math, application/vnd.stardivision.writer, application/vnd.stardivision.writer-global, application/vnd.stepmania.package, application/vnd.stepmania.stepchart, application/vnd.street-stream, application/vnd.sun.wadl+xml, application/vnd.sun.xml.calc, application/vnd.sun.xml.calc.template, application/vnd.sun.xml.draw, application/vnd.sun.xml.draw.template, application/vnd.sun.xml.impress, application/vnd.sun.xml.impress.template, application/vnd.sun.xml.math, application/vnd.sun.xml.writer, application/vnd.sun.xml.writer.global, application/vnd.sun.xml.writer.template, application/vnd.sus-calendar, application/vnd.svd, application/vnd.swiftview-ics, application/vnd.symbian.install, application/vnd.syncml+xml, application/vnd.syncml.dm+wbxml, application/vnd.syncml.dm+xml, application/vnd.syncml.dm.notification, application/vnd.syncml.dmddf+wbxml, application/vnd.syncml.dmddf+xml, application/vnd.syncml.dmtnds+wbxml, application/vnd.syncml.dmtnds+xml, application/vnd.syncml.ds.notification, application/vnd.tableschema+json, application/vnd.tao.intent-module-archive, application/vnd.tcpdump.pcap, application/vnd.tmd.mediaflex.api+xml, application/vnd.tml, application/vnd.tmobile-livetv, application/vnd.tri.onesource, application/vnd.trid.tpt, application/vnd.triscape.mxs, application/vnd.trueapp, application/vnd.truedoc, application/vnd.ubisoft.webplayer, application/vnd.ufdl, application/vnd.uiq.theme, application/vnd.umajin, application/vnd.unity, application/vnd.uoml+xml, application/vnd.uplanet.alert, application/vnd.uplanet.alert-wbxml, application/vnd.uplanet.bearer-choice, application/vnd.uplanet.bearer-choice-wbxml, application/vnd.uplanet.cacheop, application/vnd.uplanet.cacheop-wbxml, application/vnd.uplanet.channel, application/vnd.uplanet.channel-wbxml, application/vnd.uplanet.list, application/vnd.uplanet.list-wbxml, application/vnd.uplanet.listcmd, application/vnd.uplanet.listcmd-wbxml, application/vnd.uplanet.signal, application/vnd.uri-map, application/vnd.valve.source.material, application/vnd.vcx, application/vnd.vd-study, application/vnd.vectorworks, application/vnd.vel+json, application/vnd.verimatrix.vcas, application/vnd.vidsoft.vidconference, application/vnd.visio, application/vnd.visionary, application/vnd.vividence.scriptfile, application/vnd.vsf, application/vnd.wap.sic, application/vnd.wap.slc, application/vnd.wap.wbxml, application/vnd.wap.wmlc, application/vnd.wap.wmlscriptc, application/vnd.webturbo, application/vnd.wfa.p2p, application/vnd.wfa.wsc, application/vnd.windows.devicepairing, application/vnd.wmc, application/vnd.wmf.bootstrap, application/vnd.wolfram.mathematica, application/vnd.wolfram.mathematica.package, application/vnd.wolfram.player, application/vnd.wordperfect, application/vnd.wqd, application/vnd.wrq-hp3000-labelled, application/vnd.wt.stf, application/vnd.wv.csp+wbxml, application/vnd.wv.csp+xml, application/vnd.wv.ssp+xml, application/vnd.xacml+json, application/vnd.xara, application/vnd.xfdl, application/vnd.xfdl.webform, application/vnd.xmi+xml, application/vnd.xmpie.cpkg, application/vnd.xmpie.dpkg, application/vnd.xmpie.plan, application/vnd.xmpie.ppkg, application/vnd.xmpie.xlim, application/vnd.yamaha.hv-dic, application/vnd.yamaha.hv-script, application/vnd.yamaha.hv-voice, application/vnd.yamaha.openscoreformat, application/vnd.yamaha.openscoreformat.osfpvg+xml, application/vnd.yamaha.remote-setup, application/vnd.yamaha.smaf-audio, application/vnd.yamaha.smaf-phrase, application/vnd.yamaha.through-ngn, application/vnd.yamaha.tunnel-udpencap, application/vnd.yaoweme, application/vnd.yellowriver-custom-menu, application/vnd.youtube.yt, application/vnd.zul, application/vnd.zzazz.deck+xml, application/voicexml+xml, application/voucher-cms+json, application/vq-rtcpxr, application/wasm, application/watcherinfo+xml, application/webpush-options+json, application/whoispp-query, application/whoispp-response, application/widget, application/winhlp, application/wita, application/wordperfect5.1, application/wsdl+xml, application/wspolicy+xml, application/x-7z-compressed, application/x-abiword, application/x-ace-compressed, application/x-amf, application/x-apple-diskimage, application/x-arj, application/x-authorware-bin, application/x-authorware-map, application/x-authorware-seg, application/x-bcpio, application/x-bdoc, application/x-bittorrent, application/x-blorb, application/x-bzip, application/x-bzip2, application/x-cbr, application/x-cdlink, application/x-cfs-compressed, application/x-chat, application/x-chess-pgn, application/x-chrome-extension, application/x-cocoa, application/x-compress, application/x-conference, application/x-cpio, application/x-csh, application/x-deb, application/x-debian-package, application/x-dgc-compressed, application/x-director, application/x-doom, application/x-dtbncx+xml, application/x-dtbook+xml, application/x-dtbresource+xml, application/x-dvi, application/x-envoy, application/x-eva, application/x-font-bdf, application/x-font-dos, application/x-font-framemaker, application/x-font-ghostscript, application/x-font-libgrx, application/x-font-linux-psf, application/x-font-pcf, application/x-font-snf, application/x-font-speedo, application/x-font-sunos-news, application/x-font-type1, application/x-font-vfont, application/x-freearc, application/x-futuresplash, application/x-gca-compressed, application/x-glulx, application/x-gnumeric, application/x-gramps-xml, application/x-gtar, application/x-gzip, application/x-hdf, application/x-httpd-php, application/x-install-instructions, application/x-iso9660-image, application/x-java-archive-diff, application/x-java-jnlp-file, application/x-javascript, application/x-latex, application/x-lua-bytecode, application/x-lzh-compressed, application/x-makeself, application/x-mie, application/x-mobipocket-ebook, application/x-mpegurl, application/x-ms-application, application/x-ms-shortcut, application/x-ms-wmd, application/x-ms-wmz, application/x-ms-xbap, application/x-msaccess, application/x-msbinder, application/x-mscardfile, application/x-msclip, application/x-msdos-program, application/x-msdownload, application/x-msmediaview, application/x-msmetafile, application/x-msmoney, application/x-mspublisher, application/x-msschedule, application/x-msterminal, application/x-mswrite, application/x-netcdf, application/x-ns-proxy-autoconfig, application/x-nzb, application/x-perl, application/x-pilot, application/x-pkcs12, application/x-pkcs7-certificates, application/x-pkcs7-certreqresp, application/x-rar-compressed, application/x-redhat-package-manager, application/x-research-info-systems, application/x-sea, application/x-sh, application/x-shar, application/x-shockwave-flash, application/x-silverlight-app, application/x-sql, application/x-stuffit, application/x-stuffitx, application/x-subrip, application/x-sv4cpio, application/x-sv4crc, application/x-t3vm-image, application/x-tads, application/x-tar, application/x-tcl, application/x-tex, application/x-tex-tfm, application/x-texinfo, application/x-tgif, application/x-ustar, application/x-virtualbox-hdd, application/x-virtualbox-ova, application/x-virtualbox-ovf, application/x-virtualbox-vbox, application/x-virtualbox-vbox-extpack, application/x-virtualbox-vdi, application/x-virtualbox-vhd, application/x-virtualbox-vmdk, application/x-wais-source, application/x-web-app-manifest+json, application/x-www-form-urlencoded, application/x-x509-ca-cert, application/x-xfig, application/x-xliff+xml, application/x-xpinstall, application/x-xz, application/x-zmachine, application/x400-bp, application/xacml+xml, application/xaml+xml, application/xcap-att+xml, application/xcap-caps+xml, application/xcap-diff+xml, application/xcap-el+xml, application/xcap-error+xml, application/xcap-ns+xml, application/xcon-conference-info+xml, application/xcon-conference-info-diff+xml, application/xenc+xml, application/xhtml+xml, application/xhtml-voice+xml, application/xml, application/xml-dtd, application/xml-external-parsed-entity, application/xml-patch+xml, application/xmpp+xml, application/xop+xml, application/xproc+xml, application/xslt+xml, application/xspf+xml, application/xv+xml, application/yang, application/yang-data+json, application/yang-data+xml, application/yang-patch+json, application/yang-patch+xml, application/yin+xml, application/zip, application/zlib, audio/1d-interleaved-parityfec, audio/32kadpcm, audio/3gpp, audio/3gpp2, audio/ac3, audio/adpcm, audio/amr, audio/amr-wb, audio/amr-wb+, audio/aptx, audio/asc, audio/atrac-advanced-lossless, audio/atrac-x, audio/atrac3, audio/basic, audio/bv16, audio/bv32, audio/clearmode, audio/cn, audio/dat12, audio/dls, audio/dsr-es201108, audio/dsr-es202050, audio/dsr-es202211, audio/dsr-es202212, audio/dv, audio/dvi4, audio/eac3, audio/encaprtp, audio/evrc, audio/evrc-qcp, audio/evrc0, audio/evrc1, audio/evrcb, audio/evrcb0, audio/evrcb1, audio/evrcnw, audio/evrcnw0, audio/evrcnw1, audio/evrcwb, audio/evrcwb0, audio/evrcwb1, audio/evs, audio/fwdred, audio/g711-0, audio/g719, audio/g722, audio/g7221, audio/g723, audio/g726-16, audio/g726-24, audio/g726-32, audio/g726-40, audio/g728, audio/g729, audio/g7291, audio/g729d, audio/g729e, audio/gsm, audio/gsm-efr, audio/gsm-hr-08, audio/ilbc, audio/ip-mr_v2.5, audio/isac, audio/l16, audio/l20, audio/l24, audio/l8, audio/lpc, audio/melp, audio/melp1200, audio/melp2400, audio/melp600, audio/midi, audio/mobile-xmf, audio/mp3, audio/mp4, audio/mp4a-latm, audio/mpa, audio/mpa-robust, audio/mpeg, audio/mpeg4-generic, audio/musepack, audio/ogg, audio/opus, audio/parityfec, audio/pcma, audio/pcma-wb, audio/pcmu, audio/pcmu-wb, audio/prs.sid, audio/qcelp, audio/raptorfec, audio/red, audio/rtp-enc-aescm128, audio/rtp-midi, audio/rtploopback, audio/rtx, audio/s3m, audio/silk, audio/smv, audio/smv-qcp, audio/smv0, audio/sp-midi, audio/speex, audio/t140c, audio/t38, audio/telephone-event, audio/tone, audio/uemclip, audio/ulpfec, audio/vdvi, audio/vmr-wb, audio/vnd.3gpp.iufp, audio/vnd.4sb, audio/vnd.audiokoz, audio/vnd.celp, audio/vnd.cisco.nse, audio/vnd.cmles.radio-events, audio/vnd.cns.anp1, audio/vnd.cns.inf1, audio/vnd.dece.audio, audio/vnd.digital-winds, audio/vnd.dlna.adts, audio/vnd.dolby.heaac.1, audio/vnd.dolby.heaac.2, audio/vnd.dolby.mlp, audio/vnd.dolby.mps, audio/vnd.dolby.pl2, audio/vnd.dolby.pl2x, audio/vnd.dolby.pl2z, audio/vnd.dolby.pulse.1, audio/vnd.dra, audio/vnd.dts, audio/vnd.dts.hd, audio/vnd.dvb.file, audio/vnd.everad.plj, audio/vnd.hns.audio, audio/vnd.lucent.voice, audio/vnd.ms-playready.media.pya, audio/vnd.nokia.mobile-xmf, audio/vnd.nortel.vbk, audio/vnd.nuera.ecelp4800, audio/vnd.nuera.ecelp7470, audio/vnd.nuera.ecelp9600, audio/vnd.octel.sbc, audio/vnd.presonus.multitrack, audio/vnd.qcelp, audio/vnd.rhetorex.32kadpcm, audio/vnd.rip, audio/vnd.rn-realaudio, audio/vnd.sealedmedia.softseal.mpeg, audio/vnd.vmx.cvsd, audio/vnd.wave, audio/vorbis, audio/vorbis-config, audio/wav, audio/wave, audio/webm, audio/x-aac, audio/x-aiff, audio/x-caf, audio/x-flac, audio/x-m4a, audio/x-matroska, audio/x-mpegurl, audio/x-ms-wax, audio/x-ms-wma, audio/x-pn-realaudio, audio/x-pn-realaudio-plugin, audio/x-realaudio, audio/x-tta, audio/x-wav, audio/xm, chemical/x-cdx, chemical/x-cif, chemical/x-cmdf, chemical/x-cml, chemical/x-csml, chemical/x-pdb, chemical/x-xyz, font/collection, font/otf, font/sfnt, font/ttf, font/woff, font/woff2, image/aces, image/apng, image/bmp, image/cgm, image/dicom-rle, image/emf, image/fits, image/g3fax, image/gif, image/ief, image/jls, image/jp2, image/jpeg, image/jpm, image/jpx, image/ktx, image/naplps, image/pjpeg, image/png, image/prs.btif, image/prs.pti, image/pwg-raster, image/sgi, image/svg+xml, image/t38, image/tiff, image/tiff-fx, image/vnd.adobe.photoshop, image/vnd.airzip.accelerator.azv, image/vnd.cns.inf2, image/vnd.dece.graphic, image/vnd.djvu, image/vnd.dvb.subtitle, image/vnd.dwg, image/vnd.dxf, image/vnd.fastbidsheet, image/vnd.fpx, image/vnd.fst, image/vnd.fujixerox.edmics-mmr, image/vnd.fujixerox.edmics-rlc, image/vnd.globalgraphics.pgb, image/vnd.microsoft.icon, image/vnd.mix, image/vnd.mozilla.apng, image/vnd.ms-modi, image/vnd.ms-photo, image/vnd.net-fpx, image/vnd.radiance, image/vnd.sealed.png, image/vnd.sealedmedia.softseal.gif, image/vnd.sealedmedia.softseal.jpg, image/vnd.svf, image/vnd.tencent.tap, image/vnd.valve.source.texture, image/vnd.wap.wbmp, image/vnd.xiff, image/vnd.zbrush.pcx, image/webp, image/wmf, image/x-3ds, image/x-cmu-raster, image/x-cmx, image/x-freehand, image/x-icon, image/x-jng, image/x-mrsid-image, image/x-ms-bmp, image/x-pcx, image/x-pict, image/x-portable-anymap, image/x-portable-bitmap, image/x-portable-graymap, image/x-portable-pixmap, image/x-rgb, image/x-tga, image/x-xbitmap, image/x-xcf, image/x-xpixmap, image/x-xwindowdump, message/cpim, message/delivery-status, message/disposition-notification, message/external-body, message/feedback-report, message/global, message/global-delivery-status, message/global-disposition-notification, message/global-headers, message/http, message/imdn+xml, message/news, message/partial, message/rfc822, message/s-http, message/sip, message/sipfrag, message/tracking-status, message/vnd.si.simp, message/vnd.wfa.wsc, model/3mf, model/gltf+json, model/gltf-binary, model/iges, model/mesh, model/vnd.collada+xml, model/vnd.dwf, model/vnd.flatland.3dml, model/vnd.gdl, model/vnd.gs-gdl, model/vnd.gs.gdl, model/vnd.gtw, model/vnd.moml+xml, model/vnd.mts, model/vnd.opengex, model/vnd.parasolid.transmit.binary, model/vnd.parasolid.transmit.text, model/vnd.rosette.annotated-data-model, model/vnd.valve.source.compiled-map, model/vnd.vtu, model/vrml, model/x3d+binary, model/x3d+fastinfoset, model/x3d+vrml, model/x3d+xml, model/x3d-vrml, multipart/alternative, multipart/appledouble, multipart/byteranges, multipart/digest, multipart/encrypted, multipart/form-data, multipart/header-set, multipart/mixed, multipart/multilingual, multipart/parallel, multipart/related, multipart/report, multipart/signed, multipart/vnd.bint.med-plus, multipart/voice-message, multipart/x-mixed-replace, text/1d-interleaved-parityfec, text/cache-manifest, text/calendar, text/calender, text/cmd, text/coffeescript, text/css, text/csv, text/csv-schema, text/directory, text/dns, text/ecmascript, text/encaprtp, text/enriched, text/fwdred, text/grammar-ref-list, text/html, text/jade, text/javascript, text/jcr-cnd, text/jsx, text/less, text/markdown, text/mathml, text/mizar, text/n3, text/parameters, text/parityfec, text/plain, text/provenance-notation, text/prs.fallenstein.rst, text/prs.lines.tag, text/prs.prop.logic, text/raptorfec, text/red, text/rfc822-headers, text/richtext, text/rtf, text/rtp-enc-aescm128, text/rtploopback, text/rtx, text/sgml, text/shex, text/slim, text/strings, text/stylus, text/t140, text/tab-separated-values, text/troff, text/turtle, text/ulpfec, text/uri-list, text/vcard, text/vnd.a, text/vnd.abc, text/vnd.ascii-art, text/vnd.curl, text/vnd.curl.dcurl, text/vnd.curl.mcurl, text/vnd.curl.scurl, text/vnd.debian.copyright, text/vnd.dmclientscript, text/vnd.dvb.subtitle, text/vnd.esmertec.theme-descriptor, text/vnd.fly, text/vnd.fmi.flexstor, text/vnd.graphviz, text/vnd.in3d.3dml, text/vnd.in3d.spot, text/vnd.iptc.newsml, text/vnd.iptc.nitf, text/vnd.latex-z, text/vnd.motorola.reflex, text/vnd.ms-mediapackage, text/vnd.net2phone.commcenter.command, text/vnd.radisys.msml-basic-layout, text/vnd.si.uricatalogue, text/vnd.sun.j2me.app-descriptor, text/vnd.trolltech.linguist, text/vnd.wap.si, text/vnd.wap.sl, text/vnd.wap.wml, text/vnd.wap.wmlscript, text/vtt, text/x-asm, text/x-c, text/x-component, text/x-fortran, text/x-gwt-rpc, text/x-handlebars-template, text/x-java-source, text/x-jquery-tmpl, text/x-lua, text/x-markdown, text/x-nfo, text/x-opml, text/x-org, text/x-pascal, text/x-processing, text/x-sass, text/x-scss, text/x-setext, text/x-sfv, text/x-suse-ymp, text/x-uuencode, text/x-vcalendar, text/x-vcard, text/xml, text/xml-external-parsed-entity, text/yaml, video/1d-interleaved-parityfec, video/3gpp, video/3gpp-tt, video/3gpp2, video/bmpeg, video/bt656, video/celb, video/dv, video/encaprtp, video/h261, video/h263, video/h263-1998, video/h263-2000, video/h264, video/h264-rcdo, video/h264-svc, video/h265, video/iso.segment, video/jpeg, video/jpeg2000, video/jpm, video/mj2, video/mp1s, video/mp2p, video/mp2t, video/mp4, video/mp4v-es, video/mpeg, video/mpeg4-generic, video/mpv, video/nv, video/ogg, video/parityfec, video/pointer, video/quicktime, video/raptorfec, video/raw, video/rtp-enc-aescm128, video/rtploopback, video/rtx, video/smpte291, video/smpte292m, video/ulpfec, video/vc1, video/vnd.cctv, video/vnd.dece.hd, video/vnd.dece.mobile, video/vnd.dece.mp4, video/vnd.dece.pd, video/vnd.dece.sd, video/vnd.dece.video, video/vnd.directv.mpeg, video/vnd.directv.mpeg-tts, video/vnd.dlna.mpeg-tts, video/vnd.dvb.file, video/vnd.fvt, video/vnd.hns.video, video/vnd.iptvforum.1dparityfec-1010, video/vnd.iptvforum.1dparityfec-2005, video/vnd.iptvforum.2dparityfec-1010, video/vnd.iptvforum.2dparityfec-2005, video/vnd.iptvforum.ttsavc, video/vnd.iptvforum.ttsmpeg2, video/vnd.motorola.video, video/vnd.motorola.videop, video/vnd.mpegurl, video/vnd.ms-playready.media.pyv, video/vnd.nokia.interleaved-multimedia, video/vnd.nokia.mp4vr, video/vnd.nokia.videovoip, video/vnd.objectvideo, video/vnd.radgamettools.bink, video/vnd.radgamettools.smacker, video/vnd.sealed.mpeg1, video/vnd.sealed.mpeg4, video/vnd.sealed.swf, video/vnd.sealedmedia.softseal.mov, video/vnd.uvvu.mp4, video/vnd.vivo, video/vp8, video/webm, video/x-f4v, video/x-fli, video/x-flv, video/x-m4v, video/x-matroska, video/x-mng, video/x-ms-asf, video/x-ms-vob, video/x-ms-wm, video/x-ms-wmv, video/x-ms-wmx, video/x-ms-wvx, video/x-msvideo, video/x-sgi-movie, video/x-smv, x-conference/x-cooltalk, x-shader/x-fragment, x-shader/x-vertex, default */
/***/ (function(module) {

module.exports = {"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana"},"application/3gpp-ims+xml":{"source":"iana"},"application/a2l":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana"},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","extensions":["atomsvc"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana"},"application/bacnet-xdd+zip":{"source":"iana"},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana"},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana"},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/cbor":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana"},"application/ccxml+xml":{"source":"iana","extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana"},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana"},"application/cellml+xml":{"source":"iana"},"application/cfw":{"source":"iana"},"application/clue_info+xml":{"source":"iana"},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana"},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana"},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana"},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana"},"application/cstadata+xml":{"source":"iana"},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","extensions":["mpd"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana"},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana"},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/docbook+xml":{"source":"apache","extensions":["dbk"]},"application/dskpp+xml":{"source":"iana"},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/emergencycalldata.comment+xml":{"source":"iana"},"application/emergencycalldata.control+xml":{"source":"iana"},"application/emergencycalldata.deviceinfo+xml":{"source":"iana"},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana"},"application/emergencycalldata.serviceinfo+xml":{"source":"iana"},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana"},"application/emergencycalldata.veds+xml":{"source":"iana"},"application/emma+xml":{"source":"iana","extensions":["emma"]},"application/emotionml+xml":{"source":"iana"},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana"},"application/epub+zip":{"source":"iana","extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana"},"application/fhir+xml":{"source":"iana"},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false,"extensions":["woff"]},"application/framework-attributes+xml":{"source":"iana"},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geoxacml+xml":{"source":"iana"},"application/gml+xml":{"source":"iana","extensions":["gml"]},"application/gpx+xml":{"source":"apache","extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana"},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana"},"application/ibe-pkg-reply+xml":{"source":"iana"},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana"},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana"},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana"},"application/kpml-response+xml":{"source":"iana"},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana"},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana"},"application/lost+xml":{"source":"iana","extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana"},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","extensions":["mads"]},"application/manifest+json":{"charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana"},"application/mathml-presentation+xml":{"source":"iana"},"application/mbms-associated-procedure-description+xml":{"source":"iana"},"application/mbms-deregister+xml":{"source":"iana"},"application/mbms-envelope+xml":{"source":"iana"},"application/mbms-msk+xml":{"source":"iana"},"application/mbms-msk-response+xml":{"source":"iana"},"application/mbms-protection-description+xml":{"source":"iana"},"application/mbms-reception-report+xml":{"source":"iana"},"application/mbms-register+xml":{"source":"iana"},"application/mbms-register-response+xml":{"source":"iana"},"application/mbms-schedule+xml":{"source":"iana"},"application/mbms-user-service-description+xml":{"source":"iana"},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana"},"application/media_control+xml":{"source":"iana"},"application/mediaservercontrol+xml":{"source":"iana","extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","extensions":["meta4"]},"application/mets+xml":{"source":"iana","extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mmt-usd+xml":{"source":"iana"},"application/mods+xml":{"source":"iana","extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana"},"application/mrb-publish+xml":{"source":"iana"},"application/msc-ivr+xml":{"source":"iana"},"application/msc-mixer+xml":{"source":"iana"},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana"},"application/n-triples":{"source":"iana"},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana"},"application/news-groupinfo":{"source":"iana"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana"},"application/node":{"source":"iana"},"application/nss":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p2p-overlay+xml":{"source":"iana"},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana"},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana"},"application/pidf-diff+xml":{"source":"iana"},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","extensions":["pls"]},"application/poc-settings+xml":{"source":"iana"},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana"},"application/provenance+xml":{"source":"iana"},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.hpub+zip":{"source":"iana"},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana"},"application/pskc+xml":{"source":"iana","extensions":["pskcxml"]},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf"]},"application/reginfo+xml":{"source":"iana","extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","extensions":["rld"]},"application/rfc+xml":{"source":"iana"},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana"},"application/rls-services+xml":{"source":"iana","extensions":["rs"]},"application/route-apd+xml":{"source":"iana"},"application/route-s-tsid+xml":{"source":"iana"},"application/route-usd+xml":{"source":"iana"},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana"},"application/samlmetadata+xml":{"source":"iana"},"application/sbml+xml":{"source":"iana","extensions":["sbml"]},"application/scaip+xml":{"source":"iana"},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/sep+xml":{"source":"iana"},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","extensions":["shf"]},"application/sieve":{"source":"iana"},"application/simple-filter+xml":{"source":"iana"},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","extensions":["srx"]},"application/spirits-event+xml":{"source":"iana"},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","extensions":["grxml"]},"application/sru+xml":{"source":"iana","extensions":["sru"]},"application/ssdl+xml":{"source":"apache","extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","extensions":["ssml"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/tei+xml":{"source":"iana","extensions":["tei","teicorpus"]},"application/thraud+xml":{"source":"iana","extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tnauthlist":{"source":"iana"},"application/trig":{"source":"iana"},"application/ttml+xml":{"source":"iana"},"application/tve-trigger":{"source":"iana"},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana"},"application/urc-ressheet+xml":{"source":"iana"},"application/urc-targetdesc+xml":{"source":"iana"},"application/urc-uisocketdesc+xml":{"source":"iana"},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana"},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana"},"application/vnd.3gpp-prose+xml":{"source":"iana"},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana"},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana"},"application/vnd.3gpp.bsf+xml":{"source":"iana"},"application/vnd.3gpp.gmop+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana"},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana"},"application/vnd.3gpp.mid-call+xml":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana"},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana"},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana"},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana"},"application/vnd.3gpp.ussd+xml":{"source":"iana"},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana"},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","extensions":["mpkg"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana"},"application/vnd.balsamiq.bmml+xml":{"source":"iana"},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana"},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana"},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana"},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","extensions":["wbs"]},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana"},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana"},"application/vnd.cybank":{"source":"iana"},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume-movie":{"source":"iana"},"application/vnd.desmume.movie":{"source":"apache"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana"},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana"},"application/vnd.dvb.notif-container+xml":{"source":"iana"},"application/vnd.dvb.notif-generic+xml":{"source":"iana"},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana"},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana"},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana"},"application/vnd.dvb.notif-init+xml":{"source":"iana"},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana"},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana"},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana"},"application/vnd.eszigno3+xml":{"source":"iana","extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana"},"application/vnd.etsi.asic-e+zip":{"source":"iana"},"application/vnd.etsi.asic-s+zip":{"source":"iana"},"application/vnd.etsi.cug+xml":{"source":"iana"},"application/vnd.etsi.iptvcommand+xml":{"source":"iana"},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana"},"application/vnd.etsi.iptvprofile+xml":{"source":"iana"},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana"},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana"},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana"},"application/vnd.etsi.iptvservice+xml":{"source":"iana"},"application/vnd.etsi.iptvsync+xml":{"source":"iana"},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana"},"application/vnd.etsi.mcid+xml":{"source":"iana"},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana"},"application/vnd.etsi.pstn+xml":{"source":"iana"},"application/vnd.etsi.sci+xml":{"source":"iana"},"application/vnd.etsi.simservs+xml":{"source":"iana"},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana"},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana"},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana"},"application/vnd.gov.sk.e-form+zip":{"source":"iana"},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana"},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana"},"application/vnd.imagemeter.image+zip":{"source":"iana"},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana"},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana"},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana"},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana"},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana"},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana"},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana"},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana"},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana"},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","extensions":["lasxml"]},"application/vnd.liberty-request+xml":{"source":"iana"},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","extensions":["lbe"]},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana"},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana"},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana"},"application/vnd.marlin.drm.license+xml":{"source":"iana"},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana"},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana"},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana"},"application/vnd.ms-printing.printticket+xml":{"source":"apache"},"application/vnd.ms-printschematicket+xml":{"source":"iana"},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana"},"application/vnd.nokia.iptv.config+xml":{"source":"iana"},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana"},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana"},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana"},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana"},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana"},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana"},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana"},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana"},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana"},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana"},"application/vnd.oipf.spdlist+xml":{"source":"iana"},"application/vnd.oipf.ueprofile+xml":{"source":"iana"},"application/vnd.oipf.userprofile+xml":{"source":"iana"},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana"},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana"},"application/vnd.oma.bcast.imd+xml":{"source":"iana"},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana"},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana"},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana"},"application/vnd.oma.bcast.sprov+xml":{"source":"iana"},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana"},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana"},"application/vnd.oma.cab-pcc+xml":{"source":"iana"},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana"},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana"},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana"},"application/vnd.oma.group-usage-list+xml":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana"},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana"},"application/vnd.oma.poc.final-report+xml":{"source":"iana"},"application/vnd.oma.poc.groups+xml":{"source":"iana"},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana"},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana"},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana"},"application/vnd.oma.xcap-directory+xml":{"source":"iana"},"application/vnd.omads-email+xml":{"source":"iana"},"application/vnd.omads-file+xml":{"source":"iana"},"application/vnd.omads-folder+xml":{"source":"iana"},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana"},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana"},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana"},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana"},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana"},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana"},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos+xml":{"source":"iana"},"application/vnd.paos.xml":{"source":"apache"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana"},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana"},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana"},"application/vnd.radisys.msml+xml":{"source":"iana"},"application/vnd.radisys.msml-audit+xml":{"source":"iana"},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana"},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana"},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana"},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana"},"application/vnd.radisys.msml-conf+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana"},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana"},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana"},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.software602.filler.form+xml":{"source":"iana"},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana"},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana"},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana"},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana"},"application/vnd.wv.ssp+xml":{"source":"iana"},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana"},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana"},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"apache","extensions":["der","crt","pem"]},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana"},"application/xaml+xml":{"source":"apache","extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana"},"application/xcap-caps+xml":{"source":"iana"},"application/xcap-diff+xml":{"source":"iana","extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana"},"application/xcap-error+xml":{"source":"iana"},"application/xcap-ns+xml":{"source":"iana"},"application/xcon-conference-info+xml":{"source":"iana"},"application/xcon-conference-info-diff+xml":{"source":"iana"},"application/xenc+xml":{"source":"iana","extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache"},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana"},"application/xmpp+xml":{"source":"iana"},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","extensions":["xpl"]},"application/xslt+xml":{"source":"iana","extensions":["xslt"]},"application/xspf+xml":{"source":"apache","extensions":["xspf"]},"application/xv+xml":{"source":"iana","extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana"},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana"},"application/yin+xml":{"source":"iana","extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana"},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana"},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana"},"image/apng":{"compressible":false,"extensions":["apng"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana"},"image/emf":{"source":"iana"},"image/fits":{"source":"iana"},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana"},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana"},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana"},"image/tiff":{"source":"iana","compressible":false,"extensions":["tiff","tif"]},"image/tiff-fx":{"source":"iana"},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana"},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana"},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana"},"image/vnd.valve.source.texture":{"source":"iana"},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana"},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana"},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/vnd.collada+xml":{"source":"iana","extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana"},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana"},"model/vnd.parasolid.transmit.binary":{"source":"iana"},"model/vnd.parasolid.transmit.text":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.valve.source.compiled-map":{"source":"iana"},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana"},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana"},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana","compressible":false},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shex":{"extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana"},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vp8":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}};

/***/ }),

/***/ "../@Bonbons.koa/node_modules/mime-db/index.js":
/*!*****************************************************!*\
  !*** ../@Bonbons.koa/node_modules/mime-db/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */

/**
 * Module exports.
 */

module.exports = __webpack_require__(/*! ./db.json */ "../@Bonbons.koa/node_modules/mime-db/db.json")


/***/ }),

/***/ "../@Bonbons.koa/node_modules/mime-types/index.js":
/*!********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/mime-types/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var db = __webpack_require__(/*! mime-db */ "../@Bonbons.koa/node_modules/mime-db/index.js")
var extname = __webpack_require__(/*! path */ "path").extname

/**
 * Module variables.
 * @private
 */

var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/
var TEXT_TYPE_REGEXP = /^text\//i

/**
 * Module exports.
 * @public
 */

exports.charset = charset
exports.charsets = { lookup: charset }
exports.contentType = contentType
exports.extension = extension
exports.extensions = Object.create(null)
exports.lookup = lookup
exports.types = Object.create(null)

// Populate the extensions/types maps
populateMaps(exports.extensions, exports.types)

/**
 * Get the default charset for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function charset (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)
  var mime = match && db[match[1].toLowerCase()]

  if (mime && mime.charset) {
    return mime.charset
  }

  // default text/* to utf-8
  if (match && TEXT_TYPE_REGEXP.test(match[1])) {
    return 'UTF-8'
  }

  return false
}

/**
 * Create a full Content-Type header given a MIME type or extension.
 *
 * @param {string} str
 * @return {boolean|string}
 */

function contentType (str) {
  // TODO: should this even be in this module?
  if (!str || typeof str !== 'string') {
    return false
  }

  var mime = str.indexOf('/') === -1
    ? exports.lookup(str)
    : str

  if (!mime) {
    return false
  }

  // TODO: use content-type or other module
  if (mime.indexOf('charset') === -1) {
    var charset = exports.charset(mime)
    if (charset) mime += '; charset=' + charset.toLowerCase()
  }

  return mime
}

/**
 * Get the default extension for a MIME type.
 *
 * @param {string} type
 * @return {boolean|string}
 */

function extension (type) {
  if (!type || typeof type !== 'string') {
    return false
  }

  // TODO: use media-typer
  var match = EXTRACT_TYPE_REGEXP.exec(type)

  // get extensions
  var exts = match && exports.extensions[match[1].toLowerCase()]

  if (!exts || !exts.length) {
    return false
  }

  return exts[0]
}

/**
 * Lookup the MIME type for a file path/extension.
 *
 * @param {string} path
 * @return {boolean|string}
 */

function lookup (path) {
  if (!path || typeof path !== 'string') {
    return false
  }

  // get the extension ("ext" or ".ext" or full path)
  var extension = extname('x.' + path)
    .toLowerCase()
    .substr(1)

  if (!extension) {
    return false
  }

  return exports.types[extension] || false
}

/**
 * Populate the extensions and types maps.
 * @private
 */

function populateMaps (extensions, types) {
  // source preference (least -> most)
  var preference = ['nginx', 'apache', undefined, 'iana']

  Object.keys(db).forEach(function forEachMimeType (type) {
    var mime = db[type]
    var exts = mime.extensions

    if (!exts || !exts.length) {
      return
    }

    // mime -> extensions
    extensions[type] = exts

    // extension -> mime
    for (var i = 0; i < exts.length; i++) {
      var extension = exts[i]

      if (types[extension]) {
        var from = preference.indexOf(db[types[extension]].source)
        var to = preference.indexOf(mime.source)

        if (types[extension] !== 'application/octet-stream' &&
          (from > to || (from === to && types[extension].substr(0, 12) === 'application/'))) {
          // skip the remapping
          continue
        }
      }

      // set the extension -> mime
      types[extension] = type
    }
  })
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/ms/index.js":
/*!************************************************!*\
  !*** ../@Bonbons.koa/node_modules/ms/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/negotiator/index.js":
/*!********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/negotiator/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * negotiator
 * Copyright(c) 2012 Federico Romero
 * Copyright(c) 2012-2014 Isaac Z. Schlueter
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Cached loaded submodules.
 * @private
 */

var modules = Object.create(null);

/**
 * Module exports.
 * @public
 */

module.exports = Negotiator;
module.exports.Negotiator = Negotiator;

/**
 * Create a Negotiator instance from a request.
 * @param {object} request
 * @public
 */

function Negotiator(request) {
  if (!(this instanceof Negotiator)) {
    return new Negotiator(request);
  }

  this.request = request;
}

Negotiator.prototype.charset = function charset(available) {
  var set = this.charsets(available);
  return set && set[0];
};

Negotiator.prototype.charsets = function charsets(available) {
  var preferredCharsets = loadModule('charset').preferredCharsets;
  return preferredCharsets(this.request.headers['accept-charset'], available);
};

Negotiator.prototype.encoding = function encoding(available) {
  var set = this.encodings(available);
  return set && set[0];
};

Negotiator.prototype.encodings = function encodings(available) {
  var preferredEncodings = loadModule('encoding').preferredEncodings;
  return preferredEncodings(this.request.headers['accept-encoding'], available);
};

Negotiator.prototype.language = function language(available) {
  var set = this.languages(available);
  return set && set[0];
};

Negotiator.prototype.languages = function languages(available) {
  var preferredLanguages = loadModule('language').preferredLanguages;
  return preferredLanguages(this.request.headers['accept-language'], available);
};

Negotiator.prototype.mediaType = function mediaType(available) {
  var set = this.mediaTypes(available);
  return set && set[0];
};

Negotiator.prototype.mediaTypes = function mediaTypes(available) {
  var preferredMediaTypes = loadModule('mediaType').preferredMediaTypes;
  return preferredMediaTypes(this.request.headers.accept, available);
};

// Backwards compatibility
Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;

/**
 * Load the given module.
 * @private
 */

function loadModule(moduleName) {
  var module = modules[moduleName];

  if (module !== undefined) {
    return module;
  }

  // This uses a switch for static require analysis
  switch (moduleName) {
    case 'charset':
      module = __webpack_require__(/*! ./lib/charset */ "../@Bonbons.koa/node_modules/negotiator/lib/charset.js");
      break;
    case 'encoding':
      module = __webpack_require__(/*! ./lib/encoding */ "../@Bonbons.koa/node_modules/negotiator/lib/encoding.js");
      break;
    case 'language':
      module = __webpack_require__(/*! ./lib/language */ "../@Bonbons.koa/node_modules/negotiator/lib/language.js");
      break;
    case 'mediaType':
      module = __webpack_require__(/*! ./lib/mediaType */ "../@Bonbons.koa/node_modules/negotiator/lib/mediaType.js");
      break;
    default:
      throw new Error('Cannot find module \'' + moduleName + '\'');
  }

  // Store to prevent invoking require()
  modules[moduleName] = module;

  return module;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/negotiator/lib/charset.js":
/*!**************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/negotiator/lib/charset.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = preferredCharsets;
module.exports.preferredCharsets = preferredCharsets;

/**
 * Module variables.
 * @private
 */

var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;

/**
 * Parse the Accept-Charset header.
 * @private
 */

function parseAcceptCharset(accept) {
  var accepts = accept.split(',');

  for (var i = 0, j = 0; i < accepts.length; i++) {
    var charset = parseCharset(accepts[i].trim(), i);

    if (charset) {
      accepts[j++] = charset;
    }
  }

  // trim accepts
  accepts.length = j;

  return accepts;
}

/**
 * Parse a charset from the Accept-Charset header.
 * @private
 */

function parseCharset(str, i) {
  var match = simpleCharsetRegExp.exec(str);
  if (!match) return null;

  var charset = match[1];
  var q = 1;
  if (match[2]) {
    var params = match[2].split(';')
    for (var i = 0; i < params.length; i ++) {
      var p = params[i].trim().split('=');
      if (p[0] === 'q') {
        q = parseFloat(p[1]);
        break;
      }
    }
  }

  return {
    charset: charset,
    q: q,
    i: i
  };
}

/**
 * Get the priority of a charset.
 * @private
 */

function getCharsetPriority(charset, accepted, index) {
  var priority = {o: -1, q: 0, s: 0};

  for (var i = 0; i < accepted.length; i++) {
    var spec = specify(charset, accepted[i], index);

    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
      priority = spec;
    }
  }

  return priority;
}

/**
 * Get the specificity of the charset.
 * @private
 */

function specify(charset, spec, index) {
  var s = 0;
  if(spec.charset.toLowerCase() === charset.toLowerCase()){
    s |= 1;
  } else if (spec.charset !== '*' ) {
    return null
  }

  return {
    i: index,
    o: spec.i,
    q: spec.q,
    s: s
  }
}

/**
 * Get the preferred charsets from an Accept-Charset header.
 * @public
 */

function preferredCharsets(accept, provided) {
  // RFC 2616 sec 14.2: no header = *
  var accepts = parseAcceptCharset(accept === undefined ? '*' : accept || '');

  if (!provided) {
    // sorted list of all charsets
    return accepts
      .filter(isQuality)
      .sort(compareSpecs)
      .map(getFullCharset);
  }

  var priorities = provided.map(function getPriority(type, index) {
    return getCharsetPriority(type, accepts, index);
  });

  // sorted list of accepted charsets
  return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
    return provided[priorities.indexOf(priority)];
  });
}

/**
 * Compare two specs.
 * @private
 */

function compareSpecs(a, b) {
  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
}

/**
 * Get full charset string.
 * @private
 */

function getFullCharset(spec) {
  return spec.charset;
}

/**
 * Check if a spec has any quality.
 * @private
 */

function isQuality(spec) {
  return spec.q > 0;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/negotiator/lib/encoding.js":
/*!***************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/negotiator/lib/encoding.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = preferredEncodings;
module.exports.preferredEncodings = preferredEncodings;

/**
 * Module variables.
 * @private
 */

var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;

/**
 * Parse the Accept-Encoding header.
 * @private
 */

function parseAcceptEncoding(accept) {
  var accepts = accept.split(',');
  var hasIdentity = false;
  var minQuality = 1;

  for (var i = 0, j = 0; i < accepts.length; i++) {
    var encoding = parseEncoding(accepts[i].trim(), i);

    if (encoding) {
      accepts[j++] = encoding;
      hasIdentity = hasIdentity || specify('identity', encoding);
      minQuality = Math.min(minQuality, encoding.q || 1);
    }
  }

  if (!hasIdentity) {
    /*
     * If identity doesn't explicitly appear in the accept-encoding header,
     * it's added to the list of acceptable encoding with the lowest q
     */
    accepts[j++] = {
      encoding: 'identity',
      q: minQuality,
      i: i
    };
  }

  // trim accepts
  accepts.length = j;

  return accepts;
}

/**
 * Parse an encoding from the Accept-Encoding header.
 * @private
 */

function parseEncoding(str, i) {
  var match = simpleEncodingRegExp.exec(str);
  if (!match) return null;

  var encoding = match[1];
  var q = 1;
  if (match[2]) {
    var params = match[2].split(';');
    for (var i = 0; i < params.length; i ++) {
      var p = params[i].trim().split('=');
      if (p[0] === 'q') {
        q = parseFloat(p[1]);
        break;
      }
    }
  }

  return {
    encoding: encoding,
    q: q,
    i: i
  };
}

/**
 * Get the priority of an encoding.
 * @private
 */

function getEncodingPriority(encoding, accepted, index) {
  var priority = {o: -1, q: 0, s: 0};

  for (var i = 0; i < accepted.length; i++) {
    var spec = specify(encoding, accepted[i], index);

    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
      priority = spec;
    }
  }

  return priority;
}

/**
 * Get the specificity of the encoding.
 * @private
 */

function specify(encoding, spec, index) {
  var s = 0;
  if(spec.encoding.toLowerCase() === encoding.toLowerCase()){
    s |= 1;
  } else if (spec.encoding !== '*' ) {
    return null
  }

  return {
    i: index,
    o: spec.i,
    q: spec.q,
    s: s
  }
};

/**
 * Get the preferred encodings from an Accept-Encoding header.
 * @public
 */

function preferredEncodings(accept, provided) {
  var accepts = parseAcceptEncoding(accept || '');

  if (!provided) {
    // sorted list of all encodings
    return accepts
      .filter(isQuality)
      .sort(compareSpecs)
      .map(getFullEncoding);
  }

  var priorities = provided.map(function getPriority(type, index) {
    return getEncodingPriority(type, accepts, index);
  });

  // sorted list of accepted encodings
  return priorities.filter(isQuality).sort(compareSpecs).map(function getEncoding(priority) {
    return provided[priorities.indexOf(priority)];
  });
}

/**
 * Compare two specs.
 * @private
 */

function compareSpecs(a, b) {
  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
}

/**
 * Get full encoding string.
 * @private
 */

function getFullEncoding(spec) {
  return spec.encoding;
}

/**
 * Check if a spec has any quality.
 * @private
 */

function isQuality(spec) {
  return spec.q > 0;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/negotiator/lib/language.js":
/*!***************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/negotiator/lib/language.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = preferredLanguages;
module.exports.preferredLanguages = preferredLanguages;

/**
 * Module variables.
 * @private
 */

var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;

/**
 * Parse the Accept-Language header.
 * @private
 */

function parseAcceptLanguage(accept) {
  var accepts = accept.split(',');

  for (var i = 0, j = 0; i < accepts.length; i++) {
    var langauge = parseLanguage(accepts[i].trim(), i);

    if (langauge) {
      accepts[j++] = langauge;
    }
  }

  // trim accepts
  accepts.length = j;

  return accepts;
}

/**
 * Parse a language from the Accept-Language header.
 * @private
 */

function parseLanguage(str, i) {
  var match = simpleLanguageRegExp.exec(str);
  if (!match) return null;

  var prefix = match[1],
      suffix = match[2],
      full = prefix;

  if (suffix) full += "-" + suffix;

  var q = 1;
  if (match[3]) {
    var params = match[3].split(';')
    for (var i = 0; i < params.length; i ++) {
      var p = params[i].split('=');
      if (p[0] === 'q') q = parseFloat(p[1]);
    }
  }

  return {
    prefix: prefix,
    suffix: suffix,
    q: q,
    i: i,
    full: full
  };
}

/**
 * Get the priority of a language.
 * @private
 */

function getLanguagePriority(language, accepted, index) {
  var priority = {o: -1, q: 0, s: 0};

  for (var i = 0; i < accepted.length; i++) {
    var spec = specify(language, accepted[i], index);

    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
      priority = spec;
    }
  }

  return priority;
}

/**
 * Get the specificity of the language.
 * @private
 */

function specify(language, spec, index) {
  var p = parseLanguage(language)
  if (!p) return null;
  var s = 0;
  if(spec.full.toLowerCase() === p.full.toLowerCase()){
    s |= 4;
  } else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) {
    s |= 2;
  } else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) {
    s |= 1;
  } else if (spec.full !== '*' ) {
    return null
  }

  return {
    i: index,
    o: spec.i,
    q: spec.q,
    s: s
  }
};

/**
 * Get the preferred languages from an Accept-Language header.
 * @public
 */

function preferredLanguages(accept, provided) {
  // RFC 2616 sec 14.4: no header = *
  var accepts = parseAcceptLanguage(accept === undefined ? '*' : accept || '');

  if (!provided) {
    // sorted list of all languages
    return accepts
      .filter(isQuality)
      .sort(compareSpecs)
      .map(getFullLanguage);
  }

  var priorities = provided.map(function getPriority(type, index) {
    return getLanguagePriority(type, accepts, index);
  });

  // sorted list of accepted languages
  return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
    return provided[priorities.indexOf(priority)];
  });
}

/**
 * Compare two specs.
 * @private
 */

function compareSpecs(a, b) {
  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
}

/**
 * Get full language string.
 * @private
 */

function getFullLanguage(spec) {
  return spec.full;
}

/**
 * Check if a spec has any quality.
 * @private
 */

function isQuality(spec) {
  return spec.q > 0;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/negotiator/lib/mediaType.js":
/*!****************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/negotiator/lib/mediaType.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * negotiator
 * Copyright(c) 2012 Isaac Z. Schlueter
 * Copyright(c) 2014 Federico Romero
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = preferredMediaTypes;
module.exports.preferredMediaTypes = preferredMediaTypes;

/**
 * Module variables.
 * @private
 */

var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;

/**
 * Parse the Accept header.
 * @private
 */

function parseAccept(accept) {
  var accepts = splitMediaTypes(accept);

  for (var i = 0, j = 0; i < accepts.length; i++) {
    var mediaType = parseMediaType(accepts[i].trim(), i);

    if (mediaType) {
      accepts[j++] = mediaType;
    }
  }

  // trim accepts
  accepts.length = j;

  return accepts;
}

/**
 * Parse a media type from the Accept header.
 * @private
 */

function parseMediaType(str, i) {
  var match = simpleMediaTypeRegExp.exec(str);
  if (!match) return null;

  var params = Object.create(null);
  var q = 1;
  var subtype = match[2];
  var type = match[1];

  if (match[3]) {
    var kvps = splitParameters(match[3]).map(splitKeyValuePair);

    for (var j = 0; j < kvps.length; j++) {
      var pair = kvps[j];
      var key = pair[0].toLowerCase();
      var val = pair[1];

      // get the value, unwrapping quotes
      var value = val && val[0] === '"' && val[val.length - 1] === '"'
        ? val.substr(1, val.length - 2)
        : val;

      if (key === 'q') {
        q = parseFloat(value);
        break;
      }

      // store parameter
      params[key] = value;
    }
  }

  return {
    type: type,
    subtype: subtype,
    params: params,
    q: q,
    i: i
  };
}

/**
 * Get the priority of a media type.
 * @private
 */

function getMediaTypePriority(type, accepted, index) {
  var priority = {o: -1, q: 0, s: 0};

  for (var i = 0; i < accepted.length; i++) {
    var spec = specify(type, accepted[i], index);

    if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) {
      priority = spec;
    }
  }

  return priority;
}

/**
 * Get the specificity of the media type.
 * @private
 */

function specify(type, spec, index) {
  var p = parseMediaType(type);
  var s = 0;

  if (!p) {
    return null;
  }

  if(spec.type.toLowerCase() == p.type.toLowerCase()) {
    s |= 4
  } else if(spec.type != '*') {
    return null;
  }

  if(spec.subtype.toLowerCase() == p.subtype.toLowerCase()) {
    s |= 2
  } else if(spec.subtype != '*') {
    return null;
  }

  var keys = Object.keys(spec.params);
  if (keys.length > 0) {
    if (keys.every(function (k) {
      return spec.params[k] == '*' || (spec.params[k] || '').toLowerCase() == (p.params[k] || '').toLowerCase();
    })) {
      s |= 1
    } else {
      return null
    }
  }

  return {
    i: index,
    o: spec.i,
    q: spec.q,
    s: s,
  }
}

/**
 * Get the preferred media types from an Accept header.
 * @public
 */

function preferredMediaTypes(accept, provided) {
  // RFC 2616 sec 14.2: no header = */*
  var accepts = parseAccept(accept === undefined ? '*/*' : accept || '');

  if (!provided) {
    // sorted list of all types
    return accepts
      .filter(isQuality)
      .sort(compareSpecs)
      .map(getFullType);
  }

  var priorities = provided.map(function getPriority(type, index) {
    return getMediaTypePriority(type, accepts, index);
  });

  // sorted list of accepted types
  return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
    return provided[priorities.indexOf(priority)];
  });
}

/**
 * Compare two specs.
 * @private
 */

function compareSpecs(a, b) {
  return (b.q - a.q) || (b.s - a.s) || (a.o - b.o) || (a.i - b.i) || 0;
}

/**
 * Get full type string.
 * @private
 */

function getFullType(spec) {
  return spec.type + '/' + spec.subtype;
}

/**
 * Check if a spec has any quality.
 * @private
 */

function isQuality(spec) {
  return spec.q > 0;
}

/**
 * Count the number of quotes in a string.
 * @private
 */

function quoteCount(string) {
  var count = 0;
  var index = 0;

  while ((index = string.indexOf('"', index)) !== -1) {
    count++;
    index++;
  }

  return count;
}

/**
 * Split a key value pair.
 * @private
 */

function splitKeyValuePair(str) {
  var index = str.indexOf('=');
  var key;
  var val;

  if (index === -1) {
    key = str;
  } else {
    key = str.substr(0, index);
    val = str.substr(index + 1);
  }

  return [key, val];
}

/**
 * Split an Accept header into media types.
 * @private
 */

function splitMediaTypes(accept) {
  var accepts = accept.split(',');

  for (var i = 1, j = 0; i < accepts.length; i++) {
    if (quoteCount(accepts[j]) % 2 == 0) {
      accepts[++j] = accepts[i];
    } else {
      accepts[j] += ',' + accepts[i];
    }
  }

  // trim accepts
  accepts.length = j + 1;

  return accepts;
}

/**
 * Split a string of parameters.
 * @private
 */

function splitParameters(str) {
  var parameters = str.split(';');

  for (var i = 1, j = 0; i < parameters.length; i++) {
    if (quoteCount(parameters[j]) % 2 == 0) {
      parameters[++j] = parameters[i];
    } else {
      parameters[j] += ';' + parameters[i];
    }
  }

  // trim parameters
  parameters.length = j + 1;

  for (var i = 0; i < parameters.length; i++) {
    parameters[i] = parameters[i].trim();
  }

  return parameters;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/on-finished/index.js":
/*!*********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/on-finished/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * on-finished
 * Copyright(c) 2013 Jonathan Ong
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = onFinished
module.exports.isFinished = isFinished

/**
 * Module dependencies.
 * @private
 */

var first = __webpack_require__(/*! ee-first */ "../@Bonbons.koa/node_modules/ee-first/index.js")

/**
 * Variables.
 * @private
 */

/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function(fn){ process.nextTick(fn.bind.apply(fn, arguments)) }

/**
 * Invoke callback when the response has finished, useful for
 * cleaning up resources afterwards.
 *
 * @param {object} msg
 * @param {function} listener
 * @return {object}
 * @public
 */

function onFinished(msg, listener) {
  if (isFinished(msg) !== false) {
    defer(listener, null, msg)
    return msg
  }

  // attach the listener to the message
  attachListener(msg, listener)

  return msg
}

/**
 * Determine if message is already finished.
 *
 * @param {object} msg
 * @return {boolean}
 * @public
 */

function isFinished(msg) {
  var socket = msg.socket

  if (typeof msg.finished === 'boolean') {
    // OutgoingMessage
    return Boolean(msg.finished || (socket && !socket.writable))
  }

  if (typeof msg.complete === 'boolean') {
    // IncomingMessage
    return Boolean(msg.upgrade || !socket || !socket.readable || (msg.complete && !msg.readable))
  }

  // don't know
  return undefined
}

/**
 * Attach a finished listener to the message.
 *
 * @param {object} msg
 * @param {function} callback
 * @private
 */

function attachFinishedListener(msg, callback) {
  var eeMsg
  var eeSocket
  var finished = false

  function onFinish(error) {
    eeMsg.cancel()
    eeSocket.cancel()

    finished = true
    callback(error)
  }

  // finished on first message event
  eeMsg = eeSocket = first([[msg, 'end', 'finish']], onFinish)

  function onSocket(socket) {
    // remove listener
    msg.removeListener('socket', onSocket)

    if (finished) return
    if (eeMsg !== eeSocket) return

    // finished on first socket event
    eeSocket = first([[socket, 'error', 'close']], onFinish)
  }

  if (msg.socket) {
    // socket already assigned
    onSocket(msg.socket)
    return
  }

  // wait for socket to be assigned
  msg.on('socket', onSocket)

  if (msg.socket === undefined) {
    // node.js 0.8 patch
    patchAssignSocket(msg, onSocket)
  }
}

/**
 * Attach the listener to the message.
 *
 * @param {object} msg
 * @return {function}
 * @private
 */

function attachListener(msg, listener) {
  var attached = msg.__onFinished

  // create a private single listener with queue
  if (!attached || !attached.queue) {
    attached = msg.__onFinished = createListener(msg)
    attachFinishedListener(msg, attached)
  }

  attached.queue.push(listener)
}

/**
 * Create listener on message.
 *
 * @param {object} msg
 * @return {function}
 * @private
 */

function createListener(msg) {
  function listener(err) {
    if (msg.__onFinished === listener) msg.__onFinished = null
    if (!listener.queue) return

    var queue = listener.queue
    listener.queue = null

    for (var i = 0; i < queue.length; i++) {
      queue[i](err, msg)
    }
  }

  listener.queue = []

  return listener
}

/**
 * Patch ServerResponse.prototype.assignSocket for node.js 0.8.
 *
 * @param {ServerResponse} res
 * @param {function} callback
 * @private
 */

function patchAssignSocket(res, callback) {
  var assignSocket = res.assignSocket

  if (typeof assignSocket !== 'function') return

  // res.on('socket', callback) is broken in 0.8
  res.assignSocket = function _assignSocket(socket) {
    assignSocket.call(this, socket)
    callback(socket)
  }
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/only/index.js":
/*!**************************************************!*\
  !*** ../@Bonbons.koa/node_modules/only/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


module.exports = function(obj, keys){
  obj = obj || {};
  if ('string' == typeof keys) keys = keys.split(/ +/);
  return keys.reduce(function(ret, key){
    if (null == obj[key]) return ret;
    ret[key] = obj[key];
    return ret;
  }, {});
};


/***/ }),

/***/ "../@Bonbons.koa/node_modules/parseurl/index.js":
/*!******************************************************!*\
  !*** ../@Bonbons.koa/node_modules/parseurl/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * parseurl
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var url = __webpack_require__(/*! url */ "url")
var parse = url.parse
var Url = url.Url

/**
 * Module exports.
 * @public
 */

module.exports = parseurl
module.exports.original = originalurl

/**
 * Parse the `req` url with memoization.
 *
 * @param {ServerRequest} req
 * @return {Object}
 * @public
 */

function parseurl (req) {
  var url = req.url

  if (url === undefined) {
    // URL is undefined
    return undefined
  }

  var parsed = req._parsedUrl

  if (fresh(url, parsed)) {
    // Return cached URL parse
    return parsed
  }

  // Parse the URL
  parsed = fastparse(url)
  parsed._raw = url

  return (req._parsedUrl = parsed)
};

/**
 * Parse the `req` original url with fallback and memoization.
 *
 * @param {ServerRequest} req
 * @return {Object}
 * @public
 */

function originalurl (req) {
  var url = req.originalUrl

  if (typeof url !== 'string') {
    // Fallback
    return parseurl(req)
  }

  var parsed = req._parsedOriginalUrl

  if (fresh(url, parsed)) {
    // Return cached URL parse
    return parsed
  }

  // Parse the URL
  parsed = fastparse(url)
  parsed._raw = url

  return (req._parsedOriginalUrl = parsed)
};

/**
 * Parse the `str` url with fast-path short-cut.
 *
 * @param {string} str
 * @return {Object}
 * @private
 */

function fastparse (str) {
  if (typeof str !== 'string' || str.charCodeAt(0) !== 0x2f /* / */) {
    return parse(str)
  }

  var pathname = str
  var query = null
  var search = null

  // This takes the regexp from https://github.com/joyent/node/pull/7878
  // Which is /^(\/[^?#\s]*)(\?[^#\s]*)?$/
  // And unrolls it into a for loop
  for (var i = 1; i < str.length; i++) {
    switch (str.charCodeAt(i)) {
      case 0x3f: /* ?  */
        if (search === null) {
          pathname = str.substring(0, i)
          query = str.substring(i + 1)
          search = str.substring(i)
        }
        break
      case 0x09: /* \t */
      case 0x0a: /* \n */
      case 0x0c: /* \f */
      case 0x0d: /* \r */
      case 0x20: /*    */
      case 0x23: /* #  */
      case 0xa0:
      case 0xfeff:
        return parse(str)
    }
  }

  var url = Url !== undefined
    ? new Url()
    : {}
  url.path = str
  url.href = str
  url.pathname = pathname
  url.query = query
  url.search = search

  return url
}

/**
 * Determine if parsed is still fresh for url.
 *
 * @param {string} url
 * @param {object} parsedUrl
 * @return {boolean}
 * @private
 */

function fresh (url, parsedUrl) {
  return typeof parsedUrl === 'object' &&
    parsedUrl !== null &&
    (Url === undefined || parsedUrl instanceof Url) &&
    parsedUrl._raw === url
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/setprototypeof/index.js":
/*!************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/setprototypeof/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Object.setPrototypeOf || ({__proto__:[]} instanceof Array ? setProtoOf : mixinProperties);

function setProtoOf(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

function mixinProperties(obj, proto) {
	for (var prop in proto) {
		if (!obj.hasOwnProperty(prop)) {
			obj[prop] = proto[prop];
		}
	}
	return obj;
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/statuses/codes.json":
/*!********************************************************!*\
  !*** ../@Bonbons.koa/node_modules/statuses/codes.json ***!
  \********************************************************/
/*! exports provided: 100, 101, 102, 103, 200, 201, 202, 203, 204, 205, 206, 207, 208, 226, 300, 301, 302, 303, 304, 305, 306, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, default */
/***/ (function(module) {

module.exports = {"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","306":"(Unused)","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I'm a teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Unordered Collection","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"};

/***/ }),

/***/ "../@Bonbons.koa/node_modules/statuses/index.js":
/*!******************************************************!*\
  !*** ../@Bonbons.koa/node_modules/statuses/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var codes = __webpack_require__(/*! ./codes.json */ "../@Bonbons.koa/node_modules/statuses/codes.json")

/**
 * Module exports.
 * @public
 */

module.exports = status

// status code to message map
status.STATUS_CODES = codes

// array of status codes
status.codes = populateStatusesMap(status, codes)

// status codes for redirects
status.redirect = {
  300: true,
  301: true,
  302: true,
  303: true,
  305: true,
  307: true,
  308: true
}

// status codes for empty bodies
status.empty = {
  204: true,
  205: true,
  304: true
}

// status codes for when you should retry the request
status.retry = {
  502: true,
  503: true,
  504: true
}

/**
 * Populate the statuses map for given codes.
 * @private
 */

function populateStatusesMap (statuses, codes) {
  var arr = []

  Object.keys(codes).forEach(function forEachCode (code) {
    var message = codes[code]
    var status = Number(code)

    // Populate properties
    statuses[status] = message
    statuses[message] = status
    statuses[message.toLowerCase()] = status

    // Add to array
    arr.push(status)
  })

  return arr
}

/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param {string|number} code
 * @returns {number}
 * @public
 */

function status (code) {
  if (typeof code === 'number') {
    if (!status[code]) throw new Error('invalid status code: ' + code)
    return code
  }

  if (typeof code !== 'string') {
    throw new TypeError('code must be a number or string')
  }

  // '403'
  var n = parseInt(code, 10)
  if (!isNaN(n)) {
    if (!status[n]) throw new Error('invalid status code: ' + n)
    return n
  }

  n = status[code.toLowerCase()]
  if (!n) throw new Error('invalid status message: "' + code + '"')
  return n
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/supports-color/index.js":
/*!************************************************************!*\
  !*** ../@Bonbons.koa/node_modules/supports-color/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var argv = process.argv;

var terminator = argv.indexOf('--');
var hasFlag = function (flag) {
	flag = '--' + flag;
	var pos = argv.indexOf(flag);
	return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
};

module.exports = (function () {
	if ('FORCE_COLOR' in process.env) {
		return true;
	}

	if (hasFlag('no-color') ||
		hasFlag('no-colors') ||
		hasFlag('color=false')) {
		return false;
	}

	if (hasFlag('color') ||
		hasFlag('colors') ||
		hasFlag('color=true') ||
		hasFlag('color=always')) {
		return true;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return false;
	}

	if (process.platform === 'win32') {
		return true;
	}

	if ('COLORTERM' in process.env) {
		return true;
	}

	if (process.env.TERM === 'dumb') {
		return false;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
		return true;
	}

	return false;
})();


/***/ }),

/***/ "../@Bonbons.koa/node_modules/type-is/index.js":
/*!*****************************************************!*\
  !*** ../@Bonbons.koa/node_modules/type-is/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * type-is
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var typer = __webpack_require__(/*! media-typer */ "../@Bonbons.koa/node_modules/media-typer/index.js")
var mime = __webpack_require__(/*! mime-types */ "../@Bonbons.koa/node_modules/mime-types/index.js")

/**
 * Module exports.
 * @public
 */

module.exports = typeofrequest
module.exports.is = typeis
module.exports.hasBody = hasbody
module.exports.normalize = normalize
module.exports.match = mimeMatch

/**
 * Compare a `value` content-type with `types`.
 * Each `type` can be an extension like `html`,
 * a special shortcut like `multipart` or `urlencoded`,
 * or a mime type.
 *
 * If no types match, `false` is returned.
 * Otherwise, the first `type` that matches is returned.
 *
 * @param {String} value
 * @param {Array} types
 * @public
 */

function typeis (value, types_) {
  var i
  var types = types_

  // remove parameters and normalize
  var val = tryNormalizeType(value)

  // no type or invalid
  if (!val) {
    return false
  }

  // support flattened arguments
  if (types && !Array.isArray(types)) {
    types = new Array(arguments.length - 1)
    for (i = 0; i < types.length; i++) {
      types[i] = arguments[i + 1]
    }
  }

  // no types, return the content type
  if (!types || !types.length) {
    return val
  }

  var type
  for (i = 0; i < types.length; i++) {
    if (mimeMatch(normalize(type = types[i]), val)) {
      return type[0] === '+' || type.indexOf('*') !== -1
        ? val
        : type
    }
  }

  // no matches
  return false
}

/**
 * Check if a request has a request body.
 * A request with a body __must__ either have `transfer-encoding`
 * or `content-length` headers set.
 * http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.3
 *
 * @param {Object} request
 * @return {Boolean}
 * @public
 */

function hasbody (req) {
  return req.headers['transfer-encoding'] !== undefined ||
    !isNaN(req.headers['content-length'])
}

/**
 * Check if the incoming request contains the "Content-Type"
 * header field, and it contains any of the give mime `type`s.
 * If there is no request body, `null` is returned.
 * If there is no content type, `false` is returned.
 * Otherwise, it returns the first `type` that matches.
 *
 * Examples:
 *
 *     // With Content-Type: text/html; charset=utf-8
 *     this.is('html'); // => 'html'
 *     this.is('text/html'); // => 'text/html'
 *     this.is('text/*', 'application/json'); // => 'text/html'
 *
 *     // When Content-Type is application/json
 *     this.is('json', 'urlencoded'); // => 'json'
 *     this.is('application/json'); // => 'application/json'
 *     this.is('html', 'application/*'); // => 'application/json'
 *
 *     this.is('html'); // => false
 *
 * @param {String|Array} types...
 * @return {String|false|null}
 * @public
 */

function typeofrequest (req, types_) {
  var types = types_

  // no body
  if (!hasbody(req)) {
    return null
  }

  // support flattened arguments
  if (arguments.length > 2) {
    types = new Array(arguments.length - 1)
    for (var i = 0; i < types.length; i++) {
      types[i] = arguments[i + 1]
    }
  }

  // request content type
  var value = req.headers['content-type']

  return typeis(value, types)
}

/**
 * Normalize a mime type.
 * If it's a shorthand, expand it to a valid mime type.
 *
 * In general, you probably want:
 *
 *   var type = is(req, ['urlencoded', 'json', 'multipart']);
 *
 * Then use the appropriate body parsers.
 * These three are the most common request body types
 * and are thus ensured to work.
 *
 * @param {String} type
 * @private
 */

function normalize (type) {
  if (typeof type !== 'string') {
    // invalid type
    return false
  }

  switch (type) {
    case 'urlencoded':
      return 'application/x-www-form-urlencoded'
    case 'multipart':
      return 'multipart/*'
  }

  if (type[0] === '+') {
    // "+json" -> "*/*+json" expando
    return '*/*' + type
  }

  return type.indexOf('/') === -1
    ? mime.lookup(type)
    : type
}

/**
 * Check if `expected` mime type
 * matches `actual` mime type with
 * wildcard and +suffix support.
 *
 * @param {String} expected
 * @param {String} actual
 * @return {Boolean}
 * @private
 */

function mimeMatch (expected, actual) {
  // invalid type
  if (expected === false) {
    return false
  }

  // split types
  var actualParts = actual.split('/')
  var expectedParts = expected.split('/')

  // invalid format
  if (actualParts.length !== 2 || expectedParts.length !== 2) {
    return false
  }

  // validate type
  if (expectedParts[0] !== '*' && expectedParts[0] !== actualParts[0]) {
    return false
  }

  // validate suffix wildcard
  if (expectedParts[1].substr(0, 2) === '*+') {
    return expectedParts[1].length <= actualParts[1].length + 1 &&
      expectedParts[1].substr(1) === actualParts[1].substr(1 - expectedParts[1].length)
  }

  // validate subtype
  if (expectedParts[1] !== '*' && expectedParts[1] !== actualParts[1]) {
    return false
  }

  return true
}

/**
 * Normalize a type and remove parameters.
 *
 * @param {string} value
 * @return {string}
 * @private
 */

function normalizeType (value) {
  // parse the type
  var type = typer.parse(value)

  // remove the parameters
  type.parameters = undefined

  // reformat it
  return typer.format(type)
}

/**
 * Try to normalize a type and remove parameters.
 *
 * @param {string} value
 * @return {string}
 * @private
 */

function tryNormalizeType (value) {
  try {
    return normalizeType(value)
  } catch (err) {
    return null
  }
}


/***/ }),

/***/ "../@Bonbons.koa/node_modules/vary/index.js":
/*!**************************************************!*\
  !*** ../@Bonbons.koa/node_modules/vary/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 */

module.exports = vary
module.exports.append = append

/**
 * RegExp to match field-name in RFC 7230 sec 3.2
 *
 * field-name    = token
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 */

var FIELD_NAME_REGEXP = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/

/**
 * Append a field to a vary header.
 *
 * @param {String} header
 * @param {String|Array} field
 * @return {String}
 * @public
 */

function append (header, field) {
  if (typeof header !== 'string') {
    throw new TypeError('header argument is required')
  }

  if (!field) {
    throw new TypeError('field argument is required')
  }

  // get fields array
  var fields = !Array.isArray(field)
    ? parse(String(field))
    : field

  // assert on invalid field names
  for (var j = 0; j < fields.length; j++) {
    if (!FIELD_NAME_REGEXP.test(fields[j])) {
      throw new TypeError('field argument contains an invalid header name')
    }
  }

  // existing, unspecified vary
  if (header === '*') {
    return header
  }

  // enumerate current values
  var val = header
  var vals = parse(header.toLowerCase())

  // unspecified vary
  if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) {
    return '*'
  }

  for (var i = 0; i < fields.length; i++) {
    var fld = fields[i].toLowerCase()

    // append value (case-preserving)
    if (vals.indexOf(fld) === -1) {
      vals.push(fld)
      val = val
        ? val + ', ' + fields[i]
        : fields[i]
    }
  }

  return val
}

/**
 * Parse a vary header into an array.
 *
 * @param {String} header
 * @return {Array}
 * @private
 */

function parse (header) {
  var end = 0
  var list = []
  var start = 0

  // gather tokens
  for (var i = 0, len = header.length; i < len; i++) {
    switch (header.charCodeAt(i)) {
      case 0x20: /*   */
        if (start === end) {
          start = end = i + 1
        }
        break
      case 0x2c: /* , */
        list.push(header.substring(start, end))
        start = end = i + 1
        break
      default:
        end = i + 1
        break
    }
  }

  // final token
  list.push(header.substring(start, end))

  return list
}

/**
 * Mark that a request is varied on a header field.
 *
 * @param {Object} res
 * @param {String|Array} field
 * @public
 */

function vary (res, field) {
  if (!res || !res.getHeader || !res.setHeader) {
    // quack quack
    throw new TypeError('res argument is required')
  }

  // get existing header
  var val = res.getHeader('Vary') || ''
  var header = Array.isArray(val)
    ? val.join(', ')
    : String(val)

  // set new header
  if ((val = append(header, field))) {
    res.setHeader('Vary', val)
  }
}


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _Bonbons_1 = __webpack_require__(/*! @Bonbons */ "../@Bonbons.koa/index.ts");
_Bonbons_1.app.use((ctx) => __awaiter(this, void 0, void 0, function* () {
    ctx.body = "hello koa2";
}));
_Bonbons_1.app.listen(3000);
console.log("[demo] start-quick is starting at port 3000");


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vQEJvbmJvbnMua29hL25vZGVfbW9kdWxlcy9hY2NlcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2FueS1wcm9taXNlIHN5bmMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvYW55LXByb21pc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvYW55LXByb21pc2UvbG9hZGVyLmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2FueS1wcm9taXNlL3JlZ2lzdGVyLmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2NvL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2NvbnRlbnQtZGlzcG9zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvY29udGVudC10eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2Nvb2tpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2RlYnVnLmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vQEJvbmJvbnMua29hL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vQEJvbmJvbnMua29hL25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvbGliL2lzX2FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi4vQEJvbmJvbnMua29hL25vZGVfbW9kdWxlcy9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2RlbGVnYXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vQEJvbmJvbnMua29hL25vZGVfbW9kdWxlcy9kZXBkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2RlcGQvbGliL2NvbXBhdC9jYWxsc2l0ZS10b3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vQEJvbmJvbnMua29hL25vZGVfbW9kdWxlcy9kZXBkL2xpYi9jb21wYXQvZXZlbnQtbGlzdGVuZXItY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvZGVwZC9saWIvY29tcGF0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2Rlc3Ryb3kvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvZWUtZmlyc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvZXJyb3ItaW5qZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2VzY2FwZS1odG1sL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2ZyZXNoL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2h0dHAtYXNzZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2h0dHAtZXJyb3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzLmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvaXMtZ2VuZXJhdG9yLWZ1bmN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2tleWdyaXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMva29hLWNvbXBvc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMva29hLWNvbnZlcnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMva29hLWNvbnZlcnQvbm9kZV9tb2R1bGVzL2tvYS1jb21wb3NlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2tvYS1pcy1qc29uL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2tvYS9saWIvYXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMva29hL2xpYi9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL2tvYS9saWIvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi4vQEJvbmJvbnMua29hL25vZGVfbW9kdWxlcy9rb2EvbGliL3Jlc3BvbnNlLmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL21lZGlhLXR5cGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL21pbWUtZGIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvbWltZS10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vQEJvbmJvbnMua29hL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vQEJvbmJvbnMua29hL25vZGVfbW9kdWxlcy9uZWdvdGlhdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL25lZ290aWF0b3IvbGliL2NoYXJzZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvbmVnb3RpYXRvci9saWIvZW5jb2RpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvbmVnb3RpYXRvci9saWIvbGFuZ3VhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvbmVnb3RpYXRvci9saWIvbWVkaWFUeXBlLmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL29uLWZpbmlzaGVkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9AQm9uYm9ucy5rb2Evbm9kZV9tb2R1bGVzL29ubHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvcGFyc2V1cmwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvc2V0cHJvdG90eXBlb2YvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvc3RhdHVzZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvdHlwZS1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vQEJvbmJvbnMua29hL25vZGVfbW9kdWxlcy92YXJ5L2luZGV4LmpzIiwid2VicGFjazovLy8uL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV2ZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5ldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmVhbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInR0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV0aWxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsa0JBQWtCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsaUNBQWlDO0FBQzVELGNBQWMsb0JBQW9CO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTs7Ozs7Ozs7Ozs7O0FDeElBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDblFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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YztBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCxJQUFJOztBQUUxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2UEE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakMsYUFBYSxvQkFBb0I7QUFDakMsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLE1BQU07O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hOQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLGNBQWMsY0FBYyxLQUFLLFVBQVU7QUFDM0MsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSTs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxpQkFBaUI7QUFDaEMsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxzQ0FBc0MsU0FBUyxLQUFLLEtBQUssRUFBRSxZQUFZO0FBQ3ZFLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxhQUFhO0FBQzFCLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGFBQWE7QUFDMUIsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsOENB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QyxTQUFTO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUMzTEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFD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QTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEhBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDakREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsTUFBTTtBQUNqQjtBQUNB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QUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEpBLG1GQUErQjtBQUUvQixjQUFHLENBQUMsR0FBRyxDQUFDLENBQU8sR0FBRyxFQUFFLEVBQUU7SUFDcEIsR0FBRyxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7QUFDMUIsQ0FBQyxFQUFDLENBQUM7QUFFSCxjQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDUDNELG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBkZWZhdWx0IGFzIEtvYSB9IGZyb20gXCJrb2FcIjtcbmNvbnNvbGUubG9nKEtvYSk7XG5jb25zdCBhcHAgPSBuZXcgS29hKCk7XG5cbi8vIGFwcC51c2UoYXN5bmMgKGN0eCkgPT4ge1xuLy8gICBjdHguYm9keSA9IFwiaGVsbG8ga29hMlwiO1xuLy8gfSk7XG5cbi8vIGFwcC5saXN0ZW4oMzAwMCk7XG4vLyBjb25zb2xlLmxvZyhcIltkZW1vXSBzdGFydC1xdWljayBpcyBzdGFydGluZyBhdCBwb3J0IDMwMDBcIik7XG5cbmV4cG9ydCB7IGFwcCB9O1xuIiwiLyohXG4gKiBhY2NlcHRzXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBKb25hdGhhbiBPbmdcbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgTmVnb3RpYXRvciA9IHJlcXVpcmUoJ25lZ290aWF0b3InKVxudmFyIG1pbWUgPSByZXF1aXJlKCdtaW1lLXR5cGVzJylcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFjY2VwdHNcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgQWNjZXB0cyBvYmplY3QgZm9yIHRoZSBnaXZlbiByZXEuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEFjY2VwdHMgKHJlcSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQWNjZXB0cykpIHtcbiAgICByZXR1cm4gbmV3IEFjY2VwdHMocmVxKVxuICB9XG5cbiAgdGhpcy5oZWFkZXJzID0gcmVxLmhlYWRlcnNcbiAgdGhpcy5uZWdvdGlhdG9yID0gbmV3IE5lZ290aWF0b3IocmVxKVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBgdHlwZShzKWAgaXMgYWNjZXB0YWJsZSwgcmV0dXJuaW5nXG4gKiB0aGUgYmVzdCBtYXRjaCB3aGVuIHRydWUsIG90aGVyd2lzZSBgdW5kZWZpbmVkYCwgaW4gd2hpY2hcbiAqIGNhc2UgeW91IHNob3VsZCByZXNwb25kIHdpdGggNDA2IFwiTm90IEFjY2VwdGFibGVcIi5cbiAqXG4gKiBUaGUgYHR5cGVgIHZhbHVlIG1heSBiZSBhIHNpbmdsZSBtaW1lIHR5cGUgc3RyaW5nXG4gKiBzdWNoIGFzIFwiYXBwbGljYXRpb24vanNvblwiLCB0aGUgZXh0ZW5zaW9uIG5hbWVcbiAqIHN1Y2ggYXMgXCJqc29uXCIgb3IgYW4gYXJyYXkgYFtcImpzb25cIiwgXCJodG1sXCIsIFwidGV4dC9wbGFpblwiXWAuIFdoZW4gYSBsaXN0XG4gKiBvciBhcnJheSBpcyBnaXZlbiB0aGUgX2Jlc3RfIG1hdGNoLCBpZiBhbnkgaXMgcmV0dXJuZWQuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgIC8vIEFjY2VwdDogdGV4dC9odG1sXG4gKiAgICAgdGhpcy50eXBlcygnaHRtbCcpO1xuICogICAgIC8vID0+IFwiaHRtbFwiXG4gKlxuICogICAgIC8vIEFjY2VwdDogdGV4dC8qLCBhcHBsaWNhdGlvbi9qc29uXG4gKiAgICAgdGhpcy50eXBlcygnaHRtbCcpO1xuICogICAgIC8vID0+IFwiaHRtbFwiXG4gKiAgICAgdGhpcy50eXBlcygndGV4dC9odG1sJyk7XG4gKiAgICAgLy8gPT4gXCJ0ZXh0L2h0bWxcIlxuICogICAgIHRoaXMudHlwZXMoJ2pzb24nLCAndGV4dCcpO1xuICogICAgIC8vID0+IFwianNvblwiXG4gKiAgICAgdGhpcy50eXBlcygnYXBwbGljYXRpb24vanNvbicpO1xuICogICAgIC8vID0+IFwiYXBwbGljYXRpb24vanNvblwiXG4gKlxuICogICAgIC8vIEFjY2VwdDogdGV4dC8qLCBhcHBsaWNhdGlvbi9qc29uXG4gKiAgICAgdGhpcy50eXBlcygnaW1hZ2UvcG5nJyk7XG4gKiAgICAgdGhpcy50eXBlcygncG5nJyk7XG4gKiAgICAgLy8gPT4gdW5kZWZpbmVkXG4gKlxuICogICAgIC8vIEFjY2VwdDogdGV4dC8qO3E9LjUsIGFwcGxpY2F0aW9uL2pzb25cbiAqICAgICB0aGlzLnR5cGVzKFsnaHRtbCcsICdqc29uJ10pO1xuICogICAgIHRoaXMudHlwZXMoJ2h0bWwnLCAnanNvbicpO1xuICogICAgIC8vID0+IFwianNvblwiXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHR5cGVzLi4uXG4gKiBAcmV0dXJuIHtTdHJpbmd8QXJyYXl8Qm9vbGVhbn1cbiAqIEBwdWJsaWNcbiAqL1xuXG5BY2NlcHRzLnByb3RvdHlwZS50eXBlID1cbkFjY2VwdHMucHJvdG90eXBlLnR5cGVzID0gZnVuY3Rpb24gKHR5cGVzXykge1xuICB2YXIgdHlwZXMgPSB0eXBlc19cblxuICAvLyBzdXBwb3J0IGZsYXR0ZW5lZCBhcmd1bWVudHNcbiAgaWYgKHR5cGVzICYmICFBcnJheS5pc0FycmF5KHR5cGVzKSkge1xuICAgIHR5cGVzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0eXBlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdHlwZXNbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gIH1cblxuICAvLyBubyB0eXBlcywgcmV0dXJuIGFsbCByZXF1ZXN0ZWQgdHlwZXNcbiAgaWYgKCF0eXBlcyB8fCB0eXBlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGhpcy5uZWdvdGlhdG9yLm1lZGlhVHlwZXMoKVxuICB9XG5cbiAgLy8gbm8gYWNjZXB0IGhlYWRlciwgcmV0dXJuIGZpcnN0IGdpdmVuIHR5cGVcbiAgaWYgKCF0aGlzLmhlYWRlcnMuYWNjZXB0KSB7XG4gICAgcmV0dXJuIHR5cGVzWzBdXG4gIH1cblxuICB2YXIgbWltZXMgPSB0eXBlcy5tYXAoZXh0VG9NaW1lKVxuICB2YXIgYWNjZXB0cyA9IHRoaXMubmVnb3RpYXRvci5tZWRpYVR5cGVzKG1pbWVzLmZpbHRlcih2YWxpZE1pbWUpKVxuICB2YXIgZmlyc3QgPSBhY2NlcHRzWzBdXG5cbiAgcmV0dXJuIGZpcnN0XG4gICAgPyB0eXBlc1ttaW1lcy5pbmRleE9mKGZpcnN0KV1cbiAgICA6IGZhbHNlXG59XG5cbi8qKlxuICogUmV0dXJuIGFjY2VwdGVkIGVuY29kaW5ncyBvciBiZXN0IGZpdCBiYXNlZCBvbiBgZW5jb2RpbmdzYC5cbiAqXG4gKiBHaXZlbiBgQWNjZXB0LUVuY29kaW5nOiBnemlwLCBkZWZsYXRlYFxuICogYW4gYXJyYXkgc29ydGVkIGJ5IHF1YWxpdHkgaXMgcmV0dXJuZWQ6XG4gKlxuICogICAgIFsnZ3ppcCcsICdkZWZsYXRlJ11cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gZW5jb2RpbmdzLi4uXG4gKiBAcmV0dXJuIHtTdHJpbmd8QXJyYXl9XG4gKiBAcHVibGljXG4gKi9cblxuQWNjZXB0cy5wcm90b3R5cGUuZW5jb2RpbmcgPVxuQWNjZXB0cy5wcm90b3R5cGUuZW5jb2RpbmdzID0gZnVuY3Rpb24gKGVuY29kaW5nc18pIHtcbiAgdmFyIGVuY29kaW5ncyA9IGVuY29kaW5nc19cblxuICAvLyBzdXBwb3J0IGZsYXR0ZW5lZCBhcmd1bWVudHNcbiAgaWYgKGVuY29kaW5ncyAmJiAhQXJyYXkuaXNBcnJheShlbmNvZGluZ3MpKSB7XG4gICAgZW5jb2RpbmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGVuY29kaW5nc1tpXSA9IGFyZ3VtZW50c1tpXVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vIGVuY29kaW5ncywgcmV0dXJuIGFsbCByZXF1ZXN0ZWQgZW5jb2RpbmdzXG4gIGlmICghZW5jb2RpbmdzIHx8IGVuY29kaW5ncy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGhpcy5uZWdvdGlhdG9yLmVuY29kaW5ncygpXG4gIH1cblxuICByZXR1cm4gdGhpcy5uZWdvdGlhdG9yLmVuY29kaW5ncyhlbmNvZGluZ3MpWzBdIHx8IGZhbHNlXG59XG5cbi8qKlxuICogUmV0dXJuIGFjY2VwdGVkIGNoYXJzZXRzIG9yIGJlc3QgZml0IGJhc2VkIG9uIGBjaGFyc2V0c2AuXG4gKlxuICogR2l2ZW4gYEFjY2VwdC1DaGFyc2V0OiB1dGYtOCwgaXNvLTg4NTktMTtxPTAuMiwgdXRmLTc7cT0wLjVgXG4gKiBhbiBhcnJheSBzb3J0ZWQgYnkgcXVhbGl0eSBpcyByZXR1cm5lZDpcbiAqXG4gKiAgICAgWyd1dGYtOCcsICd1dGYtNycsICdpc28tODg1OS0xJ11cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gY2hhcnNldHMuLi5cbiAqIEByZXR1cm4ge1N0cmluZ3xBcnJheX1cbiAqIEBwdWJsaWNcbiAqL1xuXG5BY2NlcHRzLnByb3RvdHlwZS5jaGFyc2V0ID1cbkFjY2VwdHMucHJvdG90eXBlLmNoYXJzZXRzID0gZnVuY3Rpb24gKGNoYXJzZXRzXykge1xuICB2YXIgY2hhcnNldHMgPSBjaGFyc2V0c19cblxuICAvLyBzdXBwb3J0IGZsYXR0ZW5lZCBhcmd1bWVudHNcbiAgaWYgKGNoYXJzZXRzICYmICFBcnJheS5pc0FycmF5KGNoYXJzZXRzKSkge1xuICAgIGNoYXJzZXRzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFyc2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNldHNbaV0gPSBhcmd1bWVudHNbaV1cbiAgICB9XG4gIH1cblxuICAvLyBubyBjaGFyc2V0cywgcmV0dXJuIGFsbCByZXF1ZXN0ZWQgY2hhcnNldHNcbiAgaWYgKCFjaGFyc2V0cyB8fCBjaGFyc2V0cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdGhpcy5uZWdvdGlhdG9yLmNoYXJzZXRzKClcbiAgfVxuXG4gIHJldHVybiB0aGlzLm5lZ290aWF0b3IuY2hhcnNldHMoY2hhcnNldHMpWzBdIHx8IGZhbHNlXG59XG5cbi8qKlxuICogUmV0dXJuIGFjY2VwdGVkIGxhbmd1YWdlcyBvciBiZXN0IGZpdCBiYXNlZCBvbiBgbGFuZ3NgLlxuICpcbiAqIEdpdmVuIGBBY2NlcHQtTGFuZ3VhZ2U6IGVuO3E9MC44LCBlcywgcHRgXG4gKiBhbiBhcnJheSBzb3J0ZWQgYnkgcXVhbGl0eSBpcyByZXR1cm5lZDpcbiAqXG4gKiAgICAgWydlcycsICdwdCcsICdlbiddXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IGxhbmdzLi4uXG4gKiBAcmV0dXJuIHtBcnJheXxTdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuQWNjZXB0cy5wcm90b3R5cGUubGFuZyA9XG5BY2NlcHRzLnByb3RvdHlwZS5sYW5ncyA9XG5BY2NlcHRzLnByb3RvdHlwZS5sYW5ndWFnZSA9XG5BY2NlcHRzLnByb3RvdHlwZS5sYW5ndWFnZXMgPSBmdW5jdGlvbiAobGFuZ3VhZ2VzXykge1xuICB2YXIgbGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzX1xuXG4gIC8vIHN1cHBvcnQgZmxhdHRlbmVkIGFyZ3VtZW50c1xuICBpZiAobGFuZ3VhZ2VzICYmICFBcnJheS5pc0FycmF5KGxhbmd1YWdlcykpIHtcbiAgICBsYW5ndWFnZXMgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhbmd1YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGFuZ3VhZ2VzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuICB9XG5cbiAgLy8gbm8gbGFuZ3VhZ2VzLCByZXR1cm4gYWxsIHJlcXVlc3RlZCBsYW5ndWFnZXNcbiAgaWYgKCFsYW5ndWFnZXMgfHwgbGFuZ3VhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0aGlzLm5lZ290aWF0b3IubGFuZ3VhZ2VzKClcbiAgfVxuXG4gIHJldHVybiB0aGlzLm5lZ290aWF0b3IubGFuZ3VhZ2VzKGxhbmd1YWdlcylbMF0gfHwgZmFsc2Vcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGV4dG5hbWVzIHRvIG1pbWUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZXh0VG9NaW1lICh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmluZGV4T2YoJy8nKSA9PT0gLTFcbiAgICA/IG1pbWUubG9va3VwKHR5cGUpXG4gICAgOiB0eXBlXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgbWltZSBpcyB2YWxpZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHJldHVybiB7U3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB2YWxpZE1pbWUgKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJ1xufVxuIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5Q29udGV4dChyZXEpIHtcblx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdHRocm93IGU7XG59XG53ZWJwYWNrRW1wdHlDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5Q29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5Q29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5Q29udGV4dDtcbndlYnBhY2tFbXB0eUNvbnRleHQuaWQgPSBcIi4uL0BCb25ib25zLmtvYS9ub2RlX21vZHVsZXMvYW55LXByb21pc2Ugc3luYyByZWN1cnNpdmVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vcmVnaXN0ZXInKSgpLlByb21pc2VcbiIsIlwidXNlIHN0cmljdFwiXG4gICAgLy8gZ2xvYmFsIGtleSBmb3IgdXNlciBwcmVmZXJyZWQgcmVnaXN0cmF0aW9uXG52YXIgUkVHSVNUUkFUSU9OX0tFWSA9ICdAQGFueS1wcm9taXNlL1JFR0lTVFJBVElPTicsXG4gICAgLy8gUHJpb3IgcmVnaXN0cmF0aW9uIChwcmVmZXJyZWQgb3IgZGV0ZWN0ZWQpXG4gICAgcmVnaXN0ZXJlZCA9IG51bGxcblxuLyoqXG4gKiBSZWdpc3RlcnMgdGhlIGdpdmVuIGltcGxlbWVudGF0aW9uLiAgQW4gaW1wbGVtZW50YXRpb24gbXVzdFxuICogYmUgcmVnaXN0ZXJlZCBwcmlvciB0byBhbnkgY2FsbCB0byBgcmVxdWlyZShcImFueS1wcm9taXNlXCIpYCxcbiAqIHR5cGljYWxseSBvbiBhcHBsaWNhdGlvbiBsb2FkLlxuICpcbiAqIElmIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50cywgd2lsbCByZXR1cm4gcmVnaXN0cmF0aW9uIGluXG4gKiBmb2xsb3dpbmcgcHJpb3JpdHk6XG4gKlxuICogRm9yIE5vZGUuanM6XG4gKlxuICogMS4gUHJldmlvdXMgcmVnaXN0cmF0aW9uXG4gKiAyLiBnbG9iYWwuUHJvbWlzZSBpZiBub2RlLmpzIHZlcnNpb24gPj0gMC4xMlxuICogMy4gQXV0byBkZXRlY3RlZCBwcm9taXNlIGJhc2VkIG9uIGZpcnN0IHN1Y2Vzc2Z1bCByZXF1aXJlIG9mXG4gKiAgICBrbm93biBwcm9taXNlIGxpYnJhcmllcy4gTm90ZSB0aGlzIGlzIGEgbGFzdCByZXNvcnQsIGFzIHRoZVxuICogICAgbG9hZGVkIGxpYnJhcnkgaXMgbm9uLWRldGVybWluaXN0aWMuIG5vZGUuanMgPj0gMC4xMiB3aWxsXG4gKiAgICBhbHdheXMgdXNlIGdsb2JhbC5Qcm9taXNlIG92ZXIgdGhpcyBwcmlvcml0eSBsaXN0LlxuICogNC4gVGhyb3dzIGVycm9yLlxuICpcbiAqIEZvciBCcm93c2VyOlxuICpcbiAqIDEuIFByZXZpb3VzIHJlZ2lzdHJhdGlvblxuICogMi4gd2luZG93LlByb21pc2VcbiAqIDMuIFRocm93cyBlcnJvci5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqIFByb21pc2U6IERlc2lyZWQgUHJvbWlzZSBjb25zdHJ1Y3RvclxuICogZ2xvYmFsOiBCb29sZWFuIC0gU2hvdWxkIHRoZSByZWdpc3RyYXRpb24gYmUgY2FjaGVkIGluIGEgZ2xvYmFsIHZhcmlhYmxlIHRvXG4gKiBhbGxvdyBjcm9zcyBkZXBlbmRlbmN5L2J1bmRsZSByZWdpc3RyYXRpb24/ICAoZGVmYXVsdCB0cnVlKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJvb3QsIGxvYWRJbXBsZW1lbnRhdGlvbil7XG4gIHJldHVybiBmdW5jdGlvbiByZWdpc3RlcihpbXBsZW1lbnRhdGlvbiwgb3B0cyl7XG4gICAgaW1wbGVtZW50YXRpb24gPSBpbXBsZW1lbnRhdGlvbiB8fCBudWxsXG4gICAgb3B0cyA9IG9wdHMgfHwge31cbiAgICAvLyBnbG9iYWwgcmVnaXN0cmF0aW9uIHVubGVzcyBleHBsaWNpdGx5ICB7Z2xvYmFsOiBmYWxzZX0gaW4gb3B0aW9ucyAoZGVmYXVsdCB0cnVlKVxuICAgIHZhciByZWdpc3Rlckdsb2JhbCA9IG9wdHMuZ2xvYmFsICE9PSBmYWxzZTtcblxuICAgIC8vIGxvYWQgYW55IHByZXZpb3VzIGdsb2JhbCByZWdpc3RyYXRpb25cbiAgICBpZihyZWdpc3RlcmVkID09PSBudWxsICYmIHJlZ2lzdGVyR2xvYmFsKXtcbiAgICAgIHJlZ2lzdGVyZWQgPSByb290W1JFR0lTVFJBVElPTl9LRVldIHx8IG51bGxcbiAgICB9XG5cbiAgICBpZihyZWdpc3RlcmVkICE9PSBudWxsXG4gICAgICAgICYmIGltcGxlbWVudGF0aW9uICE9PSBudWxsXG4gICAgICAgICYmIHJlZ2lzdGVyZWQuaW1wbGVtZW50YXRpb24gIT09IGltcGxlbWVudGF0aW9uKXtcbiAgICAgIC8vIFRocm93IGVycm9yIGlmIGF0dGVtcHRpbmcgdG8gcmVkZWZpbmUgaW1wbGVtZW50YXRpb25cbiAgICAgIHRocm93IG5ldyBFcnJvcignYW55LXByb21pc2UgYWxyZWFkeSBkZWZpbmVkIGFzIFwiJytyZWdpc3RlcmVkLmltcGxlbWVudGF0aW9uK1xuICAgICAgICAnXCIuICBZb3UgY2FuIG9ubHkgcmVnaXN0ZXIgYW4gaW1wbGVtZW50YXRpb24gYmVmb3JlIHRoZSBmaXJzdCAnK1xuICAgICAgICAnIGNhbGwgdG8gcmVxdWlyZShcImFueS1wcm9taXNlXCIpIGFuZCBhbiBpbXBsZW1lbnRhdGlvbiBjYW5ub3QgYmUgY2hhbmdlZCcpXG4gICAgfVxuXG4gICAgaWYocmVnaXN0ZXJlZCA9PT0gbnVsbCl7XG4gICAgICAvLyB1c2UgcHJvdmlkZWQgaW1wbGVtZW50YXRpb25cbiAgICAgIGlmKGltcGxlbWVudGF0aW9uICE9PSBudWxsICYmIHR5cGVvZiBvcHRzLlByb21pc2UgIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgcmVnaXN0ZXJlZCA9IHtcbiAgICAgICAgICBQcm9taXNlOiBvcHRzLlByb21pc2UsXG4gICAgICAgICAgaW1wbGVtZW50YXRpb246IGltcGxlbWVudGF0aW9uXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJlcXVpcmUgaW1wbGVtZW50YXRpb24gaWYgaW1wbGVtZW50YXRpb24gaXMgc3BlY2lmaWVkIGJ1dCBub3QgcHJvdmlkZWRcbiAgICAgICAgcmVnaXN0ZXJlZCA9IGxvYWRJbXBsZW1lbnRhdGlvbihpbXBsZW1lbnRhdGlvbilcbiAgICAgIH1cblxuICAgICAgaWYocmVnaXN0ZXJHbG9iYWwpe1xuICAgICAgICAvLyByZWdpc3RlciBwcmVmZXJlbmNlIGdsb2JhbGx5IGluIGNhc2UgbXVsdGlwbGUgaW5zdGFsbGF0aW9uc1xuICAgICAgICByb290W1JFR0lTVFJBVElPTl9LRVldID0gcmVnaXN0ZXJlZFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWdpc3RlcmVkXG4gIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbG9hZGVyJykoZ2xvYmFsLCBsb2FkSW1wbGVtZW50YXRpb24pO1xuXG4vKipcbiAqIE5vZGUuanMgdmVyc2lvbiBvZiBsb2FkSW1wbGVtZW50YXRpb24uXG4gKlxuICogUmVxdWlyZXMgdGhlIGdpdmVuIGltcGxlbWVudGF0aW9uIGFuZCByZXR1cm5zIHRoZSByZWdpc3RyYXRpb25cbiAqIGNvbnRhaW5pbmcge1Byb21pc2UsIGltcGxlbWVudGF0aW9ufVxuICpcbiAqIElmIGltcGxlbWVudGF0aW9uIGlzIHVuZGVmaW5lZCBvciBnbG9iYWwuUHJvbWlzZSwgbG9hZHMgaXRcbiAqIE90aGVyd2lzZSB1c2VzIHJlcXVpcmVcbiAqL1xuZnVuY3Rpb24gbG9hZEltcGxlbWVudGF0aW9uKGltcGxlbWVudGF0aW9uKXtcbiAgdmFyIGltcGwgPSBudWxsXG5cbiAgaWYoc2hvdWxkUHJlZmVyR2xvYmFsUHJvbWlzZShpbXBsZW1lbnRhdGlvbikpe1xuICAgIC8vIGlmIG5vIGltcGxlbWVudGF0aW9uIG9yIGVudiBzcGVjaWZpZWQgdXNlIGdsb2JhbC5Qcm9taXNlXG4gICAgaW1wbCA9IHtcbiAgICAgIFByb21pc2U6IGdsb2JhbC5Qcm9taXNlLFxuICAgICAgaW1wbGVtZW50YXRpb246ICdnbG9iYWwuUHJvbWlzZSdcbiAgICB9XG4gIH0gZWxzZSBpZihpbXBsZW1lbnRhdGlvbil7XG4gICAgLy8gaWYgaW1wbGVtZW50YXRpb24gc3BlY2lmaWVkLCByZXF1aXJlIGl0XG4gICAgdmFyIGxpYiA9IHJlcXVpcmUoaW1wbGVtZW50YXRpb24pXG4gICAgaW1wbCA9IHtcbiAgICAgIFByb21pc2U6IGxpYi5Qcm9taXNlIHx8IGxpYixcbiAgICAgIGltcGxlbWVudGF0aW9uOiBpbXBsZW1lbnRhdGlvblxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyB0cnkgdG8gYXV0byBkZXRlY3QgaW1wbGVtZW50YXRpb24uIFRoaXMgaXMgbm9uLWRldGVybWluaXN0aWNcbiAgICAvLyBhbmQgc2hvdWxkIHByZWZlciBvdGhlciBicmFuY2hlcywgYnV0IHRoaXMgaXMgb3VyIGxhc3QgY2hhbmNlXG4gICAgLy8gdG8gbG9hZCBzb21ldGhpbmcgd2l0aG91dCB0aHJvd2luZyBlcnJvclxuICAgIGltcGwgPSB0cnlBdXRvRGV0ZWN0KClcbiAgfVxuXG4gIGlmKGltcGwgPT09IG51bGwpe1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgYW55LXByb21pc2UgaW1wbGVtZW50YXRpb24gbm9yJytcbiAgICAgICcgZ2xvYmFsLlByb21pc2UuIFlvdSBtdXN0IGluc3RhbGwgcG9seWZpbGwgb3IgY2FsbCcrXG4gICAgICAnIHJlcXVpcmUoXCJhbnktcHJvbWlzZS9yZWdpc3RlclwiKSB3aXRoIHlvdXIgcHJlZmVycmVkJytcbiAgICAgICcgaW1wbGVtZW50YXRpb24sIGUuZy4gcmVxdWlyZShcImFueS1wcm9taXNlL3JlZ2lzdGVyL2JsdWViaXJkXCIpJytcbiAgICAgICcgb24gYXBwbGljYXRpb24gbG9hZCBwcmlvciB0byBhbnkgcmVxdWlyZShcImFueS1wcm9taXNlXCIpLicpXG4gIH1cblxuICByZXR1cm4gaW1wbFxufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdGhlIGdsb2JhbC5Qcm9taXNlIHNob3VsZCBiZSBwcmVmZXJyZWQgaWYgYW4gaW1wbGVtZW50YXRpb25cbiAqIGhhcyBub3QgYmVlbiByZWdpc3RlcmVkLlxuICovXG5mdW5jdGlvbiBzaG91bGRQcmVmZXJHbG9iYWxQcm9taXNlKGltcGxlbWVudGF0aW9uKXtcbiAgaWYoaW1wbGVtZW50YXRpb24pe1xuICAgIHJldHVybiBpbXBsZW1lbnRhdGlvbiA9PT0gJ2dsb2JhbC5Qcm9taXNlJ1xuICB9IGVsc2UgaWYodHlwZW9mIGdsb2JhbC5Qcm9taXNlICE9PSAndW5kZWZpbmVkJyl7XG4gICAgLy8gTG9hZCBnbG9iYWwgcHJvbWlzZSBpZiBpbXBsZW1lbnRhdGlvbiBub3Qgc3BlY2lmaWVkXG4gICAgLy8gVmVyc2lvbnMgPCAwLjExIGRpZCBub3QgaGF2ZSBnbG9iYWwgUHJvbWlzZVxuICAgIC8vIERvIG5vdCB1c2UgZm9yIHZlcnNpb24gPCAwLjEyIGFzIHZlcnNpb24gMC4xMSBjb250YWluZWQgYnVnZ3kgdmVyc2lvbnNcbiAgICB2YXIgdmVyc2lvbiA9ICgvdihcXGQrKVxcLihcXGQrKVxcLihcXGQrKS8pLmV4ZWMocHJvY2Vzcy52ZXJzaW9uKVxuICAgIHJldHVybiAhKHZlcnNpb24gJiYgK3ZlcnNpb25bMV0gPT0gMCAmJiArdmVyc2lvblsyXSA8IDEyKVxuICB9XG5cbiAgLy8gZG8gbm90IGhhdmUgZ2xvYmFsLlByb21pc2Ugb3IgYW5vdGhlciBpbXBsZW1lbnRhdGlvbiB3YXMgc3BlY2lmaWVkXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIExvb2sgZm9yIGNvbW1vbiBsaWJzIGFzIGxhc3QgcmVzb3J0IHRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0XG4gKiB0aGlzIHdpbGwgcmV0dXJuIGEgZGVzaXJlZCBpbXBsZW1lbnRhdGlvbiBvciBldmVuIGJlIGRldGVybWluaXN0aWMuXG4gKiBUaGUgcHJpb3JpdHkgaXMgYWxzbyBuZWFybHkgYXJiaXRyYXJ5LiBXZSBhcmUgb25seSBkb2luZyB0aGlzXG4gKiBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgTm9kZS5qcyA8MC4xMiB0aGF0IGRvIG5vdCBoYXZlIGEgcmVhc29uYWJsZVxuICogZ2xvYmFsLlByb21pc2UgaW1wbGVtZW50YXRpb24gYW5kIHdlIHRoZSB1c2VyIGhhcyBub3QgcmVnaXN0ZXJlZFxuICogdGhlIHByZWZlcmVuY2UuIFRoaXMgcHJlc2VydmVzIHRoZSBiZWhhdmlvciBvZiBhbnktcHJvbWlzZSA8PSAwLjFcbiAqIGFuZCBtYXkgYmUgZGVwcmVjYXRlZCBvciByZW1vdmVkIGluIHRoZSBmdXR1cmVcbiAqL1xuZnVuY3Rpb24gdHJ5QXV0b0RldGVjdCgpe1xuICB2YXIgbGlicyA9IFtcbiAgICAgIFwiZXM2LXByb21pc2VcIixcbiAgICAgIFwicHJvbWlzZVwiLFxuICAgICAgXCJuYXRpdmUtcHJvbWlzZS1vbmx5XCIsXG4gICAgICBcImJsdWViaXJkXCIsXG4gICAgICBcInJzdnBcIixcbiAgICAgIFwid2hlblwiLFxuICAgICAgXCJxXCIsXG4gICAgICBcInBpbmtpZVwiLFxuICAgICAgXCJsaWVcIixcbiAgICAgIFwidm93XCJdXG4gIHZhciBpID0gMCwgbGVuID0gbGlicy5sZW5ndGhcbiAgZm9yKDsgaSA8IGxlbjsgaSsrKXtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGxvYWRJbXBsZW1lbnRhdGlvbihsaWJzW2ldKVxuICAgIH0gY2F0Y2goZSl7fVxuICB9XG4gIHJldHVybiBudWxsXG59XG4iLCJcbi8qKlxuICogc2xpY2UoKSByZWZlcmVuY2UuXG4gKi9cblxudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4vKipcbiAqIEV4cG9zZSBgY29gLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY29bJ2RlZmF1bHQnXSA9IGNvLmNvID0gY287XG5cbi8qKlxuICogV3JhcCB0aGUgZ2l2ZW4gZ2VuZXJhdG9yIGBmbmAgaW50byBhXG4gKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBwcm9taXNlLlxuICogVGhpcyBpcyBhIHNlcGFyYXRlIGZ1bmN0aW9uIHNvIHRoYXRcbiAqIGV2ZXJ5IGBjbygpYCBjYWxsIGRvZXNuJ3QgY3JlYXRlIGEgbmV3LFxuICogdW5uZWNlc3NhcnkgY2xvc3VyZS5cbiAqXG4gKiBAcGFyYW0ge0dlbmVyYXRvckZ1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmNvLndyYXAgPSBmdW5jdGlvbiAoZm4pIHtcbiAgY3JlYXRlUHJvbWlzZS5fX2dlbmVyYXRvckZ1bmN0aW9uX18gPSBmbjtcbiAgcmV0dXJuIGNyZWF0ZVByb21pc2U7XG4gIGZ1bmN0aW9uIGNyZWF0ZVByb21pc2UoKSB7XG4gICAgcmV0dXJuIGNvLmNhbGwodGhpcywgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cbn07XG5cbi8qKlxuICogRXhlY3V0ZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIG9yIGEgZ2VuZXJhdG9yXG4gKiBhbmQgcmV0dXJuIGEgcHJvbWlzZS5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY28oZ2VuKSB7XG4gIHZhciBjdHggPSB0aGlzO1xuICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuXG4gIC8vIHdlIHdyYXAgZXZlcnl0aGluZyBpbiBhIHByb21pc2UgdG8gYXZvaWQgcHJvbWlzZSBjaGFpbmluZyxcbiAgLy8gd2hpY2ggbGVhZHMgdG8gbWVtb3J5IGxlYWsgZXJyb3JzLlxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3RqL2NvL2lzc3Vlcy8xODBcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmICh0eXBlb2YgZ2VuID09PSAnZnVuY3Rpb24nKSBnZW4gPSBnZW4uYXBwbHkoY3R4LCBhcmdzKTtcbiAgICBpZiAoIWdlbiB8fCB0eXBlb2YgZ2VuLm5leHQgIT09ICdmdW5jdGlvbicpIHJldHVybiByZXNvbHZlKGdlbik7XG5cbiAgICBvbkZ1bGZpbGxlZCgpO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtNaXhlZH0gcmVzXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIG9uRnVsZmlsbGVkKHJlcykge1xuICAgICAgdmFyIHJldDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldCA9IGdlbi5uZXh0KHJlcyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICB9XG4gICAgICBuZXh0KHJldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKiBAYXBpIHByaXZhdGVcbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIG9uUmVqZWN0ZWQoZXJyKSB7XG4gICAgICB2YXIgcmV0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0ID0gZ2VuLnRocm93KGVycik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICB9XG4gICAgICBuZXh0KHJldCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuZXh0IHZhbHVlIGluIHRoZSBnZW5lcmF0b3IsXG4gICAgICogcmV0dXJuIGEgcHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICAqIEBhcGkgcHJpdmF0ZVxuICAgICAqL1xuXG4gICAgZnVuY3Rpb24gbmV4dChyZXQpIHtcbiAgICAgIGlmIChyZXQuZG9uZSkgcmV0dXJuIHJlc29sdmUocmV0LnZhbHVlKTtcbiAgICAgIHZhciB2YWx1ZSA9IHRvUHJvbWlzZS5jYWxsKGN0eCwgcmV0LnZhbHVlKTtcbiAgICAgIGlmICh2YWx1ZSAmJiBpc1Byb21pc2UodmFsdWUpKSByZXR1cm4gdmFsdWUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCk7XG4gICAgICByZXR1cm4gb25SZWplY3RlZChuZXcgVHlwZUVycm9yKCdZb3UgbWF5IG9ubHkgeWllbGQgYSBmdW5jdGlvbiwgcHJvbWlzZSwgZ2VuZXJhdG9yLCBhcnJheSwgb3Igb2JqZWN0LCAnXG4gICAgICAgICsgJ2J1dCB0aGUgZm9sbG93aW5nIG9iamVjdCB3YXMgcGFzc2VkOiBcIicgKyBTdHJpbmcocmV0LnZhbHVlKSArICdcIicpKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSBgeWllbGRgZWQgdmFsdWUgaW50byBhIHByb21pc2UuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gb2JqXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdG9Qcm9taXNlKG9iaikge1xuICBpZiAoIW9iaikgcmV0dXJuIG9iajtcbiAgaWYgKGlzUHJvbWlzZShvYmopKSByZXR1cm4gb2JqO1xuICBpZiAoaXNHZW5lcmF0b3JGdW5jdGlvbihvYmopIHx8IGlzR2VuZXJhdG9yKG9iaikpIHJldHVybiBjby5jYWxsKHRoaXMsIG9iaik7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBvYmopIHJldHVybiB0aHVua1RvUHJvbWlzZS5jYWxsKHRoaXMsIG9iaik7XG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHJldHVybiBhcnJheVRvUHJvbWlzZS5jYWxsKHRoaXMsIG9iaik7XG4gIGlmIChpc09iamVjdChvYmopKSByZXR1cm4gb2JqZWN0VG9Qcm9taXNlLmNhbGwodGhpcywgb2JqKTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgdGh1bmsgdG8gYSBwcm9taXNlLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259XG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdGh1bmtUb1Byb21pc2UoZm4pIHtcbiAgdmFyIGN0eCA9IHRoaXM7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZm4uY2FsbChjdHgsIGZ1bmN0aW9uIChlcnIsIHJlcykge1xuICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAyKSByZXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICByZXNvbHZlKHJlcyk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gYXJyYXkgb2YgXCJ5aWVsZGFibGVzXCIgdG8gYSBwcm9taXNlLlxuICogVXNlcyBgUHJvbWlzZS5hbGwoKWAgaW50ZXJuYWxseS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBvYmpcbiAqIEByZXR1cm4ge1Byb21pc2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBhcnJheVRvUHJvbWlzZShvYmopIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKG9iai5tYXAodG9Qcm9taXNlLCB0aGlzKSk7XG59XG5cbi8qKlxuICogQ29udmVydCBhbiBvYmplY3Qgb2YgXCJ5aWVsZGFibGVzXCIgdG8gYSBwcm9taXNlLlxuICogVXNlcyBgUHJvbWlzZS5hbGwoKWAgaW50ZXJuYWxseS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gb2JqZWN0VG9Qcm9taXNlKG9iail7XG4gIHZhciByZXN1bHRzID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIHZhciBwcm9taXNlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgcHJvbWlzZSA9IHRvUHJvbWlzZS5jYWxsKHRoaXMsIG9ialtrZXldKTtcbiAgICBpZiAocHJvbWlzZSAmJiBpc1Byb21pc2UocHJvbWlzZSkpIGRlZmVyKHByb21pc2UsIGtleSk7XG4gICAgZWxzZSByZXN1bHRzW2tleV0gPSBvYmpba2V5XTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9KTtcblxuICBmdW5jdGlvbiBkZWZlcihwcm9taXNlLCBrZXkpIHtcbiAgICAvLyBwcmVkZWZpbmUgdGhlIGtleSBpbiB0aGUgcmVzdWx0XG4gICAgcmVzdWx0c1trZXldID0gdW5kZWZpbmVkO1xuICAgIHByb21pc2VzLnB1c2gocHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIHJlc3VsdHNba2V5XSA9IHJlcztcbiAgICB9KSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIHByb21pc2UuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgcmV0dXJuICdmdW5jdGlvbicgPT0gdHlwZW9mIG9iai50aGVuO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgZ2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yKG9iaikge1xuICByZXR1cm4gJ2Z1bmN0aW9uJyA9PSB0eXBlb2Ygb2JqLm5leHQgJiYgJ2Z1bmN0aW9uJyA9PSB0eXBlb2Ygb2JqLnRocm93O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGBvYmpgIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKG9iaikge1xuICB2YXIgY29uc3RydWN0b3IgPSBvYmouY29uc3RydWN0b3I7XG4gIGlmICghY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcbiAgaWYgKCdHZW5lcmF0b3JGdW5jdGlvbicgPT09IGNvbnN0cnVjdG9yLm5hbWUgfHwgJ0dlbmVyYXRvckZ1bmN0aW9uJyA9PT0gY29uc3RydWN0b3IuZGlzcGxheU5hbWUpIHJldHVybiB0cnVlO1xuICByZXR1cm4gaXNHZW5lcmF0b3IoY29uc3RydWN0b3IucHJvdG90eXBlKTtcbn1cblxuLyoqXG4gKiBDaGVjayBmb3IgcGxhaW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gT2JqZWN0ID09IHZhbC5jb25zdHJ1Y3Rvcjtcbn1cbiIsIi8qIVxuICogY29udGVudC1kaXNwb3NpdGlvblxuICogQ29weXJpZ2h0KGMpIDIwMTQgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudERpc3Bvc2l0aW9uXG5tb2R1bGUuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgYmFzZW5hbWUgPSByZXF1aXJlKCdwYXRoJykuYmFzZW5hbWVcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggbm9uIGF0dHItY2hhciwgKmFmdGVyKiBlbmNvZGVVUklDb21wb25lbnQgKGkuZS4gbm90IGluY2x1ZGluZyBcIiVcIilcbiAqL1xuXG52YXIgRU5DT0RFX1VSTF9BVFRSX0NIQVJfUkVHRVhQID0gL1tcXHgwMC1cXHgyMFwiJygpKiwvOjs8PT4/QFtcXFxcXFxde31cXHg3Zl0vZyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnRyb2wtcmVnZXhcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggcGVyY2VudCBlbmNvZGluZyBlc2NhcGUuXG4gKi9cblxudmFyIEhFWF9FU0NBUEVfUkVHRVhQID0gLyVbMC05QS1GYS1mXXsyfS9cbnZhciBIRVhfRVNDQVBFX1JFUExBQ0VfUkVHRVhQID0gLyUoWzAtOUEtRmEtZl17Mn0pL2dcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggbm9uLWxhdGluMSBjaGFyYWN0ZXJzLlxuICovXG5cbnZhciBOT05fTEFUSU4xX1JFR0VYUCA9IC9bXlxceDIwLVxceDdlXFx4YTAtXFx4ZmZdL2dcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggcXVvdGVkLXBhaXIgaW4gUkZDIDI2MTZcbiAqXG4gKiBxdW90ZWQtcGFpciA9IFwiXFxcIiBDSEFSXG4gKiBDSEFSICAgICAgICA9IDxhbnkgVVMtQVNDSUkgY2hhcmFjdGVyIChvY3RldHMgMCAtIDEyNyk+XG4gKi9cblxudmFyIFFFU0NfUkVHRVhQID0gL1xcXFwoW1xcdTAwMDAtXFx1MDA3Zl0pL2dcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggY2hhcnMgdGhhdCBtdXN0IGJlIHF1b3RlZC1wYWlyIGluIFJGQyAyNjE2XG4gKi9cblxudmFyIFFVT1RFX1JFR0VYUCA9IC8oW1xcXFxcIl0pL2dcblxuLyoqXG4gKiBSZWdFeHAgZm9yIHZhcmlvdXMgUkZDIDI2MTYgZ3JhbW1hclxuICpcbiAqIHBhcmFtZXRlciAgICAgPSB0b2tlbiBcIj1cIiAoIHRva2VuIHwgcXVvdGVkLXN0cmluZyApXG4gKiB0b2tlbiAgICAgICAgID0gMSo8YW55IENIQVIgZXhjZXB0IENUTHMgb3Igc2VwYXJhdG9ycz5cbiAqIHNlcGFyYXRvcnMgICAgPSBcIihcIiB8IFwiKVwiIHwgXCI8XCIgfCBcIj5cIiB8IFwiQFwiXG4gKiAgICAgICAgICAgICAgIHwgXCIsXCIgfCBcIjtcIiB8IFwiOlwiIHwgXCJcXFwiIHwgPFwiPlxuICogICAgICAgICAgICAgICB8IFwiL1wiIHwgXCJbXCIgfCBcIl1cIiB8IFwiP1wiIHwgXCI9XCJcbiAqICAgICAgICAgICAgICAgfCBcIntcIiB8IFwifVwiIHwgU1AgfCBIVFxuICogcXVvdGVkLXN0cmluZyA9ICggPFwiPiAqKHFkdGV4dCB8IHF1b3RlZC1wYWlyICkgPFwiPiApXG4gKiBxZHRleHQgICAgICAgID0gPGFueSBURVhUIGV4Y2VwdCA8XCI+PlxuICogcXVvdGVkLXBhaXIgICA9IFwiXFxcIiBDSEFSXG4gKiBDSEFSICAgICAgICAgID0gPGFueSBVUy1BU0NJSSBjaGFyYWN0ZXIgKG9jdGV0cyAwIC0gMTI3KT5cbiAqIFRFWFQgICAgICAgICAgPSA8YW55IE9DVEVUIGV4Y2VwdCBDVExzLCBidXQgaW5jbHVkaW5nIExXUz5cbiAqIExXUyAgICAgICAgICAgPSBbQ1JMRl0gMSooIFNQIHwgSFQgKVxuICogQ1JMRiAgICAgICAgICA9IENSIExGXG4gKiBDUiAgICAgICAgICAgID0gPFVTLUFTQ0lJIENSLCBjYXJyaWFnZSByZXR1cm4gKDEzKT5cbiAqIExGICAgICAgICAgICAgPSA8VVMtQVNDSUkgTEYsIGxpbmVmZWVkICgxMCk+XG4gKiBTUCAgICAgICAgICAgID0gPFVTLUFTQ0lJIFNQLCBzcGFjZSAoMzIpPlxuICogSFQgICAgICAgICAgICA9IDxVUy1BU0NJSSBIVCwgaG9yaXpvbnRhbC10YWIgKDkpPlxuICogQ1RMICAgICAgICAgICA9IDxhbnkgVVMtQVNDSUkgY29udHJvbCBjaGFyYWN0ZXIgKG9jdGV0cyAwIC0gMzEpIGFuZCBERUwgKDEyNyk+XG4gKiBPQ1RFVCAgICAgICAgID0gPGFueSA4LWJpdCBzZXF1ZW5jZSBvZiBkYXRhPlxuICovXG5cbnZhciBQQVJBTV9SRUdFWFAgPSAvO1tcXHgwOVxceDIwXSooWyEjJCUmJyorLjAtOUEtWl5fYGEtenx+LV0rKVtcXHgwOVxceDIwXSo9W1xceDA5XFx4MjBdKihcIig/OltcXHgyMCFcXHgyMy1cXHg1YlxceDVkLVxceDdlXFx4ODAtXFx4ZmZdfFxcXFxbXFx4MjAtXFx4N2VdKSpcInxbISMkJSYnKisuMC05QS1aXl9gYS16fH4tXSspW1xceDA5XFx4MjBdKi9nIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxudmFyIFRFWFRfUkVHRVhQID0gL15bXFx4MjAtXFx4N2VcXHg4MC1cXHhmZl0rJC9cbnZhciBUT0tFTl9SRUdFWFAgPSAvXlshIyQlJicqKy4wLTlBLVpeX2BhLXp8fi1dKyQvXG5cbi8qKlxuICogUmVnRXhwIGZvciB2YXJpb3VzIFJGQyA1OTg3IGdyYW1tYXJcbiAqXG4gKiBleHQtdmFsdWUgICAgID0gY2hhcnNldCAgXCInXCIgWyBsYW5ndWFnZSBdIFwiJ1wiIHZhbHVlLWNoYXJzXG4gKiBjaGFyc2V0ICAgICAgID0gXCJVVEYtOFwiIC8gXCJJU08tODg1OS0xXCIgLyBtaW1lLWNoYXJzZXRcbiAqIG1pbWUtY2hhcnNldCAgPSAxKm1pbWUtY2hhcnNldGNcbiAqIG1pbWUtY2hhcnNldGMgPSBBTFBIQSAvIERJR0lUXG4gKiAgICAgICAgICAgICAgIC8gXCIhXCIgLyBcIiNcIiAvIFwiJFwiIC8gXCIlXCIgLyBcIiZcIlxuICogICAgICAgICAgICAgICAvIFwiK1wiIC8gXCItXCIgLyBcIl5cIiAvIFwiX1wiIC8gXCJgXCJcbiAqICAgICAgICAgICAgICAgLyBcIntcIiAvIFwifVwiIC8gXCJ+XCJcbiAqIGxhbmd1YWdlICAgICAgPSAoIDIqM0FMUEhBIFsgZXh0bGFuZyBdIClcbiAqICAgICAgICAgICAgICAgLyA0QUxQSEFcbiAqICAgICAgICAgICAgICAgLyA1KjhBTFBIQVxuICogZXh0bGFuZyAgICAgICA9ICozKCBcIi1cIiAzQUxQSEEgKVxuICogdmFsdWUtY2hhcnMgICA9ICooIHBjdC1lbmNvZGVkIC8gYXR0ci1jaGFyIClcbiAqIHBjdC1lbmNvZGVkICAgPSBcIiVcIiBIRVhESUcgSEVYRElHXG4gKiBhdHRyLWNoYXIgICAgID0gQUxQSEEgLyBESUdJVFxuICogICAgICAgICAgICAgICAvIFwiIVwiIC8gXCIjXCIgLyBcIiRcIiAvIFwiJlwiIC8gXCIrXCIgLyBcIi1cIiAvIFwiLlwiXG4gKiAgICAgICAgICAgICAgIC8gXCJeXCIgLyBcIl9cIiAvIFwiYFwiIC8gXCJ8XCIgLyBcIn5cIlxuICovXG5cbnZhciBFWFRfVkFMVUVfUkVHRVhQID0gL14oW0EtWmEtejAtOSEjJCUmK1xcLV5fYHt9fl0rKScoPzpbQS1aYS16XXsyLDN9KD86LVtBLVphLXpdezN9KXswLDN9fFtBLVphLXpdezQsOH18KScoKD86JVswLTlBLUZhLWZdezJ9fFtBLVphLXowLTkhIyQmKy5eX2B8fi1dKSspJC9cblxuLyoqXG4gKiBSZWdFeHAgZm9yIHZhcmlvdXMgUkZDIDYyNjYgZ3JhbW1hclxuICpcbiAqIGRpc3Bvc2l0aW9uLXR5cGUgPSBcImlubGluZVwiIHwgXCJhdHRhY2htZW50XCIgfCBkaXNwLWV4dC10eXBlXG4gKiBkaXNwLWV4dC10eXBlICAgID0gdG9rZW5cbiAqIGRpc3Bvc2l0aW9uLXBhcm0gPSBmaWxlbmFtZS1wYXJtIHwgZGlzcC1leHQtcGFybVxuICogZmlsZW5hbWUtcGFybSAgICA9IFwiZmlsZW5hbWVcIiBcIj1cIiB2YWx1ZVxuICogICAgICAgICAgICAgICAgICB8IFwiZmlsZW5hbWUqXCIgXCI9XCIgZXh0LXZhbHVlXG4gKiBkaXNwLWV4dC1wYXJtICAgID0gdG9rZW4gXCI9XCIgdmFsdWVcbiAqICAgICAgICAgICAgICAgICAgfCBleHQtdG9rZW4gXCI9XCIgZXh0LXZhbHVlXG4gKiBleHQtdG9rZW4gICAgICAgID0gPHRoZSBjaGFyYWN0ZXJzIGluIHRva2VuLCBmb2xsb3dlZCBieSBcIipcIj5cbiAqL1xuXG52YXIgRElTUE9TSVRJT05fVFlQRV9SRUdFWFAgPSAvXihbISMkJSYnKisuMC05QS1aXl9gYS16fH4tXSspW1xceDA5XFx4MjBdKig/OiR8OykvIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29udHJvbC1yZWdleFxuXG4vKipcbiAqIENyZWF0ZSBhbiBhdHRhY2htZW50IENvbnRlbnQtRGlzcG9zaXRpb24gaGVhZGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbZmlsZW5hbWVdXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMudHlwZT1hdHRhY2htZW50XVxuICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gW29wdGlvbnMuZmFsbGJhY2s9dHJ1ZV1cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY29udGVudERpc3Bvc2l0aW9uIChmaWxlbmFtZSwgb3B0aW9ucykge1xuICB2YXIgb3B0cyA9IG9wdGlvbnMgfHwge31cblxuICAvLyBnZXQgdHlwZVxuICB2YXIgdHlwZSA9IG9wdHMudHlwZSB8fCAnYXR0YWNobWVudCdcblxuICAvLyBnZXQgcGFyYW1ldGVyc1xuICB2YXIgcGFyYW1zID0gY3JlYXRlcGFyYW1zKGZpbGVuYW1lLCBvcHRzLmZhbGxiYWNrKVxuXG4gIC8vIGZvcm1hdCBpbnRvIHN0cmluZ1xuICByZXR1cm4gZm9ybWF0KG5ldyBDb250ZW50RGlzcG9zaXRpb24odHlwZSwgcGFyYW1zKSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgcGFyYW1ldGVycyBvYmplY3QgZnJvbSBmaWxlbmFtZSBhbmQgZmFsbGJhY2suXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtmaWxlbmFtZV1cbiAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IFtmYWxsYmFjaz10cnVlXVxuICogQHJldHVybiB7b2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlcGFyYW1zIChmaWxlbmFtZSwgZmFsbGJhY2spIHtcbiAgaWYgKGZpbGVuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBwYXJhbXMgPSB7fVxuXG4gIGlmICh0eXBlb2YgZmlsZW5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZmlsZW5hbWUgbXVzdCBiZSBhIHN0cmluZycpXG4gIH1cblxuICAvLyBmYWxsYmFjayBkZWZhdWx0cyB0byB0cnVlXG4gIGlmIChmYWxsYmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZmFsbGJhY2sgPSB0cnVlXG4gIH1cblxuICBpZiAodHlwZW9mIGZhbGxiYWNrICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgZmFsbGJhY2sgIT09ICdib29sZWFuJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZhbGxiYWNrIG11c3QgYmUgYSBzdHJpbmcgb3IgYm9vbGVhbicpXG4gIH1cblxuICBpZiAodHlwZW9mIGZhbGxiYWNrID09PSAnc3RyaW5nJyAmJiBOT05fTEFUSU4xX1JFR0VYUC50ZXN0KGZhbGxiYWNrKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZhbGxiYWNrIG11c3QgYmUgSVNPLTg4NTktMSBzdHJpbmcnKVxuICB9XG5cbiAgLy8gcmVzdHJpY3QgdG8gZmlsZSBiYXNlIG5hbWVcbiAgdmFyIG5hbWUgPSBiYXNlbmFtZShmaWxlbmFtZSlcblxuICAvLyBkZXRlcm1pbmUgaWYgbmFtZSBpcyBzdWl0YWJsZSBmb3IgcXVvdGVkIHN0cmluZ1xuICB2YXIgaXNRdW90ZWRTdHJpbmcgPSBURVhUX1JFR0VYUC50ZXN0KG5hbWUpXG5cbiAgLy8gZ2VuZXJhdGUgZmFsbGJhY2sgbmFtZVxuICB2YXIgZmFsbGJhY2tOYW1lID0gdHlwZW9mIGZhbGxiYWNrICE9PSAnc3RyaW5nJ1xuICAgID8gZmFsbGJhY2sgJiYgZ2V0bGF0aW4xKG5hbWUpXG4gICAgOiBiYXNlbmFtZShmYWxsYmFjaylcbiAgdmFyIGhhc0ZhbGxiYWNrID0gdHlwZW9mIGZhbGxiYWNrTmFtZSA9PT0gJ3N0cmluZycgJiYgZmFsbGJhY2tOYW1lICE9PSBuYW1lXG5cbiAgLy8gc2V0IGV4dGVuZGVkIGZpbGVuYW1lIHBhcmFtZXRlclxuICBpZiAoaGFzRmFsbGJhY2sgfHwgIWlzUXVvdGVkU3RyaW5nIHx8IEhFWF9FU0NBUEVfUkVHRVhQLnRlc3QobmFtZSkpIHtcbiAgICBwYXJhbXNbJ2ZpbGVuYW1lKiddID0gbmFtZVxuICB9XG5cbiAgLy8gc2V0IGZpbGVuYW1lIHBhcmFtZXRlclxuICBpZiAoaXNRdW90ZWRTdHJpbmcgfHwgaGFzRmFsbGJhY2spIHtcbiAgICBwYXJhbXMuZmlsZW5hbWUgPSBoYXNGYWxsYmFja1xuICAgICAgPyBmYWxsYmFja05hbWVcbiAgICAgIDogbmFtZVxuICB9XG5cbiAgcmV0dXJuIHBhcmFtc1xufVxuXG4vKipcbiAqIEZvcm1hdCBvYmplY3QgdG8gQ29udGVudC1EaXNwb3NpdGlvbiBoZWFkZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHBhcmFtIHtzdHJpbmd9IG9iai50eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gW29iai5wYXJhbWV0ZXJzXVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0IChvYmopIHtcbiAgdmFyIHBhcmFtZXRlcnMgPSBvYmoucGFyYW1ldGVyc1xuICB2YXIgdHlwZSA9IG9iai50eXBlXG5cbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJyB8fCAhVE9LRU5fUkVHRVhQLnRlc3QodHlwZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHR5cGUnKVxuICB9XG5cbiAgLy8gc3RhcnQgd2l0aCBub3JtYWxpemVkIHR5cGVcbiAgdmFyIHN0cmluZyA9IFN0cmluZyh0eXBlKS50b0xvd2VyQ2FzZSgpXG5cbiAgLy8gYXBwZW5kIHBhcmFtZXRlcnNcbiAgaWYgKHBhcmFtZXRlcnMgJiYgdHlwZW9mIHBhcmFtZXRlcnMgPT09ICdvYmplY3QnKSB7XG4gICAgdmFyIHBhcmFtXG4gICAgdmFyIHBhcmFtcyA9IE9iamVjdC5rZXlzKHBhcmFtZXRlcnMpLnNvcnQoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHBhcmFtID0gcGFyYW1zW2ldXG5cbiAgICAgIHZhciB2YWwgPSBwYXJhbS5zdWJzdHIoLTEpID09PSAnKidcbiAgICAgICAgPyB1c3RyaW5nKHBhcmFtZXRlcnNbcGFyYW1dKVxuICAgICAgICA6IHFzdHJpbmcocGFyYW1ldGVyc1twYXJhbV0pXG5cbiAgICAgIHN0cmluZyArPSAnOyAnICsgcGFyYW0gKyAnPScgKyB2YWxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nXG59XG5cbi8qKlxuICogRGVjb2RlIGEgUkZDIDY5ODcgZmllbGQgdmFsdWUgKGdyYWNlZnVsbHkpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGRlY29kZWZpZWxkIChzdHIpIHtcbiAgdmFyIG1hdGNoID0gRVhUX1ZBTFVFX1JFR0VYUC5leGVjKHN0cilcblxuICBpZiAoIW1hdGNoKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBleHRlbmRlZCBmaWVsZCB2YWx1ZScpXG4gIH1cblxuICB2YXIgY2hhcnNldCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKClcbiAgdmFyIGVuY29kZWQgPSBtYXRjaFsyXVxuICB2YXIgdmFsdWVcblxuICAvLyB0byBiaW5hcnkgc3RyaW5nXG4gIHZhciBiaW5hcnkgPSBlbmNvZGVkLnJlcGxhY2UoSEVYX0VTQ0FQRV9SRVBMQUNFX1JFR0VYUCwgcGRlY29kZSlcblxuICBzd2l0Y2ggKGNoYXJzZXQpIHtcbiAgICBjYXNlICdpc28tODg1OS0xJzpcbiAgICAgIHZhbHVlID0gZ2V0bGF0aW4xKGJpbmFyeSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgdmFsdWUgPSBuZXcgQnVmZmVyKGJpbmFyeSwgJ2JpbmFyeScpLnRvU3RyaW5nKCd1dGY4JylcbiAgICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Vuc3VwcG9ydGVkIGNoYXJzZXQgaW4gZXh0ZW5kZWQgZmllbGQnKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG59XG5cbi8qKlxuICogR2V0IElTTy04ODU5LTEgdmVyc2lvbiBvZiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHJldHVybiB7c3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0bGF0aW4xICh2YWwpIHtcbiAgLy8gc2ltcGxlIFVuaWNvZGUgLT4gSVNPLTg4NTktMSB0cmFuc2Zvcm1hdGlvblxuICByZXR1cm4gU3RyaW5nKHZhbCkucmVwbGFjZShOT05fTEFUSU4xX1JFR0VYUCwgJz8nKVxufVxuXG4vKipcbiAqIFBhcnNlIENvbnRlbnQtRGlzcG9zaXRpb24gaGVhZGVyIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZSAoc3RyaW5nKSB7XG4gIGlmICghc3RyaW5nIHx8IHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3RyaW5nIGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIHZhciBtYXRjaCA9IERJU1BPU0lUSU9OX1RZUEVfUkVHRVhQLmV4ZWMoc3RyaW5nKVxuXG4gIGlmICghbWF0Y2gpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHR5cGUgZm9ybWF0JylcbiAgfVxuXG4gIC8vIG5vcm1hbGl6ZSB0eXBlXG4gIHZhciBpbmRleCA9IG1hdGNoWzBdLmxlbmd0aFxuICB2YXIgdHlwZSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKClcblxuICB2YXIga2V5XG4gIHZhciBuYW1lcyA9IFtdXG4gIHZhciBwYXJhbXMgPSB7fVxuICB2YXIgdmFsdWVcblxuICAvLyBjYWxjdWxhdGUgaW5kZXggdG8gc3RhcnQgYXRcbiAgaW5kZXggPSBQQVJBTV9SRUdFWFAubGFzdEluZGV4ID0gbWF0Y2hbMF0uc3Vic3RyKC0xKSA9PT0gJzsnXG4gICAgPyBpbmRleCAtIDFcbiAgICA6IGluZGV4XG5cbiAgLy8gbWF0Y2ggcGFyYW1ldGVyc1xuICB3aGlsZSAoKG1hdGNoID0gUEFSQU1fUkVHRVhQLmV4ZWMoc3RyaW5nKSkpIHtcbiAgICBpZiAobWF0Y2guaW5kZXggIT09IGluZGV4KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHBhcmFtZXRlciBmb3JtYXQnKVxuICAgIH1cblxuICAgIGluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aFxuICAgIGtleSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKClcbiAgICB2YWx1ZSA9IG1hdGNoWzJdXG5cbiAgICBpZiAobmFtZXMuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBkdXBsaWNhdGUgcGFyYW1ldGVyJylcbiAgICB9XG5cbiAgICBuYW1lcy5wdXNoKGtleSlcblxuICAgIGlmIChrZXkuaW5kZXhPZignKicpICsgMSA9PT0ga2V5Lmxlbmd0aCkge1xuICAgICAgLy8gZGVjb2RlIGV4dGVuZGVkIHZhbHVlXG4gICAgICBrZXkgPSBrZXkuc2xpY2UoMCwgLTEpXG4gICAgICB2YWx1ZSA9IGRlY29kZWZpZWxkKHZhbHVlKVxuXG4gICAgICAvLyBvdmVyd3JpdGUgZXhpc3RpbmcgdmFsdWVcbiAgICAgIHBhcmFtc1trZXldID0gdmFsdWVcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwYXJhbXNba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaWYgKHZhbHVlWzBdID09PSAnXCInKSB7XG4gICAgICAvLyByZW1vdmUgcXVvdGVzIGFuZCBlc2NhcGVzXG4gICAgICB2YWx1ZSA9IHZhbHVlXG4gICAgICAgIC5zdWJzdHIoMSwgdmFsdWUubGVuZ3RoIC0gMilcbiAgICAgICAgLnJlcGxhY2UoUUVTQ19SRUdFWFAsICckMScpXG4gICAgfVxuXG4gICAgcGFyYW1zW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgaWYgKGluZGV4ICE9PSAtMSAmJiBpbmRleCAhPT0gc3RyaW5nLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIGZvcm1hdCcpXG4gIH1cblxuICByZXR1cm4gbmV3IENvbnRlbnREaXNwb3NpdGlvbih0eXBlLCBwYXJhbXMpXG59XG5cbi8qKlxuICogUGVyY2VudCBkZWNvZGUgYSBzaW5nbGUgY2hhcmFjdGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBoZXhcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBkZWNvZGUgKHN0ciwgaGV4KSB7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKVxufVxuXG4vKipcbiAqIFBlcmNlbnQgZW5jb2RlIGEgc2luZ2xlIGNoYXJhY3Rlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY2hhclxuICogQHJldHVybiB7c3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGVuY29kZSAoY2hhcikge1xuICB2YXIgaGV4ID0gU3RyaW5nKGNoYXIpXG4gICAgLmNoYXJDb2RlQXQoMClcbiAgICAudG9TdHJpbmcoMTYpXG4gICAgLnRvVXBwZXJDYXNlKClcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDFcbiAgICA/ICclMCcgKyBoZXhcbiAgICA6ICclJyArIGhleFxufVxuXG4vKipcbiAqIFF1b3RlIGEgc3RyaW5nIGZvciBIVFRQLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHFzdHJpbmcgKHZhbCkge1xuICB2YXIgc3RyID0gU3RyaW5nKHZhbClcblxuICByZXR1cm4gJ1wiJyArIHN0ci5yZXBsYWNlKFFVT1RFX1JFR0VYUCwgJ1xcXFwkMScpICsgJ1wiJ1xufVxuXG4vKipcbiAqIEVuY29kZSBhIFVuaWNvZGUgc3RyaW5nIGZvciBIVFRQIChSRkMgNTk4NykuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHJldHVybiB7c3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdXN0cmluZyAodmFsKSB7XG4gIHZhciBzdHIgPSBTdHJpbmcodmFsKVxuXG4gIC8vIHBlcmNlbnQgZW5jb2RlIGFzIFVURi04XG4gIHZhciBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAucmVwbGFjZShFTkNPREVfVVJMX0FUVFJfQ0hBUl9SRUdFWFAsIHBlbmNvZGUpXG5cbiAgcmV0dXJuICdVVEYtOFxcJ1xcJycgKyBlbmNvZGVkXG59XG5cbi8qKlxuICogQ2xhc3MgZm9yIHBhcnNlZCBDb250ZW50LURpc3Bvc2l0aW9uIGhlYWRlciBmb3Igdjggb3B0aW1pemF0aW9uXG4gKi9cblxuZnVuY3Rpb24gQ29udGVudERpc3Bvc2l0aW9uICh0eXBlLCBwYXJhbWV0ZXJzKSB7XG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy5wYXJhbWV0ZXJzID0gcGFyYW1ldGVyc1xufVxuIiwiLyohXG4gKiBjb250ZW50LXR5cGVcbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggKiggXCI7XCIgcGFyYW1ldGVyICkgaW4gUkZDIDcyMzEgc2VjIDMuMS4xLjFcbiAqXG4gKiBwYXJhbWV0ZXIgICAgID0gdG9rZW4gXCI9XCIgKCB0b2tlbiAvIHF1b3RlZC1zdHJpbmcgKVxuICogdG9rZW4gICAgICAgICA9IDEqdGNoYXJcbiAqIHRjaGFyICAgICAgICAgPSBcIiFcIiAvIFwiI1wiIC8gXCIkXCIgLyBcIiVcIiAvIFwiJlwiIC8gXCInXCIgLyBcIipcIlxuICogICAgICAgICAgICAgICAvIFwiK1wiIC8gXCItXCIgLyBcIi5cIiAvIFwiXlwiIC8gXCJfXCIgLyBcImBcIiAvIFwifFwiIC8gXCJ+XCJcbiAqICAgICAgICAgICAgICAgLyBESUdJVCAvIEFMUEhBXG4gKiAgICAgICAgICAgICAgIDsgYW55IFZDSEFSLCBleGNlcHQgZGVsaW1pdGVyc1xuICogcXVvdGVkLXN0cmluZyA9IERRVU9URSAqKCBxZHRleHQgLyBxdW90ZWQtcGFpciApIERRVU9URVxuICogcWR0ZXh0ICAgICAgICA9IEhUQUIgLyBTUCAvICV4MjEgLyAleDIzLTVCIC8gJXg1RC03RSAvIG9icy10ZXh0XG4gKiBvYnMtdGV4dCAgICAgID0gJXg4MC1GRlxuICogcXVvdGVkLXBhaXIgICA9IFwiXFxcIiAoIEhUQUIgLyBTUCAvIFZDSEFSIC8gb2JzLXRleHQgKVxuICovXG52YXIgUEFSQU1fUkVHRVhQID0gLzsgKihbISMkJSYnKisuXl9gfH4wLTlBLVphLXotXSspICo9ICooXCIoPzpbXFx1MDAwYlxcdTAwMjBcXHUwMDIxXFx1MDAyMy1cXHUwMDViXFx1MDA1ZC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXXxcXFxcW1xcdTAwMGJcXHUwMDIwLVxcdTAwZmZdKSpcInxbISMkJSYnKisuXl9gfH4wLTlBLVphLXotXSspICovZ1xudmFyIFRFWFRfUkVHRVhQID0gL15bXFx1MDAwYlxcdTAwMjAtXFx1MDA3ZVxcdTAwODAtXFx1MDBmZl0rJC9cbnZhciBUT0tFTl9SRUdFWFAgPSAvXlshIyQlJicqKy5eX2B8fjAtOUEtWmEtei1dKyQvXG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIHF1b3RlZC1wYWlyIGluIFJGQyA3MjMwIHNlYyAzLjIuNlxuICpcbiAqIHF1b3RlZC1wYWlyID0gXCJcXFwiICggSFRBQiAvIFNQIC8gVkNIQVIgLyBvYnMtdGV4dCApXG4gKiBvYnMtdGV4dCAgICA9ICV4ODAtRkZcbiAqL1xudmFyIFFFU0NfUkVHRVhQID0gL1xcXFwoW1xcdTAwMGJcXHUwMDIwLVxcdTAwZmZdKS9nXG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIGNoYXJzIHRoYXQgbXVzdCBiZSBxdW90ZWQtcGFpciBpbiBSRkMgNzIzMCBzZWMgMy4yLjZcbiAqL1xudmFyIFFVT1RFX1JFR0VYUCA9IC8oW1xcXFxcIl0pL2dcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggdHlwZSBpbiBSRkMgNzIzMSBzZWMgMy4xLjEuMVxuICpcbiAqIG1lZGlhLXR5cGUgPSB0eXBlIFwiL1wiIHN1YnR5cGVcbiAqIHR5cGUgICAgICAgPSB0b2tlblxuICogc3VidHlwZSAgICA9IHRva2VuXG4gKi9cbnZhciBUWVBFX1JFR0VYUCA9IC9eWyEjJCUmJyorLl5fYHx+MC05QS1aYS16LV0rXFwvWyEjJCUmJyorLl5fYHx+MC05QS1aYS16LV0rJC9cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmZvcm1hdCA9IGZvcm1hdFxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5cbi8qKlxuICogRm9ybWF0IG9iamVjdCB0byBtZWRpYSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXQgKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG9iaiBpcyByZXF1aXJlZCcpXG4gIH1cblxuICB2YXIgcGFyYW1ldGVycyA9IG9iai5wYXJhbWV0ZXJzXG4gIHZhciB0eXBlID0gb2JqLnR5cGVcblxuICBpZiAoIXR5cGUgfHwgIVRZUEVfUkVHRVhQLnRlc3QodHlwZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIHR5cGUnKVxuICB9XG5cbiAgdmFyIHN0cmluZyA9IHR5cGVcblxuICAvLyBhcHBlbmQgcGFyYW1ldGVyc1xuICBpZiAocGFyYW1ldGVycyAmJiB0eXBlb2YgcGFyYW1ldGVycyA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgcGFyYW1cbiAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmtleXMocGFyYW1ldGVycykuc29ydCgpXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgcGFyYW0gPSBwYXJhbXNbaV1cblxuICAgICAgaWYgKCFUT0tFTl9SRUdFWFAudGVzdChwYXJhbSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBwYXJhbWV0ZXIgbmFtZScpXG4gICAgICB9XG5cbiAgICAgIHN0cmluZyArPSAnOyAnICsgcGFyYW0gKyAnPScgKyBxc3RyaW5nKHBhcmFtZXRlcnNbcGFyYW1dKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQYXJzZSBtZWRpYSB0eXBlIHRvIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHN0cmluZ1xuICogQHJldHVybiB7T2JqZWN0fVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlIChzdHJpbmcpIHtcbiAgaWYgKCFzdHJpbmcpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBzdHJpbmcgaXMgcmVxdWlyZWQnKVxuICB9XG5cbiAgLy8gc3VwcG9ydCByZXEvcmVzLWxpa2Ugb2JqZWN0cyBhcyBhcmd1bWVudFxuICB2YXIgaGVhZGVyID0gdHlwZW9mIHN0cmluZyA9PT0gJ29iamVjdCdcbiAgICA/IGdldGNvbnRlbnR0eXBlKHN0cmluZylcbiAgICA6IHN0cmluZ1xuXG4gIGlmICh0eXBlb2YgaGVhZGVyICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0cmluZyBpcyByZXF1aXJlZCB0byBiZSBhIHN0cmluZycpXG4gIH1cblxuICB2YXIgaW5kZXggPSBoZWFkZXIuaW5kZXhPZignOycpXG4gIHZhciB0eXBlID0gaW5kZXggIT09IC0xXG4gICAgPyBoZWFkZXIuc3Vic3RyKDAsIGluZGV4KS50cmltKClcbiAgICA6IGhlYWRlci50cmltKClcblxuICBpZiAoIVRZUEVfUkVHRVhQLnRlc3QodHlwZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIG1lZGlhIHR5cGUnKVxuICB9XG5cbiAgdmFyIG9iaiA9IG5ldyBDb250ZW50VHlwZSh0eXBlLnRvTG93ZXJDYXNlKCkpXG5cbiAgLy8gcGFyc2UgcGFyYW1ldGVyc1xuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdmFyIGtleVxuICAgIHZhciBtYXRjaFxuICAgIHZhciB2YWx1ZVxuXG4gICAgUEFSQU1fUkVHRVhQLmxhc3RJbmRleCA9IGluZGV4XG5cbiAgICB3aGlsZSAoKG1hdGNoID0gUEFSQU1fUkVHRVhQLmV4ZWMoaGVhZGVyKSkpIHtcbiAgICAgIGlmIChtYXRjaC5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBwYXJhbWV0ZXIgZm9ybWF0JylcbiAgICAgIH1cblxuICAgICAgaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICBrZXkgPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpXG4gICAgICB2YWx1ZSA9IG1hdGNoWzJdXG5cbiAgICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgICAvLyByZW1vdmUgcXVvdGVzIGFuZCBlc2NhcGVzXG4gICAgICAgIHZhbHVlID0gdmFsdWVcbiAgICAgICAgICAuc3Vic3RyKDEsIHZhbHVlLmxlbmd0aCAtIDIpXG4gICAgICAgICAgLnJlcGxhY2UoUUVTQ19SRUdFWFAsICckMScpXG4gICAgICB9XG5cbiAgICAgIG9iai5wYXJhbWV0ZXJzW2tleV0gPSB2YWx1ZVxuICAgIH1cblxuICAgIGlmIChpbmRleCAhPT0gaGVhZGVyLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBwYXJhbWV0ZXIgZm9ybWF0JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqXG59XG5cbi8qKlxuICogR2V0IGNvbnRlbnQtdHlwZSBmcm9tIHJlcS9yZXMgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH1cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0Y29udGVudHR5cGUgKG9iaikge1xuICB2YXIgaGVhZGVyXG5cbiAgaWYgKHR5cGVvZiBvYmouZ2V0SGVhZGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gcmVzLWxpa2VcbiAgICBoZWFkZXIgPSBvYmouZ2V0SGVhZGVyKCdjb250ZW50LXR5cGUnKVxuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmouaGVhZGVycyA9PT0gJ29iamVjdCcpIHtcbiAgICAvLyByZXEtbGlrZVxuICAgIGhlYWRlciA9IG9iai5oZWFkZXJzICYmIG9iai5oZWFkZXJzWydjb250ZW50LXR5cGUnXVxuICB9XG5cbiAgaWYgKHR5cGVvZiBoZWFkZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignY29udGVudC10eXBlIGhlYWRlciBpcyBtaXNzaW5nIGZyb20gb2JqZWN0JylcbiAgfVxuXG4gIHJldHVybiBoZWFkZXJcbn1cblxuLyoqXG4gKiBRdW90ZSBhIHN0cmluZyBpZiBuZWNlc3NhcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBxc3RyaW5nICh2YWwpIHtcbiAgdmFyIHN0ciA9IFN0cmluZyh2YWwpXG5cbiAgLy8gbm8gbmVlZCB0byBxdW90ZSB0b2tlbnNcbiAgaWYgKFRPS0VOX1JFR0VYUC50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICBpZiAoc3RyLmxlbmd0aCA+IDAgJiYgIVRFWFRfUkVHRVhQLnRlc3Qoc3RyKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIHZhbHVlJylcbiAgfVxuXG4gIHJldHVybiAnXCInICsgc3RyLnJlcGxhY2UoUVVPVEVfUkVHRVhQLCAnXFxcXCQxJykgKyAnXCInXG59XG5cbi8qKlxuICogQ2xhc3MgdG8gcmVwcmVzZW50IGEgY29udGVudCB0eXBlLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gQ29udGVudFR5cGUgKHR5cGUpIHtcbiAgdGhpcy5wYXJhbWV0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLnR5cGUgPSB0eXBlXG59XG4iLCIvKiFcbiAqIGNvb2tpZXNcbiAqIENvcHlyaWdodChjKSAyMDE0IEplZCBTY2htaWR0LCBodHRwOi8vamVkLmlzL1xuICogQ29weXJpZ2h0KGMpIDIwMTUtMjAxNiBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBkZXByZWNhdGUgPSByZXF1aXJlKCdkZXBkJykoJ2Nvb2tpZXMnKVxudmFyIEtleWdyaXAgPSByZXF1aXJlKCdrZXlncmlwJylcbnZhciBodHRwID0gcmVxdWlyZSgnaHR0cCcpXG52YXIgY2FjaGUgPSB7fVxuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBmaWVsZC1jb250ZW50IGluIFJGQyA3MjMwIHNlYyAzLjJcbiAqXG4gKiBmaWVsZC1jb250ZW50ID0gZmllbGQtdmNoYXIgWyAxKiggU1AgLyBIVEFCICkgZmllbGQtdmNoYXIgXVxuICogZmllbGQtdmNoYXIgICA9IFZDSEFSIC8gb2JzLXRleHRcbiAqIG9icy10ZXh0ICAgICAgPSAleDgwLUZGXG4gKi9cblxudmFyIGZpZWxkQ29udGVudFJlZ0V4cCA9IC9eW1xcdTAwMDlcXHUwMDIwLVxcdTAwN2VcXHUwMDgwLVxcdTAwZmZdKyQvO1xuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBTYW1lLVNpdGUgY29va2llIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqL1xuXG52YXIgc2FtZVNpdGVSZWdFeHAgPSAvXig/OmxheHxzdHJpY3QpJC9pXG5cbmZ1bmN0aW9uIENvb2tpZXMocmVxdWVzdCwgcmVzcG9uc2UsIG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvb2tpZXMpKSByZXR1cm4gbmV3IENvb2tpZXMocmVxdWVzdCwgcmVzcG9uc2UsIG9wdGlvbnMpXG5cbiAgdGhpcy5zZWN1cmUgPSB1bmRlZmluZWRcbiAgdGhpcy5yZXF1ZXN0ID0gcmVxdWVzdFxuICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2VcblxuICBpZiAob3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgICAvLyBhcnJheSBvZiBrZXkgc3RyaW5nc1xuICAgICAgZGVwcmVjYXRlKCdcImtleXNcIiBhcmd1bWVudDsgcHJvdmlkZSB1c2luZyBvcHRpb25zIHtcImtleXNcIjogWy4uLl19JylcbiAgICAgIHRoaXMua2V5cyA9IG5ldyBLZXlncmlwKG9wdGlvbnMpXG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmNvbnN0cnVjdG9yICYmIG9wdGlvbnMuY29uc3RydWN0b3IubmFtZSA9PT0gJ0tleWdyaXAnKSB7XG4gICAgICAvLyBhbnkga2V5Z3JpcCBjb25zdHJ1Y3RvciB0byBhbGxvdyBkaWZmZXJlbnQgdmVyc2lvbnNcbiAgICAgIGRlcHJlY2F0ZSgnXCJrZXlzXCIgYXJndW1lbnQ7IHByb3ZpZGUgdXNpbmcgb3B0aW9ucyB7XCJrZXlzXCI6IGtleWdyaXB9JylcbiAgICAgIHRoaXMua2V5cyA9IG9wdGlvbnNcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5rZXlzID0gQXJyYXkuaXNBcnJheShvcHRpb25zLmtleXMpID8gbmV3IEtleWdyaXAob3B0aW9ucy5rZXlzKSA6IG9wdGlvbnMua2V5c1xuICAgICAgdGhpcy5zZWN1cmUgPSBvcHRpb25zLnNlY3VyZVxuICAgIH1cbiAgfVxufVxuXG5Db29raWVzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lLCBvcHRzKSB7XG4gIHZhciBzaWdOYW1lID0gbmFtZSArIFwiLnNpZ1wiXG4gICAgLCBoZWFkZXIsIG1hdGNoLCB2YWx1ZSwgcmVtb3RlLCBkYXRhLCBpbmRleFxuICAgICwgc2lnbmVkID0gb3B0cyAmJiBvcHRzLnNpZ25lZCAhPT0gdW5kZWZpbmVkID8gb3B0cy5zaWduZWQgOiAhIXRoaXMua2V5c1xuXG4gIGhlYWRlciA9IHRoaXMucmVxdWVzdC5oZWFkZXJzW1wiY29va2llXCJdXG4gIGlmICghaGVhZGVyKSByZXR1cm5cblxuICBtYXRjaCA9IGhlYWRlci5tYXRjaChnZXRQYXR0ZXJuKG5hbWUpKVxuICBpZiAoIW1hdGNoKSByZXR1cm5cblxuICB2YWx1ZSA9IG1hdGNoWzFdXG4gIGlmICghb3B0cyB8fCAhc2lnbmVkKSByZXR1cm4gdmFsdWVcblxuICByZW1vdGUgPSB0aGlzLmdldChzaWdOYW1lKVxuICBpZiAoIXJlbW90ZSkgcmV0dXJuXG5cbiAgZGF0YSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlXG4gIGlmICghdGhpcy5rZXlzKSB0aHJvdyBuZXcgRXJyb3IoJy5rZXlzIHJlcXVpcmVkIGZvciBzaWduZWQgY29va2llcycpO1xuICBpbmRleCA9IHRoaXMua2V5cy5pbmRleChkYXRhLCByZW1vdGUpXG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHRoaXMuc2V0KHNpZ05hbWUsIG51bGwsIHtwYXRoOiBcIi9cIiwgc2lnbmVkOiBmYWxzZSB9KVxuICB9IGVsc2Uge1xuICAgIGluZGV4ICYmIHRoaXMuc2V0KHNpZ05hbWUsIHRoaXMua2V5cy5zaWduKGRhdGEpLCB7IHNpZ25lZDogZmFsc2UgfSlcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufTtcblxuQ29va2llcy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUsIG9wdHMpIHtcbiAgdmFyIHJlcyA9IHRoaXMucmVzcG9uc2VcbiAgICAsIHJlcSA9IHRoaXMucmVxdWVzdFxuICAgICwgaGVhZGVycyA9IHJlcy5nZXRIZWFkZXIoXCJTZXQtQ29va2llXCIpIHx8IFtdXG4gICAgLCBzZWN1cmUgPSB0aGlzLnNlY3VyZSAhPT0gdW5kZWZpbmVkID8gISF0aGlzLnNlY3VyZSA6IHJlcS5wcm90b2NvbCA9PT0gJ2h0dHBzJyB8fCByZXEuY29ubmVjdGlvbi5lbmNyeXB0ZWRcbiAgICAsIGNvb2tpZSA9IG5ldyBDb29raWUobmFtZSwgdmFsdWUsIG9wdHMpXG4gICAgLCBzaWduZWQgPSBvcHRzICYmIG9wdHMuc2lnbmVkICE9PSB1bmRlZmluZWQgPyBvcHRzLnNpZ25lZCA6ICEhdGhpcy5rZXlzXG5cbiAgaWYgKHR5cGVvZiBoZWFkZXJzID09IFwic3RyaW5nXCIpIGhlYWRlcnMgPSBbaGVhZGVyc11cblxuICBpZiAoIXNlY3VyZSAmJiBvcHRzICYmIG9wdHMuc2VjdXJlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgc2VuZCBzZWN1cmUgY29va2llIG92ZXIgdW5lbmNyeXB0ZWQgY29ubmVjdGlvbicpXG4gIH1cblxuICBjb29raWUuc2VjdXJlID0gc2VjdXJlXG4gIGlmIChvcHRzICYmIFwic2VjdXJlXCIgaW4gb3B0cykgY29va2llLnNlY3VyZSA9IG9wdHMuc2VjdXJlXG5cbiAgaWYgKG9wdHMgJiYgXCJzZWN1cmVQcm94eVwiIGluIG9wdHMpIHtcbiAgICBkZXByZWNhdGUoJ1wic2VjdXJlUHJveHlcIiBvcHRpb247IHVzZSBcInNlY3VyZVwiIG9wdGlvbiwgcHJvdmlkZSBcInNlY3VyZVwiIHRvIGNvbnN0cnVjdG9yIGlmIG5lZWRlZCcpXG4gICAgY29va2llLnNlY3VyZSA9IG9wdHMuc2VjdXJlUHJveHlcbiAgfVxuXG4gIGhlYWRlcnMgPSBwdXNoQ29va2llKGhlYWRlcnMsIGNvb2tpZSlcblxuICBpZiAob3B0cyAmJiBzaWduZWQpIHtcbiAgICBpZiAoIXRoaXMua2V5cykgdGhyb3cgbmV3IEVycm9yKCcua2V5cyByZXF1aXJlZCBmb3Igc2lnbmVkIGNvb2tpZXMnKTtcbiAgICBjb29raWUudmFsdWUgPSB0aGlzLmtleXMuc2lnbihjb29raWUudG9TdHJpbmcoKSlcbiAgICBjb29raWUubmFtZSArPSBcIi5zaWdcIlxuICAgIGhlYWRlcnMgPSBwdXNoQ29va2llKGhlYWRlcnMsIGNvb2tpZSlcbiAgfVxuXG4gIHZhciBzZXRIZWFkZXIgPSByZXMuc2V0ID8gaHR0cC5PdXRnb2luZ01lc3NhZ2UucHJvdG90eXBlLnNldEhlYWRlciA6IHJlcy5zZXRIZWFkZXJcbiAgc2V0SGVhZGVyLmNhbGwocmVzLCAnU2V0LUNvb2tpZScsIGhlYWRlcnMpXG4gIHJldHVybiB0aGlzXG59O1xuXG5mdW5jdGlvbiBDb29raWUobmFtZSwgdmFsdWUsIGF0dHJzKSB7XG4gIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3QobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBuYW1lIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIGlmICh2YWx1ZSAmJiAhZmllbGRDb250ZW50UmVnRXhwLnRlc3QodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgdmFsdWUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFsdWUgfHwgKHRoaXMuZXhwaXJlcyA9IG5ldyBEYXRlKDApKVxuXG4gIHRoaXMubmFtZSA9IG5hbWVcbiAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IFwiXCJcblxuICBmb3IgKHZhciBuYW1lIGluIGF0dHJzKSB7XG4gICAgdGhpc1tuYW1lXSA9IGF0dHJzW25hbWVdXG4gIH1cblxuICBpZiAodGhpcy5wYXRoICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh0aGlzLnBhdGgpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHBhdGggaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgaWYgKHRoaXMuZG9tYWluICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh0aGlzLmRvbWFpbikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZG9tYWluIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIGlmICh0aGlzLnNhbWVTaXRlICYmIHRoaXMuc2FtZVNpdGUgIT09IHRydWUgJiYgIXNhbWVTaXRlUmVnRXhwLnRlc3QodGhpcy5zYW1lU2l0ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gc2FtZVNpdGUgaXMgaW52YWxpZCcpXG4gIH1cbn1cblxuQ29va2llLnByb3RvdHlwZS5wYXRoID0gXCIvXCI7XG5Db29raWUucHJvdG90eXBlLmV4cGlyZXMgPSB1bmRlZmluZWQ7XG5Db29raWUucHJvdG90eXBlLmRvbWFpbiA9IHVuZGVmaW5lZDtcbkNvb2tpZS5wcm90b3R5cGUuaHR0cE9ubHkgPSB0cnVlO1xuQ29va2llLnByb3RvdHlwZS5zYW1lU2l0ZSA9IGZhbHNlO1xuQ29va2llLnByb3RvdHlwZS5zZWN1cmUgPSBmYWxzZTtcbkNvb2tpZS5wcm90b3R5cGUub3ZlcndyaXRlID0gZmFsc2U7XG5cbkNvb2tpZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMubmFtZSArIFwiPVwiICsgdGhpcy52YWx1ZVxufTtcblxuQ29va2llLnByb3RvdHlwZS50b0hlYWRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgaGVhZGVyID0gdGhpcy50b1N0cmluZygpXG5cbiAgaWYgKHRoaXMubWF4QWdlKSB0aGlzLmV4cGlyZXMgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgdGhpcy5tYXhBZ2UpO1xuXG4gIGlmICh0aGlzLnBhdGggICAgICkgaGVhZGVyICs9IFwiOyBwYXRoPVwiICsgdGhpcy5wYXRoXG4gIGlmICh0aGlzLmV4cGlyZXMgICkgaGVhZGVyICs9IFwiOyBleHBpcmVzPVwiICsgdGhpcy5leHBpcmVzLnRvVVRDU3RyaW5nKClcbiAgaWYgKHRoaXMuZG9tYWluICAgKSBoZWFkZXIgKz0gXCI7IGRvbWFpbj1cIiArIHRoaXMuZG9tYWluXG4gIGlmICh0aGlzLnNhbWVTaXRlICkgaGVhZGVyICs9IFwiOyBzYW1lc2l0ZT1cIiArICh0aGlzLnNhbWVTaXRlID09PSB0cnVlID8gJ3N0cmljdCcgOiB0aGlzLnNhbWVTaXRlLnRvTG93ZXJDYXNlKCkpXG4gIGlmICh0aGlzLnNlY3VyZSAgICkgaGVhZGVyICs9IFwiOyBzZWN1cmVcIlxuICBpZiAodGhpcy5odHRwT25seSApIGhlYWRlciArPSBcIjsgaHR0cG9ubHlcIlxuXG4gIHJldHVybiBoZWFkZXJcbn07XG5cbi8vIGJhY2stY29tcGF0IHNvIG1heGFnZSBtaXJyb3JzIG1heEFnZVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KENvb2tpZS5wcm90b3R5cGUsICdtYXhhZ2UnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLm1heEFnZSB9LFxuICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHRoaXMubWF4QWdlID0gdmFsIH1cbn0pO1xuZGVwcmVjYXRlLnByb3BlcnR5KENvb2tpZS5wcm90b3R5cGUsICdtYXhhZ2UnLCAnXCJtYXhhZ2VcIjsgdXNlIFwibWF4QWdlXCIgaW5zdGVhZCcpXG5cbmZ1bmN0aW9uIGdldFBhdHRlcm4obmFtZSkge1xuICBpZiAoY2FjaGVbbmFtZV0pIHJldHVybiBjYWNoZVtuYW1lXVxuXG4gIHJldHVybiBjYWNoZVtuYW1lXSA9IG5ldyBSZWdFeHAoXG4gICAgXCIoPzpefDspICpcIiArXG4gICAgbmFtZS5yZXBsYWNlKC9bLVtcXF17fSgpKis/LixcXFxcXiR8I1xcc10vZywgXCJcXFxcJCZcIikgK1xuICAgIFwiPShbXjtdKilcIlxuICApXG59XG5cbmZ1bmN0aW9uIHB1c2hDb29raWUoY29va2llcywgY29va2llKSB7XG4gIGlmIChjb29raWUub3ZlcndyaXRlKSB7XG4gICAgY29va2llcyA9IGNvb2tpZXMuZmlsdGVyKGZ1bmN0aW9uKGMpIHsgcmV0dXJuIGMuaW5kZXhPZihjb29raWUubmFtZSsnPScpICE9PSAwIH0pXG4gIH1cbiAgY29va2llcy5wdXNoKGNvb2tpZS50b0hlYWRlcigpKVxuICByZXR1cm4gY29va2llc1xufVxuXG5Db29raWVzLmNvbm5lY3QgPSBDb29raWVzLmV4cHJlc3MgPSBmdW5jdGlvbihrZXlzKSB7XG4gIHJldHVybiBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgIHJlcS5jb29raWVzID0gcmVzLmNvb2tpZXMgPSBuZXcgQ29va2llcyhyZXEsIHJlcywge1xuICAgICAga2V5czoga2V5c1xuICAgIH0pXG5cbiAgICBuZXh0KClcbiAgfVxufVxuXG5Db29raWVzLkNvb2tpZSA9IENvb2tpZVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvb2tpZXNcbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJyMwMDAwQ0MnLCAnIzAwMDBGRicsICcjMDAzM0NDJywgJyMwMDMzRkYnLCAnIzAwNjZDQycsICcjMDA2NkZGJywgJyMwMDk5Q0MnLFxuICAnIzAwOTlGRicsICcjMDBDQzAwJywgJyMwMENDMzMnLCAnIzAwQ0M2NicsICcjMDBDQzk5JywgJyMwMENDQ0MnLCAnIzAwQ0NGRicsXG4gICcjMzMwMENDJywgJyMzMzAwRkYnLCAnIzMzMzNDQycsICcjMzMzM0ZGJywgJyMzMzY2Q0MnLCAnIzMzNjZGRicsICcjMzM5OUNDJyxcbiAgJyMzMzk5RkYnLCAnIzMzQ0MwMCcsICcjMzNDQzMzJywgJyMzM0NDNjYnLCAnIzMzQ0M5OScsICcjMzNDQ0NDJywgJyMzM0NDRkYnLFxuICAnIzY2MDBDQycsICcjNjYwMEZGJywgJyM2NjMzQ0MnLCAnIzY2MzNGRicsICcjNjZDQzAwJywgJyM2NkNDMzMnLCAnIzk5MDBDQycsXG4gICcjOTkwMEZGJywgJyM5OTMzQ0MnLCAnIzk5MzNGRicsICcjOTlDQzAwJywgJyM5OUNDMzMnLCAnI0NDMDAwMCcsICcjQ0MwMDMzJyxcbiAgJyNDQzAwNjYnLCAnI0NDMDA5OScsICcjQ0MwMENDJywgJyNDQzAwRkYnLCAnI0NDMzMwMCcsICcjQ0MzMzMzJywgJyNDQzMzNjYnLFxuICAnI0NDMzM5OScsICcjQ0MzM0NDJywgJyNDQzMzRkYnLCAnI0NDNjYwMCcsICcjQ0M2NjMzJywgJyNDQzk5MDAnLCAnI0NDOTkzMycsXG4gICcjQ0NDQzAwJywgJyNDQ0NDMzMnLCAnI0ZGMDAwMCcsICcjRkYwMDMzJywgJyNGRjAwNjYnLCAnI0ZGMDA5OScsICcjRkYwMENDJyxcbiAgJyNGRjAwRkYnLCAnI0ZGMzMwMCcsICcjRkYzMzMzJywgJyNGRjMzNjYnLCAnI0ZGMzM5OScsICcjRkYzM0NDJywgJyNGRjMzRkYnLFxuICAnI0ZGNjYwMCcsICcjRkY2NjMzJywgJyNGRjk5MDAnLCAnI0ZGOTkzMycsICcjRkZDQzAwJywgJyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydHMuaW5zdGFuY2VzID0gW107XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIHZhciBwcmV2VGltZTtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgZXhwb3J0cy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdmFyIGluZGV4ID0gZXhwb3J0cy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGV4cG9ydHMuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIGk7XG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleHBvcnRzLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnN0YW5jZSA9IGV4cG9ydHMuaW5zdGFuY2VzW2ldO1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCIvKipcbiAqIERldGVjdCBFbGVjdHJvbiByZW5kZXJlciBwcm9jZXNzLCB3aGljaCBpcyBub2RlLCBidXQgd2Ugc2hvdWxkXG4gKiB0cmVhdCBhcyBhIGJyb3dzZXIuXG4gKi9cblxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Jyb3dzZXIuanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9ub2RlLmpzJyk7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbi8qKlxuICogVGhpcyBpcyB0aGUgTm9kZS5qcyBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGVidWcnKTtcbmV4cG9ydHMuaW5pdCA9IGluaXQ7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFsgNiwgMiwgMywgNCwgNSwgMSBdO1xuXG50cnkge1xuICB2YXIgc3VwcG9ydHNDb2xvciA9IHJlcXVpcmUoJ3N1cHBvcnRzLWNvbG9yJyk7XG4gIGlmIChzdXBwb3J0c0NvbG9yICYmIHN1cHBvcnRzQ29sb3IubGV2ZWwgPj0gMikge1xuICAgIGV4cG9ydHMuY29sb3JzID0gW1xuICAgICAgMjAsIDIxLCAyNiwgMjcsIDMyLCAzMywgMzgsIDM5LCA0MCwgNDEsIDQyLCA0MywgNDQsIDQ1LCA1NiwgNTcsIDYyLCA2MywgNjgsXG4gICAgICA2OSwgNzQsIDc1LCA3NiwgNzcsIDc4LCA3OSwgODAsIDgxLCA5MiwgOTMsIDk4LCA5OSwgMTEyLCAxMTMsIDEyOCwgMTI5LCAxMzQsXG4gICAgICAxMzUsIDE0OCwgMTQ5LCAxNjAsIDE2MSwgMTYyLCAxNjMsIDE2NCwgMTY1LCAxNjYsIDE2NywgMTY4LCAxNjksIDE3MCwgMTcxLFxuICAgICAgMTcyLCAxNzMsIDE3OCwgMTc5LCAxODQsIDE4NSwgMTk2LCAxOTcsIDE5OCwgMTk5LCAyMDAsIDIwMSwgMjAyLCAyMDMsIDIwNCxcbiAgICAgIDIwNSwgMjA2LCAyMDcsIDIwOCwgMjA5LCAyMTQsIDIxNSwgMjIwLCAyMjFcbiAgICBdO1xuICB9XG59IGNhdGNoIChlcnIpIHtcbiAgLy8gc3dhbGxvdyAtIHdlIG9ubHkgY2FyZSBpZiBgc3VwcG9ydHMtY29sb3JgIGlzIGF2YWlsYWJsZTsgaXQgZG9lc24ndCBoYXZlIHRvIGJlLlxufVxuXG4vKipcbiAqIEJ1aWxkIHVwIHRoZSBkZWZhdWx0IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGZyb20gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiAgICQgREVCVUdfQ09MT1JTPW5vIERFQlVHX0RFUFRIPTEwIERFQlVHX1NIT1dfSElEREVOPWVuYWJsZWQgbm9kZSBzY3JpcHQuanNcbiAqL1xuXG5leHBvcnRzLmluc3BlY3RPcHRzID0gT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAvXmRlYnVnXy9pLnRlc3Qoa2V5KTtcbn0pLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcbiAgLy8gY2FtZWwtY2FzZVxuICB2YXIgcHJvcCA9IGtleVxuICAgIC5zdWJzdHJpbmcoNilcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9fKFthLXpdKS9nLCBmdW5jdGlvbiAoXywgaykgeyByZXR1cm4gay50b1VwcGVyQ2FzZSgpIH0pO1xuXG4gIC8vIGNvZXJjZSBzdHJpbmcgdmFsdWUgaW50byBKUyB2YWx1ZVxuICB2YXIgdmFsID0gcHJvY2Vzcy5lbnZba2V5XTtcbiAgaWYgKC9eKHllc3xvbnx0cnVlfGVuYWJsZWQpJC9pLnRlc3QodmFsKSkgdmFsID0gdHJ1ZTtcbiAgZWxzZSBpZiAoL14obm98b2ZmfGZhbHNlfGRpc2FibGVkKSQvaS50ZXN0KHZhbCkpIHZhbCA9IGZhbHNlO1xuICBlbHNlIGlmICh2YWwgPT09ICdudWxsJykgdmFsID0gbnVsbDtcbiAgZWxzZSB2YWwgPSBOdW1iZXIodmFsKTtcblxuICBvYmpbcHJvcF0gPSB2YWw7XG4gIHJldHVybiBvYmo7XG59LCB7fSk7XG5cbi8qKlxuICogSXMgc3Rkb3V0IGEgVFRZPyBDb2xvcmVkIG91dHB1dCBpcyBlbmFibGVkIHdoZW4gYHRydWVgLlxuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgcmV0dXJuICdjb2xvcnMnIGluIGV4cG9ydHMuaW5zcGVjdE9wdHNcbiAgICA/IEJvb2xlYW4oZXhwb3J0cy5pbnNwZWN0T3B0cy5jb2xvcnMpXG4gICAgOiB0dHkuaXNhdHR5KHByb2Nlc3Muc3RkZXJyLmZkKTtcbn1cblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsIG9uIGEgc2luZ2xlIGxpbmUuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLm8gPSBmdW5jdGlvbih2KSB7XG4gIHRoaXMuaW5zcGVjdE9wdHMuY29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG4gIHJldHVybiB1dGlsLmluc3BlY3QodiwgdGhpcy5pbnNwZWN0T3B0cylcbiAgICAuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpXG4gICAgfSkuam9pbignICcpO1xufTtcblxuLyoqXG4gKiBNYXAgJW8gdG8gYHV0aWwuaW5zcGVjdCgpYCwgYWxsb3dpbmcgbXVsdGlwbGUgbGluZXMgaWYgbmVlZGVkLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5PID0gZnVuY3Rpb24odikge1xuICB0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuICByZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcblxuLyoqXG4gKiBBZGRzIEFOU0kgY29sb3IgZXNjYXBlIGNvZGVzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIG5hbWUgPSB0aGlzLm5hbWVzcGFjZTtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGlmICh1c2VDb2xvcnMpIHtcbiAgICB2YXIgYyA9IHRoaXMuY29sb3I7XG4gICAgdmFyIGNvbG9yQ29kZSA9ICdcXHUwMDFiWzMnICsgKGMgPCA4ID8gYyA6ICc4OzU7JyArIGMpO1xuICAgIHZhciBwcmVmaXggPSAnICAnICsgY29sb3JDb2RlICsgJzsxbScgKyBuYW1lICsgJyAnICsgJ1xcdTAwMWJbMG0nO1xuXG4gICAgYXJnc1swXSA9IHByZWZpeCArIGFyZ3NbMF0uc3BsaXQoJ1xcbicpLmpvaW4oJ1xcbicgKyBwcmVmaXgpO1xuICAgIGFyZ3MucHVzaChjb2xvckNvZGUgKyAnbSsnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpICsgJ1xcdTAwMWJbMG0nKTtcbiAgfSBlbHNlIHtcbiAgICBhcmdzWzBdID0gZ2V0RGF0ZSgpICsgbmFtZSArICcgJyArIGFyZ3NbMF07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0ZSgpIHtcbiAgaWYgKGV4cG9ydHMuaW5zcGVjdE9wdHMuaGlkZURhdGUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSArICcgJztcbiAgfVxufVxuXG4vKipcbiAqIEludm9rZXMgYHV0aWwuZm9ybWF0KClgIHdpdGggdGhlIHNwZWNpZmllZCBhcmd1bWVudHMgYW5kIHdyaXRlcyB0byBzdGRlcnIuXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICByZXR1cm4gcHJvY2Vzcy5zdGRlcnIud3JpdGUodXRpbC5mb3JtYXQuYXBwbHkodXRpbCwgYXJndW1lbnRzKSArICdcXG4nKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAvLyBJZiB5b3Ugc2V0IGEgcHJvY2Vzcy5lbnYgZmllbGQgdG8gbnVsbCBvciB1bmRlZmluZWQsIGl0IGdldHMgY2FzdCB0byB0aGVcbiAgICAvLyBzdHJpbmcgJ251bGwnIG9yICd1bmRlZmluZWQnLiBKdXN0IGRlbGV0ZSBpbnN0ZWFkLlxuICAgIGRlbGV0ZSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLmVudi5ERUJVRyA9IG5hbWVzcGFjZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuREVCVUc7XG59XG5cbi8qKlxuICogSW5pdCBsb2dpYyBmb3IgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKlxuICogQ3JlYXRlIGEgbmV3IGBpbnNwZWN0T3B0c2Agb2JqZWN0IGluIGNhc2UgYHVzZUNvbG9yc2AgaXMgc2V0XG4gKiBkaWZmZXJlbnRseSBmb3IgYSBwYXJ0aWN1bGFyIGBkZWJ1Z2AgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gaW5pdCAoZGVidWcpIHtcbiAgZGVidWcuaW5zcGVjdE9wdHMgPSB7fTtcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV4cG9ydHMuaW5zcGVjdE9wdHMpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBkZWJ1Zy5pbnNwZWN0T3B0c1trZXlzW2ldXSA9IGV4cG9ydHMuaW5zcGVjdE9wdHNba2V5c1tpXV07XG4gIH1cbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYHByb2Nlc3MuZW52LkRFQlVHYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcbiIsInZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4vbGliL2tleXMuanMnKTtcbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vbGliL2lzX2FyZ3VtZW50cy5qcycpO1xuXG52YXIgZGVlcEVxdWFsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWN0dWFsLCBleHBlY3RlZCwgb3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfSBlbHNlIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBEYXRlICYmIGV4cGVjdGVkIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zLiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8IHR5cGVvZiBhY3R1YWwgIT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cGVjdGVkICE9ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdHMuc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyA3LjQuIEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgb3B0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyICh4KSB7XG4gIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHgubGVuZ3RoICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIHguY29weSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeC5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwICYmIHR5cGVvZiB4WzBdICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgb3B0cykge1xuICB2YXIgaSwga2V5O1xuICBpZiAoaXNVbmRlZmluZWRPck51bGwoYSkgfHwgaXNVbmRlZmluZWRPck51bGwoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHJldHVybiBmYWxzZTtcbiAgLy9+fn5JJ3ZlIG1hbmFnZWQgdG8gYnJlYWsgT2JqZWN0LmtleXMgdGhyb3VnaCBzY3Jld3kgYXJndW1lbnRzIHBhc3NpbmcuXG4gIC8vICAgQ29udmVydGluZyB0byBhcnJheSBzb2x2ZXMgdGhlIHByb2JsZW0uXG4gIGlmIChpc0FyZ3VtZW50cyhhKSkge1xuICAgIGlmICghaXNBcmd1bWVudHMoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIG9wdHMpO1xuICB9XG4gIGlmIChpc0J1ZmZlcihhKSkge1xuICAgIGlmICghaXNCdWZmZXIoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB0cnkge1xuICAgIHZhciBrYSA9IG9iamVjdEtleXMoYSksXG4gICAgICAgIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgfSBjYXRjaCAoZSkgey8vaGFwcGVucyB3aGVuIG9uZSBpcyBhIHN0cmluZyBsaXRlcmFsIGFuZCB0aGUgb3RoZXIgaXNuJ3RcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBvcHRzKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgYSA9PT0gdHlwZW9mIGI7XG59XG4iLCJ2YXIgc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50cylcbn0pKCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPyBzdXBwb3J0ZWQgOiB1bnN1cHBvcnRlZDtcblxuZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG5mdW5jdGlvbiBzdXBwb3J0ZWQob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbmV4cG9ydHMudW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkKG9iamVjdCl7XG4gIHJldHVybiBvYmplY3QgJiZcbiAgICB0eXBlb2Ygb2JqZWN0ID09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iamVjdC5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnY2FsbGVlJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpIHx8XG4gICAgZmFsc2U7XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nXG4gID8gT2JqZWN0LmtleXMgOiBzaGltO1xuXG5leHBvcnRzLnNoaW0gPSBzaGltO1xuZnVuY3Rpb24gc2hpbSAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIGtleXMucHVzaChrZXkpO1xuICByZXR1cm4ga2V5cztcbn1cbiIsIlxuLyoqXG4gKiBFeHBvc2UgYERlbGVnYXRvcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBEZWxlZ2F0b3I7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIGRlbGVnYXRvci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRGVsZWdhdG9yKHByb3RvLCB0YXJnZXQpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIERlbGVnYXRvcikpIHJldHVybiBuZXcgRGVsZWdhdG9yKHByb3RvLCB0YXJnZXQpO1xuICB0aGlzLnByb3RvID0gcHJvdG87XG4gIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB0aGlzLm1ldGhvZHMgPSBbXTtcbiAgdGhpcy5nZXR0ZXJzID0gW107XG4gIHRoaXMuc2V0dGVycyA9IFtdO1xuICB0aGlzLmZsdWVudHMgPSBbXTtcbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZSBtZXRob2QgYG5hbWVgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcmV0dXJuIHtEZWxlZ2F0b3J9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRGVsZWdhdG9yLnByb3RvdHlwZS5tZXRob2QgPSBmdW5jdGlvbihuYW1lKXtcbiAgdmFyIHByb3RvID0gdGhpcy5wcm90bztcbiAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICB0aGlzLm1ldGhvZHMucHVzaChuYW1lKTtcblxuICBwcm90b1tuYW1lXSA9IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHRoaXNbdGFyZ2V0XVtuYW1lXS5hcHBseSh0aGlzW3RhcmdldF0sIGFyZ3VtZW50cyk7XG4gIH07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERlbGVnYXRvciBhY2Nlc3NvciBgbmFtZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0RlbGVnYXRvcn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5EZWxlZ2F0b3IucHJvdG90eXBlLmFjY2VzcyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gdGhpcy5nZXR0ZXIobmFtZSkuc2V0dGVyKG5hbWUpO1xufTtcblxuLyoqXG4gKiBEZWxlZ2F0b3IgZ2V0dGVyIGBuYW1lYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7RGVsZWdhdG9yfSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkRlbGVnYXRvci5wcm90b3R5cGUuZ2V0dGVyID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciBwcm90byA9IHRoaXMucHJvdG87XG4gIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgdGhpcy5nZXR0ZXJzLnB1c2gobmFtZSk7XG5cbiAgcHJvdG8uX19kZWZpbmVHZXR0ZXJfXyhuYW1lLCBmdW5jdGlvbigpe1xuICAgIHJldHVybiB0aGlzW3RhcmdldF1bbmFtZV07XG4gIH0pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEZWxlZ2F0b3Igc2V0dGVyIGBuYW1lYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7RGVsZWdhdG9yfSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkRlbGVnYXRvci5wcm90b3R5cGUuc2V0dGVyID0gZnVuY3Rpb24obmFtZSl7XG4gIHZhciBwcm90byA9IHRoaXMucHJvdG87XG4gIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgdGhpcy5zZXR0ZXJzLnB1c2gobmFtZSk7XG5cbiAgcHJvdG8uX19kZWZpbmVTZXR0ZXJfXyhuYW1lLCBmdW5jdGlvbih2YWwpe1xuICAgIHJldHVybiB0aGlzW3RhcmdldF1bbmFtZV0gPSB2YWw7XG4gIH0pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEZWxlZ2F0b3IgZmx1ZW50IGFjY2Vzc29yXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0RlbGVnYXRvcn0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5EZWxlZ2F0b3IucHJvdG90eXBlLmZsdWVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHZhciBwcm90byA9IHRoaXMucHJvdG87XG4gIHZhciB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgdGhpcy5mbHVlbnRzLnB1c2gobmFtZSk7XG5cbiAgcHJvdG9bbmFtZV0gPSBmdW5jdGlvbih2YWwpe1xuICAgIGlmICgndW5kZWZpbmVkJyAhPSB0eXBlb2YgdmFsKSB7XG4gICAgICB0aGlzW3RhcmdldF1bbmFtZV0gPSB2YWw7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXNbdGFyZ2V0XVtuYW1lXTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuIiwiLyohXG4gKiBkZXBkXG4gKiBDb3B5cmlnaHQoYykgMjAxNC0yMDE3IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGNhbGxTaXRlVG9TdHJpbmcgPSByZXF1aXJlKCcuL2xpYi9jb21wYXQnKS5jYWxsU2l0ZVRvU3RyaW5nXG52YXIgZXZlbnRMaXN0ZW5lckNvdW50ID0gcmVxdWlyZSgnLi9saWIvY29tcGF0JykuZXZlbnRMaXN0ZW5lckNvdW50XG52YXIgcmVsYXRpdmUgPSByZXF1aXJlKCdwYXRoJykucmVsYXRpdmVcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlcGRcblxuLyoqXG4gKiBHZXQgdGhlIHBhdGggdG8gYmFzZSBmaWxlcyBvbi5cbiAqL1xuXG52YXIgYmFzZVBhdGggPSBwcm9jZXNzLmN3ZCgpXG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIG5hbWVzcGFjZSBpcyBjb250YWluZWQgaW4gdGhlIHN0cmluZy5cbiAqL1xuXG5mdW5jdGlvbiBjb250YWluc05hbWVzcGFjZSAoc3RyLCBuYW1lc3BhY2UpIHtcbiAgdmFyIHZhbHMgPSBzdHIuc3BsaXQoL1sgLF0rLylcbiAgdmFyIG5zID0gU3RyaW5nKG5hbWVzcGFjZSkudG9Mb3dlckNhc2UoKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB2YWwgPSB2YWxzW2ldXG5cbiAgICAvLyBuYW1lc3BhY2UgY29udGFpbmVkXG4gICAgaWYgKHZhbCAmJiAodmFsID09PSAnKicgfHwgdmFsLnRvTG93ZXJDYXNlKCkgPT09IG5zKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgZGF0YSBkZXNjcmlwdG9yIHRvIGFjY2Vzc29yIGRlc2NyaXB0b3IuXG4gKi9cblxuZnVuY3Rpb24gY29udmVydERhdGFEZXNjcmlwdG9yVG9BY2Nlc3NvciAob2JqLCBwcm9wLCBtZXNzYWdlKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApXG4gIHZhciB2YWx1ZSA9IGRlc2NyaXB0b3IudmFsdWVcblxuICBkZXNjcmlwdG9yLmdldCA9IGZ1bmN0aW9uIGdldHRlciAoKSB7IHJldHVybiB2YWx1ZSB9XG5cbiAgaWYgKGRlc2NyaXB0b3Iud3JpdGFibGUpIHtcbiAgICBkZXNjcmlwdG9yLnNldCA9IGZ1bmN0aW9uIHNldHRlciAodmFsKSB7IHJldHVybiAodmFsdWUgPSB2YWwpIH1cbiAgfVxuXG4gIGRlbGV0ZSBkZXNjcmlwdG9yLnZhbHVlXG4gIGRlbGV0ZSBkZXNjcmlwdG9yLndyaXRhYmxlXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzY3JpcHRvcilcblxuICByZXR1cm4gZGVzY3JpcHRvclxufVxuXG4vKipcbiAqIENyZWF0ZSBhcmd1bWVudHMgc3RyaW5nIHRvIGtlZXAgYXJpdHkuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQXJndW1lbnRzU3RyaW5nIChhcml0eSkge1xuICB2YXIgc3RyID0gJydcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyaXR5OyBpKyspIHtcbiAgICBzdHIgKz0gJywgYXJnJyArIGlcbiAgfVxuXG4gIHJldHVybiBzdHIuc3Vic3RyKDIpXG59XG5cbi8qKlxuICogQ3JlYXRlIHN0YWNrIHN0cmluZyBmcm9tIHN0YWNrLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YWNrU3RyaW5nIChzdGFjaykge1xuICB2YXIgc3RyID0gdGhpcy5uYW1lICsgJzogJyArIHRoaXMubmFtZXNwYWNlXG5cbiAgaWYgKHRoaXMubWVzc2FnZSkge1xuICAgIHN0ciArPSAnIGRlcHJlY2F0ZWQgJyArIHRoaXMubWVzc2FnZVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgIHN0ciArPSAnXFxuICAgIGF0ICcgKyBjYWxsU2l0ZVRvU3RyaW5nKHN0YWNrW2ldKVxuICB9XG5cbiAgcmV0dXJuIHN0clxufVxuXG4vKipcbiAqIENyZWF0ZSBkZXByZWNhdGUgZm9yIG5hbWVzcGFjZSBpbiBjYWxsZXIuXG4gKi9cblxuZnVuY3Rpb24gZGVwZCAobmFtZXNwYWNlKSB7XG4gIGlmICghbmFtZXNwYWNlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgbmFtZXNwYWNlIGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIHZhciBzdGFjayA9IGdldFN0YWNrKClcbiAgdmFyIHNpdGUgPSBjYWxsU2l0ZUxvY2F0aW9uKHN0YWNrWzFdKVxuICB2YXIgZmlsZSA9IHNpdGVbMF1cblxuICBmdW5jdGlvbiBkZXByZWNhdGUgKG1lc3NhZ2UpIHtcbiAgICAvLyBjYWxsIHRvIHNlbGYgYXMgbG9nXG4gICAgbG9nLmNhbGwoZGVwcmVjYXRlLCBtZXNzYWdlKVxuICB9XG5cbiAgZGVwcmVjYXRlLl9maWxlID0gZmlsZVxuICBkZXByZWNhdGUuX2lnbm9yZWQgPSBpc2lnbm9yZWQobmFtZXNwYWNlKVxuICBkZXByZWNhdGUuX25hbWVzcGFjZSA9IG5hbWVzcGFjZVxuICBkZXByZWNhdGUuX3RyYWNlZCA9IGlzdHJhY2VkKG5hbWVzcGFjZSlcbiAgZGVwcmVjYXRlLl93YXJuZWQgPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgZGVwcmVjYXRlLmZ1bmN0aW9uID0gd3JhcGZ1bmN0aW9uXG4gIGRlcHJlY2F0ZS5wcm9wZXJ0eSA9IHdyYXBwcm9wZXJ0eVxuXG4gIHJldHVybiBkZXByZWNhdGVcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgbmFtZXNwYWNlIGlzIGlnbm9yZWQuXG4gKi9cblxuZnVuY3Rpb24gaXNpZ25vcmVkIChuYW1lc3BhY2UpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHRlc3RlZCBpbiBhIGNoaWxkIHByb2Nlc3NzICovXG4gIGlmIChwcm9jZXNzLm5vRGVwcmVjYXRpb24pIHtcbiAgICAvLyAtLW5vLWRlcHJlY2F0aW9uIHN1cHBvcnRcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgdmFyIHN0ciA9IHByb2Nlc3MuZW52Lk5PX0RFUFJFQ0FUSU9OIHx8ICcnXG5cbiAgLy8gbmFtZXNwYWNlIGlnbm9yZWRcbiAgcmV0dXJuIGNvbnRhaW5zTmFtZXNwYWNlKHN0ciwgbmFtZXNwYWNlKVxufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBuYW1lc3BhY2UgaXMgdHJhY2VkLlxuICovXG5cbmZ1bmN0aW9uIGlzdHJhY2VkIChuYW1lc3BhY2UpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHRlc3RlZCBpbiBhIGNoaWxkIHByb2Nlc3NzICovXG4gIGlmIChwcm9jZXNzLnRyYWNlRGVwcmVjYXRpb24pIHtcbiAgICAvLyAtLXRyYWNlLWRlcHJlY2F0aW9uIHN1cHBvcnRcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgdmFyIHN0ciA9IHByb2Nlc3MuZW52LlRSQUNFX0RFUFJFQ0FUSU9OIHx8ICcnXG5cbiAgLy8gbmFtZXNwYWNlIHRyYWNlZFxuICByZXR1cm4gY29udGFpbnNOYW1lc3BhY2Uoc3RyLCBuYW1lc3BhY2UpXG59XG5cbi8qKlxuICogRGlzcGxheSBkZXByZWNhdGlvbiBtZXNzYWdlLlxuICovXG5cbmZ1bmN0aW9uIGxvZyAobWVzc2FnZSwgc2l0ZSkge1xuICB2YXIgaGFzbGlzdGVuZXJzID0gZXZlbnRMaXN0ZW5lckNvdW50KHByb2Nlc3MsICdkZXByZWNhdGlvbicpICE9PSAwXG5cbiAgLy8gYWJvcnQgZWFybHkgaWYgbm8gZGVzdGluYXRpb25cbiAgaWYgKCFoYXNsaXN0ZW5lcnMgJiYgdGhpcy5faWdub3JlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgdmFyIGNhbGxlclxuICB2YXIgY2FsbEZpbGVcbiAgdmFyIGNhbGxTaXRlXG4gIHZhciBkZXBTaXRlXG4gIHZhciBpID0gMFxuICB2YXIgc2VlbiA9IGZhbHNlXG4gIHZhciBzdGFjayA9IGdldFN0YWNrKClcbiAgdmFyIGZpbGUgPSB0aGlzLl9maWxlXG5cbiAgaWYgKHNpdGUpIHtcbiAgICAvLyBwcm92aWRlZCBzaXRlXG4gICAgZGVwU2l0ZSA9IHNpdGVcbiAgICBjYWxsU2l0ZSA9IGNhbGxTaXRlTG9jYXRpb24oc3RhY2tbMV0pXG4gICAgY2FsbFNpdGUubmFtZSA9IGRlcFNpdGUubmFtZVxuICAgIGZpbGUgPSBjYWxsU2l0ZVswXVxuICB9IGVsc2Uge1xuICAgIC8vIGdldCBjYWxsIHNpdGVcbiAgICBpID0gMlxuICAgIGRlcFNpdGUgPSBjYWxsU2l0ZUxvY2F0aW9uKHN0YWNrW2ldKVxuICAgIGNhbGxTaXRlID0gZGVwU2l0ZVxuICB9XG5cbiAgLy8gZ2V0IGNhbGxlciBvZiBkZXByZWNhdGVkIHRoaW5nIGluIHJlbGF0aW9uIHRvIGZpbGVcbiAgZm9yICg7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgIGNhbGxlciA9IGNhbGxTaXRlTG9jYXRpb24oc3RhY2tbaV0pXG4gICAgY2FsbEZpbGUgPSBjYWxsZXJbMF1cblxuICAgIGlmIChjYWxsRmlsZSA9PT0gZmlsZSkge1xuICAgICAgc2VlbiA9IHRydWVcbiAgICB9IGVsc2UgaWYgKGNhbGxGaWxlID09PSB0aGlzLl9maWxlKSB7XG4gICAgICBmaWxlID0gdGhpcy5fZmlsZVxuICAgIH0gZWxzZSBpZiAoc2Vlbikge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICB2YXIga2V5ID0gY2FsbGVyXG4gICAgPyBkZXBTaXRlLmpvaW4oJzonKSArICdfXycgKyBjYWxsZXIuam9pbignOicpXG4gICAgOiB1bmRlZmluZWRcblxuICBpZiAoa2V5ICE9PSB1bmRlZmluZWQgJiYga2V5IGluIHRoaXMuX3dhcm5lZCkge1xuICAgIC8vIGFscmVhZHkgd2FybmVkXG4gICAgcmV0dXJuXG4gIH1cblxuICB0aGlzLl93YXJuZWRba2V5XSA9IHRydWVcblxuICAvLyBnZW5lcmF0ZSBhdXRvbWF0aWMgbWVzc2FnZSBmcm9tIGNhbGwgc2l0ZVxuICB2YXIgbXNnID0gbWVzc2FnZVxuICBpZiAoIW1zZykge1xuICAgIG1zZyA9IGNhbGxTaXRlID09PSBkZXBTaXRlIHx8ICFjYWxsU2l0ZS5uYW1lXG4gICAgICA/IGRlZmF1bHRNZXNzYWdlKGRlcFNpdGUpXG4gICAgICA6IGRlZmF1bHRNZXNzYWdlKGNhbGxTaXRlKVxuICB9XG5cbiAgLy8gZW1pdCBkZXByZWNhdGlvbiBpZiBsaXN0ZW5lcnMgZXhpc3RcbiAgaWYgKGhhc2xpc3RlbmVycykge1xuICAgIHZhciBlcnIgPSBEZXByZWNhdGlvbkVycm9yKHRoaXMuX25hbWVzcGFjZSwgbXNnLCBzdGFjay5zbGljZShpKSlcbiAgICBwcm9jZXNzLmVtaXQoJ2RlcHJlY2F0aW9uJywgZXJyKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gZm9ybWF0IGFuZCB3cml0ZSBtZXNzYWdlXG4gIHZhciBmb3JtYXQgPSBwcm9jZXNzLnN0ZGVyci5pc1RUWVxuICAgID8gZm9ybWF0Q29sb3JcbiAgICA6IGZvcm1hdFBsYWluXG4gIHZhciBvdXRwdXQgPSBmb3JtYXQuY2FsbCh0aGlzLCBtc2csIGNhbGxlciwgc3RhY2suc2xpY2UoaSkpXG4gIHByb2Nlc3Muc3RkZXJyLndyaXRlKG91dHB1dCArICdcXG4nLCAndXRmOCcpXG59XG5cbi8qKlxuICogR2V0IGNhbGwgc2l0ZSBsb2NhdGlvbiBhcyBhcnJheS5cbiAqL1xuXG5mdW5jdGlvbiBjYWxsU2l0ZUxvY2F0aW9uIChjYWxsU2l0ZSkge1xuICB2YXIgZmlsZSA9IGNhbGxTaXRlLmdldEZpbGVOYW1lKCkgfHwgJzxhbm9ueW1vdXM+J1xuICB2YXIgbGluZSA9IGNhbGxTaXRlLmdldExpbmVOdW1iZXIoKVxuICB2YXIgY29sbSA9IGNhbGxTaXRlLmdldENvbHVtbk51bWJlcigpXG5cbiAgaWYgKGNhbGxTaXRlLmlzRXZhbCgpKSB7XG4gICAgZmlsZSA9IGNhbGxTaXRlLmdldEV2YWxPcmlnaW4oKSArICcsICcgKyBmaWxlXG4gIH1cblxuICB2YXIgc2l0ZSA9IFtmaWxlLCBsaW5lLCBjb2xtXVxuXG4gIHNpdGUuY2FsbFNpdGUgPSBjYWxsU2l0ZVxuICBzaXRlLm5hbWUgPSBjYWxsU2l0ZS5nZXRGdW5jdGlvbk5hbWUoKVxuXG4gIHJldHVybiBzaXRlXG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBkZWZhdWx0IG1lc3NhZ2UgZnJvbSB0aGUgc2l0ZS5cbiAqL1xuXG5mdW5jdGlvbiBkZWZhdWx0TWVzc2FnZSAoc2l0ZSkge1xuICB2YXIgY2FsbFNpdGUgPSBzaXRlLmNhbGxTaXRlXG4gIHZhciBmdW5jTmFtZSA9IHNpdGUubmFtZVxuXG4gIC8vIG1ha2UgdXNlZnVsIGFub255bW91cyBuYW1lXG4gIGlmICghZnVuY05hbWUpIHtcbiAgICBmdW5jTmFtZSA9ICc8YW5vbnltb3VzQCcgKyBmb3JtYXRMb2NhdGlvbihzaXRlKSArICc+J1xuICB9XG5cbiAgdmFyIGNvbnRleHQgPSBjYWxsU2l0ZS5nZXRUaGlzKClcbiAgdmFyIHR5cGVOYW1lID0gY29udGV4dCAmJiBjYWxsU2l0ZS5nZXRUeXBlTmFtZSgpXG5cbiAgLy8gaWdub3JlIHVzZWxlc3MgdHlwZSBuYW1lXG4gIGlmICh0eXBlTmFtZSA9PT0gJ09iamVjdCcpIHtcbiAgICB0eXBlTmFtZSA9IHVuZGVmaW5lZFxuICB9XG5cbiAgLy8gbWFrZSB1c2VmdWwgdHlwZSBuYW1lXG4gIGlmICh0eXBlTmFtZSA9PT0gJ0Z1bmN0aW9uJykge1xuICAgIHR5cGVOYW1lID0gY29udGV4dC5uYW1lIHx8IHR5cGVOYW1lXG4gIH1cblxuICByZXR1cm4gdHlwZU5hbWUgJiYgY2FsbFNpdGUuZ2V0TWV0aG9kTmFtZSgpXG4gICAgPyB0eXBlTmFtZSArICcuJyArIGZ1bmNOYW1lXG4gICAgOiBmdW5jTmFtZVxufVxuXG4vKipcbiAqIEZvcm1hdCBkZXByZWNhdGlvbiBtZXNzYWdlIHdpdGhvdXQgY29sb3IuXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0UGxhaW4gKG1zZywgY2FsbGVyLCBzdGFjaykge1xuICB2YXIgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpXG5cbiAgdmFyIGZvcm1hdHRlZCA9IHRpbWVzdGFtcCArXG4gICAgJyAnICsgdGhpcy5fbmFtZXNwYWNlICtcbiAgICAnIGRlcHJlY2F0ZWQgJyArIG1zZ1xuXG4gIC8vIGFkZCBzdGFjayB0cmFjZVxuICBpZiAodGhpcy5fdHJhY2VkKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuICAgICAgZm9ybWF0dGVkICs9ICdcXG4gICAgYXQgJyArIGNhbGxTaXRlVG9TdHJpbmcoc3RhY2tbaV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFxuICB9XG5cbiAgaWYgKGNhbGxlcikge1xuICAgIGZvcm1hdHRlZCArPSAnIGF0ICcgKyBmb3JtYXRMb2NhdGlvbihjYWxsZXIpXG4gIH1cblxuICByZXR1cm4gZm9ybWF0dGVkXG59XG5cbi8qKlxuICogRm9ybWF0IGRlcHJlY2F0aW9uIG1lc3NhZ2Ugd2l0aCBjb2xvci5cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRDb2xvciAobXNnLCBjYWxsZXIsIHN0YWNrKSB7XG4gIHZhciBmb3JtYXR0ZWQgPSAnXFx4MWJbMzY7MW0nICsgdGhpcy5fbmFtZXNwYWNlICsgJ1xceDFiWzIyOzM5bScgKyAvLyBib2xkIGN5YW5cbiAgICAnIFxceDFiWzMzOzFtZGVwcmVjYXRlZFxceDFiWzIyOzM5bScgKyAvLyBib2xkIHllbGxvd1xuICAgICcgXFx4MWJbMG0nICsgbXNnICsgJ1xceDFiWzM5bScgLy8gcmVzZXRcblxuICAvLyBhZGQgc3RhY2sgdHJhY2VcbiAgaWYgKHRoaXMuX3RyYWNlZCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvcm1hdHRlZCArPSAnXFxuICAgIFxceDFiWzM2bWF0ICcgKyBjYWxsU2l0ZVRvU3RyaW5nKHN0YWNrW2ldKSArICdcXHgxYlszOW0nIC8vIGN5YW5cbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkXG4gIH1cblxuICBpZiAoY2FsbGVyKSB7XG4gICAgZm9ybWF0dGVkICs9ICcgXFx4MWJbMzZtJyArIGZvcm1hdExvY2F0aW9uKGNhbGxlcikgKyAnXFx4MWJbMzltJyAvLyBjeWFuXG4gIH1cblxuICByZXR1cm4gZm9ybWF0dGVkXG59XG5cbi8qKlxuICogRm9ybWF0IGNhbGwgc2l0ZSBsb2NhdGlvbi5cbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRMb2NhdGlvbiAoY2FsbFNpdGUpIHtcbiAgcmV0dXJuIHJlbGF0aXZlKGJhc2VQYXRoLCBjYWxsU2l0ZVswXSkgK1xuICAgICc6JyArIGNhbGxTaXRlWzFdICtcbiAgICAnOicgKyBjYWxsU2l0ZVsyXVxufVxuXG4vKipcbiAqIEdldCB0aGUgc3RhY2sgYXMgYXJyYXkgb2YgY2FsbCBzaXRlcy5cbiAqL1xuXG5mdW5jdGlvbiBnZXRTdGFjayAoKSB7XG4gIHZhciBsaW1pdCA9IEVycm9yLnN0YWNrVHJhY2VMaW1pdFxuICB2YXIgb2JqID0ge31cbiAgdmFyIHByZXAgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZVxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJlcGFyZU9iamVjdFN0YWNrVHJhY2VcbiAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gTWF0aC5tYXgoMTAsIGxpbWl0KVxuXG4gIC8vIGNhcHR1cmUgdGhlIHN0YWNrXG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKG9iailcblxuICAvLyBzbGljZSB0aGlzIGZ1bmN0aW9uIG9mZiB0aGUgdG9wXG4gIHZhciBzdGFjayA9IG9iai5zdGFjay5zbGljZSgxKVxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJlcFxuICBFcnJvci5zdGFja1RyYWNlTGltaXQgPSBsaW1pdFxuXG4gIHJldHVybiBzdGFja1xufVxuXG4vKipcbiAqIENhcHR1cmUgY2FsbCBzaXRlIHN0YWNrIGZyb20gdjguXG4gKi9cblxuZnVuY3Rpb24gcHJlcGFyZU9iamVjdFN0YWNrVHJhY2UgKG9iaiwgc3RhY2spIHtcbiAgcmV0dXJuIHN0YWNrXG59XG5cbi8qKlxuICogUmV0dXJuIGEgd3JhcHBlZCBmdW5jdGlvbiBpbiBhIGRlcHJlY2F0aW9uIG1lc3NhZ2UuXG4gKi9cblxuZnVuY3Rpb24gd3JhcGZ1bmN0aW9uIChmbiwgbWVzc2FnZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgZm4gbXVzdCBiZSBhIGZ1bmN0aW9uJylcbiAgfVxuXG4gIHZhciBhcmdzID0gY3JlYXRlQXJndW1lbnRzU3RyaW5nKGZuLmxlbmd0aClcbiAgdmFyIGRlcHJlY2F0ZSA9IHRoaXMgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgc3RhY2sgPSBnZXRTdGFjaygpXG4gIHZhciBzaXRlID0gY2FsbFNpdGVMb2NhdGlvbihzdGFja1sxXSlcblxuICBzaXRlLm5hbWUgPSBmbi5uYW1lXG5cbiAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXG4gIHZhciBkZXByZWNhdGVkZm4gPSBldmFsKCcoZnVuY3Rpb24gKCcgKyBhcmdzICsgJykge1xcbicgK1xuICAgICdcInVzZSBzdHJpY3RcIlxcbicgK1xuICAgICdsb2cuY2FsbChkZXByZWNhdGUsIG1lc3NhZ2UsIHNpdGUpXFxuJyArXG4gICAgJ3JldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXFxuJyArXG4gICAgJ30pJylcblxuICByZXR1cm4gZGVwcmVjYXRlZGZuXG59XG5cbi8qKlxuICogV3JhcCBwcm9wZXJ0eSBpbiBhIGRlcHJlY2F0aW9uIG1lc3NhZ2UuXG4gKi9cblxuZnVuY3Rpb24gd3JhcHByb3BlcnR5IChvYmosIHByb3AsIG1lc3NhZ2UpIHtcbiAgaWYgKCFvYmogfHwgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnICYmIHR5cGVvZiBvYmogIT09ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgb2JqIG11c3QgYmUgb2JqZWN0JylcbiAgfVxuXG4gIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApXG5cbiAgaWYgKCFkZXNjcmlwdG9yKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbXVzdCBjYWxsIHByb3BlcnR5IG9uIG93bmVyIG9iamVjdCcpXG4gIH1cblxuICBpZiAoIWRlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJvcGVydHkgbXVzdCBiZSBjb25maWd1cmFibGUnKVxuICB9XG5cbiAgdmFyIGRlcHJlY2F0ZSA9IHRoaXNcbiAgdmFyIHN0YWNrID0gZ2V0U3RhY2soKVxuICB2YXIgc2l0ZSA9IGNhbGxTaXRlTG9jYXRpb24oc3RhY2tbMV0pXG5cbiAgLy8gc2V0IHNpdGUgbmFtZVxuICBzaXRlLm5hbWUgPSBwcm9wXG5cbiAgLy8gY29udmVydCBkYXRhIGRlc2NyaXB0b3JcbiAgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikge1xuICAgIGRlc2NyaXB0b3IgPSBjb252ZXJ0RGF0YURlc2NyaXB0b3JUb0FjY2Vzc29yKG9iaiwgcHJvcCwgbWVzc2FnZSlcbiAgfVxuXG4gIHZhciBnZXQgPSBkZXNjcmlwdG9yLmdldFxuICB2YXIgc2V0ID0gZGVzY3JpcHRvci5zZXRcblxuICAvLyB3cmFwIGdldHRlclxuICBpZiAodHlwZW9mIGdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRlc2NyaXB0b3IuZ2V0ID0gZnVuY3Rpb24gZ2V0dGVyICgpIHtcbiAgICAgIGxvZy5jYWxsKGRlcHJlY2F0ZSwgbWVzc2FnZSwgc2l0ZSlcbiAgICAgIHJldHVybiBnZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxuXG4gIC8vIHdyYXAgc2V0dGVyXG4gIGlmICh0eXBlb2Ygc2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGVzY3JpcHRvci5zZXQgPSBmdW5jdGlvbiBzZXR0ZXIgKCkge1xuICAgICAgbG9nLmNhbGwoZGVwcmVjYXRlLCBtZXNzYWdlLCBzaXRlKVxuICAgICAgcmV0dXJuIHNldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgcHJvcCwgZGVzY3JpcHRvcilcbn1cblxuLyoqXG4gKiBDcmVhdGUgRGVwcmVjYXRpb25FcnJvciBmb3IgZGVwcmVjYXRpb25cbiAqL1xuXG5mdW5jdGlvbiBEZXByZWNhdGlvbkVycm9yIChuYW1lc3BhY2UsIG1lc3NhZ2UsIHN0YWNrKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcigpXG4gIHZhciBzdGFja1N0cmluZ1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnJvciwgJ2NvbnN0cnVjdG9yJywge1xuICAgIHZhbHVlOiBEZXByZWNhdGlvbkVycm9yXG4gIH0pXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCAnbWVzc2FnZScsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IG1lc3NhZ2UsXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSlcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyb3IsICduYW1lJywge1xuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogJ0RlcHJlY2F0aW9uRXJyb3InLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCAnbmFtZXNwYWNlJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogbmFtZXNwYWNlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pXG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycm9yLCAnc3RhY2snLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHN0YWNrU3RyaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrU3RyaW5nXG4gICAgICB9XG5cbiAgICAgIC8vIHByZXBhcmUgc3RhY2sgdHJhY2VcbiAgICAgIHJldHVybiAoc3RhY2tTdHJpbmcgPSBjcmVhdGVTdGFja1N0cmluZy5jYWxsKHRoaXMsIHN0YWNrKSlcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0dGVyICh2YWwpIHtcbiAgICAgIHN0YWNrU3RyaW5nID0gdmFsXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBlcnJvclxufVxuIiwiLyohXG4gKiBkZXBkXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjYWxsU2l0ZVRvU3RyaW5nXG5cbi8qKlxuICogRm9ybWF0IGEgQ2FsbFNpdGUgZmlsZSBsb2NhdGlvbiB0byBhIHN0cmluZy5cbiAqL1xuXG5mdW5jdGlvbiBjYWxsU2l0ZUZpbGVMb2NhdGlvbiAoY2FsbFNpdGUpIHtcbiAgdmFyIGZpbGVOYW1lXG4gIHZhciBmaWxlTG9jYXRpb24gPSAnJ1xuXG4gIGlmIChjYWxsU2l0ZS5pc05hdGl2ZSgpKSB7XG4gICAgZmlsZUxvY2F0aW9uID0gJ25hdGl2ZSdcbiAgfSBlbHNlIGlmIChjYWxsU2l0ZS5pc0V2YWwoKSkge1xuICAgIGZpbGVOYW1lID0gY2FsbFNpdGUuZ2V0U2NyaXB0TmFtZU9yU291cmNlVVJMKClcbiAgICBpZiAoIWZpbGVOYW1lKSB7XG4gICAgICBmaWxlTG9jYXRpb24gPSBjYWxsU2l0ZS5nZXRFdmFsT3JpZ2luKClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZmlsZU5hbWUgPSBjYWxsU2l0ZS5nZXRGaWxlTmFtZSgpXG4gIH1cblxuICBpZiAoZmlsZU5hbWUpIHtcbiAgICBmaWxlTG9jYXRpb24gKz0gZmlsZU5hbWVcblxuICAgIHZhciBsaW5lTnVtYmVyID0gY2FsbFNpdGUuZ2V0TGluZU51bWJlcigpXG4gICAgaWYgKGxpbmVOdW1iZXIgIT0gbnVsbCkge1xuICAgICAgZmlsZUxvY2F0aW9uICs9ICc6JyArIGxpbmVOdW1iZXJcblxuICAgICAgdmFyIGNvbHVtbk51bWJlciA9IGNhbGxTaXRlLmdldENvbHVtbk51bWJlcigpXG4gICAgICBpZiAoY29sdW1uTnVtYmVyKSB7XG4gICAgICAgIGZpbGVMb2NhdGlvbiArPSAnOicgKyBjb2x1bW5OdW1iZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmlsZUxvY2F0aW9uIHx8ICd1bmtub3duIHNvdXJjZSdcbn1cblxuLyoqXG4gKiBGb3JtYXQgYSBDYWxsU2l0ZSB0byBhIHN0cmluZy5cbiAqL1xuXG5mdW5jdGlvbiBjYWxsU2l0ZVRvU3RyaW5nIChjYWxsU2l0ZSkge1xuICB2YXIgYWRkU3VmZml4ID0gdHJ1ZVxuICB2YXIgZmlsZUxvY2F0aW9uID0gY2FsbFNpdGVGaWxlTG9jYXRpb24oY2FsbFNpdGUpXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBjYWxsU2l0ZS5nZXRGdW5jdGlvbk5hbWUoKVxuICB2YXIgaXNDb25zdHJ1Y3RvciA9IGNhbGxTaXRlLmlzQ29uc3RydWN0b3IoKVxuICB2YXIgaXNNZXRob2RDYWxsID0gIShjYWxsU2l0ZS5pc1RvcGxldmVsKCkgfHwgaXNDb25zdHJ1Y3RvcilcbiAgdmFyIGxpbmUgPSAnJ1xuXG4gIGlmIChpc01ldGhvZENhbGwpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNhbGxTaXRlLmdldE1ldGhvZE5hbWUoKVxuICAgIHZhciB0eXBlTmFtZSA9IGdldENvbnN0cnVjdG9yTmFtZShjYWxsU2l0ZSlcblxuICAgIGlmIChmdW5jdGlvbk5hbWUpIHtcbiAgICAgIGlmICh0eXBlTmFtZSAmJiBmdW5jdGlvbk5hbWUuaW5kZXhPZih0eXBlTmFtZSkgIT09IDApIHtcbiAgICAgICAgbGluZSArPSB0eXBlTmFtZSArICcuJ1xuICAgICAgfVxuXG4gICAgICBsaW5lICs9IGZ1bmN0aW9uTmFtZVxuXG4gICAgICBpZiAobWV0aG9kTmFtZSAmJiBmdW5jdGlvbk5hbWUubGFzdEluZGV4T2YoJy4nICsgbWV0aG9kTmFtZSkgIT09IGZ1bmN0aW9uTmFtZS5sZW5ndGggLSBtZXRob2ROYW1lLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgbGluZSArPSAnIFthcyAnICsgbWV0aG9kTmFtZSArICddJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lICs9IHR5cGVOYW1lICsgJy4nICsgKG1ldGhvZE5hbWUgfHwgJzxhbm9ueW1vdXM+JylcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNDb25zdHJ1Y3Rvcikge1xuICAgIGxpbmUgKz0gJ25ldyAnICsgKGZ1bmN0aW9uTmFtZSB8fCAnPGFub255bW91cz4nKVxuICB9IGVsc2UgaWYgKGZ1bmN0aW9uTmFtZSkge1xuICAgIGxpbmUgKz0gZnVuY3Rpb25OYW1lXG4gIH0gZWxzZSB7XG4gICAgYWRkU3VmZml4ID0gZmFsc2VcbiAgICBsaW5lICs9IGZpbGVMb2NhdGlvblxuICB9XG5cbiAgaWYgKGFkZFN1ZmZpeCkge1xuICAgIGxpbmUgKz0gJyAoJyArIGZpbGVMb2NhdGlvbiArICcpJ1xuICB9XG5cbiAgcmV0dXJuIGxpbmVcbn1cblxuLyoqXG4gKiBHZXQgY29uc3RydWN0b3IgbmFtZSBvZiByZXZpdmVyLlxuICovXG5cbmZ1bmN0aW9uIGdldENvbnN0cnVjdG9yTmFtZSAob2JqKSB7XG4gIHZhciByZWNlaXZlciA9IG9iai5yZWNlaXZlclxuICByZXR1cm4gKHJlY2VpdmVyLmNvbnN0cnVjdG9yICYmIHJlY2VpdmVyLmNvbnN0cnVjdG9yLm5hbWUpIHx8IG51bGxcbn1cbiIsIi8qIVxuICogZGVwZFxuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXZlbnRMaXN0ZW5lckNvdW50XG5cbi8qKlxuICogR2V0IHRoZSBjb3VudCBvZiBsaXN0ZW5lcnMgb24gYW4gZXZlbnQgZW1pdHRlciBvZiBhIHNwZWNpZmljIHR5cGUuXG4gKi9cblxuZnVuY3Rpb24gZXZlbnRMaXN0ZW5lckNvdW50IChlbWl0dGVyLCB0eXBlKSB7XG4gIHJldHVybiBlbWl0dGVyLmxpc3RlbmVycyh0eXBlKS5sZW5ndGhcbn1cbiIsIi8qIVxuICogZGVwZFxuICogQ29weXJpZ2h0KGMpIDIwMTQtMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbmxhenlQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ2NhbGxTaXRlVG9TdHJpbmcnLCBmdW5jdGlvbiBjYWxsU2l0ZVRvU3RyaW5nICgpIHtcbiAgdmFyIGxpbWl0ID0gRXJyb3Iuc3RhY2tUcmFjZUxpbWl0XG4gIHZhciBvYmogPSB7fVxuICB2YXIgcHJlcCA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlXG5cbiAgZnVuY3Rpb24gcHJlcGFyZU9iamVjdFN0YWNrVHJhY2UgKG9iaiwgc3RhY2spIHtcbiAgICByZXR1cm4gc3RhY2tcbiAgfVxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJlcGFyZU9iamVjdFN0YWNrVHJhY2VcbiAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gMlxuXG4gIC8vIGNhcHR1cmUgdGhlIHN0YWNrXG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKG9iailcblxuICAvLyBzbGljZSB0aGUgc3RhY2tcbiAgdmFyIHN0YWNrID0gb2JqLnN0YWNrLnNsaWNlKClcblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXBcbiAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID0gbGltaXRcblxuICByZXR1cm4gc3RhY2tbMF0udG9TdHJpbmcgPyB0b1N0cmluZyA6IHJlcXVpcmUoJy4vY2FsbHNpdGUtdG9zdHJpbmcnKVxufSlcblxubGF6eVByb3BlcnR5KG1vZHVsZS5leHBvcnRzLCAnZXZlbnRMaXN0ZW5lckNvdW50JywgZnVuY3Rpb24gZXZlbnRMaXN0ZW5lckNvdW50ICgpIHtcbiAgcmV0dXJuIEV2ZW50RW1pdHRlci5saXN0ZW5lckNvdW50IHx8IHJlcXVpcmUoJy4vZXZlbnQtbGlzdGVuZXItY291bnQnKVxufSlcblxuLyoqXG4gKiBEZWZpbmUgYSBsYXp5IHByb3BlcnR5LlxuICovXG5cbmZ1bmN0aW9uIGxhenlQcm9wZXJ0eSAob2JqLCBwcm9wLCBnZXR0ZXIpIHtcbiAgZnVuY3Rpb24gZ2V0ICgpIHtcbiAgICB2YXIgdmFsID0gZ2V0dGVyKClcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogdmFsXG4gICAgfSlcblxuICAgIHJldHVybiB2YWxcbiAgfVxuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIHByb3AsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGdldFxuICB9KVxufVxuXG4vKipcbiAqIENhbGwgdG9TdHJpbmcoKSBvbiB0aGUgb2JqXG4gKi9cblxuZnVuY3Rpb24gdG9TdHJpbmcgKG9iaikge1xuICByZXR1cm4gb2JqLnRvU3RyaW5nKClcbn1cbiIsIi8qIVxuICogZGVzdHJveVxuICogQ29weXJpZ2h0KGMpIDIwMTQgSm9uYXRoYW4gT25nXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgUmVhZFN0cmVhbSA9IHJlcXVpcmUoJ2ZzJykuUmVhZFN0cmVhbVxudmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBkZXN0cm95XG5cbi8qKlxuICogRGVzdHJveSBhIHN0cmVhbS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gc3RyZWFtXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGVzdHJveShzdHJlYW0pIHtcbiAgaWYgKHN0cmVhbSBpbnN0YW5jZW9mIFJlYWRTdHJlYW0pIHtcbiAgICByZXR1cm4gZGVzdHJveVJlYWRTdHJlYW0oc3RyZWFtKVxuICB9XG5cbiAgaWYgKCEoc3RyZWFtIGluc3RhbmNlb2YgU3RyZWFtKSkge1xuICAgIHJldHVybiBzdHJlYW1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RyZWFtLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtcbiAgICBzdHJlYW0uZGVzdHJveSgpXG4gIH1cblxuICByZXR1cm4gc3RyZWFtXG59XG5cbi8qKlxuICogRGVzdHJveSBhIFJlYWRTdHJlYW0uXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHN0cmVhbVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBkZXN0cm95UmVhZFN0cmVhbShzdHJlYW0pIHtcbiAgc3RyZWFtLmRlc3Ryb3koKVxuXG4gIGlmICh0eXBlb2Ygc3RyZWFtLmNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gbm9kZS5qcyBjb3JlIGJ1ZyB3b3JrLWFyb3VuZFxuICAgIHN0cmVhbS5vbignb3BlbicsIG9uT3BlbkNsb3NlKVxuICB9XG5cbiAgcmV0dXJuIHN0cmVhbVxufVxuXG4vKipcbiAqIE9uIG9wZW4gaGFuZGxlciB0byBjbG9zZSBzdHJlYW0uXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG9uT3BlbkNsb3NlKCkge1xuICBpZiAodHlwZW9mIHRoaXMuZmQgPT09ICdudW1iZXInKSB7XG4gICAgLy8gYWN0dWFsbHkgY2xvc2UgZG93biB0aGUgZmRcbiAgICB0aGlzLmNsb3NlKClcbiAgfVxufVxuIiwiLyohXG4gKiBlZS1maXJzdFxuICogQ29weXJpZ2h0KGMpIDIwMTQgSm9uYXRoYW4gT25nXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpcnN0XG5cbi8qKlxuICogR2V0IHRoZSBmaXJzdCBldmVudCBpbiBhIHNldCBvZiBldmVudCBlbWl0dGVycyBhbmQgZXZlbnQgcGFpcnMuXG4gKlxuICogQHBhcmFtIHthcnJheX0gc3R1ZmZcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmVcbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmaXJzdChzdHVmZiwgZG9uZSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoc3R1ZmYpKVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZyBtdXN0IGJlIGFuIGFycmF5IG9mIFtlZSwgZXZlbnRzLi4uXSBhcnJheXMnKVxuXG4gIHZhciBjbGVhbnVwcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHVmZi5sZW5ndGg7IGkrKykge1xuICAgIHZhciBhcnIgPSBzdHVmZltpXVxuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikgfHwgYXJyLmxlbmd0aCA8IDIpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdlYWNoIGFycmF5IG1lbWJlciBtdXN0IGJlIFtlZSwgZXZlbnRzLi4uXScpXG5cbiAgICB2YXIgZWUgPSBhcnJbMF1cblxuICAgIGZvciAodmFyIGogPSAxOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgZXZlbnQgPSBhcnJbal1cbiAgICAgIHZhciBmbiA9IGxpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcblxuICAgICAgLy8gbGlzdGVuIHRvIHRoZSBldmVudFxuICAgICAgZWUub24oZXZlbnQsIGZuKVxuICAgICAgLy8gcHVzaCB0aGlzIGxpc3RlbmVyIHRvIHRoZSBsaXN0IG9mIGNsZWFudXBzXG4gICAgICBjbGVhbnVwcy5wdXNoKHtcbiAgICAgICAgZWU6IGVlLFxuICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgIGZuOiBmbixcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgY2xlYW51cCgpXG4gICAgZG9uZS5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gIH1cblxuICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHZhciB4XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGVhbnVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgeCA9IGNsZWFudXBzW2ldXG4gICAgICB4LmVlLnJlbW92ZUxpc3RlbmVyKHguZXZlbnQsIHguZm4pXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdGh1bmsoZm4pIHtcbiAgICBkb25lID0gZm5cbiAgfVxuXG4gIHRodW5rLmNhbmNlbCA9IGNsZWFudXBcblxuICByZXR1cm4gdGh1bmtcbn1cblxuLyoqXG4gKiBDcmVhdGUgdGhlIGV2ZW50IGxpc3RlbmVyLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsaXN0ZW5lcihldmVudCwgZG9uZSkge1xuICByZXR1cm4gZnVuY3Rpb24gb25ldmVudChhcmcxKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aClcbiAgICB2YXIgZWUgPSB0aGlzXG4gICAgdmFyIGVyciA9IGV2ZW50ID09PSAnZXJyb3InXG4gICAgICA/IGFyZzFcbiAgICAgIDogbnVsbFxuXG4gICAgLy8gY29weSBhcmdzIHRvIHByZXZlbnQgYXJndW1lbnRzIGVzY2FwaW5nIHNjb3BlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldXG4gICAgfVxuXG4gICAgZG9uZShlcnIsIGVlLCBldmVudCwgYXJncylcbiAgfVxufVxuIiwidmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHJlYW0sIGVycm9yKSB7XG4gIGlmIChzdHJlYW0gaW5zdGFuY2VvZiBTdHJlYW1cbiAgICAmJiAhfnN0cmVhbS5saXN0ZW5lcnMoJ2Vycm9yJykuaW5kZXhPZihlcnJvcikpIHtcbiAgICBzdHJlYW0ub24oJ2Vycm9yJywgZXJyb3IpO1xuICB9XG4gIHJldHVybiBzdHJlYW07XG59O1xuIiwiLyohXG4gKiBlc2NhcGUtaHRtbFxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxMyBUSiBIb2xvd2F5Y2h1a1xuICogQ29weXJpZ2h0KGMpIDIwMTUgQW5kcmVhcyBMdWJiZVxuICogQ29weXJpZ2h0KGMpIDIwMTUgVGlhbmNoZW5nIFwiVGltb3RoeVwiIEd1XG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIG1hdGNoSHRtbFJlZ0V4cCA9IC9bXCInJjw+XS87XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGVIdG1sO1xuXG4vKipcbiAqIEVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gdGhlIGdpdmVuIHN0cmluZyBvZiBodG1sLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gZXNjYXBlIGZvciBpbnNlcnRpbmcgaW50byBIVE1MXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcbiAgdmFyIHN0ciA9ICcnICsgc3RyaW5nO1xuICB2YXIgbWF0Y2ggPSBtYXRjaEh0bWxSZWdFeHAuZXhlYyhzdHIpO1xuXG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIGVzY2FwZTtcbiAgdmFyIGh0bWwgPSAnJztcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RJbmRleCA9IDA7XG5cbiAgZm9yIChpbmRleCA9IG1hdGNoLmluZGV4OyBpbmRleCA8IHN0ci5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGluZGV4KSkge1xuICAgICAgY2FzZSAzNDogLy8gXCJcbiAgICAgICAgZXNjYXBlID0gJyZxdW90Oyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzODogLy8gJlxuICAgICAgICBlc2NhcGUgPSAnJmFtcDsnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzk6IC8vICdcbiAgICAgICAgZXNjYXBlID0gJyYjMzk7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDYwOiAvLyA8XG4gICAgICAgIGVzY2FwZSA9ICcmbHQ7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDYyOiAvLyA+XG4gICAgICAgIGVzY2FwZSA9ICcmZ3Q7JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgaHRtbCArPSBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpO1xuICAgIH1cblxuICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICBodG1sICs9IGVzY2FwZTtcbiAgfVxuXG4gIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4XG4gICAgPyBodG1sICsgc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KVxuICAgIDogaHRtbDtcbn1cbiIsIi8qIVxuICogZnJlc2hcbiAqIENvcHlyaWdodChjKSAyMDEyIFRKIEhvbG93YXljaHVrXG4gKiBDb3B5cmlnaHQoYykgMjAxNi0yMDE3IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBSZWdFeHAgdG8gY2hlY2sgZm9yIG5vLWNhY2hlIHRva2VuIGluIENhY2hlLUNvbnRyb2wuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBDQUNIRV9DT05UUk9MX05PX0NBQ0hFX1JFR0VYUCA9IC8oPzpefCwpXFxzKj9uby1jYWNoZVxccyo/KD86LHwkKS9cblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZXNoXG5cbi8qKlxuICogQ2hlY2sgZnJlc2huZXNzIG9mIHRoZSByZXNwb25zZSB1c2luZyByZXF1ZXN0IGFuZCByZXNwb25zZSBoZWFkZXJzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZXFIZWFkZXJzXG4gKiBAcGFyYW0ge09iamVjdH0gcmVzSGVhZGVyc1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmcmVzaCAocmVxSGVhZGVycywgcmVzSGVhZGVycykge1xuICAvLyBmaWVsZHNcbiAgdmFyIG1vZGlmaWVkU2luY2UgPSByZXFIZWFkZXJzWydpZi1tb2RpZmllZC1zaW5jZSddXG4gIHZhciBub25lTWF0Y2ggPSByZXFIZWFkZXJzWydpZi1ub25lLW1hdGNoJ11cblxuICAvLyB1bmNvbmRpdGlvbmFsIHJlcXVlc3RcbiAgaWYgKCFtb2RpZmllZFNpbmNlICYmICFub25lTWF0Y2gpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIEFsd2F5cyByZXR1cm4gc3RhbGUgd2hlbiBDYWNoZS1Db250cm9sOiBuby1jYWNoZVxuICAvLyB0byBzdXBwb3J0IGVuZC10by1lbmQgcmVsb2FkIHJlcXVlc3RzXG4gIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyNjE2I3NlY3Rpb24tMTQuOS40XG4gIHZhciBjYWNoZUNvbnRyb2wgPSByZXFIZWFkZXJzWydjYWNoZS1jb250cm9sJ11cbiAgaWYgKGNhY2hlQ29udHJvbCAmJiBDQUNIRV9DT05UUk9MX05PX0NBQ0hFX1JFR0VYUC50ZXN0KGNhY2hlQ29udHJvbCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIGlmLW5vbmUtbWF0Y2hcbiAgaWYgKG5vbmVNYXRjaCAmJiBub25lTWF0Y2ggIT09ICcqJykge1xuICAgIHZhciBldGFnID0gcmVzSGVhZGVyc1snZXRhZyddXG5cbiAgICBpZiAoIWV0YWcpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHZhciBldGFnU3RhbGUgPSB0cnVlXG4gICAgdmFyIG1hdGNoZXMgPSBwYXJzZVRva2VuTGlzdChub25lTWF0Y2gpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXRjaGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBtYXRjaGVzW2ldXG4gICAgICBpZiAobWF0Y2ggPT09IGV0YWcgfHwgbWF0Y2ggPT09ICdXLycgKyBldGFnIHx8ICdXLycgKyBtYXRjaCA9PT0gZXRhZykge1xuICAgICAgICBldGFnU3RhbGUgPSBmYWxzZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChldGFnU3RhbGUpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIC8vIGlmLW1vZGlmaWVkLXNpbmNlXG4gIGlmIChtb2RpZmllZFNpbmNlKSB7XG4gICAgdmFyIGxhc3RNb2RpZmllZCA9IHJlc0hlYWRlcnNbJ2xhc3QtbW9kaWZpZWQnXVxuICAgIHZhciBtb2RpZmllZFN0YWxlID0gIWxhc3RNb2RpZmllZCB8fCAhKHBhcnNlSHR0cERhdGUobGFzdE1vZGlmaWVkKSA8PSBwYXJzZUh0dHBEYXRlKG1vZGlmaWVkU2luY2UpKVxuXG4gICAgaWYgKG1vZGlmaWVkU3RhbGUpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogUGFyc2UgYW4gSFRUUCBEYXRlIGludG8gYSBudW1iZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGRhdGVcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VIdHRwRGF0ZSAoZGF0ZSkge1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZSAmJiBEYXRlLnBhcnNlKGRhdGUpXG5cbiAgLy8gaXN0YW5idWwgaWdub3JlIG5leHQ6IGd1YXJkIGFnYWluc3QgZGF0ZS5qcyBEYXRlLnBhcnNlIHBhdGNoaW5nXG4gIHJldHVybiB0eXBlb2YgdGltZXN0YW1wID09PSAnbnVtYmVyJ1xuICAgID8gdGltZXN0YW1wXG4gICAgOiBOYU5cbn1cblxuLyoqXG4gKiBQYXJzZSBhIEhUVFAgdG9rZW4gbGlzdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlVG9rZW5MaXN0IChzdHIpIHtcbiAgdmFyIGVuZCA9IDBcbiAgdmFyIGxpc3QgPSBbXVxuICB2YXIgc3RhcnQgPSAwXG5cbiAgLy8gZ2F0aGVyIHRva2Vuc1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc3dpdGNoIChzdHIuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAweDIwOiAvKiAgICovXG4gICAgICAgIGlmIChzdGFydCA9PT0gZW5kKSB7XG4gICAgICAgICAgc3RhcnQgPSBlbmQgPSBpICsgMVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDB4MmM6IC8qICwgKi9cbiAgICAgICAgbGlzdC5wdXNoKHN0ci5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpXG4gICAgICAgIHN0YXJ0ID0gZW5kID0gaSArIDFcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGVuZCA9IGkgKyAxXG4gICAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgLy8gZmluYWwgdG9rZW5cbiAgbGlzdC5wdXNoKHN0ci5zdWJzdHJpbmcoc3RhcnQsIGVuZCkpXG5cbiAgcmV0dXJuIGxpc3Rcbn1cbiIsInZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJ2h0dHAtZXJyb3JzJyk7XG52YXIgZXFsID0gcmVxdWlyZSgnZGVlcC1lcXVhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2VydDtcblxuZnVuY3Rpb24gYXNzZXJ0KHZhbHVlLCBzdGF0dXMsIG1zZywgb3B0cykge1xuICBpZiAodmFsdWUpIHJldHVybjtcbiAgdGhyb3cgY3JlYXRlRXJyb3Ioc3RhdHVzLCBtc2csIG9wdHMpO1xufVxuXG5hc3NlcnQuZXF1YWwgPSBmdW5jdGlvbihhLCBiLCBzdGF0dXMsIG1zZywgb3B0cykge1xuICBhc3NlcnQoYSA9PSBiLCBzdGF0dXMsIG1zZywgb3B0cyk7XG59O1xuXG5hc3NlcnQubm90RXF1YWwgPSBmdW5jdGlvbihhLCBiLCBzdGF0dXMsIG1zZywgb3B0cykge1xuICBhc3NlcnQoYSAhPSBiLCBzdGF0dXMsIG1zZywgb3B0cyk7XG59O1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwgPSBmdW5jdGlvbihhLCBiLCBzdGF0dXMsIG1zZywgb3B0cykge1xuICBhc3NlcnQoYSA9PT0gYiwgc3RhdHVzLCBtc2csIG9wdHMpO1xufTtcblxuYXNzZXJ0Lm5vdFN0cmljdEVxdWFsID0gZnVuY3Rpb24oYSwgYiwgc3RhdHVzLCBtc2csIG9wdHMpIHtcbiAgYXNzZXJ0KGEgIT09IGIsIHN0YXR1cywgbXNnLCBvcHRzKTtcbn07XG5cbmFzc2VydC5kZWVwRXF1YWwgPSBmdW5jdGlvbihhLCBiLCBzdGF0dXMsIG1zZywgb3B0cykge1xuICBhc3NlcnQoZXFsKGEsIGIpLCBzdGF0dXMsIG1zZywgb3B0cyk7XG59O1xuXG5hc3NlcnQubm90RGVlcEVxdWFsID0gZnVuY3Rpb24oYSwgYiwgc3RhdHVzLCBtc2csIG9wdHMpIHtcbiAgYXNzZXJ0KCFlcWwoYSwgYiksIHN0YXR1cywgbXNnLCBvcHRzKTtcbn07XG4iLCIvKiFcbiAqIGh0dHAtZXJyb3JzXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBKb25hdGhhbiBPbmdcbiAqIENvcHlyaWdodChjKSAyMDE2IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGVwcmVjYXRlID0gcmVxdWlyZSgnZGVwZCcpKCdodHRwLWVycm9ycycpXG52YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCdzZXRwcm90b3R5cGVvZicpXG52YXIgc3RhdHVzZXMgPSByZXF1aXJlKCdzdGF0dXNlcycpXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVFcnJvclxubW9kdWxlLmV4cG9ydHMuSHR0cEVycm9yID0gY3JlYXRlSHR0cEVycm9yQ29uc3RydWN0b3IoKVxuXG4vLyBQb3B1bGF0ZSBleHBvcnRzIGZvciBhbGwgY29uc3RydWN0b3JzXG5wb3B1bGF0ZUNvbnN0cnVjdG9yRXhwb3J0cyhtb2R1bGUuZXhwb3J0cywgc3RhdHVzZXMuY29kZXMsIG1vZHVsZS5leHBvcnRzLkh0dHBFcnJvcilcblxuLyoqXG4gKiBHZXQgdGhlIGNvZGUgY2xhc3Mgb2YgYSBzdGF0dXMgY29kZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29kZUNsYXNzIChzdGF0dXMpIHtcbiAgcmV0dXJuIE51bWJlcihTdHJpbmcoc3RhdHVzKS5jaGFyQXQoMCkgKyAnMDAnKVxufVxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBIVFRQIEVycm9yLlxuICpcbiAqIEByZXR1cm5zIHtFcnJvcn1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFcnJvciAoKSB7XG4gIC8vIHNvIG11Y2ggYXJpdHkgZ29pbmcgb24gfl9+XG4gIHZhciBlcnJcbiAgdmFyIG1zZ1xuICB2YXIgc3RhdHVzID0gNTAwXG4gIHZhciBwcm9wcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXVxuICAgIGlmIChhcmcgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgZXJyID0gYXJnXG4gICAgICBzdGF0dXMgPSBlcnIuc3RhdHVzIHx8IGVyci5zdGF0dXNDb2RlIHx8IHN0YXR1c1xuICAgICAgY29udGludWVcbiAgICB9XG4gICAgc3dpdGNoICh0eXBlb2YgYXJnKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICBtc2cgPSBhcmdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIHN0YXR1cyA9IGFyZ1xuICAgICAgICBpZiAoaSAhPT0gMCkge1xuICAgICAgICAgIGRlcHJlY2F0ZSgnbm9uLWZpcnN0LWFyZ3VtZW50IHN0YXR1cyBjb2RlOyByZXBsYWNlIHdpdGggY3JlYXRlRXJyb3IoJyArIGFyZyArICcsIC4uLiknKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBwcm9wcyA9IGFyZ1xuICAgICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RhdHVzID09PSAnbnVtYmVyJyAmJiAoc3RhdHVzIDwgNDAwIHx8IHN0YXR1cyA+PSA2MDApKSB7XG4gICAgZGVwcmVjYXRlKCdub24tZXJyb3Igc3RhdHVzIGNvZGU7IHVzZSBvbmx5IDR4eCBvciA1eHggc3RhdHVzIGNvZGVzJylcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RhdHVzICE9PSAnbnVtYmVyJyB8fFxuICAgICghc3RhdHVzZXNbc3RhdHVzXSAmJiAoc3RhdHVzIDwgNDAwIHx8IHN0YXR1cyA+PSA2MDApKSkge1xuICAgIHN0YXR1cyA9IDUwMFxuICB9XG5cbiAgLy8gY29uc3RydWN0b3JcbiAgdmFyIEh0dHBFcnJvciA9IGNyZWF0ZUVycm9yW3N0YXR1c10gfHwgY3JlYXRlRXJyb3JbY29kZUNsYXNzKHN0YXR1cyldXG5cbiAgaWYgKCFlcnIpIHtcbiAgICAvLyBjcmVhdGUgZXJyb3JcbiAgICBlcnIgPSBIdHRwRXJyb3JcbiAgICAgID8gbmV3IEh0dHBFcnJvcihtc2cpXG4gICAgICA6IG5ldyBFcnJvcihtc2cgfHwgc3RhdHVzZXNbc3RhdHVzXSlcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShlcnIsIGNyZWF0ZUVycm9yKVxuICB9XG5cbiAgaWYgKCFIdHRwRXJyb3IgfHwgIShlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3IpIHx8IGVyci5zdGF0dXMgIT09IHN0YXR1cykge1xuICAgIC8vIGFkZCBwcm9wZXJ0aWVzIHRvIGdlbmVyaWMgZXJyb3JcbiAgICBlcnIuZXhwb3NlID0gc3RhdHVzIDwgNTAwXG4gICAgZXJyLnN0YXR1cyA9IGVyci5zdGF0dXNDb2RlID0gc3RhdHVzXG4gIH1cblxuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAoa2V5ICE9PSAnc3RhdHVzJyAmJiBrZXkgIT09ICdzdGF0dXNDb2RlJykge1xuICAgICAgZXJyW2tleV0gPSBwcm9wc1trZXldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVyclxufVxuXG4vKipcbiAqIENyZWF0ZSBIVFRQIGVycm9yIGFic3RyYWN0IGJhc2UgY2xhc3MuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUh0dHBFcnJvckNvbnN0cnVjdG9yICgpIHtcbiAgZnVuY3Rpb24gSHR0cEVycm9yICgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdjYW5ub3QgY29uc3RydWN0IGFic3RyYWN0IGNsYXNzJylcbiAgfVxuXG4gIGluaGVyaXRzKEh0dHBFcnJvciwgRXJyb3IpXG5cbiAgcmV0dXJuIEh0dHBFcnJvclxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbnN0cnVjdG9yIGZvciBhIGNsaWVudCBlcnJvci5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50RXJyb3JDb25zdHJ1Y3RvciAoSHR0cEVycm9yLCBuYW1lLCBjb2RlKSB7XG4gIHZhciBjbGFzc05hbWUgPSBuYW1lLm1hdGNoKC9FcnJvciQvKSA/IG5hbWUgOiBuYW1lICsgJ0Vycm9yJ1xuXG4gIGZ1bmN0aW9uIENsaWVudEVycm9yIChtZXNzYWdlKSB7XG4gICAgLy8gY3JlYXRlIHRoZSBlcnJvciBvYmplY3RcbiAgICB2YXIgbXNnID0gbWVzc2FnZSAhPSBudWxsID8gbWVzc2FnZSA6IHN0YXR1c2VzW2NvZGVdXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpXG5cbiAgICAvLyBjYXB0dXJlIGEgc3RhY2sgdHJhY2UgdG8gdGhlIGNvbnN0cnVjdGlvbiBwb2ludFxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGVyciwgQ2xpZW50RXJyb3IpXG5cbiAgICAvLyBhZGp1c3QgdGhlIFtbUHJvdG90eXBlXV1cbiAgICBzZXRQcm90b3R5cGVPZihlcnIsIENsaWVudEVycm9yLnByb3RvdHlwZSlcblxuICAgIC8vIHJlZGVmaW5lIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ21lc3NhZ2UnLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG1zZyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSlcblxuICAgIC8vIHJlZGVmaW5lIHRoZSBlcnJvciBuYW1lXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ25hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBjbGFzc05hbWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyXG4gIH1cblxuICBpbmhlcml0cyhDbGllbnRFcnJvciwgSHR0cEVycm9yKVxuXG4gIENsaWVudEVycm9yLnByb3RvdHlwZS5zdGF0dXMgPSBjb2RlXG4gIENsaWVudEVycm9yLnByb3RvdHlwZS5zdGF0dXNDb2RlID0gY29kZVxuICBDbGllbnRFcnJvci5wcm90b3R5cGUuZXhwb3NlID0gdHJ1ZVxuXG4gIHJldHVybiBDbGllbnRFcnJvclxufVxuXG4vKipcbiAqIENyZWF0ZSBhIGNvbnN0cnVjdG9yIGZvciBhIHNlcnZlciBlcnJvci5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU2VydmVyRXJyb3JDb25zdHJ1Y3RvciAoSHR0cEVycm9yLCBuYW1lLCBjb2RlKSB7XG4gIHZhciBjbGFzc05hbWUgPSBuYW1lLm1hdGNoKC9FcnJvciQvKSA/IG5hbWUgOiBuYW1lICsgJ0Vycm9yJ1xuXG4gIGZ1bmN0aW9uIFNlcnZlckVycm9yIChtZXNzYWdlKSB7XG4gICAgLy8gY3JlYXRlIHRoZSBlcnJvciBvYmplY3RcbiAgICB2YXIgbXNnID0gbWVzc2FnZSAhPSBudWxsID8gbWVzc2FnZSA6IHN0YXR1c2VzW2NvZGVdXG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpXG5cbiAgICAvLyBjYXB0dXJlIGEgc3RhY2sgdHJhY2UgdG8gdGhlIGNvbnN0cnVjdGlvbiBwb2ludFxuICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGVyciwgU2VydmVyRXJyb3IpXG5cbiAgICAvLyBhZGp1c3QgdGhlIFtbUHJvdG90eXBlXV1cbiAgICBzZXRQcm90b3R5cGVPZihlcnIsIFNlcnZlckVycm9yLnByb3RvdHlwZSlcblxuICAgIC8vIHJlZGVmaW5lIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ21lc3NhZ2UnLCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IG1zZyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSlcblxuICAgIC8vIHJlZGVmaW5lIHRoZSBlcnJvciBuYW1lXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgJ25hbWUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBjbGFzc05hbWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gZXJyXG4gIH1cblxuICBpbmhlcml0cyhTZXJ2ZXJFcnJvciwgSHR0cEVycm9yKVxuXG4gIFNlcnZlckVycm9yLnByb3RvdHlwZS5zdGF0dXMgPSBjb2RlXG4gIFNlcnZlckVycm9yLnByb3RvdHlwZS5zdGF0dXNDb2RlID0gY29kZVxuICBTZXJ2ZXJFcnJvci5wcm90b3R5cGUuZXhwb3NlID0gZmFsc2VcblxuICByZXR1cm4gU2VydmVyRXJyb3Jcbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgZXhwb3J0cyBvYmplY3Qgd2l0aCBjb25zdHJ1Y3RvcnMgZm9yIGV2ZXJ5IGVycm9yIGNsYXNzLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb3B1bGF0ZUNvbnN0cnVjdG9yRXhwb3J0cyAoZXhwb3J0cywgY29kZXMsIEh0dHBFcnJvcikge1xuICBjb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hDb2RlIChjb2RlKSB7XG4gICAgdmFyIENvZGVFcnJvclxuICAgIHZhciBuYW1lID0gdG9JZGVudGlmaWVyKHN0YXR1c2VzW2NvZGVdKVxuXG4gICAgc3dpdGNoIChjb2RlQ2xhc3MoY29kZSkpIHtcbiAgICAgIGNhc2UgNDAwOlxuICAgICAgICBDb2RlRXJyb3IgPSBjcmVhdGVDbGllbnRFcnJvckNvbnN0cnVjdG9yKEh0dHBFcnJvciwgbmFtZSwgY29kZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgNTAwOlxuICAgICAgICBDb2RlRXJyb3IgPSBjcmVhdGVTZXJ2ZXJFcnJvckNvbnN0cnVjdG9yKEh0dHBFcnJvciwgbmFtZSwgY29kZSlcbiAgICAgICAgYnJlYWtcbiAgICB9XG5cbiAgICBpZiAoQ29kZUVycm9yKSB7XG4gICAgICAvLyBleHBvcnQgdGhlIGNvbnN0cnVjdG9yXG4gICAgICBleHBvcnRzW2NvZGVdID0gQ29kZUVycm9yXG4gICAgICBleHBvcnRzW25hbWVdID0gQ29kZUVycm9yXG4gICAgfVxuICB9KVxuXG4gIC8vIGJhY2t3YXJkcy1jb21wYXRpYmlsaXR5XG4gIGV4cG9ydHNbXCJJJ21hdGVhcG90XCJdID0gZGVwcmVjYXRlLmZ1bmN0aW9uKGV4cG9ydHMuSW1BVGVhcG90LFxuICAgICdcIklcXCdtYXRlYXBvdFwiOyB1c2UgXCJJbUFUZWFwb3RcIiBpbnN0ZWFkJylcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc3RyaW5nIG9mIHdvcmRzIHRvIGEgSmF2YVNjcmlwdCBpZGVudGlmaWVyLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0b0lkZW50aWZpZXIgKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbi5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdG9rZW4uc2xpY2UoMSlcbiAgfSkuam9pbignJykucmVwbGFjZSgvW14gXzAtOWEtel0vZ2ksICcnKVxufVxuIiwidHJ5IHtcbiAgdmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG4gIGlmICh0eXBlb2YgdXRpbC5pbmhlcml0cyAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgJyc7XG4gIG1vZHVsZS5leHBvcnRzID0gdXRpbC5pbmhlcml0cztcbn0gY2F0Y2ggKGUpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2luaGVyaXRzX2Jyb3dzZXIuanMnKTtcbn1cbiIsImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgY3Rvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ3Rvci5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xufSBlbHNlIHtcbiAgLy8gb2xkIHNjaG9vbCBzaGltIGZvciBvbGQgYnJvd3NlcnNcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgVGVtcEN0b3IucHJvdG90eXBlID0gc3VwZXJDdG9yLnByb3RvdHlwZVxuICAgIGN0b3IucHJvdG90eXBlID0gbmV3IFRlbXBDdG9yKClcbiAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZuVG9TdHIgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgaXNGblJlZ2V4ID0gL15cXHMqKD86ZnVuY3Rpb24pP1xcKi87XG52YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnO1xudmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIGdldEdlbmVyYXRvckZ1bmMgPSBmdW5jdGlvbiAoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC1yZXR1cm5cblx0aWYgKCFoYXNUb1N0cmluZ1RhZykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHR0cnkge1xuXHRcdHJldHVybiBGdW5jdGlvbigncmV0dXJuIGZ1bmN0aW9uKigpIHt9JykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHR9XG59O1xudmFyIGdlbmVyYXRvckZ1bmMgPSBnZXRHZW5lcmF0b3JGdW5jKCk7XG52YXIgR2VuZXJhdG9yRnVuY3Rpb24gPSBnZW5lcmF0b3JGdW5jID8gZ2V0UHJvdG8oZ2VuZXJhdG9yRnVuYykgOiB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0dlbmVyYXRvckZ1bmN0aW9uKGZuKSB7XG5cdGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0aWYgKGlzRm5SZWdleC50ZXN0KGZuVG9TdHIuY2FsbChmbikpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0aWYgKCFoYXNUb1N0cmluZ1RhZykge1xuXHRcdHZhciBzdHIgPSB0b1N0ci5jYWxsKGZuKTtcblx0XHRyZXR1cm4gc3RyID09PSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nO1xuXHR9XG5cdHJldHVybiBnZXRQcm90byhmbikgPT09IEdlbmVyYXRvckZ1bmN0aW9uO1xufTtcbiIsIi8qIVxuICoga2V5Z3JpcFxuICogQ29weXJpZ2h0KGMpIDIwMTEtMjAxNCBKZWQgU2NobWlkdFxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxudmFyIGNyeXB0byA9IHJlcXVpcmUoXCJjcnlwdG9cIilcbiAgXG5mdW5jdGlvbiBLZXlncmlwKGtleXMsIGFsZ29yaXRobSwgZW5jb2RpbmcpIHtcbiAgaWYgKCFhbGdvcml0aG0pIGFsZ29yaXRobSA9IFwic2hhMVwiO1xuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9IFwiYmFzZTY0XCI7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBLZXlncmlwKSkgcmV0dXJuIG5ldyBLZXlncmlwKGtleXMsIGFsZ29yaXRobSwgZW5jb2RpbmcpXG5cbiAgaWYgKCFrZXlzIHx8ICEoMCBpbiBrZXlzKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIktleXMgbXVzdCBiZSBwcm92aWRlZC5cIilcbiAgfVxuXG4gIGZ1bmN0aW9uIHNpZ24oZGF0YSwga2V5KSB7XG4gICAgcmV0dXJuIGNyeXB0b1xuICAgICAgLmNyZWF0ZUhtYWMoYWxnb3JpdGhtLCBrZXkpXG4gICAgICAudXBkYXRlKGRhdGEpLmRpZ2VzdChlbmNvZGluZylcbiAgICAgIC5yZXBsYWNlKC9cXC98XFwrfD0vZywgZnVuY3Rpb24oeCkge1xuICAgICAgICByZXR1cm4gKHsgXCIvXCI6IFwiX1wiLCBcIitcIjogXCItXCIsIFwiPVwiOiBcIlwiIH0pW3hdXG4gICAgICB9KVxuICB9XG5cbiAgdGhpcy5zaWduID0gZnVuY3Rpb24oZGF0YSl7IHJldHVybiBzaWduKGRhdGEsIGtleXNbMF0pIH1cblxuICB0aGlzLnZlcmlmeSA9IGZ1bmN0aW9uKGRhdGEsIGRpZ2VzdCkge1xuICAgIHJldHVybiB0aGlzLmluZGV4KGRhdGEsIGRpZ2VzdCkgPiAtMVxuICB9XG5cbiAgdGhpcy5pbmRleCA9IGZ1bmN0aW9uKGRhdGEsIGRpZ2VzdCkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChjb25zdGFudFRpbWVDb21wYXJlKGRpZ2VzdCwgc2lnbihkYXRhLCBrZXlzW2ldKSkpIHJldHVybiBpXG4gICAgfVxuXG4gICAgcmV0dXJuIC0xXG4gIH1cbn1cblxuS2V5Z3JpcC5zaWduID0gS2V5Z3JpcC52ZXJpZnkgPSBLZXlncmlwLmluZGV4ID0gZnVuY3Rpb24oKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlVzYWdlOiByZXF1aXJlKCdrZXlncmlwJykoPGFycmF5LW9mLWtleXM+KVwiKVxufVxuXG4vL2h0dHA6Ly9jb2RhaGFsZS5jb20vYS1sZXNzb24taW4tdGltaW5nLWF0dGFja3MvXG52YXIgY29uc3RhbnRUaW1lQ29tcGFyZSA9IGZ1bmN0aW9uKHZhbDEsIHZhbDIpe1xuICAgIGlmKHZhbDEgPT0gbnVsbCAmJiB2YWwyICE9IG51bGwpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmKHZhbDIgPT0gbnVsbCAmJiB2YWwxICE9IG51bGwpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmKHZhbDEgPT0gbnVsbCAmJiB2YWwyID09IG51bGwpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZih2YWwxLmxlbmd0aCAhPT0gdmFsMi5sZW5ndGgpe1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHJlc3VsdCA9IDA7XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdmFsMS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHJlc3VsdCB8PSB2YWwxLmNoYXJDb2RlQXQoaSkgXiB2YWwyLmNoYXJDb2RlQXQoaSk7IC8vRG9uJ3Qgc2hvcnQgY2lyY3VpdFxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQgPT09IDA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEtleWdyaXBcbiIsIid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIEV4cG9zZSBjb21wb3NpdG9yLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gY29tcG9zZVxuXG4vKipcbiAqIENvbXBvc2UgYG1pZGRsZXdhcmVgIHJldHVybmluZ1xuICogYSBmdWxseSB2YWxpZCBtaWRkbGV3YXJlIGNvbXByaXNlZFxuICogb2YgYWxsIHRob3NlIHdoaWNoIGFyZSBwYXNzZWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gbWlkZGxld2FyZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNvbXBvc2UgKG1pZGRsZXdhcmUpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KG1pZGRsZXdhcmUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdNaWRkbGV3YXJlIHN0YWNrIG11c3QgYmUgYW4gYXJyYXkhJylcbiAgZm9yIChjb25zdCBmbiBvZiBtaWRkbGV3YXJlKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignTWlkZGxld2FyZSBtdXN0IGJlIGNvbXBvc2VkIG9mIGZ1bmN0aW9ucyEnKVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHJldHVybiBmdW5jdGlvbiAoY29udGV4dCwgbmV4dCkge1xuICAgIC8vIGxhc3QgY2FsbGVkIG1pZGRsZXdhcmUgI1xuICAgIGxldCBpbmRleCA9IC0xXG4gICAgcmV0dXJuIGRpc3BhdGNoKDApXG4gICAgZnVuY3Rpb24gZGlzcGF0Y2ggKGkpIHtcbiAgICAgIGlmIChpIDw9IGluZGV4KSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCduZXh0KCkgY2FsbGVkIG11bHRpcGxlIHRpbWVzJykpXG4gICAgICBpbmRleCA9IGlcbiAgICAgIGxldCBmbiA9IG1pZGRsZXdhcmVbaV1cbiAgICAgIGlmIChpID09PSBtaWRkbGV3YXJlLmxlbmd0aCkgZm4gPSBuZXh0XG4gICAgICBpZiAoIWZuKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZm4oY29udGV4dCwgZGlzcGF0Y2guYmluZChudWxsLCBpICsgMSkpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IGNvID0gcmVxdWlyZSgnY28nKVxuY29uc3QgY29tcG9zZSA9IHJlcXVpcmUoJ2tvYS1jb21wb3NlJylcblxubW9kdWxlLmV4cG9ydHMgPSBjb252ZXJ0XG5cbmZ1bmN0aW9uIGNvbnZlcnQgKG13KSB7XG4gIGlmICh0eXBlb2YgbXcgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtaWRkbGV3YXJlIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gIH1cbiAgaWYgKG13LmNvbnN0cnVjdG9yLm5hbWUgIT09ICdHZW5lcmF0b3JGdW5jdGlvbicpIHtcbiAgICAvLyBhc3N1bWUgaXQncyBQcm9taXNlLWJhc2VkIG1pZGRsZXdhcmVcbiAgICByZXR1cm4gbXdcbiAgfVxuICBjb25zdCBjb252ZXJ0ZWQgPSBmdW5jdGlvbiAoY3R4LCBuZXh0KSB7XG4gICAgcmV0dXJuIGNvLmNhbGwoY3R4LCBtdy5jYWxsKGN0eCwgY3JlYXRlR2VuZXJhdG9yKG5leHQpKSlcbiAgfVxuICBjb252ZXJ0ZWQuX25hbWUgPSBtdy5fbmFtZSB8fCBtdy5uYW1lXG4gIHJldHVybiBjb252ZXJ0ZWRcbn1cblxuZnVuY3Rpb24gKiBjcmVhdGVHZW5lcmF0b3IgKG5leHQpIHtcbiAgcmV0dXJuIHlpZWxkIG5leHQoKVxufVxuXG4vLyBjb252ZXJ0LmNvbXBvc2UobXcsIG13LCBtdylcbi8vIGNvbnZlcnQuY29tcG9zZShbbXcsIG13LCBtd10pXG5jb252ZXJ0LmNvbXBvc2UgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgYXJyID0gQXJyYXkuZnJvbShhcmd1bWVudHMpXG4gIH1cbiAgcmV0dXJuIGNvbXBvc2UoYXJyLm1hcChjb252ZXJ0KSlcbn1cblxuY29udmVydC5iYWNrID0gZnVuY3Rpb24gKG13KSB7XG4gIGlmICh0eXBlb2YgbXcgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtaWRkbGV3YXJlIG11c3QgYmUgYSBmdW5jdGlvbicpXG4gIH1cbiAgaWYgKG13LmNvbnN0cnVjdG9yLm5hbWUgPT09ICdHZW5lcmF0b3JGdW5jdGlvbicpIHtcbiAgICAvLyBhc3N1bWUgaXQncyBnZW5lcmF0b3IgbWlkZGxld2FyZVxuICAgIHJldHVybiBtd1xuICB9XG4gIGNvbnN0IGNvbnZlcnRlZCA9IGZ1bmN0aW9uICogKG5leHQpIHtcbiAgICBsZXQgY3R4ID0gdGhpc1xuICAgIGxldCBjYWxsZWQgPSBmYWxzZVxuICAgIC8vIG5vIG5lZWQgdHJ5Li4uY2F0Y2ggaGVyZSwgaXQncyBvayBldmVuIGBtdygpYCB0aHJvdyBleGNlcHRpb25cbiAgICB5aWVsZCBQcm9taXNlLnJlc29sdmUobXcoY3R4LCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoY2FsbGVkKSB7XG4gICAgICAgIC8vIGd1YXJkIGFnYWluc3QgbXVsdGlwbGUgbmV4dCgpIGNhbGxzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9rb2Fqcy9jb21wb3NlL2Jsb2IvNGUzZTk2YmFmNThiODE3ZDcxYmQ0NGE4YzBkNzhiYjQyNjIzYWE5NS9pbmRleC5qcyNMMzZcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignbmV4dCgpIGNhbGxlZCBtdWx0aXBsZSB0aW1lcycpKVxuICAgICAgfVxuICAgICAgY2FsbGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIGNvLmNhbGwoY3R4LCBuZXh0KVxuICAgIH0pKVxuICB9XG4gIGNvbnZlcnRlZC5fbmFtZSA9IG13Ll9uYW1lIHx8IG13Lm5hbWVcbiAgcmV0dXJuIGNvbnZlcnRlZFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IFByb21pc2UgPSByZXF1aXJlKCdhbnktcHJvbWlzZScpXG5cbi8qKlxuICogRXhwb3NlIGNvbXBvc2l0b3IuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBjb21wb3NlXG5cbi8qKlxuICogQ29tcG9zZSBgbWlkZGxld2FyZWAgcmV0dXJuaW5nXG4gKiBhIGZ1bGx5IHZhbGlkIG1pZGRsZXdhcmUgY29tcHJpc2VkXG4gKiBvZiBhbGwgdGhvc2Ugd2hpY2ggYXJlIHBhc3NlZC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBtaWRkbGV3YXJlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY29tcG9zZSAobWlkZGxld2FyZSkge1xuICBpZiAoIUFycmF5LmlzQXJyYXkobWlkZGxld2FyZSkpIHRocm93IG5ldyBUeXBlRXJyb3IoJ01pZGRsZXdhcmUgc3RhY2sgbXVzdCBiZSBhbiBhcnJheSEnKVxuICBmb3IgKGNvbnN0IGZuIG9mIG1pZGRsZXdhcmUpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdNaWRkbGV3YXJlIG11c3QgYmUgY29tcG9zZWQgb2YgZnVuY3Rpb25zIScpXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHRcbiAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0LCBuZXh0KSB7XG4gICAgLy8gbGFzdCBjYWxsZWQgbWlkZGxld2FyZSAjXG4gICAgbGV0IGluZGV4ID0gLTFcbiAgICByZXR1cm4gZGlzcGF0Y2goMClcbiAgICBmdW5jdGlvbiBkaXNwYXRjaCAoaSkge1xuICAgICAgaWYgKGkgPD0gaW5kZXgpIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ25leHQoKSBjYWxsZWQgbXVsdGlwbGUgdGltZXMnKSlcbiAgICAgIGluZGV4ID0gaVxuICAgICAgbGV0IGZuID0gbWlkZGxld2FyZVtpXVxuICAgICAgaWYgKGkgPT09IG1pZGRsZXdhcmUubGVuZ3RoKSBmbiA9IG5leHRcbiAgICAgIGlmICghZm4pIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmbihjb250ZXh0LCBmdW5jdGlvbiBuZXh0ICgpIHtcbiAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goaSArIDEpXG4gICAgICAgIH0pKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gaXNKU09OO1xuXG4vKipcbiAqIENoZWNrIGlmIGBib2R5YCBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYXMganNvbi5cbiAqL1xuXG5mdW5jdGlvbiBpc0pTT04oYm9keSkge1xuICBpZiAoIWJvZHkpIHJldHVybiBmYWxzZTtcbiAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBib2R5KSByZXR1cm4gZmFsc2U7XG4gIGlmICgnZnVuY3Rpb24nID09IHR5cGVvZiBib2R5LnBpcGUpIHJldHVybiBmYWxzZTtcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cbiIsIlxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgaXNHZW5lcmF0b3JGdW5jdGlvbiA9IHJlcXVpcmUoJ2lzLWdlbmVyYXRvci1mdW5jdGlvbicpO1xuY29uc3QgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdrb2E6YXBwbGljYXRpb24nKTtcbmNvbnN0IG9uRmluaXNoZWQgPSByZXF1aXJlKCdvbi1maW5pc2hlZCcpO1xuY29uc3QgcmVzcG9uc2UgPSByZXF1aXJlKCcuL3Jlc3BvbnNlJyk7XG5jb25zdCBjb21wb3NlID0gcmVxdWlyZSgna29hLWNvbXBvc2UnKTtcbmNvbnN0IGlzSlNPTiA9IHJlcXVpcmUoJ2tvYS1pcy1qc29uJyk7XG5jb25zdCBjb250ZXh0ID0gcmVxdWlyZSgnLi9jb250ZXh0Jyk7XG5jb25zdCByZXF1ZXN0ID0gcmVxdWlyZSgnLi9yZXF1ZXN0Jyk7XG5jb25zdCBzdGF0dXNlcyA9IHJlcXVpcmUoJ3N0YXR1c2VzJyk7XG5jb25zdCBDb29raWVzID0gcmVxdWlyZSgnY29va2llcycpO1xuY29uc3QgYWNjZXB0cyA9IHJlcXVpcmUoJ2FjY2VwdHMnKTtcbmNvbnN0IEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpO1xuY29uc3QgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJyk7XG5jb25zdCBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuY29uc3Qgb25seSA9IHJlcXVpcmUoJ29ubHknKTtcbmNvbnN0IGNvbnZlcnQgPSByZXF1aXJlKCdrb2EtY29udmVydCcpO1xuY29uc3QgZGVwcmVjYXRlID0gcmVxdWlyZSgnZGVwZCcpKCdrb2EnKTtcblxuLyoqXG4gKiBFeHBvc2UgYEFwcGxpY2F0aW9uYCBjbGFzcy5cbiAqIEluaGVyaXRzIGZyb20gYEVtaXR0ZXIucHJvdG90eXBlYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEFwcGxpY2F0aW9uIGV4dGVuZHMgRW1pdHRlciB7XG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGEgbmV3IGBBcHBsaWNhdGlvbmAuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnByb3h5ID0gZmFsc2U7XG4gICAgdGhpcy5taWRkbGV3YXJlID0gW107XG4gICAgdGhpcy5zdWJkb21haW5PZmZzZXQgPSAyO1xuICAgIHRoaXMuZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcbiAgICB0aGlzLmNvbnRleHQgPSBPYmplY3QuY3JlYXRlKGNvbnRleHQpO1xuICAgIHRoaXMucmVxdWVzdCA9IE9iamVjdC5jcmVhdGUocmVxdWVzdCk7XG4gICAgdGhpcy5yZXNwb25zZSA9IE9iamVjdC5jcmVhdGUocmVzcG9uc2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3J0aGFuZCBmb3I6XG4gICAqXG4gICAqICAgIGh0dHAuY3JlYXRlU2VydmVyKGFwcC5jYWxsYmFjaygpKS5saXN0ZW4oLi4uKVxuICAgKlxuICAgKiBAcGFyYW0ge01peGVkfSAuLi5cbiAgICogQHJldHVybiB7U2VydmVyfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBsaXN0ZW4oLi4uYXJncykge1xuICAgIGRlYnVnKCdsaXN0ZW4nKTtcbiAgICBjb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcih0aGlzLmNhbGxiYWNrKCkpO1xuICAgIHJldHVybiBzZXJ2ZXIubGlzdGVuKC4uLmFyZ3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBKU09OIHJlcHJlc2VudGF0aW9uLlxuICAgKiBXZSBvbmx5IGJvdGhlciBzaG93aW5nIHNldHRpbmdzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gb25seSh0aGlzLCBbXG4gICAgICAnc3ViZG9tYWluT2Zmc2V0JyxcbiAgICAgICdwcm94eScsXG4gICAgICAnZW52J1xuICAgIF0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluc3BlY3QgaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgaW5zcGVjdCgpIHtcbiAgICByZXR1cm4gdGhpcy50b0pTT04oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGdpdmVuIG1pZGRsZXdhcmUgYGZuYC5cbiAgICpcbiAgICogT2xkLXN0eWxlIG1pZGRsZXdhcmUgd2lsbCBiZSBjb252ZXJ0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAqIEByZXR1cm4ge0FwcGxpY2F0aW9ufSBzZWxmXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHVzZShmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHRocm93IG5ldyBUeXBlRXJyb3IoJ21pZGRsZXdhcmUgbXVzdCBiZSBhIGZ1bmN0aW9uIScpO1xuICAgIGlmIChpc0dlbmVyYXRvckZ1bmN0aW9uKGZuKSkge1xuICAgICAgZGVwcmVjYXRlKCdTdXBwb3J0IGZvciBnZW5lcmF0b3JzIHdpbGwgYmUgcmVtb3ZlZCBpbiB2My4gJyArXG4gICAgICAgICAgICAgICAgJ1NlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgZXhhbXBsZXMgb2YgaG93IHRvIGNvbnZlcnQgb2xkIG1pZGRsZXdhcmUgJyArXG4gICAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9rb2Fqcy9rb2EvYmxvYi9tYXN0ZXIvZG9jcy9taWdyYXRpb24ubWQnKTtcbiAgICAgIGZuID0gY29udmVydChmbik7XG4gICAgfVxuICAgIGRlYnVnKCd1c2UgJXMnLCBmbi5fbmFtZSB8fCBmbi5uYW1lIHx8ICctJyk7XG4gICAgdGhpcy5taWRkbGV3YXJlLnB1c2goZm4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIHJlcXVlc3QgaGFuZGxlciBjYWxsYmFja1xuICAgKiBmb3Igbm9kZSdzIG5hdGl2ZSBodHRwIHNlcnZlci5cbiAgICpcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGNhbGxiYWNrKCkge1xuICAgIGNvbnN0IGZuID0gY29tcG9zZSh0aGlzLm1pZGRsZXdhcmUpO1xuXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVycygnZXJyb3InKS5sZW5ndGgpIHRoaXMub24oJ2Vycm9yJywgdGhpcy5vbmVycm9yKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlcXVlc3QgPSAocmVxLCByZXMpID0+IHtcbiAgICAgIGNvbnN0IGN0eCA9IHRoaXMuY3JlYXRlQ29udGV4dChyZXEsIHJlcyk7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSZXF1ZXN0KGN0eCwgZm4pO1xuICAgIH07XG5cbiAgICByZXR1cm4gaGFuZGxlUmVxdWVzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBIYW5kbGUgcmVxdWVzdCBpbiBjYWxsYmFjay5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGhhbmRsZVJlcXVlc3QoY3R4LCBmbk1pZGRsZXdhcmUpIHtcbiAgICBjb25zdCByZXMgPSBjdHgucmVzO1xuICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0O1xuICAgIGNvbnN0IG9uZXJyb3IgPSBlcnIgPT4gY3R4Lm9uZXJyb3IoZXJyKTtcbiAgICBjb25zdCBoYW5kbGVSZXNwb25zZSA9ICgpID0+IHJlc3BvbmQoY3R4KTtcbiAgICBvbkZpbmlzaGVkKHJlcywgb25lcnJvcik7XG4gICAgcmV0dXJuIGZuTWlkZGxld2FyZShjdHgpLnRoZW4oaGFuZGxlUmVzcG9uc2UpLmNhdGNoKG9uZXJyb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgYSBuZXcgY29udGV4dC5cbiAgICpcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGNyZWF0ZUNvbnRleHQocmVxLCByZXMpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gT2JqZWN0LmNyZWF0ZSh0aGlzLmNvbnRleHQpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSBjb250ZXh0LnJlcXVlc3QgPSBPYmplY3QuY3JlYXRlKHRoaXMucmVxdWVzdCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjb250ZXh0LnJlc3BvbnNlID0gT2JqZWN0LmNyZWF0ZSh0aGlzLnJlc3BvbnNlKTtcbiAgICBjb250ZXh0LmFwcCA9IHJlcXVlc3QuYXBwID0gcmVzcG9uc2UuYXBwID0gdGhpcztcbiAgICBjb250ZXh0LnJlcSA9IHJlcXVlc3QucmVxID0gcmVzcG9uc2UucmVxID0gcmVxO1xuICAgIGNvbnRleHQucmVzID0gcmVxdWVzdC5yZXMgPSByZXNwb25zZS5yZXMgPSByZXM7XG4gICAgcmVxdWVzdC5jdHggPSByZXNwb25zZS5jdHggPSBjb250ZXh0O1xuICAgIHJlcXVlc3QucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICByZXNwb25zZS5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgICBjb250ZXh0Lm9yaWdpbmFsVXJsID0gcmVxdWVzdC5vcmlnaW5hbFVybCA9IHJlcS51cmw7XG4gICAgY29udGV4dC5jb29raWVzID0gbmV3IENvb2tpZXMocmVxLCByZXMsIHtcbiAgICAgIGtleXM6IHRoaXMua2V5cyxcbiAgICAgIHNlY3VyZTogcmVxdWVzdC5zZWN1cmVcbiAgICB9KTtcbiAgICByZXF1ZXN0LmlwID0gcmVxdWVzdC5pcHNbMF0gfHwgcmVxLnNvY2tldC5yZW1vdGVBZGRyZXNzIHx8ICcnO1xuICAgIGNvbnRleHQuYWNjZXB0ID0gcmVxdWVzdC5hY2NlcHQgPSBhY2NlcHRzKHJlcSk7XG4gICAgY29udGV4dC5zdGF0ZSA9IHt9O1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgZXJyb3IgaGFuZGxlci5cbiAgICpcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBvbmVycm9yKGVycikge1xuICAgIGFzc2VydChlcnIgaW5zdGFuY2VvZiBFcnJvciwgYG5vbi1lcnJvciB0aHJvd246ICR7ZXJyfWApO1xuXG4gICAgaWYgKDQwNCA9PSBlcnIuc3RhdHVzIHx8IGVyci5leHBvc2UpIHJldHVybjtcbiAgICBpZiAodGhpcy5zaWxlbnQpIHJldHVybjtcblxuICAgIGNvbnN0IG1zZyA9IGVyci5zdGFjayB8fCBlcnIudG9TdHJpbmcoKTtcbiAgICBjb25zb2xlLmVycm9yKCk7XG4gICAgY29uc29sZS5lcnJvcihtc2cucmVwbGFjZSgvXi9nbSwgJyAgJykpO1xuICAgIGNvbnNvbGUuZXJyb3IoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXNwb25zZSBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcmVzcG9uZChjdHgpIHtcbiAgLy8gYWxsb3cgYnlwYXNzaW5nIGtvYVxuICBpZiAoZmFsc2UgPT09IGN0eC5yZXNwb25kKSByZXR1cm47XG5cbiAgY29uc3QgcmVzID0gY3R4LnJlcztcbiAgaWYgKCFjdHgud3JpdGFibGUpIHJldHVybjtcblxuICBsZXQgYm9keSA9IGN0eC5ib2R5O1xuICBjb25zdCBjb2RlID0gY3R4LnN0YXR1cztcblxuICAvLyBpZ25vcmUgYm9keVxuICBpZiAoc3RhdHVzZXMuZW1wdHlbY29kZV0pIHtcbiAgICAvLyBzdHJpcCBoZWFkZXJzXG4gICAgY3R4LmJvZHkgPSBudWxsO1xuICAgIHJldHVybiByZXMuZW5kKCk7XG4gIH1cblxuICBpZiAoJ0hFQUQnID09IGN0eC5tZXRob2QpIHtcbiAgICBpZiAoIXJlcy5oZWFkZXJzU2VudCAmJiBpc0pTT04oYm9keSkpIHtcbiAgICAgIGN0eC5sZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChKU09OLnN0cmluZ2lmeShib2R5KSk7XG4gICAgfVxuICAgIHJldHVybiByZXMuZW5kKCk7XG4gIH1cblxuICAvLyBzdGF0dXMgYm9keVxuICBpZiAobnVsbCA9PSBib2R5KSB7XG4gICAgYm9keSA9IGN0eC5tZXNzYWdlIHx8IFN0cmluZyhjb2RlKTtcbiAgICBpZiAoIXJlcy5oZWFkZXJzU2VudCkge1xuICAgICAgY3R4LnR5cGUgPSAndGV4dCc7XG4gICAgICBjdHgubGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoYm9keSk7XG4gICAgfVxuICAgIHJldHVybiByZXMuZW5kKGJvZHkpO1xuICB9XG5cbiAgLy8gcmVzcG9uc2VzXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHJldHVybiByZXMuZW5kKGJvZHkpO1xuICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIGJvZHkpIHJldHVybiByZXMuZW5kKGJvZHkpO1xuICBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkgcmV0dXJuIGJvZHkucGlwZShyZXMpO1xuXG4gIC8vIGJvZHk6IGpzb25cbiAgYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICBpZiAoIXJlcy5oZWFkZXJzU2VudCkge1xuICAgIGN0eC5sZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChib2R5KTtcbiAgfVxuICByZXMuZW5kKGJvZHkpO1xufVxuIiwiXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG5jb25zdCB1dGlsID0gcmVxdWlyZSgndXRpbCcpO1xuY29uc3QgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCdodHRwLWVycm9ycycpO1xuY29uc3QgaHR0cEFzc2VydCA9IHJlcXVpcmUoJ2h0dHAtYXNzZXJ0Jyk7XG5jb25zdCBkZWxlZ2F0ZSA9IHJlcXVpcmUoJ2RlbGVnYXRlcycpO1xuY29uc3Qgc3RhdHVzZXMgPSByZXF1aXJlKCdzdGF0dXNlcycpO1xuXG4vKipcbiAqIENvbnRleHQgcHJvdG90eXBlLlxuICovXG5cbmNvbnN0IHByb3RvID0gbW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIHV0aWwuaW5zcGVjdCgpIGltcGxlbWVudGF0aW9uLCB3aGljaFxuICAgKiBqdXN0IHJldHVybnMgdGhlIEpTT04gb3V0cHV0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGluc3BlY3QoKSB7XG4gICAgaWYgKHRoaXMgPT09IHByb3RvKSByZXR1cm4gdGhpcztcbiAgICByZXR1cm4gdGhpcy50b0pTT04oKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIEpTT04gcmVwcmVzZW50YXRpb24uXG4gICAqXG4gICAqIEhlcmUgd2UgZXhwbGljaXRseSBpbnZva2UgLnRvSlNPTigpIG9uIGVhY2hcbiAgICogb2JqZWN0LCBhcyBpdGVyYXRpb24gd2lsbCBvdGhlcndpc2UgZmFpbCBkdWVcbiAgICogdG8gdGhlIGdldHRlcnMgYW5kIGNhdXNlIHV0aWxpdGllcyBzdWNoIGFzXG4gICAqIGNsb25lKCkgdG8gZmFpbC5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVlc3Q6IHRoaXMucmVxdWVzdC50b0pTT04oKSxcbiAgICAgIHJlc3BvbnNlOiB0aGlzLnJlc3BvbnNlLnRvSlNPTigpLFxuICAgICAgYXBwOiB0aGlzLmFwcC50b0pTT04oKSxcbiAgICAgIG9yaWdpbmFsVXJsOiB0aGlzLm9yaWdpbmFsVXJsLFxuICAgICAgcmVxOiAnPG9yaWdpbmFsIG5vZGUgcmVxPicsXG4gICAgICByZXM6ICc8b3JpZ2luYWwgbm9kZSByZXM+JyxcbiAgICAgIHNvY2tldDogJzxvcmlnaW5hbCBub2RlIHNvY2tldD4nXG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogU2ltaWxhciB0byAudGhyb3coKSwgYWRkcyBhc3NlcnRpb24uXG4gICAqXG4gICAqICAgIHRoaXMuYXNzZXJ0KHRoaXMudXNlciwgNDAxLCAnUGxlYXNlIGxvZ2luIScpO1xuICAgKlxuICAgKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qc2h0dHAvaHR0cC1hc3NlcnRcbiAgICpcbiAgICogQHBhcmFtIHtNaXhlZH0gdGVzdFxuICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFzc2VydDogaHR0cEFzc2VydCxcblxuICAvKipcbiAgICogVGhyb3cgYW4gZXJyb3Igd2l0aCBgbXNnYCBhbmQgb3B0aW9uYWwgYHN0YXR1c2BcbiAgICogZGVmYXVsdGluZyB0byA1MDAuIE5vdGUgdGhhdCB0aGVzZSBhcmUgdXNlci1sZXZlbFxuICAgKiBlcnJvcnMsIGFuZCB0aGUgbWVzc2FnZSBtYXkgYmUgZXhwb3NlZCB0byB0aGUgY2xpZW50LlxuICAgKlxuICAgKiAgICB0aGlzLnRocm93KDQwMylcbiAgICogICAgdGhpcy50aHJvdygnbmFtZSByZXF1aXJlZCcsIDQwMClcbiAgICogICAgdGhpcy50aHJvdyg0MDAsICduYW1lIHJlcXVpcmVkJylcbiAgICogICAgdGhpcy50aHJvdygnc29tZXRoaW5nIGV4cGxvZGVkJylcbiAgICogICAgdGhpcy50aHJvdyhuZXcgRXJyb3IoJ2ludmFsaWQnKSwgNDAwKTtcbiAgICogICAgdGhpcy50aHJvdyg0MDAsIG5ldyBFcnJvcignaW52YWxpZCcpKTtcbiAgICpcbiAgICogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vanNodHRwL2h0dHAtZXJyb3JzXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxFcnJvcn0gZXJyLCBtc2cgb3Igc3RhdHVzXG4gICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcnxFcnJvcn0gW2VyciwgbXNnIG9yIHN0YXR1c11cbiAgICogQHBhcmFtIHtPYmplY3R9IFtwcm9wc11cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgdGhyb3coLi4uYXJncykge1xuICAgIHRocm93IGNyZWF0ZUVycm9yKC4uLmFyZ3MpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGVycm9yIGhhbmRsaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIG9uZXJyb3IoZXJyKSB7XG4gICAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgdGhlcmUgaXMgbm8gZXJyb3IuXG4gICAgLy8gdGhpcyBhbGxvd3MgeW91IHRvIHBhc3MgYHRoaXMub25lcnJvcmBcbiAgICAvLyB0byBub2RlLXN0eWxlIGNhbGxiYWNrcy5cbiAgICBpZiAobnVsbCA9PSBlcnIpIHJldHVybjtcblxuICAgIGlmICghKGVyciBpbnN0YW5jZW9mIEVycm9yKSkgZXJyID0gbmV3IEVycm9yKHV0aWwuZm9ybWF0KCdub24tZXJyb3IgdGhyb3duOiAlaicsIGVycikpO1xuXG4gICAgbGV0IGhlYWRlclNlbnQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5oZWFkZXJTZW50IHx8ICF0aGlzLndyaXRhYmxlKSB7XG4gICAgICBoZWFkZXJTZW50ID0gZXJyLmhlYWRlclNlbnQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIGRlbGVnYXRlXG4gICAgdGhpcy5hcHAuZW1pdCgnZXJyb3InLCBlcnIsIHRoaXMpO1xuXG4gICAgLy8gbm90aGluZyB3ZSBjYW4gZG8gaGVyZSBvdGhlclxuICAgIC8vIHRoYW4gZGVsZWdhdGUgdG8gdGhlIGFwcC1sZXZlbFxuICAgIC8vIGhhbmRsZXIgYW5kIGxvZy5cbiAgICBpZiAoaGVhZGVyU2VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcmVzIH0gPSB0aGlzO1xuXG4gICAgLy8gZmlyc3QgdW5zZXQgYWxsIGhlYWRlcnNcbiAgICBpZiAodHlwZW9mIHJlcy5nZXRIZWFkZXJOYW1lcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVzLmdldEhlYWRlck5hbWVzKCkuZm9yRWFjaChuYW1lID0+IHJlcy5yZW1vdmVIZWFkZXIobmFtZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuX2hlYWRlcnMgPSB7fTsgLy8gTm9kZSA8IDcuN1xuICAgIH1cblxuICAgIC8vIHRoZW4gc2V0IHRob3NlIHNwZWNpZmllZFxuICAgIHRoaXMuc2V0KGVyci5oZWFkZXJzKTtcblxuICAgIC8vIGZvcmNlIHRleHQvcGxhaW5cbiAgICB0aGlzLnR5cGUgPSAndGV4dCc7XG5cbiAgICAvLyBFTk9FTlQgc3VwcG9ydFxuICAgIGlmICgnRU5PRU5UJyA9PSBlcnIuY29kZSkgZXJyLnN0YXR1cyA9IDQwNDtcblxuICAgIC8vIGRlZmF1bHQgdG8gNTAwXG4gICAgaWYgKCdudW1iZXInICE9IHR5cGVvZiBlcnIuc3RhdHVzIHx8ICFzdGF0dXNlc1tlcnIuc3RhdHVzXSkgZXJyLnN0YXR1cyA9IDUwMDtcblxuICAgIC8vIHJlc3BvbmRcbiAgICBjb25zdCBjb2RlID0gc3RhdHVzZXNbZXJyLnN0YXR1c107XG4gICAgY29uc3QgbXNnID0gZXJyLmV4cG9zZSA/IGVyci5tZXNzYWdlIDogY29kZTtcbiAgICB0aGlzLnN0YXR1cyA9IGVyci5zdGF0dXM7XG4gICAgdGhpcy5sZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aChtc2cpO1xuICAgIHRoaXMucmVzLmVuZChtc2cpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlc3BvbnNlIGRlbGVnYXRpb24uXG4gKi9cblxuZGVsZWdhdGUocHJvdG8sICdyZXNwb25zZScpXG4gIC5tZXRob2QoJ2F0dGFjaG1lbnQnKVxuICAubWV0aG9kKCdyZWRpcmVjdCcpXG4gIC5tZXRob2QoJ3JlbW92ZScpXG4gIC5tZXRob2QoJ3ZhcnknKVxuICAubWV0aG9kKCdzZXQnKVxuICAubWV0aG9kKCdhcHBlbmQnKVxuICAubWV0aG9kKCdmbHVzaEhlYWRlcnMnKVxuICAuYWNjZXNzKCdzdGF0dXMnKVxuICAuYWNjZXNzKCdtZXNzYWdlJylcbiAgLmFjY2VzcygnYm9keScpXG4gIC5hY2Nlc3MoJ2xlbmd0aCcpXG4gIC5hY2Nlc3MoJ3R5cGUnKVxuICAuYWNjZXNzKCdsYXN0TW9kaWZpZWQnKVxuICAuYWNjZXNzKCdldGFnJylcbiAgLmdldHRlcignaGVhZGVyU2VudCcpXG4gIC5nZXR0ZXIoJ3dyaXRhYmxlJyk7XG5cbi8qKlxuICogUmVxdWVzdCBkZWxlZ2F0aW9uLlxuICovXG5cbmRlbGVnYXRlKHByb3RvLCAncmVxdWVzdCcpXG4gIC5tZXRob2QoJ2FjY2VwdHNMYW5ndWFnZXMnKVxuICAubWV0aG9kKCdhY2NlcHRzRW5jb2RpbmdzJylcbiAgLm1ldGhvZCgnYWNjZXB0c0NoYXJzZXRzJylcbiAgLm1ldGhvZCgnYWNjZXB0cycpXG4gIC5tZXRob2QoJ2dldCcpXG4gIC5tZXRob2QoJ2lzJylcbiAgLmFjY2VzcygncXVlcnlzdHJpbmcnKVxuICAuYWNjZXNzKCdpZGVtcG90ZW50JylcbiAgLmFjY2Vzcygnc29ja2V0JylcbiAgLmFjY2Vzcygnc2VhcmNoJylcbiAgLmFjY2VzcygnbWV0aG9kJylcbiAgLmFjY2VzcygncXVlcnknKVxuICAuYWNjZXNzKCdwYXRoJylcbiAgLmFjY2VzcygndXJsJylcbiAgLmdldHRlcignb3JpZ2luJylcbiAgLmdldHRlcignaHJlZicpXG4gIC5nZXR0ZXIoJ3N1YmRvbWFpbnMnKVxuICAuZ2V0dGVyKCdwcm90b2NvbCcpXG4gIC5nZXR0ZXIoJ2hvc3QnKVxuICAuZ2V0dGVyKCdob3N0bmFtZScpXG4gIC5nZXR0ZXIoJ1VSTCcpXG4gIC5nZXR0ZXIoJ2hlYWRlcicpXG4gIC5nZXR0ZXIoJ2hlYWRlcnMnKVxuICAuZ2V0dGVyKCdzZWN1cmUnKVxuICAuZ2V0dGVyKCdzdGFsZScpXG4gIC5nZXR0ZXIoJ2ZyZXNoJylcbiAgLmdldHRlcignaXBzJylcbiAgLmdldHRlcignaXAnKTtcbiIsIlxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgVVJMID0gcmVxdWlyZSgndXJsJykuVVJMO1xuY29uc3QgbmV0ID0gcmVxdWlyZSgnbmV0Jyk7XG5jb25zdCBjb250ZW50VHlwZSA9IHJlcXVpcmUoJ2NvbnRlbnQtdHlwZScpO1xuY29uc3Qgc3RyaW5naWZ5ID0gcmVxdWlyZSgndXJsJykuZm9ybWF0O1xuY29uc3QgcGFyc2UgPSByZXF1aXJlKCdwYXJzZXVybCcpO1xuY29uc3QgcXMgPSByZXF1aXJlKCdxdWVyeXN0cmluZycpO1xuY29uc3QgdHlwZWlzID0gcmVxdWlyZSgndHlwZS1pcycpO1xuY29uc3QgZnJlc2ggPSByZXF1aXJlKCdmcmVzaCcpO1xuY29uc3Qgb25seSA9IHJlcXVpcmUoJ29ubHknKTtcblxuLyoqXG4gKiBQcm90b3R5cGUuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIFJldHVybiByZXF1ZXN0IGhlYWRlci5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgaGVhZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlcS5oZWFkZXJzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQgcmVxdWVzdCBoZWFkZXIuXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHNldCBoZWFkZXIodmFsKSB7XG4gICAgdGhpcy5yZXEuaGVhZGVycyA9IHZhbDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIHJlcXVlc3QgaGVhZGVyLCBhbGlhcyBhcyByZXF1ZXN0LmhlYWRlclxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBoZWFkZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlcS5oZWFkZXJzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQgcmVxdWVzdCBoZWFkZXIsIGFsaWFzIGFzIHJlcXVlc3QuaGVhZGVyXG4gICAqXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHNldCBoZWFkZXJzKHZhbCkge1xuICAgIHRoaXMucmVxLmhlYWRlcnMgPSB2YWw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCByZXF1ZXN0IFVSTC5cbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgdXJsKCkge1xuICAgIHJldHVybiB0aGlzLnJlcS51cmw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldCByZXF1ZXN0IFVSTC5cbiAgICpcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgc2V0IHVybCh2YWwpIHtcbiAgICB0aGlzLnJlcS51cmwgPSB2YWw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCBvcmlnaW4gb2YgVVJMLlxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBvcmlnaW4oKSB7XG4gICAgcmV0dXJuIGAke3RoaXMucHJvdG9jb2x9Oi8vJHt0aGlzLmhvc3R9YDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0IGZ1bGwgcmVxdWVzdCBVUkwuXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IGhyZWYoKSB7XG4gICAgLy8gc3VwcG9ydDogYEdFVCBodHRwOi8vZXhhbXBsZS5jb20vZm9vYFxuICAgIGlmICgvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHRoaXMub3JpZ2luYWxVcmwpKSByZXR1cm4gdGhpcy5vcmlnaW5hbFVybDtcbiAgICByZXR1cm4gdGhpcy5vcmlnaW4gKyB0aGlzLm9yaWdpbmFsVXJsO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgcmVxdWVzdCBtZXRob2QuXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IG1ldGhvZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXEubWV0aG9kO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQgcmVxdWVzdCBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgc2V0IG1ldGhvZCh2YWwpIHtcbiAgICB0aGlzLnJlcS5tZXRob2QgPSB2YWw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCByZXF1ZXN0IHBhdGhuYW1lLlxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBwYXRoKCkge1xuICAgIHJldHVybiBwYXJzZSh0aGlzLnJlcSkucGF0aG5hbWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldCBwYXRobmFtZSwgcmV0YWluaW5nIHRoZSBxdWVyeS1zdHJpbmcgd2hlbiBwcmVzZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzZXQgcGF0aChwYXRoKSB7XG4gICAgY29uc3QgdXJsID0gcGFyc2UodGhpcy5yZXEpO1xuICAgIGlmICh1cmwucGF0aG5hbWUgPT09IHBhdGgpIHJldHVybjtcblxuICAgIHVybC5wYXRobmFtZSA9IHBhdGg7XG4gICAgdXJsLnBhdGggPSBudWxsO1xuXG4gICAgdGhpcy51cmwgPSBzdHJpbmdpZnkodXJsKTtcbiAgfSxcblxuICAvKipcbiAgICogR2V0IHBhcnNlZCBxdWVyeS1zdHJpbmcuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IHF1ZXJ5KCkge1xuICAgIGNvbnN0IHN0ciA9IHRoaXMucXVlcnlzdHJpbmc7XG4gICAgY29uc3QgYyA9IHRoaXMuX3F1ZXJ5Y2FjaGUgPSB0aGlzLl9xdWVyeWNhY2hlIHx8IHt9O1xuICAgIHJldHVybiBjW3N0cl0gfHwgKGNbc3RyXSA9IHFzLnBhcnNlKHN0cikpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQgcXVlcnktc3RyaW5nIGFzIGFuIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzZXQgcXVlcnkob2JqKSB7XG4gICAgdGhpcy5xdWVyeXN0cmluZyA9IHFzLnN0cmluZ2lmeShvYmopO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgcXVlcnkgc3RyaW5nLlxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBxdWVyeXN0cmluZygpIHtcbiAgICBpZiAoIXRoaXMucmVxKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHBhcnNlKHRoaXMucmVxKS5xdWVyeSB8fCAnJztcbiAgfSxcblxuICAvKipcbiAgICogU2V0IHF1ZXJ5c3RyaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHNldCBxdWVyeXN0cmluZyhzdHIpIHtcbiAgICBjb25zdCB1cmwgPSBwYXJzZSh0aGlzLnJlcSk7XG4gICAgaWYgKHVybC5zZWFyY2ggPT09IGA/JHtzdHJ9YCkgcmV0dXJuO1xuXG4gICAgdXJsLnNlYXJjaCA9IHN0cjtcbiAgICB1cmwucGF0aCA9IG51bGw7XG5cbiAgICB0aGlzLnVybCA9IHN0cmluZ2lmeSh1cmwpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlYXJjaCBzdHJpbmcuIFNhbWUgYXMgdGhlIHF1ZXJ5c3RyaW5nXG4gICAqIGV4Y2VwdCBpdCBpbmNsdWRlcyB0aGUgbGVhZGluZyA/LlxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBzZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLnF1ZXJ5c3RyaW5nKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIGA/JHt0aGlzLnF1ZXJ5c3RyaW5nfWA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc2VhcmNoIHN0cmluZy4gU2FtZSBhc1xuICAgKiByZXNwb25zZS5xdWVyeXN0cmluZz0gYnV0IGluY2x1ZGVkIGZvciB1YmlxdWl0eS5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzZXQgc2VhcmNoKHN0cikge1xuICAgIHRoaXMucXVlcnlzdHJpbmcgPSBzdHI7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBcIkhvc3RcIiBoZWFkZXIgZmllbGQgaG9zdFxuICAgKiBhbmQgc3VwcG9ydCBYLUZvcndhcmRlZC1Ib3N0IHdoZW4gYVxuICAgKiBwcm94eSBpcyBlbmFibGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IGhvc3RuYW1lOnBvcnRcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IGhvc3QoKSB7XG4gICAgY29uc3QgcHJveHkgPSB0aGlzLmFwcC5wcm94eTtcbiAgICBsZXQgaG9zdCA9IHByb3h5ICYmIHRoaXMuZ2V0KCdYLUZvcndhcmRlZC1Ib3N0Jyk7XG4gICAgaG9zdCA9IGhvc3QgfHwgdGhpcy5nZXQoJ0hvc3QnKTtcbiAgICBpZiAoIWhvc3QpIHJldHVybiAnJztcbiAgICByZXR1cm4gaG9zdC5zcGxpdCgvXFxzKixcXHMqLylbMF07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSBcIkhvc3RcIiBoZWFkZXIgZmllbGQgaG9zdG5hbWVcbiAgICogYW5kIHN1cHBvcnQgWC1Gb3J3YXJkZWQtSG9zdCB3aGVuIGFcbiAgICogcHJveHkgaXMgZW5hYmxlZC5cbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfSBob3N0bmFtZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgaG9zdG5hbWUoKSB7XG4gICAgY29uc3QgaG9zdCA9IHRoaXMuaG9zdDtcbiAgICBpZiAoIWhvc3QpIHJldHVybiAnJztcbiAgICBpZiAoJ1snID09IGhvc3RbMF0pIHJldHVybiB0aGlzLlVSTC5ob3N0bmFtZSB8fCAnJzsgLy8gSVB2NlxuICAgIHJldHVybiBob3N0LnNwbGl0KCc6JylbMF07XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCBXSEFUV0cgcGFyc2VkIFVSTC5cbiAgICogTGF6aWx5IG1lbW9pemVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtVUkx8T2JqZWN0fVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgVVJMKCkge1xuICAgIGlmICghdGhpcy5tZW1vaXplZFVSTCkge1xuICAgICAgY29uc3QgcHJvdG9jb2wgPSB0aGlzLnByb3RvY29sO1xuICAgICAgY29uc3QgaG9zdCA9IHRoaXMuaG9zdDtcbiAgICAgIGNvbnN0IG9yaWdpbmFsVXJsID0gdGhpcy5vcmlnaW5hbFVybCB8fCAnJzsgLy8gYXZvaWQgdW5kZWZpbmVkIGluIHRlbXBsYXRlIHN0cmluZ1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5tZW1vaXplZFVSTCA9IG5ldyBVUkwoYCR7cHJvdG9jb2x9Oi8vJHtob3N0fSR7b3JpZ2luYWxVcmx9YCk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhpcy5tZW1vaXplZFVSTCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1lbW9pemVkVVJMO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgcmVxdWVzdCBpcyBmcmVzaCwgYWthXG4gICAqIExhc3QtTW9kaWZpZWQgYW5kL29yIHRoZSBFVGFnXG4gICAqIHN0aWxsIG1hdGNoLlxuICAgKlxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgZnJlc2goKSB7XG4gICAgY29uc3QgbWV0aG9kID0gdGhpcy5tZXRob2Q7XG4gICAgY29uc3QgcyA9IHRoaXMuY3R4LnN0YXR1cztcblxuICAgIC8vIEdFVCBvciBIRUFEIGZvciB3ZWFrIGZyZXNobmVzcyB2YWxpZGF0aW9uIG9ubHlcbiAgICBpZiAoJ0dFVCcgIT0gbWV0aG9kICYmICdIRUFEJyAhPSBtZXRob2QpIHJldHVybiBmYWxzZTtcblxuICAgIC8vIDJ4eCBvciAzMDQgYXMgcGVyIHJmYzI2MTYgMTQuMjZcbiAgICBpZiAoKHMgPj0gMjAwICYmIHMgPCAzMDApIHx8IDMwNCA9PSBzKSB7XG4gICAgICByZXR1cm4gZnJlc2godGhpcy5oZWFkZXIsIHRoaXMucmVzcG9uc2UuaGVhZGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSByZXF1ZXN0IGlzIHN0YWxlLCBha2FcbiAgICogXCJMYXN0LU1vZGlmaWVkXCIgYW5kIC8gb3IgdGhlIFwiRVRhZ1wiIGZvciB0aGVcbiAgICogcmVzb3VyY2UgaGFzIGNoYW5nZWQuXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBzdGFsZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuZnJlc2g7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSByZXF1ZXN0IGlzIGlkZW1wb3RlbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBpZGVtcG90ZW50KCkge1xuICAgIGNvbnN0IG1ldGhvZHMgPSBbJ0dFVCcsICdIRUFEJywgJ1BVVCcsICdERUxFVEUnLCAnT1BUSU9OUycsICdUUkFDRSddO1xuICAgIHJldHVybiAhIX5tZXRob2RzLmluZGV4T2YodGhpcy5tZXRob2QpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHJlcXVlc3Qgc29ja2V0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtDb25uZWN0aW9ufVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgc29ja2V0KCkge1xuICAgIHJldHVybiB0aGlzLnJlcS5zb2NrZXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY2hhcnNldCB3aGVuIHByZXNlbnQgb3IgdW5kZWZpbmVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBjaGFyc2V0KCkge1xuICAgIGxldCB0eXBlID0gdGhpcy5nZXQoJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICghdHlwZSkgcmV0dXJuICcnO1xuXG4gICAgdHJ5IHtcbiAgICAgIHR5cGUgPSBjb250ZW50VHlwZS5wYXJzZSh0eXBlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGUucGFyYW1ldGVycy5jaGFyc2V0IHx8ICcnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gcGFyc2VkIENvbnRlbnQtTGVuZ3RoIHdoZW4gcHJlc2VudC5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgbGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbiA9IHRoaXMuZ2V0KCdDb250ZW50LUxlbmd0aCcpO1xuICAgIGlmIChsZW4gPT0gJycpIHJldHVybjtcbiAgICByZXR1cm4gfn5sZW47XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgcHJvdG9jb2wgc3RyaW5nIFwiaHR0cFwiIG9yIFwiaHR0cHNcIlxuICAgKiB3aGVuIHJlcXVlc3RlZCB3aXRoIFRMUy4gV2hlbiB0aGUgcHJveHkgc2V0dGluZ1xuICAgKiBpcyBlbmFibGVkIHRoZSBcIlgtRm9yd2FyZGVkLVByb3RvXCIgaGVhZGVyXG4gICAqIGZpZWxkIHdpbGwgYmUgdHJ1c3RlZC4gSWYgeW91J3JlIHJ1bm5pbmcgYmVoaW5kXG4gICAqIGEgcmV2ZXJzZSBwcm94eSB0aGF0IHN1cHBsaWVzIGh0dHBzIGZvciB5b3UgdGhpc1xuICAgKiBtYXkgYmUgZW5hYmxlZC5cbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgcHJvdG9jb2woKSB7XG4gICAgY29uc3QgcHJveHkgPSB0aGlzLmFwcC5wcm94eTtcbiAgICBpZiAodGhpcy5zb2NrZXQuZW5jcnlwdGVkKSByZXR1cm4gJ2h0dHBzJztcbiAgICBpZiAoIXByb3h5KSByZXR1cm4gJ2h0dHAnO1xuICAgIGNvbnN0IHByb3RvID0gdGhpcy5nZXQoJ1gtRm9yd2FyZGVkLVByb3RvJykgfHwgJ2h0dHAnO1xuICAgIHJldHVybiBwcm90by5zcGxpdCgvXFxzKixcXHMqLylbMF07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3J0LWhhbmQgZm9yOlxuICAgKlxuICAgKiAgICB0aGlzLnByb3RvY29sID09ICdodHRwcydcbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IHNlY3VyZSgpIHtcbiAgICByZXR1cm4gJ2h0dHBzJyA9PSB0aGlzLnByb3RvY29sO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIGBhcHAucHJveHlgIGlzIGB0cnVlYCwgcGFyc2VcbiAgICogdGhlIFwiWC1Gb3J3YXJkZWQtRm9yXCIgaXAgYWRkcmVzcyBsaXN0LlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSBpZiB0aGUgdmFsdWUgd2VyZSBcImNsaWVudCwgcHJveHkxLCBwcm94eTJcIlxuICAgKiB5b3Ugd291bGQgcmVjZWl2ZSB0aGUgYXJyYXkgYFtcImNsaWVudFwiLCBcInByb3h5MVwiLCBcInByb3h5MlwiXWBcbiAgICogd2hlcmUgXCJwcm94eTJcIiBpcyB0aGUgZnVydGhlc3QgZG93bi1zdHJlYW0uXG4gICAqXG4gICAqIEByZXR1cm4ge0FycmF5fVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgaXBzKCkge1xuICAgIGNvbnN0IHByb3h5ID0gdGhpcy5hcHAucHJveHk7XG4gICAgY29uc3QgdmFsID0gdGhpcy5nZXQoJ1gtRm9yd2FyZGVkLUZvcicpO1xuICAgIHJldHVybiBwcm94eSAmJiB2YWxcbiAgICAgID8gdmFsLnNwbGl0KC9cXHMqLFxccyovKVxuICAgICAgOiBbXTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIHN1YmRvbWFpbnMgYXMgYW4gYXJyYXkuXG4gICAqXG4gICAqIFN1YmRvbWFpbnMgYXJlIHRoZSBkb3Qtc2VwYXJhdGVkIHBhcnRzIG9mIHRoZSBob3N0IGJlZm9yZSB0aGUgbWFpbiBkb21haW5cbiAgICogb2YgdGhlIGFwcC4gQnkgZGVmYXVsdCwgdGhlIGRvbWFpbiBvZiB0aGUgYXBwIGlzIGFzc3VtZWQgdG8gYmUgdGhlIGxhc3QgdHdvXG4gICAqIHBhcnRzIG9mIHRoZSBob3N0LiBUaGlzIGNhbiBiZSBjaGFuZ2VkIGJ5IHNldHRpbmcgYGFwcC5zdWJkb21haW5PZmZzZXRgLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgaWYgdGhlIGRvbWFpbiBpcyBcInRvYmkuZmVycmV0cy5leGFtcGxlLmNvbVwiOlxuICAgKiBJZiBgYXBwLnN1YmRvbWFpbk9mZnNldGAgaXMgbm90IHNldCwgdGhpcy5zdWJkb21haW5zIGlzXG4gICAqIGBbXCJmZXJyZXRzXCIsIFwidG9iaVwiXWAuXG4gICAqIElmIGBhcHAuc3ViZG9tYWluT2Zmc2V0YCBpcyAzLCB0aGlzLnN1YmRvbWFpbnMgaXMgYFtcInRvYmlcIl1gLlxuICAgKlxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IHN1YmRvbWFpbnMoKSB7XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5hcHAuc3ViZG9tYWluT2Zmc2V0O1xuICAgIGNvbnN0IGhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZTtcbiAgICBpZiAobmV0LmlzSVAoaG9zdG5hbWUpKSByZXR1cm4gW107XG4gICAgcmV0dXJuIGhvc3RuYW1lXG4gICAgICAuc3BsaXQoJy4nKVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLnNsaWNlKG9mZnNldCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBgdHlwZShzKWAgaXMgYWNjZXB0YWJsZSwgcmV0dXJuaW5nXG4gICAqIHRoZSBiZXN0IG1hdGNoIHdoZW4gdHJ1ZSwgb3RoZXJ3aXNlIGBmYWxzZWAsIGluIHdoaWNoXG4gICAqIGNhc2UgeW91IHNob3VsZCByZXNwb25kIHdpdGggNDA2IFwiTm90IEFjY2VwdGFibGVcIi5cbiAgICpcbiAgICogVGhlIGB0eXBlYCB2YWx1ZSBtYXkgYmUgYSBzaW5nbGUgbWltZSB0eXBlIHN0cmluZ1xuICAgKiBzdWNoIGFzIFwiYXBwbGljYXRpb24vanNvblwiLCB0aGUgZXh0ZW5zaW9uIG5hbWVcbiAgICogc3VjaCBhcyBcImpzb25cIiBvciBhbiBhcnJheSBgW1wianNvblwiLCBcImh0bWxcIiwgXCJ0ZXh0L3BsYWluXCJdYC4gV2hlbiBhIGxpc3RcbiAgICogb3IgYXJyYXkgaXMgZ2l2ZW4gdGhlIF9iZXN0XyBtYXRjaCwgaWYgYW55IGlzIHJldHVybmVkLlxuICAgKlxuICAgKiBFeGFtcGxlczpcbiAgICpcbiAgICogICAgIC8vIEFjY2VwdDogdGV4dC9odG1sXG4gICAqICAgICB0aGlzLmFjY2VwdHMoJ2h0bWwnKTtcbiAgICogICAgIC8vID0+IFwiaHRtbFwiXG4gICAqXG4gICAqICAgICAvLyBBY2NlcHQ6IHRleHQvKiwgYXBwbGljYXRpb24vanNvblxuICAgKiAgICAgdGhpcy5hY2NlcHRzKCdodG1sJyk7XG4gICAqICAgICAvLyA9PiBcImh0bWxcIlxuICAgKiAgICAgdGhpcy5hY2NlcHRzKCd0ZXh0L2h0bWwnKTtcbiAgICogICAgIC8vID0+IFwidGV4dC9odG1sXCJcbiAgICogICAgIHRoaXMuYWNjZXB0cygnanNvbicsICd0ZXh0Jyk7XG4gICAqICAgICAvLyA9PiBcImpzb25cIlxuICAgKiAgICAgdGhpcy5hY2NlcHRzKCdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAqICAgICAvLyA9PiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgKlxuICAgKiAgICAgLy8gQWNjZXB0OiB0ZXh0LyosIGFwcGxpY2F0aW9uL2pzb25cbiAgICogICAgIHRoaXMuYWNjZXB0cygnaW1hZ2UvcG5nJyk7XG4gICAqICAgICB0aGlzLmFjY2VwdHMoJ3BuZycpO1xuICAgKiAgICAgLy8gPT4gZmFsc2VcbiAgICpcbiAgICogICAgIC8vIEFjY2VwdDogdGV4dC8qO3E9LjUsIGFwcGxpY2F0aW9uL2pzb25cbiAgICogICAgIHRoaXMuYWNjZXB0cyhbJ2h0bWwnLCAnanNvbiddKTtcbiAgICogICAgIHRoaXMuYWNjZXB0cygnaHRtbCcsICdqc29uJyk7XG4gICAqICAgICAvLyA9PiBcImpzb25cIlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gdHlwZShzKS4uLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd8QXJyYXl8ZmFsc2V9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFjY2VwdHMoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmFjY2VwdC50eXBlcyguLi5hcmdzKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIGFjY2VwdGVkIGVuY29kaW5ncyBvciBiZXN0IGZpdCBiYXNlZCBvbiBgZW5jb2RpbmdzYC5cbiAgICpcbiAgICogR2l2ZW4gYEFjY2VwdC1FbmNvZGluZzogZ3ppcCwgZGVmbGF0ZWBcbiAgICogYW4gYXJyYXkgc29ydGVkIGJ5IHF1YWxpdHkgaXMgcmV0dXJuZWQ6XG4gICAqXG4gICAqICAgICBbJ2d6aXAnLCAnZGVmbGF0ZSddXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBlbmNvZGluZyhzKS4uLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd8QXJyYXl9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFjY2VwdHNFbmNvZGluZ3MoLi4uYXJncykge1xuICAgIHJldHVybiB0aGlzLmFjY2VwdC5lbmNvZGluZ3MoLi4uYXJncyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBhY2NlcHRlZCBjaGFyc2V0cyBvciBiZXN0IGZpdCBiYXNlZCBvbiBgY2hhcnNldHNgLlxuICAgKlxuICAgKiBHaXZlbiBgQWNjZXB0LUNoYXJzZXQ6IHV0Zi04LCBpc28tODg1OS0xO3E9MC4yLCB1dGYtNztxPTAuNWBcbiAgICogYW4gYXJyYXkgc29ydGVkIGJ5IHF1YWxpdHkgaXMgcmV0dXJuZWQ6XG4gICAqXG4gICAqICAgICBbJ3V0Zi04JywgJ3V0Zi03JywgJ2lzby04ODU5LTEnXVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gY2hhcnNldChzKS4uLlxuICAgKiBAcmV0dXJuIHtTdHJpbmd8QXJyYXl9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGFjY2VwdHNDaGFyc2V0cyguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYWNjZXB0LmNoYXJzZXRzKC4uLmFyZ3MpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYWNjZXB0ZWQgbGFuZ3VhZ2VzIG9yIGJlc3QgZml0IGJhc2VkIG9uIGBsYW5nc2AuXG4gICAqXG4gICAqIEdpdmVuIGBBY2NlcHQtTGFuZ3VhZ2U6IGVuO3E9MC44LCBlcywgcHRgXG4gICAqIGFuIGFycmF5IHNvcnRlZCBieSBxdWFsaXR5IGlzIHJldHVybmVkOlxuICAgKlxuICAgKiAgICAgWydlcycsICdwdCcsICdlbiddXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBsYW5nKHMpLi4uXG4gICAqIEByZXR1cm4ge0FycmF5fFN0cmluZ31cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgYWNjZXB0c0xhbmd1YWdlcyguLi5hcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMuYWNjZXB0Lmxhbmd1YWdlcyguLi5hcmdzKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGluY29taW5nIHJlcXVlc3QgY29udGFpbnMgdGhlIFwiQ29udGVudC1UeXBlXCJcbiAgICogaGVhZGVyIGZpZWxkLCBhbmQgaXQgY29udGFpbnMgYW55IG9mIHRoZSBnaXZlIG1pbWUgYHR5cGVgcy5cbiAgICogSWYgdGhlcmUgaXMgbm8gcmVxdWVzdCBib2R5LCBgbnVsbGAgaXMgcmV0dXJuZWQuXG4gICAqIElmIHRoZXJlIGlzIG5vIGNvbnRlbnQgdHlwZSwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAgICogT3RoZXJ3aXNlLCBpdCByZXR1cm5zIHRoZSBmaXJzdCBgdHlwZWAgdGhhdCBtYXRjaGVzLlxuICAgKlxuICAgKiBFeGFtcGxlczpcbiAgICpcbiAgICogICAgIC8vIFdpdGggQ29udGVudC1UeXBlOiB0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcbiAgICogICAgIHRoaXMuaXMoJ2h0bWwnKTsgLy8gPT4gJ2h0bWwnXG4gICAqICAgICB0aGlzLmlzKCd0ZXh0L2h0bWwnKTsgLy8gPT4gJ3RleHQvaHRtbCdcbiAgICogICAgIHRoaXMuaXMoJ3RleHQvKicsICdhcHBsaWNhdGlvbi9qc29uJyk7IC8vID0+ICd0ZXh0L2h0bWwnXG4gICAqXG4gICAqICAgICAvLyBXaGVuIENvbnRlbnQtVHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gICAqICAgICB0aGlzLmlzKCdqc29uJywgJ3VybGVuY29kZWQnKTsgLy8gPT4gJ2pzb24nXG4gICAqICAgICB0aGlzLmlzKCdhcHBsaWNhdGlvbi9qc29uJyk7IC8vID0+ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgKiAgICAgdGhpcy5pcygnaHRtbCcsICdhcHBsaWNhdGlvbi8qJyk7IC8vID0+ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgKlxuICAgKiAgICAgdGhpcy5pcygnaHRtbCcpOyAvLyA9PiBmYWxzZVxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gdHlwZXMuLi5cbiAgICogQHJldHVybiB7U3RyaW5nfGZhbHNlfG51bGx9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGlzKHR5cGVzKSB7XG4gICAgaWYgKCF0eXBlcykgcmV0dXJuIHR5cGVpcyh0aGlzLnJlcSk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR5cGVzKSkgdHlwZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHR5cGVpcyh0aGlzLnJlcSwgdHlwZXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHJlcXVlc3QgbWltZSB0eXBlIHZvaWQgb2ZcbiAgICogcGFyYW1ldGVycyBzdWNoIGFzIFwiY2hhcnNldFwiLlxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCB0eXBlKCkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldCgnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKCF0eXBlKSByZXR1cm4gJyc7XG4gICAgcmV0dXJuIHR5cGUuc3BsaXQoJzsnKVswXTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIHJlcXVlc3QgaGVhZGVyLlxuICAgKlxuICAgKiBUaGUgYFJlZmVycmVyYCBoZWFkZXIgZmllbGQgaXMgc3BlY2lhbC1jYXNlZCxcbiAgICogYm90aCBgUmVmZXJyZXJgIGFuZCBgUmVmZXJlcmAgYXJlIGludGVyY2hhbmdlYWJsZS5cbiAgICpcbiAgICogRXhhbXBsZXM6XG4gICAqXG4gICAqICAgICB0aGlzLmdldCgnQ29udGVudC1UeXBlJyk7XG4gICAqICAgICAvLyA9PiBcInRleHQvcGxhaW5cIlxuICAgKlxuICAgKiAgICAgdGhpcy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgKiAgICAgLy8gPT4gXCJ0ZXh0L3BsYWluXCJcbiAgICpcbiAgICogICAgIHRoaXMuZ2V0KCdTb21ldGhpbmcnKTtcbiAgICogICAgIC8vID0+IHVuZGVmaW5lZFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQoZmllbGQpIHtcbiAgICBjb25zdCByZXEgPSB0aGlzLnJlcTtcbiAgICBzd2l0Y2ggKGZpZWxkID0gZmllbGQudG9Mb3dlckNhc2UoKSkge1xuICAgICAgY2FzZSAncmVmZXJlcic6XG4gICAgICBjYXNlICdyZWZlcnJlcic6XG4gICAgICAgIHJldHVybiByZXEuaGVhZGVycy5yZWZlcnJlciB8fCByZXEuaGVhZGVycy5yZWZlcmVyIHx8ICcnO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHJlcS5oZWFkZXJzW2ZpZWxkXSB8fCAnJztcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluc3BlY3QgaW1wbGVtZW50YXRpb24uXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgaW5zcGVjdCgpIHtcbiAgICBpZiAoIXRoaXMucmVxKSByZXR1cm47XG4gICAgcmV0dXJuIHRoaXMudG9KU09OKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiBKU09OIHJlcHJlc2VudGF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4gb25seSh0aGlzLCBbXG4gICAgICAnbWV0aG9kJyxcbiAgICAgICd1cmwnLFxuICAgICAgJ2hlYWRlcidcbiAgICBdKTtcbiAgfVxufTtcbiIsIlxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuY29uc3QgY29udGVudERpc3Bvc2l0aW9uID0gcmVxdWlyZSgnY29udGVudC1kaXNwb3NpdGlvbicpO1xuY29uc3QgZW5zdXJlRXJyb3JIYW5kbGVyID0gcmVxdWlyZSgnZXJyb3ItaW5qZWN0Jyk7XG5jb25zdCBnZXRUeXBlID0gcmVxdWlyZSgnbWltZS10eXBlcycpLmNvbnRlbnRUeXBlO1xuY29uc3Qgb25GaW5pc2ggPSByZXF1aXJlKCdvbi1maW5pc2hlZCcpO1xuY29uc3QgaXNKU09OID0gcmVxdWlyZSgna29hLWlzLWpzb24nKTtcbmNvbnN0IGVzY2FwZSA9IHJlcXVpcmUoJ2VzY2FwZS1odG1sJyk7XG5jb25zdCB0eXBlaXMgPSByZXF1aXJlKCd0eXBlLWlzJykuaXM7XG5jb25zdCBzdGF0dXNlcyA9IHJlcXVpcmUoJ3N0YXR1c2VzJyk7XG5jb25zdCBkZXN0cm95ID0gcmVxdWlyZSgnZGVzdHJveScpO1xuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSgnYXNzZXJ0Jyk7XG5jb25zdCBleHRuYW1lID0gcmVxdWlyZSgncGF0aCcpLmV4dG5hbWU7XG5jb25zdCB2YXJ5ID0gcmVxdWlyZSgndmFyeScpO1xuY29uc3Qgb25seSA9IHJlcXVpcmUoJ29ubHknKTtcblxuLyoqXG4gKiBQcm90b3R5cGUuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgcmVxdWVzdCBzb2NrZXQuXG4gICAqXG4gICAqIEByZXR1cm4ge0Nvbm5lY3Rpb259XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBzb2NrZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY3R4LnJlcS5zb2NrZXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiByZXNwb25zZSBoZWFkZXIuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IGhlYWRlcigpIHtcbiAgICBjb25zdCB7IHJlcyB9ID0gdGhpcztcbiAgICByZXR1cm4gdHlwZW9mIHJlcy5nZXRIZWFkZXJzID09PSAnZnVuY3Rpb24nXG4gICAgICA/IHJlcy5nZXRIZWFkZXJzKClcbiAgICAgIDogcmVzLl9oZWFkZXJzIHx8IHt9OyAgLy8gTm9kZSA8IDcuN1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gcmVzcG9uc2UgaGVhZGVyLCBhbGlhcyBhcyByZXNwb25zZS5oZWFkZXJcbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgaGVhZGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkZXI7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCByZXNwb25zZSBzdGF0dXMgY29kZS5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLnJlcy5zdGF0dXNDb2RlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQgcmVzcG9uc2Ugc3RhdHVzIGNvZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBjb2RlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHNldCBzdGF0dXMoY29kZSkge1xuICAgIGlmICh0aGlzLmhlYWRlclNlbnQpIHJldHVybjtcblxuICAgIGFzc2VydCgnbnVtYmVyJyA9PSB0eXBlb2YgY29kZSwgJ3N0YXR1cyBjb2RlIG11c3QgYmUgYSBudW1iZXInKTtcbiAgICBhc3NlcnQoc3RhdHVzZXNbY29kZV0sIGBpbnZhbGlkIHN0YXR1cyBjb2RlOiAke2NvZGV9YCk7XG4gICAgdGhpcy5fZXhwbGljaXRTdGF0dXMgPSB0cnVlO1xuICAgIHRoaXMucmVzLnN0YXR1c0NvZGUgPSBjb2RlO1xuICAgIGlmICh0aGlzLnJlcS5odHRwVmVyc2lvbk1ham9yIDwgMikgdGhpcy5yZXMuc3RhdHVzTWVzc2FnZSA9IHN0YXR1c2VzW2NvZGVdO1xuICAgIGlmICh0aGlzLmJvZHkgJiYgc3RhdHVzZXMuZW1wdHlbY29kZV0pIHRoaXMuYm9keSA9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCByZXNwb25zZSBzdGF0dXMgbWVzc2FnZVxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBtZXNzYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnJlcy5zdGF0dXNNZXNzYWdlIHx8IHN0YXR1c2VzW3RoaXMuc3RhdHVzXTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0IHJlc3BvbnNlIHN0YXR1cyBtZXNzYWdlXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBtc2dcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgc2V0IG1lc3NhZ2UobXNnKSB7XG4gICAgdGhpcy5yZXMuc3RhdHVzTWVzc2FnZSA9IG1zZztcbiAgfSxcblxuICAvKipcbiAgICogR2V0IHJlc3BvbnNlIGJvZHkuXG4gICAqXG4gICAqIEByZXR1cm4ge01peGVkfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgYm9keSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYm9keTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0IHJlc3BvbnNlIGJvZHkuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfEJ1ZmZlcnxPYmplY3R8U3RyZWFtfSB2YWxcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgc2V0IGJvZHkodmFsKSB7XG4gICAgY29uc3Qgb3JpZ2luYWwgPSB0aGlzLl9ib2R5O1xuICAgIHRoaXMuX2JvZHkgPSB2YWw7XG5cbiAgICAvLyBubyBjb250ZW50XG4gICAgaWYgKG51bGwgPT0gdmFsKSB7XG4gICAgICBpZiAoIXN0YXR1c2VzLmVtcHR5W3RoaXMuc3RhdHVzXSkgdGhpcy5zdGF0dXMgPSAyMDQ7XG4gICAgICB0aGlzLnJlbW92ZSgnQ29udGVudC1UeXBlJyk7XG4gICAgICB0aGlzLnJlbW92ZSgnQ29udGVudC1MZW5ndGgnKTtcbiAgICAgIHRoaXMucmVtb3ZlKCdUcmFuc2Zlci1FbmNvZGluZycpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHNldCB0aGUgc3RhdHVzXG4gICAgaWYgKCF0aGlzLl9leHBsaWNpdFN0YXR1cykgdGhpcy5zdGF0dXMgPSAyMDA7XG5cbiAgICAvLyBzZXQgdGhlIGNvbnRlbnQtdHlwZSBvbmx5IGlmIG5vdCB5ZXQgc2V0XG4gICAgY29uc3Qgc2V0VHlwZSA9ICF0aGlzLmhlYWRlclsnY29udGVudC10eXBlJ107XG5cbiAgICAvLyBzdHJpbmdcbiAgICBpZiAoJ3N0cmluZycgPT0gdHlwZW9mIHZhbCkge1xuICAgICAgaWYgKHNldFR5cGUpIHRoaXMudHlwZSA9IC9eXFxzKjwvLnRlc3QodmFsKSA/ICdodG1sJyA6ICd0ZXh0JztcbiAgICAgIHRoaXMubGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgodmFsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBidWZmZXJcbiAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHZhbCkpIHtcbiAgICAgIGlmIChzZXRUeXBlKSB0aGlzLnR5cGUgPSAnYmluJztcbiAgICAgIHRoaXMubGVuZ3RoID0gdmFsLmxlbmd0aDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBzdHJlYW1cbiAgICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2YgdmFsLnBpcGUpIHtcbiAgICAgIG9uRmluaXNoKHRoaXMucmVzLCBkZXN0cm95LmJpbmQobnVsbCwgdmFsKSk7XG4gICAgICBlbnN1cmVFcnJvckhhbmRsZXIodmFsLCBlcnIgPT4gdGhpcy5jdHgub25lcnJvcihlcnIpKTtcblxuICAgICAgLy8gb3ZlcndyaXRpbmdcbiAgICAgIGlmIChudWxsICE9IG9yaWdpbmFsICYmIG9yaWdpbmFsICE9IHZhbCkgdGhpcy5yZW1vdmUoJ0NvbnRlbnQtTGVuZ3RoJyk7XG5cbiAgICAgIGlmIChzZXRUeXBlKSB0aGlzLnR5cGUgPSAnYmluJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBqc29uXG4gICAgdGhpcy5yZW1vdmUoJ0NvbnRlbnQtTGVuZ3RoJyk7XG4gICAgdGhpcy50eXBlID0gJ2pzb24nO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQgQ29udGVudC1MZW5ndGggZmllbGQgdG8gYG5gLlxuICAgKlxuICAgKiBAcGFyYW0ge051bWJlcn0gblxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzZXQgbGVuZ3RoKG4pIHtcbiAgICB0aGlzLnNldCgnQ29udGVudC1MZW5ndGgnLCBuKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIHBhcnNlZCByZXNwb25zZSBDb250ZW50LUxlbmd0aCB3aGVuIHByZXNlbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge051bWJlcn1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IGxlbmd0aCgpIHtcbiAgICBjb25zdCBsZW4gPSB0aGlzLmhlYWRlclsnY29udGVudC1sZW5ndGgnXTtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5ib2R5O1xuXG4gICAgaWYgKG51bGwgPT0gbGVuKSB7XG4gICAgICBpZiAoIWJvZHkpIHJldHVybjtcbiAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgYm9keSkgcmV0dXJuIEJ1ZmZlci5ieXRlTGVuZ3RoKGJvZHkpO1xuICAgICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkgcmV0dXJuIGJvZHkubGVuZ3RoO1xuICAgICAgaWYgKGlzSlNPTihib2R5KSkgcmV0dXJuIEJ1ZmZlci5ieXRlTGVuZ3RoKEpTT04uc3RyaW5naWZ5KGJvZHkpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gfn5sZW47XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgaGVhZGVyIGhhcyBiZWVuIHdyaXR0ZW4gdG8gdGhlIHNvY2tldC5cbiAgICpcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZ2V0IGhlYWRlclNlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzLmhlYWRlcnNTZW50O1xuICB9LFxuXG4gIC8qKlxuICAgKiBWYXJ5IG9uIGBmaWVsZGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICB2YXJ5KGZpZWxkKSB7XG4gICAgaWYgKHRoaXMuaGVhZGVyU2VudCkgcmV0dXJuO1xuXG4gICAgdmFyeSh0aGlzLnJlcywgZmllbGQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIGEgMzAyIHJlZGlyZWN0IHRvIGB1cmxgLlxuICAgKlxuICAgKiBUaGUgc3RyaW5nIFwiYmFja1wiIGlzIHNwZWNpYWwtY2FzZWRcbiAgICogdG8gcHJvdmlkZSBSZWZlcnJlciBzdXBwb3J0LCB3aGVuIFJlZmVycmVyXG4gICAqIGlzIG5vdCBwcmVzZW50IGBhbHRgIG9yIFwiL1wiIGlzIHVzZWQuXG4gICAqXG4gICAqIEV4YW1wbGVzOlxuICAgKlxuICAgKiAgICB0aGlzLnJlZGlyZWN0KCdiYWNrJyk7XG4gICAqICAgIHRoaXMucmVkaXJlY3QoJ2JhY2snLCAnL2luZGV4Lmh0bWwnKTtcbiAgICogICAgdGhpcy5yZWRpcmVjdCgnL2xvZ2luJyk7XG4gICAqICAgIHRoaXMucmVkaXJlY3QoJ2h0dHA6Ly9nb29nbGUuY29tJyk7XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICogQHBhcmFtIHtTdHJpbmd9IFthbHRdXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHJlZGlyZWN0KHVybCwgYWx0KSB7XG4gICAgLy8gbG9jYXRpb25cbiAgICBpZiAoJ2JhY2snID09IHVybCkgdXJsID0gdGhpcy5jdHguZ2V0KCdSZWZlcnJlcicpIHx8IGFsdCB8fCAnLyc7XG4gICAgdGhpcy5zZXQoJ0xvY2F0aW9uJywgdXJsKTtcblxuICAgIC8vIHN0YXR1c1xuICAgIGlmICghc3RhdHVzZXMucmVkaXJlY3RbdGhpcy5zdGF0dXNdKSB0aGlzLnN0YXR1cyA9IDMwMjtcblxuICAgIC8vIGh0bWxcbiAgICBpZiAodGhpcy5jdHguYWNjZXB0cygnaHRtbCcpKSB7XG4gICAgICB1cmwgPSBlc2NhcGUodXJsKTtcbiAgICAgIHRoaXMudHlwZSA9ICd0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgnO1xuICAgICAgdGhpcy5ib2R5ID0gYFJlZGlyZWN0aW5nIHRvIDxhIGhyZWY9XCIke3VybH1cIj4ke3VybH08L2E+LmA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdGV4dFxuICAgIHRoaXMudHlwZSA9ICd0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04JztcbiAgICB0aGlzLmJvZHkgPSBgUmVkaXJlY3RpbmcgdG8gJHt1cmx9LmA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldCBDb250ZW50LURpc3Bvc2l0aW9uIGhlYWRlciB0byBcImF0dGFjaG1lbnRcIiB3aXRoIG9wdGlvbmFsIGBmaWxlbmFtZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhdHRhY2htZW50KGZpbGVuYW1lKSB7XG4gICAgaWYgKGZpbGVuYW1lKSB0aGlzLnR5cGUgPSBleHRuYW1lKGZpbGVuYW1lKTtcbiAgICB0aGlzLnNldCgnQ29udGVudC1EaXNwb3NpdGlvbicsIGNvbnRlbnREaXNwb3NpdGlvbihmaWxlbmFtZSkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXQgQ29udGVudC1UeXBlIHJlc3BvbnNlIGhlYWRlciB3aXRoIGB0eXBlYCB0aHJvdWdoIGBtaW1lLmxvb2t1cCgpYFxuICAgKiB3aGVuIGl0IGRvZXMgbm90IGNvbnRhaW4gYSBjaGFyc2V0LlxuICAgKlxuICAgKiBFeGFtcGxlczpcbiAgICpcbiAgICogICAgIHRoaXMudHlwZSA9ICcuaHRtbCc7XG4gICAqICAgICB0aGlzLnR5cGUgPSAnaHRtbCc7XG4gICAqICAgICB0aGlzLnR5cGUgPSAnanNvbic7XG4gICAqICAgICB0aGlzLnR5cGUgPSAnYXBwbGljYXRpb24vanNvbic7XG4gICAqICAgICB0aGlzLnR5cGUgPSAncG5nJztcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgc2V0IHR5cGUodHlwZSkge1xuICAgIHR5cGUgPSBnZXRUeXBlKHR5cGUpO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICB0aGlzLnNldCgnQ29udGVudC1UeXBlJywgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlKCdDb250ZW50LVR5cGUnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldCB0aGUgTGFzdC1Nb2RpZmllZCBkYXRlIHVzaW5nIGEgc3RyaW5nIG9yIGEgRGF0ZS5cbiAgICpcbiAgICogICAgIHRoaXMucmVzcG9uc2UubGFzdE1vZGlmaWVkID0gbmV3IERhdGUoKTtcbiAgICogICAgIHRoaXMucmVzcG9uc2UubGFzdE1vZGlmaWVkID0gJzIwMTMtMDktMTMnO1xuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xEYXRlfSB0eXBlXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHNldCBsYXN0TW9kaWZpZWQodmFsKSB7XG4gICAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiB2YWwpIHZhbCA9IG5ldyBEYXRlKHZhbCk7XG4gICAgdGhpcy5zZXQoJ0xhc3QtTW9kaWZpZWQnLCB2YWwudG9VVENTdHJpbmcoKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgTGFzdC1Nb2RpZmllZCBkYXRlIGluIERhdGUgZm9ybSwgaWYgaXQgZXhpc3RzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtEYXRlfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgbGFzdE1vZGlmaWVkKCkge1xuICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldCgnbGFzdC1tb2RpZmllZCcpO1xuICAgIGlmIChkYXRlKSByZXR1cm4gbmV3IERhdGUoZGF0ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldCB0aGUgRVRhZyBvZiBhIHJlc3BvbnNlLlxuICAgKiBUaGlzIHdpbGwgbm9ybWFsaXplIHRoZSBxdW90ZXMgaWYgbmVjZXNzYXJ5LlxuICAgKlxuICAgKiAgICAgdGhpcy5yZXNwb25zZS5ldGFnID0gJ21kNWhhc2hzdW0nO1xuICAgKiAgICAgdGhpcy5yZXNwb25zZS5ldGFnID0gJ1wibWQ1aGFzaHN1bVwiJztcbiAgICogICAgIHRoaXMucmVzcG9uc2UuZXRhZyA9ICdXL1wiMTIzNDU2Nzg5XCInO1xuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXRhZ1xuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzZXQgZXRhZyh2YWwpIHtcbiAgICBpZiAoIS9eKFdcXC8pP1wiLy50ZXN0KHZhbCkpIHZhbCA9IGBcIiR7dmFsfVwiYDtcbiAgICB0aGlzLnNldCgnRVRhZycsIHZhbCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgRVRhZyBvZiBhIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldCBldGFnKCkge1xuICAgIHJldHVybiB0aGlzLmdldCgnRVRhZycpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHJlc3BvbnNlIG1pbWUgdHlwZSB2b2lkIG9mXG4gICAqIHBhcmFtZXRlcnMgc3VjaCBhcyBcImNoYXJzZXRcIi5cbiAgICpcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBnZXQgdHlwZSgpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXQoJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICghdHlwZSkgcmV0dXJuICcnO1xuICAgIHJldHVybiB0eXBlLnNwbGl0KCc7JylbMF07XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgdGhlIHJlc3BvbnNlIGlzIG9uZSBvZiB0aGUgbGlzdGVkIHR5cGVzLlxuICAgKiBQcmV0dHkgbXVjaCB0aGUgc2FtZSBhcyBgdGhpcy5yZXF1ZXN0LmlzKClgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gdHlwZXMuLi5cbiAgICogQHJldHVybiB7U3RyaW5nfGZhbHNlfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBpcyh0eXBlcykge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnR5cGU7XG4gICAgaWYgKCF0eXBlcykgcmV0dXJuIHR5cGUgfHwgZmFsc2U7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR5cGVzKSkgdHlwZXMgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHR5cGVpcyh0eXBlLCB0eXBlcyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybiByZXNwb25zZSBoZWFkZXIuXG4gICAqXG4gICAqIEV4YW1wbGVzOlxuICAgKlxuICAgKiAgICAgdGhpcy5nZXQoJ0NvbnRlbnQtVHlwZScpO1xuICAgKiAgICAgLy8gPT4gXCJ0ZXh0L3BsYWluXCJcbiAgICpcbiAgICogICAgIHRoaXMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICogICAgIC8vID0+IFwidGV4dC9wbGFpblwiXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGdldChmaWVsZCkge1xuICAgIHJldHVybiB0aGlzLmhlYWRlcltmaWVsZC50b0xvd2VyQ2FzZSgpXSB8fCAnJztcbiAgfSxcblxuICAvKipcbiAgICogU2V0IGhlYWRlciBgZmllbGRgIHRvIGB2YWxgLCBvciBwYXNzXG4gICAqIGFuIG9iamVjdCBvZiBoZWFkZXIgZmllbGRzLlxuICAgKlxuICAgKiBFeGFtcGxlczpcbiAgICpcbiAgICogICAgdGhpcy5zZXQoJ0ZvbycsIFsnYmFyJywgJ2JheiddKTtcbiAgICogICAgdGhpcy5zZXQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAqICAgIHRoaXMuc2V0KHsgQWNjZXB0OiAndGV4dC9wbGFpbicsICdYLUFQSS1LZXknOiAndG9iaScgfSk7XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdHxBcnJheX0gZmllbGRcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBzZXQoZmllbGQsIHZhbCkge1xuICAgIGlmICh0aGlzLmhlYWRlclNlbnQpIHJldHVybjtcblxuICAgIGlmICgyID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHZhbCA9IHZhbC5tYXAoU3RyaW5nKTtcbiAgICAgIGVsc2UgdmFsID0gU3RyaW5nKHZhbCk7XG4gICAgICB0aGlzLnJlcy5zZXRIZWFkZXIoZmllbGQsIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGZpZWxkKSB7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgZmllbGRba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBlbmQgYWRkaXRpb25hbCBoZWFkZXIgYGZpZWxkYCB3aXRoIHZhbHVlIGB2YWxgLlxuICAgKlxuICAgKiBFeGFtcGxlczpcbiAgICpcbiAgICogYGBgXG4gICAqIHRoaXMuYXBwZW5kKCdMaW5rJywgWyc8aHR0cDovL2xvY2FsaG9zdC8+JywgJzxodHRwOi8vbG9jYWxob3N0OjMwMDAvPiddKTtcbiAgICogdGhpcy5hcHBlbmQoJ1NldC1Db29raWUnLCAnZm9vPWJhcjsgUGF0aD0vOyBIdHRwT25seScpO1xuICAgKiB0aGlzLmFwcGVuZCgnV2FybmluZycsICcxOTkgTWlzY2VsbGFuZW91cyB3YXJuaW5nJyk7XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGRcbiAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHZhbFxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cblxuICBhcHBlbmQoZmllbGQsIHZhbCkge1xuICAgIGNvbnN0IHByZXYgPSB0aGlzLmdldChmaWVsZCk7XG5cbiAgICBpZiAocHJldikge1xuICAgICAgdmFsID0gQXJyYXkuaXNBcnJheShwcmV2KVxuICAgICAgICA/IHByZXYuY29uY2F0KHZhbClcbiAgICAgICAgOiBbcHJldl0uY29uY2F0KHZhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2V0KGZpZWxkLCB2YWwpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmUgaGVhZGVyIGBmaWVsZGAuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIHJlbW92ZShmaWVsZCkge1xuICAgIGlmICh0aGlzLmhlYWRlclNlbnQpIHJldHVybjtcblxuICAgIHRoaXMucmVzLnJlbW92ZUhlYWRlcihmaWVsZCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgcmVxdWVzdCBpcyB3cml0YWJsZS5cbiAgICogVGVzdHMgZm9yIHRoZSBleGlzdGVuY2Ugb2YgdGhlIHNvY2tldFxuICAgKiBhcyBub2RlIHNvbWV0aW1lcyBkb2VzIG5vdCBzZXQgaXQuXG4gICAqXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBnZXQgd3JpdGFibGUoKSB7XG4gICAgLy8gY2FuJ3Qgd3JpdGUgYW55IG1vcmUgYWZ0ZXIgcmVzcG9uc2UgZmluaXNoZWRcbiAgICBpZiAodGhpcy5yZXMuZmluaXNoZWQpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHNvY2tldCA9IHRoaXMucmVzLnNvY2tldDtcbiAgICAvLyBUaGVyZSBhcmUgYWxyZWFkeSBwZW5kaW5nIG91dGdvaW5nIHJlcywgYnV0IHN0aWxsIHdyaXRhYmxlXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvdjQuNC43L2xpYi9faHR0cF9zZXJ2ZXIuanMjTDQ4NlxuICAgIGlmICghc29ja2V0KSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gc29ja2V0LndyaXRhYmxlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbnNwZWN0IGltcGxlbWVudGF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGluc3BlY3QoKSB7XG4gICAgaWYgKCF0aGlzLnJlcykgcmV0dXJuO1xuICAgIGNvbnN0IG8gPSB0aGlzLnRvSlNPTigpO1xuICAgIG8uYm9keSA9IHRoaXMuYm9keTtcbiAgICByZXR1cm4gbztcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJuIEpTT04gcmVwcmVzZW50YXRpb24uXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiBvbmx5KHRoaXMsIFtcbiAgICAgICdzdGF0dXMnLFxuICAgICAgJ21lc3NhZ2UnLFxuICAgICAgJ2hlYWRlcidcbiAgICBdKTtcbiAgfSxcblxuICAvKipcbiAgICogRmx1c2ggYW55IHNldCBoZWFkZXJzLCBhbmQgYmVnaW4gdGhlIGJvZHlcbiAgICovXG4gIGZsdXNoSGVhZGVycygpIHtcbiAgICB0aGlzLnJlcy5mbHVzaEhlYWRlcnMoKTtcbiAgfVxufTtcbiIsIi8qIVxuICogbWVkaWEtdHlwZXJcbiAqIENvcHlyaWdodChjKSAyMDE0IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCAqKCBcIjtcIiBwYXJhbWV0ZXIgKSBpbiBSRkMgMjYxNiBzZWMgMy43XG4gKlxuICogcGFyYW1ldGVyICAgICA9IHRva2VuIFwiPVwiICggdG9rZW4gfCBxdW90ZWQtc3RyaW5nIClcbiAqIHRva2VuICAgICAgICAgPSAxKjxhbnkgQ0hBUiBleGNlcHQgQ1RMcyBvciBzZXBhcmF0b3JzPlxuICogc2VwYXJhdG9ycyAgICA9IFwiKFwiIHwgXCIpXCIgfCBcIjxcIiB8IFwiPlwiIHwgXCJAXCJcbiAqICAgICAgICAgICAgICAgfCBcIixcIiB8IFwiO1wiIHwgXCI6XCIgfCBcIlxcXCIgfCA8XCI+XG4gKiAgICAgICAgICAgICAgIHwgXCIvXCIgfCBcIltcIiB8IFwiXVwiIHwgXCI/XCIgfCBcIj1cIlxuICogICAgICAgICAgICAgICB8IFwie1wiIHwgXCJ9XCIgfCBTUCB8IEhUXG4gKiBxdW90ZWQtc3RyaW5nID0gKCA8XCI+ICoocWR0ZXh0IHwgcXVvdGVkLXBhaXIgKSA8XCI+IClcbiAqIHFkdGV4dCAgICAgICAgPSA8YW55IFRFWFQgZXhjZXB0IDxcIj4+XG4gKiBxdW90ZWQtcGFpciAgID0gXCJcXFwiIENIQVJcbiAqIENIQVIgICAgICAgICAgPSA8YW55IFVTLUFTQ0lJIGNoYXJhY3RlciAob2N0ZXRzIDAgLSAxMjcpPlxuICogVEVYVCAgICAgICAgICA9IDxhbnkgT0NURVQgZXhjZXB0IENUTHMsIGJ1dCBpbmNsdWRpbmcgTFdTPlxuICogTFdTICAgICAgICAgICA9IFtDUkxGXSAxKiggU1AgfCBIVCApXG4gKiBDUkxGICAgICAgICAgID0gQ1IgTEZcbiAqIENSICAgICAgICAgICAgPSA8VVMtQVNDSUkgQ1IsIGNhcnJpYWdlIHJldHVybiAoMTMpPlxuICogTEYgICAgICAgICAgICA9IDxVUy1BU0NJSSBMRiwgbGluZWZlZWQgKDEwKT5cbiAqIFNQICAgICAgICAgICAgPSA8VVMtQVNDSUkgU1AsIHNwYWNlICgzMik+XG4gKiBTSFQgICAgICAgICAgID0gPFVTLUFTQ0lJIEhULCBob3Jpem9udGFsLXRhYiAoOSk+XG4gKiBDVEwgICAgICAgICAgID0gPGFueSBVUy1BU0NJSSBjb250cm9sIGNoYXJhY3RlciAob2N0ZXRzIDAgLSAzMSkgYW5kIERFTCAoMTI3KT5cbiAqIE9DVEVUICAgICAgICAgPSA8YW55IDgtYml0IHNlcXVlbmNlIG9mIGRhdGE+XG4gKi9cbnZhciBwYXJhbVJlZ0V4cCA9IC87ICooWyEjJCUmJ1xcKlxcK1xcLVxcLjAtOUEtWlxcXl9gYS16XFx8fl0rKSAqPSAqKFwiKD86WyAhXFx1MDAyMy1cXHUwMDViXFx1MDA1ZC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXXxcXFxcW1xcdTAwMjAtXFx1MDA3ZV0pKlwifFshIyQlJidcXCpcXCtcXC1cXC4wLTlBLVpcXF5fYGEtelxcfH5dKykgKi9nO1xudmFyIHRleHRSZWdFeHAgPSAvXltcXHUwMDIwLVxcdTAwN2VcXHUwMDgwLVxcdTAwZmZdKyQvXG52YXIgdG9rZW5SZWdFeHAgPSAvXlshIyQlJidcXCpcXCtcXC1cXC4wLTlBLVpcXF5fYGEtelxcfH5dKyQvXG5cbi8qKlxuICogUmVnRXhwIHRvIG1hdGNoIHF1b3RlZC1wYWlyIGluIFJGQyAyNjE2XG4gKlxuICogcXVvdGVkLXBhaXIgPSBcIlxcXCIgQ0hBUlxuICogQ0hBUiAgICAgICAgPSA8YW55IFVTLUFTQ0lJIGNoYXJhY3RlciAob2N0ZXRzIDAgLSAxMjcpPlxuICovXG52YXIgcWVzY1JlZ0V4cCA9IC9cXFxcKFtcXHUwMDAwLVxcdTAwN2ZdKS9nO1xuXG4vKipcbiAqIFJlZ0V4cCB0byBtYXRjaCBjaGFycyB0aGF0IG11c3QgYmUgcXVvdGVkLXBhaXIgaW4gUkZDIDI2MTZcbiAqL1xudmFyIHF1b3RlUmVnRXhwID0gLyhbXFxcXFwiXSkvZztcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggdHlwZSBpbiBSRkMgNjgzOFxuICpcbiAqIHR5cGUtbmFtZSA9IHJlc3RyaWN0ZWQtbmFtZVxuICogc3VidHlwZS1uYW1lID0gcmVzdHJpY3RlZC1uYW1lXG4gKiByZXN0cmljdGVkLW5hbWUgPSByZXN0cmljdGVkLW5hbWUtZmlyc3QgKjEyNnJlc3RyaWN0ZWQtbmFtZS1jaGFyc1xuICogcmVzdHJpY3RlZC1uYW1lLWZpcnN0ICA9IEFMUEhBIC8gRElHSVRcbiAqIHJlc3RyaWN0ZWQtbmFtZS1jaGFycyAgPSBBTFBIQSAvIERJR0lUIC8gXCIhXCIgLyBcIiNcIiAvXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkXCIgLyBcIiZcIiAvIFwiLVwiIC8gXCJeXCIgLyBcIl9cIlxuICogcmVzdHJpY3RlZC1uYW1lLWNoYXJzID0vIFwiLlwiIDsgQ2hhcmFjdGVycyBiZWZvcmUgZmlyc3QgZG90IGFsd2F5c1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7IHNwZWNpZnkgYSBmYWNldCBuYW1lXG4gKiByZXN0cmljdGVkLW5hbWUtY2hhcnMgPS8gXCIrXCIgOyBDaGFyYWN0ZXJzIGFmdGVyIGxhc3QgcGx1cyBhbHdheXNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOyBzcGVjaWZ5IGEgc3RydWN0dXJlZCBzeW50YXggc3VmZml4XG4gKiBBTFBIQSA9ICAleDQxLTVBIC8gJXg2MS03QSAgIDsgQS1aIC8gYS16XG4gKiBESUdJVCA9ICAleDMwLTM5ICAgICAgICAgICAgIDsgMC05XG4gKi9cbnZhciBzdWJ0eXBlTmFtZVJlZ0V4cCA9IC9eW0EtWmEtejAtOV1bQS1aYS16MC05ISMkJl5fLi1dezAsMTI2fSQvXG52YXIgdHlwZU5hbWVSZWdFeHAgPSAvXltBLVphLXowLTldW0EtWmEtejAtOSEjJCZeXy1dezAsMTI2fSQvXG52YXIgdHlwZVJlZ0V4cCA9IC9eICooW0EtWmEtejAtOV1bQS1aYS16MC05ISMkJl5fLV17MCwxMjZ9KVxcLyhbQS1aYS16MC05XVtBLVphLXowLTkhIyQmXl8uKy1dezAsMTI2fSkgKiQvO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0ID0gZm9ybWF0XG5leHBvcnRzLnBhcnNlID0gcGFyc2VcblxuLyoqXG4gKiBGb3JtYXQgb2JqZWN0IHRvIG1lZGlhIHR5cGUuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG9ialxuICogQHJldHVybiB7c3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXQob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgb2JqIGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIHZhciBwYXJhbWV0ZXJzID0gb2JqLnBhcmFtZXRlcnNcbiAgdmFyIHN1YnR5cGUgPSBvYmouc3VidHlwZVxuICB2YXIgc3VmZml4ID0gb2JqLnN1ZmZpeFxuICB2YXIgdHlwZSA9IG9iai50eXBlXG5cbiAgaWYgKCF0eXBlIHx8ICF0eXBlTmFtZVJlZ0V4cC50ZXN0KHR5cGUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCB0eXBlJylcbiAgfVxuXG4gIGlmICghc3VidHlwZSB8fCAhc3VidHlwZU5hbWVSZWdFeHAudGVzdChzdWJ0eXBlKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgc3VidHlwZScpXG4gIH1cblxuICAvLyBmb3JtYXQgYXMgdHlwZS9zdWJ0eXBlXG4gIHZhciBzdHJpbmcgPSB0eXBlICsgJy8nICsgc3VidHlwZVxuXG4gIC8vIGFwcGVuZCArc3VmZml4XG4gIGlmIChzdWZmaXgpIHtcbiAgICBpZiAoIXR5cGVOYW1lUmVnRXhwLnRlc3Qoc3VmZml4KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBzdWZmaXgnKVxuICAgIH1cblxuICAgIHN0cmluZyArPSAnKycgKyBzdWZmaXhcbiAgfVxuXG4gIC8vIGFwcGVuZCBwYXJhbWV0ZXJzXG4gIGlmIChwYXJhbWV0ZXJzICYmIHR5cGVvZiBwYXJhbWV0ZXJzID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBwYXJhbVxuICAgIHZhciBwYXJhbXMgPSBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5zb3J0KClcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwYXJhbSA9IHBhcmFtc1tpXVxuXG4gICAgICBpZiAoIXRva2VuUmVnRXhwLnRlc3QocGFyYW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIG5hbWUnKVxuICAgICAgfVxuXG4gICAgICBzdHJpbmcgKz0gJzsgJyArIHBhcmFtICsgJz0nICsgcXN0cmluZyhwYXJhbWV0ZXJzW3BhcmFtXSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyaW5nXG59XG5cbi8qKlxuICogUGFyc2UgbWVkaWEgdHlwZSB0byBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBzdHJpbmdcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyaW5nKSB7XG4gIGlmICghc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3RyaW5nIGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIC8vIHN1cHBvcnQgcmVxL3Jlcy1saWtlIG9iamVjdHMgYXMgYXJndW1lbnRcbiAgaWYgKHR5cGVvZiBzdHJpbmcgPT09ICdvYmplY3QnKSB7XG4gICAgc3RyaW5nID0gZ2V0Y29udGVudHR5cGUoc3RyaW5nKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3RyaW5nIGlzIHJlcXVpcmVkIHRvIGJlIGEgc3RyaW5nJylcbiAgfVxuXG4gIHZhciBpbmRleCA9IHN0cmluZy5pbmRleE9mKCc7JylcbiAgdmFyIHR5cGUgPSBpbmRleCAhPT0gLTFcbiAgICA/IHN0cmluZy5zdWJzdHIoMCwgaW5kZXgpXG4gICAgOiBzdHJpbmdcblxuICB2YXIga2V5XG4gIHZhciBtYXRjaFxuICB2YXIgb2JqID0gc3BsaXRUeXBlKHR5cGUpXG4gIHZhciBwYXJhbXMgPSB7fVxuICB2YXIgdmFsdWVcblxuICBwYXJhbVJlZ0V4cC5sYXN0SW5kZXggPSBpbmRleFxuXG4gIHdoaWxlIChtYXRjaCA9IHBhcmFtUmVnRXhwLmV4ZWMoc3RyaW5nKSkge1xuICAgIGlmIChtYXRjaC5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIGZvcm1hdCcpXG4gICAgfVxuXG4gICAgaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoXG4gICAga2V5ID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKVxuICAgIHZhbHVlID0gbWF0Y2hbMl1cblxuICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgLy8gcmVtb3ZlIHF1b3RlcyBhbmQgZXNjYXBlc1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAuc3Vic3RyKDEsIHZhbHVlLmxlbmd0aCAtIDIpXG4gICAgICAgIC5yZXBsYWNlKHFlc2NSZWdFeHAsICckMScpXG4gICAgfVxuXG4gICAgcGFyYW1zW2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgaWYgKGluZGV4ICE9PSAtMSAmJiBpbmRleCAhPT0gc3RyaW5nLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgcGFyYW1ldGVyIGZvcm1hdCcpXG4gIH1cblxuICBvYmoucGFyYW1ldGVycyA9IHBhcmFtc1xuXG4gIHJldHVybiBvYmpcbn1cblxuLyoqXG4gKiBHZXQgY29udGVudC10eXBlIGZyb20gcmVxL3JlcyBvYmplY3RzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fVxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0Y29udGVudHR5cGUob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqLmdldEhlYWRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIHJlcy1saWtlXG4gICAgcmV0dXJuIG9iai5nZXRIZWFkZXIoJ2NvbnRlbnQtdHlwZScpXG4gIH1cblxuICBpZiAodHlwZW9mIG9iai5oZWFkZXJzID09PSAnb2JqZWN0Jykge1xuICAgIC8vIHJlcS1saWtlXG4gICAgcmV0dXJuIG9iai5oZWFkZXJzICYmIG9iai5oZWFkZXJzWydjb250ZW50LXR5cGUnXVxuICB9XG59XG5cbi8qKlxuICogUXVvdGUgYSBzdHJpbmcgaWYgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHFzdHJpbmcodmFsKSB7XG4gIHZhciBzdHIgPSBTdHJpbmcodmFsKVxuXG4gIC8vIG5vIG5lZWQgdG8gcXVvdGUgdG9rZW5zXG4gIGlmICh0b2tlblJlZ0V4cC50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gc3RyXG4gIH1cblxuICBpZiAoc3RyLmxlbmd0aCA+IDAgJiYgIXRleHRSZWdFeHAudGVzdChzdHIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaW52YWxpZCBwYXJhbWV0ZXIgdmFsdWUnKVxuICB9XG5cbiAgcmV0dXJuICdcIicgKyBzdHIucmVwbGFjZShxdW90ZVJlZ0V4cCwgJ1xcXFwkMScpICsgJ1wiJ1xufVxuXG4vKipcbiAqIFNpbXBseSBcInR5cGUvc3VidHlwZStzaWZmeFwiIGludG8gcGFydHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc3BsaXRUeXBlKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSB0eXBlUmVnRXhwLmV4ZWMoc3RyaW5nLnRvTG93ZXJDYXNlKCkpXG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ludmFsaWQgbWVkaWEgdHlwZScpXG4gIH1cblxuICB2YXIgdHlwZSA9IG1hdGNoWzFdXG4gIHZhciBzdWJ0eXBlID0gbWF0Y2hbMl1cbiAgdmFyIHN1ZmZpeFxuXG4gIC8vIHN1ZmZpeCBhZnRlciBsYXN0ICtcbiAgdmFyIGluZGV4ID0gc3VidHlwZS5sYXN0SW5kZXhPZignKycpXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBzdWZmaXggPSBzdWJ0eXBlLnN1YnN0cihpbmRleCArIDEpXG4gICAgc3VidHlwZSA9IHN1YnR5cGUuc3Vic3RyKDAsIGluZGV4KVxuICB9XG5cbiAgdmFyIG9iaiA9IHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIHN1YnR5cGU6IHN1YnR5cGUsXG4gICAgc3VmZml4OiBzdWZmaXhcbiAgfVxuXG4gIHJldHVybiBvYmpcbn1cbiIsIi8qIVxuICogbWltZS1kYlxuICogQ29weXJpZ2h0KGMpIDIwMTQgSm9uYXRoYW4gT25nXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kYi5qc29uJylcbiIsIi8qIVxuICogbWltZS10eXBlc1xuICogQ29weXJpZ2h0KGMpIDIwMTQgSm9uYXRoYW4gT25nXG4gKiBDb3B5cmlnaHQoYykgMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIGRiID0gcmVxdWlyZSgnbWltZS1kYicpXG52YXIgZXh0bmFtZSA9IHJlcXVpcmUoJ3BhdGgnKS5leHRuYW1lXG5cbi8qKlxuICogTW9kdWxlIHZhcmlhYmxlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIEVYVFJBQ1RfVFlQRV9SRUdFWFAgPSAvXlxccyooW147XFxzXSopKD86O3xcXHN8JCkvXG52YXIgVEVYVF9UWVBFX1JFR0VYUCA9IC9edGV4dFxcLy9pXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxuZXhwb3J0cy5jaGFyc2V0ID0gY2hhcnNldFxuZXhwb3J0cy5jaGFyc2V0cyA9IHsgbG9va3VwOiBjaGFyc2V0IH1cbmV4cG9ydHMuY29udGVudFR5cGUgPSBjb250ZW50VHlwZVxuZXhwb3J0cy5leHRlbnNpb24gPSBleHRlbnNpb25cbmV4cG9ydHMuZXh0ZW5zaW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbClcbmV4cG9ydHMubG9va3VwID0gbG9va3VwXG5leHBvcnRzLnR5cGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4vLyBQb3B1bGF0ZSB0aGUgZXh0ZW5zaW9ucy90eXBlcyBtYXBzXG5wb3B1bGF0ZU1hcHMoZXhwb3J0cy5leHRlbnNpb25zLCBleHBvcnRzLnR5cGVzKVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCBjaGFyc2V0IGZvciBhIE1JTUUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybiB7Ym9vbGVhbnxzdHJpbmd9XG4gKi9cblxuZnVuY3Rpb24gY2hhcnNldCAodHlwZSkge1xuICBpZiAoIXR5cGUgfHwgdHlwZW9mIHR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBUT0RPOiB1c2UgbWVkaWEtdHlwZXJcbiAgdmFyIG1hdGNoID0gRVhUUkFDVF9UWVBFX1JFR0VYUC5leGVjKHR5cGUpXG4gIHZhciBtaW1lID0gbWF0Y2ggJiYgZGJbbWF0Y2hbMV0udG9Mb3dlckNhc2UoKV1cblxuICBpZiAobWltZSAmJiBtaW1lLmNoYXJzZXQpIHtcbiAgICByZXR1cm4gbWltZS5jaGFyc2V0XG4gIH1cblxuICAvLyBkZWZhdWx0IHRleHQvKiB0byB1dGYtOFxuICBpZiAobWF0Y2ggJiYgVEVYVF9UWVBFX1JFR0VYUC50ZXN0KG1hdGNoWzFdKSkge1xuICAgIHJldHVybiAnVVRGLTgnXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBmdWxsIENvbnRlbnQtVHlwZSBoZWFkZXIgZ2l2ZW4gYSBNSU1FIHR5cGUgb3IgZXh0ZW5zaW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge2Jvb2xlYW58c3RyaW5nfVxuICovXG5cbmZ1bmN0aW9uIGNvbnRlbnRUeXBlIChzdHIpIHtcbiAgLy8gVE9ETzogc2hvdWxkIHRoaXMgZXZlbiBiZSBpbiB0aGlzIG1vZHVsZT9cbiAgaWYgKCFzdHIgfHwgdHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHZhciBtaW1lID0gc3RyLmluZGV4T2YoJy8nKSA9PT0gLTFcbiAgICA/IGV4cG9ydHMubG9va3VwKHN0cilcbiAgICA6IHN0clxuXG4gIGlmICghbWltZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gVE9ETzogdXNlIGNvbnRlbnQtdHlwZSBvciBvdGhlciBtb2R1bGVcbiAgaWYgKG1pbWUuaW5kZXhPZignY2hhcnNldCcpID09PSAtMSkge1xuICAgIHZhciBjaGFyc2V0ID0gZXhwb3J0cy5jaGFyc2V0KG1pbWUpXG4gICAgaWYgKGNoYXJzZXQpIG1pbWUgKz0gJzsgY2hhcnNldD0nICsgY2hhcnNldC50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICByZXR1cm4gbWltZVxufVxuXG4vKipcbiAqIEdldCB0aGUgZGVmYXVsdCBleHRlbnNpb24gZm9yIGEgTUlNRSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBleHRlbnNpb24gKHR5cGUpIHtcbiAgaWYgKCF0eXBlIHx8IHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gVE9ETzogdXNlIG1lZGlhLXR5cGVyXG4gIHZhciBtYXRjaCA9IEVYVFJBQ1RfVFlQRV9SRUdFWFAuZXhlYyh0eXBlKVxuXG4gIC8vIGdldCBleHRlbnNpb25zXG4gIHZhciBleHRzID0gbWF0Y2ggJiYgZXhwb3J0cy5leHRlbnNpb25zW21hdGNoWzFdLnRvTG93ZXJDYXNlKCldXG5cbiAgaWYgKCFleHRzIHx8ICFleHRzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGV4dHNbMF1cbn1cblxuLyoqXG4gKiBMb29rdXAgdGhlIE1JTUUgdHlwZSBmb3IgYSBmaWxlIHBhdGgvZXh0ZW5zaW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoXG4gKiBAcmV0dXJuIHtib29sZWFufHN0cmluZ31cbiAqL1xuXG5mdW5jdGlvbiBsb29rdXAgKHBhdGgpIHtcbiAgaWYgKCFwYXRoIHx8IHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gZ2V0IHRoZSBleHRlbnNpb24gKFwiZXh0XCIgb3IgXCIuZXh0XCIgb3IgZnVsbCBwYXRoKVxuICB2YXIgZXh0ZW5zaW9uID0gZXh0bmFtZSgneC4nICsgcGF0aClcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5zdWJzdHIoMSlcblxuICBpZiAoIWV4dGVuc2lvbikge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGV4cG9ydHMudHlwZXNbZXh0ZW5zaW9uXSB8fCBmYWxzZVxufVxuXG4vKipcbiAqIFBvcHVsYXRlIHRoZSBleHRlbnNpb25zIGFuZCB0eXBlcyBtYXBzLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb3B1bGF0ZU1hcHMgKGV4dGVuc2lvbnMsIHR5cGVzKSB7XG4gIC8vIHNvdXJjZSBwcmVmZXJlbmNlIChsZWFzdCAtPiBtb3N0KVxuICB2YXIgcHJlZmVyZW5jZSA9IFsnbmdpbngnLCAnYXBhY2hlJywgdW5kZWZpbmVkLCAnaWFuYSddXG5cbiAgT2JqZWN0LmtleXMoZGIpLmZvckVhY2goZnVuY3Rpb24gZm9yRWFjaE1pbWVUeXBlICh0eXBlKSB7XG4gICAgdmFyIG1pbWUgPSBkYlt0eXBlXVxuICAgIHZhciBleHRzID0gbWltZS5leHRlbnNpb25zXG5cbiAgICBpZiAoIWV4dHMgfHwgIWV4dHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBtaW1lIC0+IGV4dGVuc2lvbnNcbiAgICBleHRlbnNpb25zW3R5cGVdID0gZXh0c1xuXG4gICAgLy8gZXh0ZW5zaW9uIC0+IG1pbWVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBleHRlbnNpb24gPSBleHRzW2ldXG5cbiAgICAgIGlmICh0eXBlc1tleHRlbnNpb25dKSB7XG4gICAgICAgIHZhciBmcm9tID0gcHJlZmVyZW5jZS5pbmRleE9mKGRiW3R5cGVzW2V4dGVuc2lvbl1dLnNvdXJjZSlcbiAgICAgICAgdmFyIHRvID0gcHJlZmVyZW5jZS5pbmRleE9mKG1pbWUuc291cmNlKVxuXG4gICAgICAgIGlmICh0eXBlc1tleHRlbnNpb25dICE9PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyAmJlxuICAgICAgICAgIChmcm9tID4gdG8gfHwgKGZyb20gPT09IHRvICYmIHR5cGVzW2V4dGVuc2lvbl0uc3Vic3RyKDAsIDEyKSA9PT0gJ2FwcGxpY2F0aW9uLycpKSkge1xuICAgICAgICAgIC8vIHNraXAgdGhlIHJlbWFwcGluZ1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHRoZSBleHRlbnNpb24gLT4gbWltZVxuICAgICAgdHlwZXNbZXh0ZW5zaW9uXSA9IHR5cGVcbiAgICB9XG4gIH0pXG59XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG4iLCIvKiFcbiAqIG5lZ290aWF0b3JcbiAqIENvcHlyaWdodChjKSAyMDEyIEZlZGVyaWNvIFJvbWVyb1xuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBJc2FhYyBaLiBTY2hsdWV0ZXJcbiAqIENvcHlyaWdodChjKSAyMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ2FjaGVkIGxvYWRlZCBzdWJtb2R1bGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgbW9kdWxlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBOZWdvdGlhdG9yO1xubW9kdWxlLmV4cG9ydHMuTmVnb3RpYXRvciA9IE5lZ290aWF0b3I7XG5cbi8qKlxuICogQ3JlYXRlIGEgTmVnb3RpYXRvciBpbnN0YW5jZSBmcm9tIGEgcmVxdWVzdC5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gTmVnb3RpYXRvcihyZXF1ZXN0KSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBOZWdvdGlhdG9yKSkge1xuICAgIHJldHVybiBuZXcgTmVnb3RpYXRvcihyZXF1ZXN0KTtcbiAgfVxuXG4gIHRoaXMucmVxdWVzdCA9IHJlcXVlc3Q7XG59XG5cbk5lZ290aWF0b3IucHJvdG90eXBlLmNoYXJzZXQgPSBmdW5jdGlvbiBjaGFyc2V0KGF2YWlsYWJsZSkge1xuICB2YXIgc2V0ID0gdGhpcy5jaGFyc2V0cyhhdmFpbGFibGUpO1xuICByZXR1cm4gc2V0ICYmIHNldFswXTtcbn07XG5cbk5lZ290aWF0b3IucHJvdG90eXBlLmNoYXJzZXRzID0gZnVuY3Rpb24gY2hhcnNldHMoYXZhaWxhYmxlKSB7XG4gIHZhciBwcmVmZXJyZWRDaGFyc2V0cyA9IGxvYWRNb2R1bGUoJ2NoYXJzZXQnKS5wcmVmZXJyZWRDaGFyc2V0cztcbiAgcmV0dXJuIHByZWZlcnJlZENoYXJzZXRzKHRoaXMucmVxdWVzdC5oZWFkZXJzWydhY2NlcHQtY2hhcnNldCddLCBhdmFpbGFibGUpO1xufTtcblxuTmVnb3RpYXRvci5wcm90b3R5cGUuZW5jb2RpbmcgPSBmdW5jdGlvbiBlbmNvZGluZyhhdmFpbGFibGUpIHtcbiAgdmFyIHNldCA9IHRoaXMuZW5jb2RpbmdzKGF2YWlsYWJsZSk7XG4gIHJldHVybiBzZXQgJiYgc2V0WzBdO1xufTtcblxuTmVnb3RpYXRvci5wcm90b3R5cGUuZW5jb2RpbmdzID0gZnVuY3Rpb24gZW5jb2RpbmdzKGF2YWlsYWJsZSkge1xuICB2YXIgcHJlZmVycmVkRW5jb2RpbmdzID0gbG9hZE1vZHVsZSgnZW5jb2RpbmcnKS5wcmVmZXJyZWRFbmNvZGluZ3M7XG4gIHJldHVybiBwcmVmZXJyZWRFbmNvZGluZ3ModGhpcy5yZXF1ZXN0LmhlYWRlcnNbJ2FjY2VwdC1lbmNvZGluZyddLCBhdmFpbGFibGUpO1xufTtcblxuTmVnb3RpYXRvci5wcm90b3R5cGUubGFuZ3VhZ2UgPSBmdW5jdGlvbiBsYW5ndWFnZShhdmFpbGFibGUpIHtcbiAgdmFyIHNldCA9IHRoaXMubGFuZ3VhZ2VzKGF2YWlsYWJsZSk7XG4gIHJldHVybiBzZXQgJiYgc2V0WzBdO1xufTtcblxuTmVnb3RpYXRvci5wcm90b3R5cGUubGFuZ3VhZ2VzID0gZnVuY3Rpb24gbGFuZ3VhZ2VzKGF2YWlsYWJsZSkge1xuICB2YXIgcHJlZmVycmVkTGFuZ3VhZ2VzID0gbG9hZE1vZHVsZSgnbGFuZ3VhZ2UnKS5wcmVmZXJyZWRMYW5ndWFnZXM7XG4gIHJldHVybiBwcmVmZXJyZWRMYW5ndWFnZXModGhpcy5yZXF1ZXN0LmhlYWRlcnNbJ2FjY2VwdC1sYW5ndWFnZSddLCBhdmFpbGFibGUpO1xufTtcblxuTmVnb3RpYXRvci5wcm90b3R5cGUubWVkaWFUeXBlID0gZnVuY3Rpb24gbWVkaWFUeXBlKGF2YWlsYWJsZSkge1xuICB2YXIgc2V0ID0gdGhpcy5tZWRpYVR5cGVzKGF2YWlsYWJsZSk7XG4gIHJldHVybiBzZXQgJiYgc2V0WzBdO1xufTtcblxuTmVnb3RpYXRvci5wcm90b3R5cGUubWVkaWFUeXBlcyA9IGZ1bmN0aW9uIG1lZGlhVHlwZXMoYXZhaWxhYmxlKSB7XG4gIHZhciBwcmVmZXJyZWRNZWRpYVR5cGVzID0gbG9hZE1vZHVsZSgnbWVkaWFUeXBlJykucHJlZmVycmVkTWVkaWFUeXBlcztcbiAgcmV0dXJuIHByZWZlcnJlZE1lZGlhVHlwZXModGhpcy5yZXF1ZXN0LmhlYWRlcnMuYWNjZXB0LCBhdmFpbGFibGUpO1xufTtcblxuLy8gQmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbk5lZ290aWF0b3IucHJvdG90eXBlLnByZWZlcnJlZENoYXJzZXQgPSBOZWdvdGlhdG9yLnByb3RvdHlwZS5jaGFyc2V0O1xuTmVnb3RpYXRvci5wcm90b3R5cGUucHJlZmVycmVkQ2hhcnNldHMgPSBOZWdvdGlhdG9yLnByb3RvdHlwZS5jaGFyc2V0cztcbk5lZ290aWF0b3IucHJvdG90eXBlLnByZWZlcnJlZEVuY29kaW5nID0gTmVnb3RpYXRvci5wcm90b3R5cGUuZW5jb2Rpbmc7XG5OZWdvdGlhdG9yLnByb3RvdHlwZS5wcmVmZXJyZWRFbmNvZGluZ3MgPSBOZWdvdGlhdG9yLnByb3RvdHlwZS5lbmNvZGluZ3M7XG5OZWdvdGlhdG9yLnByb3RvdHlwZS5wcmVmZXJyZWRMYW5ndWFnZSA9IE5lZ290aWF0b3IucHJvdG90eXBlLmxhbmd1YWdlO1xuTmVnb3RpYXRvci5wcm90b3R5cGUucHJlZmVycmVkTGFuZ3VhZ2VzID0gTmVnb3RpYXRvci5wcm90b3R5cGUubGFuZ3VhZ2VzO1xuTmVnb3RpYXRvci5wcm90b3R5cGUucHJlZmVycmVkTWVkaWFUeXBlID0gTmVnb3RpYXRvci5wcm90b3R5cGUubWVkaWFUeXBlO1xuTmVnb3RpYXRvci5wcm90b3R5cGUucHJlZmVycmVkTWVkaWFUeXBlcyA9IE5lZ290aWF0b3IucHJvdG90eXBlLm1lZGlhVHlwZXM7XG5cbi8qKlxuICogTG9hZCB0aGUgZ2l2ZW4gbW9kdWxlLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgdmFyIG1vZHVsZSA9IG1vZHVsZXNbbW9kdWxlTmFtZV07XG5cbiAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1vZHVsZTtcbiAgfVxuXG4gIC8vIFRoaXMgdXNlcyBhIHN3aXRjaCBmb3Igc3RhdGljIHJlcXVpcmUgYW5hbHlzaXNcbiAgc3dpdGNoIChtb2R1bGVOYW1lKSB7XG4gICAgY2FzZSAnY2hhcnNldCc6XG4gICAgICBtb2R1bGUgPSByZXF1aXJlKCcuL2xpYi9jaGFyc2V0Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlbmNvZGluZyc6XG4gICAgICBtb2R1bGUgPSByZXF1aXJlKCcuL2xpYi9lbmNvZGluZycpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbGFuZ3VhZ2UnOlxuICAgICAgbW9kdWxlID0gcmVxdWlyZSgnLi9saWIvbGFuZ3VhZ2UnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21lZGlhVHlwZSc6XG4gICAgICBtb2R1bGUgPSByZXF1aXJlKCcuL2xpYi9tZWRpYVR5cGUnKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBmaW5kIG1vZHVsZSBcXCcnICsgbW9kdWxlTmFtZSArICdcXCcnKTtcbiAgfVxuXG4gIC8vIFN0b3JlIHRvIHByZXZlbnQgaW52b2tpbmcgcmVxdWlyZSgpXG4gIG1vZHVsZXNbbW9kdWxlTmFtZV0gPSBtb2R1bGU7XG5cbiAgcmV0dXJuIG1vZHVsZTtcbn1cbiIsIi8qKlxuICogbmVnb3RpYXRvclxuICogQ29weXJpZ2h0KGMpIDIwMTIgSXNhYWMgWi4gU2NobHVldGVyXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBGZWRlcmljbyBSb21lcm9cbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByZWZlcnJlZENoYXJzZXRzO1xubW9kdWxlLmV4cG9ydHMucHJlZmVycmVkQ2hhcnNldHMgPSBwcmVmZXJyZWRDaGFyc2V0cztcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgc2ltcGxlQ2hhcnNldFJlZ0V4cCA9IC9eXFxzKihbXlxccztdKylcXHMqKD86OyguKikpPyQvO1xuXG4vKipcbiAqIFBhcnNlIHRoZSBBY2NlcHQtQ2hhcnNldCBoZWFkZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlQWNjZXB0Q2hhcnNldChhY2NlcHQpIHtcbiAgdmFyIGFjY2VwdHMgPSBhY2NlcHQuc3BsaXQoJywnKTtcblxuICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBhY2NlcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGNoYXJzZXQgPSBwYXJzZUNoYXJzZXQoYWNjZXB0c1tpXS50cmltKCksIGkpO1xuXG4gICAgaWYgKGNoYXJzZXQpIHtcbiAgICAgIGFjY2VwdHNbaisrXSA9IGNoYXJzZXQ7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJpbSBhY2NlcHRzXG4gIGFjY2VwdHMubGVuZ3RoID0gajtcblxuICByZXR1cm4gYWNjZXB0cztcbn1cblxuLyoqXG4gKiBQYXJzZSBhIGNoYXJzZXQgZnJvbSB0aGUgQWNjZXB0LUNoYXJzZXQgaGVhZGVyLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUNoYXJzZXQoc3RyLCBpKSB7XG4gIHZhciBtYXRjaCA9IHNpbXBsZUNoYXJzZXRSZWdFeHAuZXhlYyhzdHIpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICB2YXIgY2hhcnNldCA9IG1hdGNoWzFdO1xuICB2YXIgcSA9IDE7XG4gIGlmIChtYXRjaFsyXSkge1xuICAgIHZhciBwYXJhbXMgPSBtYXRjaFsyXS5zcGxpdCgnOycpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICB2YXIgcCA9IHBhcmFtc1tpXS50cmltKCkuc3BsaXQoJz0nKTtcbiAgICAgIGlmIChwWzBdID09PSAncScpIHtcbiAgICAgICAgcSA9IHBhcnNlRmxvYXQocFsxXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2hhcnNldDogY2hhcnNldCxcbiAgICBxOiBxLFxuICAgIGk6IGlcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByaW9yaXR5IG9mIGEgY2hhcnNldC5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0Q2hhcnNldFByaW9yaXR5KGNoYXJzZXQsIGFjY2VwdGVkLCBpbmRleCkge1xuICB2YXIgcHJpb3JpdHkgPSB7bzogLTEsIHE6IDAsIHM6IDB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYWNjZXB0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc3BlYyA9IHNwZWNpZnkoY2hhcnNldCwgYWNjZXB0ZWRbaV0sIGluZGV4KTtcblxuICAgIGlmIChzcGVjICYmIChwcmlvcml0eS5zIC0gc3BlYy5zIHx8IHByaW9yaXR5LnEgLSBzcGVjLnEgfHwgcHJpb3JpdHkubyAtIHNwZWMubykgPCAwKSB7XG4gICAgICBwcmlvcml0eSA9IHNwZWM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG4vKipcbiAqIEdldCB0aGUgc3BlY2lmaWNpdHkgb2YgdGhlIGNoYXJzZXQuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNwZWNpZnkoY2hhcnNldCwgc3BlYywgaW5kZXgpIHtcbiAgdmFyIHMgPSAwO1xuICBpZihzcGVjLmNoYXJzZXQudG9Mb3dlckNhc2UoKSA9PT0gY2hhcnNldC50b0xvd2VyQ2FzZSgpKXtcbiAgICBzIHw9IDE7XG4gIH0gZWxzZSBpZiAoc3BlYy5jaGFyc2V0ICE9PSAnKicgKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaTogaW5kZXgsXG4gICAgbzogc3BlYy5pLFxuICAgIHE6IHNwZWMucSxcbiAgICBzOiBzXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByZWZlcnJlZCBjaGFyc2V0cyBmcm9tIGFuIEFjY2VwdC1DaGFyc2V0IGhlYWRlci5cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwcmVmZXJyZWRDaGFyc2V0cyhhY2NlcHQsIHByb3ZpZGVkKSB7XG4gIC8vIFJGQyAyNjE2IHNlYyAxNC4yOiBubyBoZWFkZXIgPSAqXG4gIHZhciBhY2NlcHRzID0gcGFyc2VBY2NlcHRDaGFyc2V0KGFjY2VwdCA9PT0gdW5kZWZpbmVkID8gJyonIDogYWNjZXB0IHx8ICcnKTtcblxuICBpZiAoIXByb3ZpZGVkKSB7XG4gICAgLy8gc29ydGVkIGxpc3Qgb2YgYWxsIGNoYXJzZXRzXG4gICAgcmV0dXJuIGFjY2VwdHNcbiAgICAgIC5maWx0ZXIoaXNRdWFsaXR5KVxuICAgICAgLnNvcnQoY29tcGFyZVNwZWNzKVxuICAgICAgLm1hcChnZXRGdWxsQ2hhcnNldCk7XG4gIH1cblxuICB2YXIgcHJpb3JpdGllcyA9IHByb3ZpZGVkLm1hcChmdW5jdGlvbiBnZXRQcmlvcml0eSh0eXBlLCBpbmRleCkge1xuICAgIHJldHVybiBnZXRDaGFyc2V0UHJpb3JpdHkodHlwZSwgYWNjZXB0cywgaW5kZXgpO1xuICB9KTtcblxuICAvLyBzb3J0ZWQgbGlzdCBvZiBhY2NlcHRlZCBjaGFyc2V0c1xuICByZXR1cm4gcHJpb3JpdGllcy5maWx0ZXIoaXNRdWFsaXR5KS5zb3J0KGNvbXBhcmVTcGVjcykubWFwKGZ1bmN0aW9uIGdldENoYXJzZXQocHJpb3JpdHkpIHtcbiAgICByZXR1cm4gcHJvdmlkZWRbcHJpb3JpdGllcy5pbmRleE9mKHByaW9yaXR5KV07XG4gIH0pO1xufVxuXG4vKipcbiAqIENvbXBhcmUgdHdvIHNwZWNzLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBjb21wYXJlU3BlY3MoYSwgYikge1xuICByZXR1cm4gKGIucSAtIGEucSkgfHwgKGIucyAtIGEucykgfHwgKGEubyAtIGIubykgfHwgKGEuaSAtIGIuaSkgfHwgMDtcbn1cblxuLyoqXG4gKiBHZXQgZnVsbCBjaGFyc2V0IHN0cmluZy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0RnVsbENoYXJzZXQoc3BlYykge1xuICByZXR1cm4gc3BlYy5jaGFyc2V0O1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgc3BlYyBoYXMgYW55IHF1YWxpdHkuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzUXVhbGl0eShzcGVjKSB7XG4gIHJldHVybiBzcGVjLnEgPiAwO1xufVxuIiwiLyoqXG4gKiBuZWdvdGlhdG9yXG4gKiBDb3B5cmlnaHQoYykgMjAxMiBJc2FhYyBaLiBTY2hsdWV0ZXJcbiAqIENvcHlyaWdodChjKSAyMDE0IEZlZGVyaWNvIFJvbWVyb1xuICogQ29weXJpZ2h0KGMpIDIwMTQtMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcHJlZmVycmVkRW5jb2RpbmdzO1xubW9kdWxlLmV4cG9ydHMucHJlZmVycmVkRW5jb2RpbmdzID0gcHJlZmVycmVkRW5jb2RpbmdzO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBzaW1wbGVFbmNvZGluZ1JlZ0V4cCA9IC9eXFxzKihbXlxccztdKylcXHMqKD86OyguKikpPyQvO1xuXG4vKipcbiAqIFBhcnNlIHRoZSBBY2NlcHQtRW5jb2RpbmcgaGVhZGVyLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUFjY2VwdEVuY29kaW5nKGFjY2VwdCkge1xuICB2YXIgYWNjZXB0cyA9IGFjY2VwdC5zcGxpdCgnLCcpO1xuICB2YXIgaGFzSWRlbnRpdHkgPSBmYWxzZTtcbiAgdmFyIG1pblF1YWxpdHkgPSAxO1xuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IGFjY2VwdHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZW5jb2RpbmcgPSBwYXJzZUVuY29kaW5nKGFjY2VwdHNbaV0udHJpbSgpLCBpKTtcblxuICAgIGlmIChlbmNvZGluZykge1xuICAgICAgYWNjZXB0c1tqKytdID0gZW5jb2Rpbmc7XG4gICAgICBoYXNJZGVudGl0eSA9IGhhc0lkZW50aXR5IHx8IHNwZWNpZnkoJ2lkZW50aXR5JywgZW5jb2RpbmcpO1xuICAgICAgbWluUXVhbGl0eSA9IE1hdGgubWluKG1pblF1YWxpdHksIGVuY29kaW5nLnEgfHwgMSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFoYXNJZGVudGl0eSkge1xuICAgIC8qXG4gICAgICogSWYgaWRlbnRpdHkgZG9lc24ndCBleHBsaWNpdGx5IGFwcGVhciBpbiB0aGUgYWNjZXB0LWVuY29kaW5nIGhlYWRlcixcbiAgICAgKiBpdCdzIGFkZGVkIHRvIHRoZSBsaXN0IG9mIGFjY2VwdGFibGUgZW5jb2Rpbmcgd2l0aCB0aGUgbG93ZXN0IHFcbiAgICAgKi9cbiAgICBhY2NlcHRzW2orK10gPSB7XG4gICAgICBlbmNvZGluZzogJ2lkZW50aXR5JyxcbiAgICAgIHE6IG1pblF1YWxpdHksXG4gICAgICBpOiBpXG4gICAgfTtcbiAgfVxuXG4gIC8vIHRyaW0gYWNjZXB0c1xuICBhY2NlcHRzLmxlbmd0aCA9IGo7XG5cbiAgcmV0dXJuIGFjY2VwdHM7XG59XG5cbi8qKlxuICogUGFyc2UgYW4gZW5jb2RpbmcgZnJvbSB0aGUgQWNjZXB0LUVuY29kaW5nIGhlYWRlci5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VFbmNvZGluZyhzdHIsIGkpIHtcbiAgdmFyIG1hdGNoID0gc2ltcGxlRW5jb2RpbmdSZWdFeHAuZXhlYyhzdHIpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICB2YXIgZW5jb2RpbmcgPSBtYXRjaFsxXTtcbiAgdmFyIHEgPSAxO1xuICBpZiAobWF0Y2hbMl0pIHtcbiAgICB2YXIgcGFyYW1zID0gbWF0Y2hbMl0uc3BsaXQoJzsnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgIHZhciBwID0gcGFyYW1zW2ldLnRyaW0oKS5zcGxpdCgnPScpO1xuICAgICAgaWYgKHBbMF0gPT09ICdxJykge1xuICAgICAgICBxID0gcGFyc2VGbG9hdChwWzFdKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlbmNvZGluZzogZW5jb2RpbmcsXG4gICAgcTogcSxcbiAgICBpOiBpXG4gIH07XG59XG5cbi8qKlxuICogR2V0IHRoZSBwcmlvcml0eSBvZiBhbiBlbmNvZGluZy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0RW5jb2RpbmdQcmlvcml0eShlbmNvZGluZywgYWNjZXB0ZWQsIGluZGV4KSB7XG4gIHZhciBwcmlvcml0eSA9IHtvOiAtMSwgcTogMCwgczogMH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY2NlcHRlZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzcGVjID0gc3BlY2lmeShlbmNvZGluZywgYWNjZXB0ZWRbaV0sIGluZGV4KTtcblxuICAgIGlmIChzcGVjICYmIChwcmlvcml0eS5zIC0gc3BlYy5zIHx8IHByaW9yaXR5LnEgLSBzcGVjLnEgfHwgcHJpb3JpdHkubyAtIHNwZWMubykgPCAwKSB7XG4gICAgICBwcmlvcml0eSA9IHNwZWM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG4vKipcbiAqIEdldCB0aGUgc3BlY2lmaWNpdHkgb2YgdGhlIGVuY29kaW5nLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzcGVjaWZ5KGVuY29kaW5nLCBzcGVjLCBpbmRleCkge1xuICB2YXIgcyA9IDA7XG4gIGlmKHNwZWMuZW5jb2RpbmcudG9Mb3dlckNhc2UoKSA9PT0gZW5jb2RpbmcudG9Mb3dlckNhc2UoKSl7XG4gICAgcyB8PSAxO1xuICB9IGVsc2UgaWYgKHNwZWMuZW5jb2RpbmcgIT09ICcqJyApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpOiBpbmRleCxcbiAgICBvOiBzcGVjLmksXG4gICAgcTogc3BlYy5xLFxuICAgIHM6IHNcbiAgfVxufTtcblxuLyoqXG4gKiBHZXQgdGhlIHByZWZlcnJlZCBlbmNvZGluZ3MgZnJvbSBhbiBBY2NlcHQtRW5jb2RpbmcgaGVhZGVyLlxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHByZWZlcnJlZEVuY29kaW5ncyhhY2NlcHQsIHByb3ZpZGVkKSB7XG4gIHZhciBhY2NlcHRzID0gcGFyc2VBY2NlcHRFbmNvZGluZyhhY2NlcHQgfHwgJycpO1xuXG4gIGlmICghcHJvdmlkZWQpIHtcbiAgICAvLyBzb3J0ZWQgbGlzdCBvZiBhbGwgZW5jb2RpbmdzXG4gICAgcmV0dXJuIGFjY2VwdHNcbiAgICAgIC5maWx0ZXIoaXNRdWFsaXR5KVxuICAgICAgLnNvcnQoY29tcGFyZVNwZWNzKVxuICAgICAgLm1hcChnZXRGdWxsRW5jb2RpbmcpO1xuICB9XG5cbiAgdmFyIHByaW9yaXRpZXMgPSBwcm92aWRlZC5tYXAoZnVuY3Rpb24gZ2V0UHJpb3JpdHkodHlwZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gZ2V0RW5jb2RpbmdQcmlvcml0eSh0eXBlLCBhY2NlcHRzLCBpbmRleCk7XG4gIH0pO1xuXG4gIC8vIHNvcnRlZCBsaXN0IG9mIGFjY2VwdGVkIGVuY29kaW5nc1xuICByZXR1cm4gcHJpb3JpdGllcy5maWx0ZXIoaXNRdWFsaXR5KS5zb3J0KGNvbXBhcmVTcGVjcykubWFwKGZ1bmN0aW9uIGdldEVuY29kaW5nKHByaW9yaXR5KSB7XG4gICAgcmV0dXJuIHByb3ZpZGVkW3ByaW9yaXRpZXMuaW5kZXhPZihwcmlvcml0eSldO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb21wYXJlIHR3byBzcGVjcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29tcGFyZVNwZWNzKGEsIGIpIHtcbiAgcmV0dXJuIChiLnEgLSBhLnEpIHx8IChiLnMgLSBhLnMpIHx8IChhLm8gLSBiLm8pIHx8IChhLmkgLSBiLmkpIHx8IDA7XG59XG5cbi8qKlxuICogR2V0IGZ1bGwgZW5jb2Rpbmcgc3RyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRGdWxsRW5jb2Rpbmcoc3BlYykge1xuICByZXR1cm4gc3BlYy5lbmNvZGluZztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHNwZWMgaGFzIGFueSBxdWFsaXR5LlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc1F1YWxpdHkoc3BlYykge1xuICByZXR1cm4gc3BlYy5xID4gMDtcbn1cbiIsIi8qKlxuICogbmVnb3RpYXRvclxuICogQ29weXJpZ2h0KGMpIDIwMTIgSXNhYWMgWi4gU2NobHVldGVyXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBGZWRlcmljbyBSb21lcm9cbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHByZWZlcnJlZExhbmd1YWdlcztcbm1vZHVsZS5leHBvcnRzLnByZWZlcnJlZExhbmd1YWdlcyA9IHByZWZlcnJlZExhbmd1YWdlcztcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgc2ltcGxlTGFuZ3VhZ2VSZWdFeHAgPSAvXlxccyooW15cXHNcXC07XSspKD86LShbXlxccztdKykpP1xccyooPzo7KC4qKSk/JC87XG5cbi8qKlxuICogUGFyc2UgdGhlIEFjY2VwdC1MYW5ndWFnZSBoZWFkZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlQWNjZXB0TGFuZ3VhZ2UoYWNjZXB0KSB7XG4gIHZhciBhY2NlcHRzID0gYWNjZXB0LnNwbGl0KCcsJyk7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgYWNjZXB0cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBsYW5nYXVnZSA9IHBhcnNlTGFuZ3VhZ2UoYWNjZXB0c1tpXS50cmltKCksIGkpO1xuXG4gICAgaWYgKGxhbmdhdWdlKSB7XG4gICAgICBhY2NlcHRzW2orK10gPSBsYW5nYXVnZTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmltIGFjY2VwdHNcbiAgYWNjZXB0cy5sZW5ndGggPSBqO1xuXG4gIHJldHVybiBhY2NlcHRzO1xufVxuXG4vKipcbiAqIFBhcnNlIGEgbGFuZ3VhZ2UgZnJvbSB0aGUgQWNjZXB0LUxhbmd1YWdlIGhlYWRlci5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2VMYW5ndWFnZShzdHIsIGkpIHtcbiAgdmFyIG1hdGNoID0gc2ltcGxlTGFuZ3VhZ2VSZWdFeHAuZXhlYyhzdHIpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICB2YXIgcHJlZml4ID0gbWF0Y2hbMV0sXG4gICAgICBzdWZmaXggPSBtYXRjaFsyXSxcbiAgICAgIGZ1bGwgPSBwcmVmaXg7XG5cbiAgaWYgKHN1ZmZpeCkgZnVsbCArPSBcIi1cIiArIHN1ZmZpeDtcblxuICB2YXIgcSA9IDE7XG4gIGlmIChtYXRjaFszXSkge1xuICAgIHZhciBwYXJhbXMgPSBtYXRjaFszXS5zcGxpdCgnOycpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICB2YXIgcCA9IHBhcmFtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgaWYgKHBbMF0gPT09ICdxJykgcSA9IHBhcnNlRmxvYXQocFsxXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICBxOiBxLFxuICAgIGk6IGksXG4gICAgZnVsbDogZnVsbFxuICB9O1xufVxuXG4vKipcbiAqIEdldCB0aGUgcHJpb3JpdHkgb2YgYSBsYW5ndWFnZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VQcmlvcml0eShsYW5ndWFnZSwgYWNjZXB0ZWQsIGluZGV4KSB7XG4gIHZhciBwcmlvcml0eSA9IHtvOiAtMSwgcTogMCwgczogMH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY2NlcHRlZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzcGVjID0gc3BlY2lmeShsYW5ndWFnZSwgYWNjZXB0ZWRbaV0sIGluZGV4KTtcblxuICAgIGlmIChzcGVjICYmIChwcmlvcml0eS5zIC0gc3BlYy5zIHx8IHByaW9yaXR5LnEgLSBzcGVjLnEgfHwgcHJpb3JpdHkubyAtIHNwZWMubykgPCAwKSB7XG4gICAgICBwcmlvcml0eSA9IHNwZWM7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG4vKipcbiAqIEdldCB0aGUgc3BlY2lmaWNpdHkgb2YgdGhlIGxhbmd1YWdlLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzcGVjaWZ5KGxhbmd1YWdlLCBzcGVjLCBpbmRleCkge1xuICB2YXIgcCA9IHBhcnNlTGFuZ3VhZ2UobGFuZ3VhZ2UpXG4gIGlmICghcCkgcmV0dXJuIG51bGw7XG4gIHZhciBzID0gMDtcbiAgaWYoc3BlYy5mdWxsLnRvTG93ZXJDYXNlKCkgPT09IHAuZnVsbC50b0xvd2VyQ2FzZSgpKXtcbiAgICBzIHw9IDQ7XG4gIH0gZWxzZSBpZiAoc3BlYy5wcmVmaXgudG9Mb3dlckNhc2UoKSA9PT0gcC5mdWxsLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBzIHw9IDI7XG4gIH0gZWxzZSBpZiAoc3BlYy5mdWxsLnRvTG93ZXJDYXNlKCkgPT09IHAucHJlZml4LnRvTG93ZXJDYXNlKCkpIHtcbiAgICBzIHw9IDE7XG4gIH0gZWxzZSBpZiAoc3BlYy5mdWxsICE9PSAnKicgKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaTogaW5kZXgsXG4gICAgbzogc3BlYy5pLFxuICAgIHE6IHNwZWMucSxcbiAgICBzOiBzXG4gIH1cbn07XG5cbi8qKlxuICogR2V0IHRoZSBwcmVmZXJyZWQgbGFuZ3VhZ2VzIGZyb20gYW4gQWNjZXB0LUxhbmd1YWdlIGhlYWRlci5cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwcmVmZXJyZWRMYW5ndWFnZXMoYWNjZXB0LCBwcm92aWRlZCkge1xuICAvLyBSRkMgMjYxNiBzZWMgMTQuNDogbm8gaGVhZGVyID0gKlxuICB2YXIgYWNjZXB0cyA9IHBhcnNlQWNjZXB0TGFuZ3VhZ2UoYWNjZXB0ID09PSB1bmRlZmluZWQgPyAnKicgOiBhY2NlcHQgfHwgJycpO1xuXG4gIGlmICghcHJvdmlkZWQpIHtcbiAgICAvLyBzb3J0ZWQgbGlzdCBvZiBhbGwgbGFuZ3VhZ2VzXG4gICAgcmV0dXJuIGFjY2VwdHNcbiAgICAgIC5maWx0ZXIoaXNRdWFsaXR5KVxuICAgICAgLnNvcnQoY29tcGFyZVNwZWNzKVxuICAgICAgLm1hcChnZXRGdWxsTGFuZ3VhZ2UpO1xuICB9XG5cbiAgdmFyIHByaW9yaXRpZXMgPSBwcm92aWRlZC5tYXAoZnVuY3Rpb24gZ2V0UHJpb3JpdHkodHlwZSwgaW5kZXgpIHtcbiAgICByZXR1cm4gZ2V0TGFuZ3VhZ2VQcmlvcml0eSh0eXBlLCBhY2NlcHRzLCBpbmRleCk7XG4gIH0pO1xuXG4gIC8vIHNvcnRlZCBsaXN0IG9mIGFjY2VwdGVkIGxhbmd1YWdlc1xuICByZXR1cm4gcHJpb3JpdGllcy5maWx0ZXIoaXNRdWFsaXR5KS5zb3J0KGNvbXBhcmVTcGVjcykubWFwKGZ1bmN0aW9uIGdldExhbmd1YWdlKHByaW9yaXR5KSB7XG4gICAgcmV0dXJuIHByb3ZpZGVkW3ByaW9yaXRpZXMuaW5kZXhPZihwcmlvcml0eSldO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb21wYXJlIHR3byBzcGVjcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29tcGFyZVNwZWNzKGEsIGIpIHtcbiAgcmV0dXJuIChiLnEgLSBhLnEpIHx8IChiLnMgLSBhLnMpIHx8IChhLm8gLSBiLm8pIHx8IChhLmkgLSBiLmkpIHx8IDA7XG59XG5cbi8qKlxuICogR2V0IGZ1bGwgbGFuZ3VhZ2Ugc3RyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRGdWxsTGFuZ3VhZ2Uoc3BlYykge1xuICByZXR1cm4gc3BlYy5mdWxsO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgc3BlYyBoYXMgYW55IHF1YWxpdHkuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzUXVhbGl0eShzcGVjKSB7XG4gIHJldHVybiBzcGVjLnEgPiAwO1xufVxuIiwiLyoqXG4gKiBuZWdvdGlhdG9yXG4gKiBDb3B5cmlnaHQoYykgMjAxMiBJc2FhYyBaLiBTY2hsdWV0ZXJcbiAqIENvcHlyaWdodChjKSAyMDE0IEZlZGVyaWNvIFJvbWVyb1xuICogQ29weXJpZ2h0KGMpIDIwMTQtMjAxNSBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcHJlZmVycmVkTWVkaWFUeXBlcztcbm1vZHVsZS5leHBvcnRzLnByZWZlcnJlZE1lZGlhVHlwZXMgPSBwcmVmZXJyZWRNZWRpYVR5cGVzO1xuXG4vKipcbiAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBzaW1wbGVNZWRpYVR5cGVSZWdFeHAgPSAvXlxccyooW15cXHNcXC87XSspXFwvKFteO1xcc10rKVxccyooPzo7KC4qKSk/JC87XG5cbi8qKlxuICogUGFyc2UgdGhlIEFjY2VwdCBoZWFkZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlQWNjZXB0KGFjY2VwdCkge1xuICB2YXIgYWNjZXB0cyA9IHNwbGl0TWVkaWFUeXBlcyhhY2NlcHQpO1xuXG4gIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IGFjY2VwdHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbWVkaWFUeXBlID0gcGFyc2VNZWRpYVR5cGUoYWNjZXB0c1tpXS50cmltKCksIGkpO1xuXG4gICAgaWYgKG1lZGlhVHlwZSkge1xuICAgICAgYWNjZXB0c1tqKytdID0gbWVkaWFUeXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyaW0gYWNjZXB0c1xuICBhY2NlcHRzLmxlbmd0aCA9IGo7XG5cbiAgcmV0dXJuIGFjY2VwdHM7XG59XG5cbi8qKlxuICogUGFyc2UgYSBtZWRpYSB0eXBlIGZyb20gdGhlIEFjY2VwdCBoZWFkZXIuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlTWVkaWFUeXBlKHN0ciwgaSkge1xuICB2YXIgbWF0Y2ggPSBzaW1wbGVNZWRpYVR5cGVSZWdFeHAuZXhlYyhzdHIpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIHEgPSAxO1xuICB2YXIgc3VidHlwZSA9IG1hdGNoWzJdO1xuICB2YXIgdHlwZSA9IG1hdGNoWzFdO1xuXG4gIGlmIChtYXRjaFszXSkge1xuICAgIHZhciBrdnBzID0gc3BsaXRQYXJhbWV0ZXJzKG1hdGNoWzNdKS5tYXAoc3BsaXRLZXlWYWx1ZVBhaXIpO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBrdnBzLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgcGFpciA9IGt2cHNbal07XG4gICAgICB2YXIga2V5ID0gcGFpclswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIHZhbCA9IHBhaXJbMV07XG5cbiAgICAgIC8vIGdldCB0aGUgdmFsdWUsIHVud3JhcHBpbmcgcXVvdGVzXG4gICAgICB2YXIgdmFsdWUgPSB2YWwgJiYgdmFsWzBdID09PSAnXCInICYmIHZhbFt2YWwubGVuZ3RoIC0gMV0gPT09ICdcIidcbiAgICAgICAgPyB2YWwuc3Vic3RyKDEsIHZhbC5sZW5ndGggLSAyKVxuICAgICAgICA6IHZhbDtcblxuICAgICAgaWYgKGtleSA9PT0gJ3EnKSB7XG4gICAgICAgIHEgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIHN0b3JlIHBhcmFtZXRlclxuICAgICAgcGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgc3VidHlwZTogc3VidHlwZSxcbiAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICBxOiBxLFxuICAgIGk6IGlcbiAgfTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByaW9yaXR5IG9mIGEgbWVkaWEgdHlwZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZ2V0TWVkaWFUeXBlUHJpb3JpdHkodHlwZSwgYWNjZXB0ZWQsIGluZGV4KSB7XG4gIHZhciBwcmlvcml0eSA9IHtvOiAtMSwgcTogMCwgczogMH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY2NlcHRlZC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzcGVjID0gc3BlY2lmeSh0eXBlLCBhY2NlcHRlZFtpXSwgaW5kZXgpO1xuXG4gICAgaWYgKHNwZWMgJiYgKHByaW9yaXR5LnMgLSBzcGVjLnMgfHwgcHJpb3JpdHkucSAtIHNwZWMucSB8fCBwcmlvcml0eS5vIC0gc3BlYy5vKSA8IDApIHtcbiAgICAgIHByaW9yaXR5ID0gc3BlYztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJpb3JpdHk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBzcGVjaWZpY2l0eSBvZiB0aGUgbWVkaWEgdHlwZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc3BlY2lmeSh0eXBlLCBzcGVjLCBpbmRleCkge1xuICB2YXIgcCA9IHBhcnNlTWVkaWFUeXBlKHR5cGUpO1xuICB2YXIgcyA9IDA7XG5cbiAgaWYgKCFwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZihzcGVjLnR5cGUudG9Mb3dlckNhc2UoKSA9PSBwLnR5cGUudG9Mb3dlckNhc2UoKSkge1xuICAgIHMgfD0gNFxuICB9IGVsc2UgaWYoc3BlYy50eXBlICE9ICcqJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaWYoc3BlYy5zdWJ0eXBlLnRvTG93ZXJDYXNlKCkgPT0gcC5zdWJ0eXBlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBzIHw9IDJcbiAgfSBlbHNlIGlmKHNwZWMuc3VidHlwZSAhPSAnKicpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc3BlYy5wYXJhbXMpO1xuICBpZiAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGtleXMuZXZlcnkoZnVuY3Rpb24gKGspIHtcbiAgICAgIHJldHVybiBzcGVjLnBhcmFtc1trXSA9PSAnKicgfHwgKHNwZWMucGFyYW1zW2tdIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09IChwLnBhcmFtc1trXSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICB9KSkge1xuICAgICAgcyB8PSAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBpOiBpbmRleCxcbiAgICBvOiBzcGVjLmksXG4gICAgcTogc3BlYy5xLFxuICAgIHM6IHMsXG4gIH1cbn1cblxuLyoqXG4gKiBHZXQgdGhlIHByZWZlcnJlZCBtZWRpYSB0eXBlcyBmcm9tIGFuIEFjY2VwdCBoZWFkZXIuXG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gcHJlZmVycmVkTWVkaWFUeXBlcyhhY2NlcHQsIHByb3ZpZGVkKSB7XG4gIC8vIFJGQyAyNjE2IHNlYyAxNC4yOiBubyBoZWFkZXIgPSAqLypcbiAgdmFyIGFjY2VwdHMgPSBwYXJzZUFjY2VwdChhY2NlcHQgPT09IHVuZGVmaW5lZCA/ICcqLyonIDogYWNjZXB0IHx8ICcnKTtcblxuICBpZiAoIXByb3ZpZGVkKSB7XG4gICAgLy8gc29ydGVkIGxpc3Qgb2YgYWxsIHR5cGVzXG4gICAgcmV0dXJuIGFjY2VwdHNcbiAgICAgIC5maWx0ZXIoaXNRdWFsaXR5KVxuICAgICAgLnNvcnQoY29tcGFyZVNwZWNzKVxuICAgICAgLm1hcChnZXRGdWxsVHlwZSk7XG4gIH1cblxuICB2YXIgcHJpb3JpdGllcyA9IHByb3ZpZGVkLm1hcChmdW5jdGlvbiBnZXRQcmlvcml0eSh0eXBlLCBpbmRleCkge1xuICAgIHJldHVybiBnZXRNZWRpYVR5cGVQcmlvcml0eSh0eXBlLCBhY2NlcHRzLCBpbmRleCk7XG4gIH0pO1xuXG4gIC8vIHNvcnRlZCBsaXN0IG9mIGFjY2VwdGVkIHR5cGVzXG4gIHJldHVybiBwcmlvcml0aWVzLmZpbHRlcihpc1F1YWxpdHkpLnNvcnQoY29tcGFyZVNwZWNzKS5tYXAoZnVuY3Rpb24gZ2V0VHlwZShwcmlvcml0eSkge1xuICAgIHJldHVybiBwcm92aWRlZFtwcmlvcml0aWVzLmluZGV4T2YocHJpb3JpdHkpXTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ29tcGFyZSB0d28gc3BlY3MuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvbXBhcmVTcGVjcyhhLCBiKSB7XG4gIHJldHVybiAoYi5xIC0gYS5xKSB8fCAoYi5zIC0gYS5zKSB8fCAoYS5vIC0gYi5vKSB8fCAoYS5pIC0gYi5pKSB8fCAwO1xufVxuXG4vKipcbiAqIEdldCBmdWxsIHR5cGUgc3RyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBnZXRGdWxsVHlwZShzcGVjKSB7XG4gIHJldHVybiBzcGVjLnR5cGUgKyAnLycgKyBzcGVjLnN1YnR5cGU7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzcGVjIGhhcyBhbnkgcXVhbGl0eS5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gaXNRdWFsaXR5KHNwZWMpIHtcbiAgcmV0dXJuIHNwZWMucSA+IDA7XG59XG5cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBxdW90ZXMgaW4gYSBzdHJpbmcuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHF1b3RlQ291bnQoc3RyaW5nKSB7XG4gIHZhciBjb3VudCA9IDA7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgd2hpbGUgKChpbmRleCA9IHN0cmluZy5pbmRleE9mKCdcIicsIGluZGV4KSkgIT09IC0xKSB7XG4gICAgY291bnQrKztcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgcmV0dXJuIGNvdW50O1xufVxuXG4vKipcbiAqIFNwbGl0IGEga2V5IHZhbHVlIHBhaXIuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNwbGl0S2V5VmFsdWVQYWlyKHN0cikge1xuICB2YXIgaW5kZXggPSBzdHIuaW5kZXhPZignPScpO1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuXG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBrZXkgPSBzdHI7XG4gIH0gZWxzZSB7XG4gICAga2V5ID0gc3RyLnN1YnN0cigwLCBpbmRleCk7XG4gICAgdmFsID0gc3RyLnN1YnN0cihpbmRleCArIDEpO1xuICB9XG5cbiAgcmV0dXJuIFtrZXksIHZhbF07XG59XG5cbi8qKlxuICogU3BsaXQgYW4gQWNjZXB0IGhlYWRlciBpbnRvIG1lZGlhIHR5cGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzcGxpdE1lZGlhVHlwZXMoYWNjZXB0KSB7XG4gIHZhciBhY2NlcHRzID0gYWNjZXB0LnNwbGl0KCcsJyk7XG5cbiAgZm9yICh2YXIgaSA9IDEsIGogPSAwOyBpIDwgYWNjZXB0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChxdW90ZUNvdW50KGFjY2VwdHNbal0pICUgMiA9PSAwKSB7XG4gICAgICBhY2NlcHRzWysral0gPSBhY2NlcHRzW2ldO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY2NlcHRzW2pdICs9ICcsJyArIGFjY2VwdHNbaV07XG4gICAgfVxuICB9XG5cbiAgLy8gdHJpbSBhY2NlcHRzXG4gIGFjY2VwdHMubGVuZ3RoID0gaiArIDE7XG5cbiAgcmV0dXJuIGFjY2VwdHM7XG59XG5cbi8qKlxuICogU3BsaXQgYSBzdHJpbmcgb2YgcGFyYW1ldGVycy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc3BsaXRQYXJhbWV0ZXJzKHN0cikge1xuICB2YXIgcGFyYW1ldGVycyA9IHN0ci5zcGxpdCgnOycpO1xuXG4gIGZvciAodmFyIGkgPSAxLCBqID0gMDsgaSA8IHBhcmFtZXRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocXVvdGVDb3VudChwYXJhbWV0ZXJzW2pdKSAlIDIgPT0gMCkge1xuICAgICAgcGFyYW1ldGVyc1srK2pdID0gcGFyYW1ldGVyc1tpXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1ldGVyc1tqXSArPSAnOycgKyBwYXJhbWV0ZXJzW2ldO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyaW0gcGFyYW1ldGVyc1xuICBwYXJhbWV0ZXJzLmxlbmd0aCA9IGogKyAxO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyYW1ldGVycy5sZW5ndGg7IGkrKykge1xuICAgIHBhcmFtZXRlcnNbaV0gPSBwYXJhbWV0ZXJzW2ldLnRyaW0oKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuIiwiLyohXG4gKiBvbi1maW5pc2hlZFxuICogQ29weXJpZ2h0KGMpIDIwMTMgSm9uYXRoYW4gT25nXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBvbkZpbmlzaGVkXG5tb2R1bGUuZXhwb3J0cy5pc0ZpbmlzaGVkID0gaXNGaW5pc2hlZFxuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBmaXJzdCA9IHJlcXVpcmUoJ2VlLWZpcnN0JylcblxuLyoqXG4gKiBWYXJpYWJsZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG52YXIgZGVmZXIgPSB0eXBlb2Ygc2V0SW1tZWRpYXRlID09PSAnZnVuY3Rpb24nXG4gID8gc2V0SW1tZWRpYXRlXG4gIDogZnVuY3Rpb24oZm4peyBwcm9jZXNzLm5leHRUaWNrKGZuLmJpbmQuYXBwbHkoZm4sIGFyZ3VtZW50cykpIH1cblxuLyoqXG4gKiBJbnZva2UgY2FsbGJhY2sgd2hlbiB0aGUgcmVzcG9uc2UgaGFzIGZpbmlzaGVkLCB1c2VmdWwgZm9yXG4gKiBjbGVhbmluZyB1cCByZXNvdXJjZXMgYWZ0ZXJ3YXJkcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gbXNnXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lclxuICogQHJldHVybiB7b2JqZWN0fVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIG9uRmluaXNoZWQobXNnLCBsaXN0ZW5lcikge1xuICBpZiAoaXNGaW5pc2hlZChtc2cpICE9PSBmYWxzZSkge1xuICAgIGRlZmVyKGxpc3RlbmVyLCBudWxsLCBtc2cpXG4gICAgcmV0dXJuIG1zZ1xuICB9XG5cbiAgLy8gYXR0YWNoIHRoZSBsaXN0ZW5lciB0byB0aGUgbWVzc2FnZVxuICBhdHRhY2hMaXN0ZW5lcihtc2csIGxpc3RlbmVyKVxuXG4gIHJldHVybiBtc2dcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgbWVzc2FnZSBpcyBhbHJlYWR5IGZpbmlzaGVkLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBtc2dcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gaXNGaW5pc2hlZChtc2cpIHtcbiAgdmFyIHNvY2tldCA9IG1zZy5zb2NrZXRcblxuICBpZiAodHlwZW9mIG1zZy5maW5pc2hlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gT3V0Z29pbmdNZXNzYWdlXG4gICAgcmV0dXJuIEJvb2xlYW4obXNnLmZpbmlzaGVkIHx8IChzb2NrZXQgJiYgIXNvY2tldC53cml0YWJsZSkpXG4gIH1cblxuICBpZiAodHlwZW9mIG1zZy5jb21wbGV0ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gSW5jb21pbmdNZXNzYWdlXG4gICAgcmV0dXJuIEJvb2xlYW4obXNnLnVwZ3JhZGUgfHwgIXNvY2tldCB8fCAhc29ja2V0LnJlYWRhYmxlIHx8IChtc2cuY29tcGxldGUgJiYgIW1zZy5yZWFkYWJsZSkpXG4gIH1cblxuICAvLyBkb24ndCBrbm93XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBBdHRhY2ggYSBmaW5pc2hlZCBsaXN0ZW5lciB0byB0aGUgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gbXNnXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBhdHRhY2hGaW5pc2hlZExpc3RlbmVyKG1zZywgY2FsbGJhY2spIHtcbiAgdmFyIGVlTXNnXG4gIHZhciBlZVNvY2tldFxuICB2YXIgZmluaXNoZWQgPSBmYWxzZVxuXG4gIGZ1bmN0aW9uIG9uRmluaXNoKGVycm9yKSB7XG4gICAgZWVNc2cuY2FuY2VsKClcbiAgICBlZVNvY2tldC5jYW5jZWwoKVxuXG4gICAgZmluaXNoZWQgPSB0cnVlXG4gICAgY2FsbGJhY2soZXJyb3IpXG4gIH1cblxuICAvLyBmaW5pc2hlZCBvbiBmaXJzdCBtZXNzYWdlIGV2ZW50XG4gIGVlTXNnID0gZWVTb2NrZXQgPSBmaXJzdChbW21zZywgJ2VuZCcsICdmaW5pc2gnXV0sIG9uRmluaXNoKVxuXG4gIGZ1bmN0aW9uIG9uU29ja2V0KHNvY2tldCkge1xuICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgIG1zZy5yZW1vdmVMaXN0ZW5lcignc29ja2V0Jywgb25Tb2NrZXQpXG5cbiAgICBpZiAoZmluaXNoZWQpIHJldHVyblxuICAgIGlmIChlZU1zZyAhPT0gZWVTb2NrZXQpIHJldHVyblxuXG4gICAgLy8gZmluaXNoZWQgb24gZmlyc3Qgc29ja2V0IGV2ZW50XG4gICAgZWVTb2NrZXQgPSBmaXJzdChbW3NvY2tldCwgJ2Vycm9yJywgJ2Nsb3NlJ11dLCBvbkZpbmlzaClcbiAgfVxuXG4gIGlmIChtc2cuc29ja2V0KSB7XG4gICAgLy8gc29ja2V0IGFscmVhZHkgYXNzaWduZWRcbiAgICBvblNvY2tldChtc2cuc29ja2V0KVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gd2FpdCBmb3Igc29ja2V0IHRvIGJlIGFzc2lnbmVkXG4gIG1zZy5vbignc29ja2V0Jywgb25Tb2NrZXQpXG5cbiAgaWYgKG1zZy5zb2NrZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIG5vZGUuanMgMC44IHBhdGNoXG4gICAgcGF0Y2hBc3NpZ25Tb2NrZXQobXNnLCBvblNvY2tldClcbiAgfVxufVxuXG4vKipcbiAqIEF0dGFjaCB0aGUgbGlzdGVuZXIgdG8gdGhlIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IG1zZ1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGF0dGFjaExpc3RlbmVyKG1zZywgbGlzdGVuZXIpIHtcbiAgdmFyIGF0dGFjaGVkID0gbXNnLl9fb25GaW5pc2hlZFxuXG4gIC8vIGNyZWF0ZSBhIHByaXZhdGUgc2luZ2xlIGxpc3RlbmVyIHdpdGggcXVldWVcbiAgaWYgKCFhdHRhY2hlZCB8fCAhYXR0YWNoZWQucXVldWUpIHtcbiAgICBhdHRhY2hlZCA9IG1zZy5fX29uRmluaXNoZWQgPSBjcmVhdGVMaXN0ZW5lcihtc2cpXG4gICAgYXR0YWNoRmluaXNoZWRMaXN0ZW5lcihtc2csIGF0dGFjaGVkKVxuICB9XG5cbiAgYXR0YWNoZWQucXVldWUucHVzaChsaXN0ZW5lcilcbn1cblxuLyoqXG4gKiBDcmVhdGUgbGlzdGVuZXIgb24gbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gbXNnXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXIobXNnKSB7XG4gIGZ1bmN0aW9uIGxpc3RlbmVyKGVycikge1xuICAgIGlmIChtc2cuX19vbkZpbmlzaGVkID09PSBsaXN0ZW5lcikgbXNnLl9fb25GaW5pc2hlZCA9IG51bGxcbiAgICBpZiAoIWxpc3RlbmVyLnF1ZXVlKSByZXR1cm5cblxuICAgIHZhciBxdWV1ZSA9IGxpc3RlbmVyLnF1ZXVlXG4gICAgbGlzdGVuZXIucXVldWUgPSBudWxsXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBxdWV1ZVtpXShlcnIsIG1zZylcbiAgICB9XG4gIH1cblxuICBsaXN0ZW5lci5xdWV1ZSA9IFtdXG5cbiAgcmV0dXJuIGxpc3RlbmVyXG59XG5cbi8qKlxuICogUGF0Y2ggU2VydmVyUmVzcG9uc2UucHJvdG90eXBlLmFzc2lnblNvY2tldCBmb3Igbm9kZS5qcyAwLjguXG4gKlxuICogQHBhcmFtIHtTZXJ2ZXJSZXNwb25zZX0gcmVzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXRjaEFzc2lnblNvY2tldChyZXMsIGNhbGxiYWNrKSB7XG4gIHZhciBhc3NpZ25Tb2NrZXQgPSByZXMuYXNzaWduU29ja2V0XG5cbiAgaWYgKHR5cGVvZiBhc3NpZ25Tb2NrZXQgIT09ICdmdW5jdGlvbicpIHJldHVyblxuXG4gIC8vIHJlcy5vbignc29ja2V0JywgY2FsbGJhY2spIGlzIGJyb2tlbiBpbiAwLjhcbiAgcmVzLmFzc2lnblNvY2tldCA9IGZ1bmN0aW9uIF9hc3NpZ25Tb2NrZXQoc29ja2V0KSB7XG4gICAgYXNzaWduU29ja2V0LmNhbGwodGhpcywgc29ja2V0KVxuICAgIGNhbGxiYWNrKHNvY2tldClcbiAgfVxufVxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwga2V5cyl7XG4gIG9iaiA9IG9iaiB8fCB7fTtcbiAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBrZXlzKSBrZXlzID0ga2V5cy5zcGxpdCgvICsvKTtcbiAgcmV0dXJuIGtleXMucmVkdWNlKGZ1bmN0aW9uKHJldCwga2V5KXtcbiAgICBpZiAobnVsbCA9PSBvYmpba2V5XSkgcmV0dXJuIHJldDtcbiAgICByZXRba2V5XSA9IG9ialtrZXldO1xuICAgIHJldHVybiByZXQ7XG4gIH0sIHt9KTtcbn07XG4iLCIvKiFcbiAqIHBhcnNldXJsXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBKb25hdGhhbiBPbmdcbiAqIENvcHlyaWdodChjKSAyMDE0LTIwMTcgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0J1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciB1cmwgPSByZXF1aXJlKCd1cmwnKVxudmFyIHBhcnNlID0gdXJsLnBhcnNlXG52YXIgVXJsID0gdXJsLlVybFxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2V1cmxcbm1vZHVsZS5leHBvcnRzLm9yaWdpbmFsID0gb3JpZ2luYWx1cmxcblxuLyoqXG4gKiBQYXJzZSB0aGUgYHJlcWAgdXJsIHdpdGggbWVtb2l6YXRpb24uXG4gKlxuICogQHBhcmFtIHtTZXJ2ZXJSZXF1ZXN0fSByZXFcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZXVybCAocmVxKSB7XG4gIHZhciB1cmwgPSByZXEudXJsXG5cbiAgaWYgKHVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gVVJMIGlzIHVuZGVmaW5lZFxuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHZhciBwYXJzZWQgPSByZXEuX3BhcnNlZFVybFxuXG4gIGlmIChmcmVzaCh1cmwsIHBhcnNlZCkpIHtcbiAgICAvLyBSZXR1cm4gY2FjaGVkIFVSTCBwYXJzZVxuICAgIHJldHVybiBwYXJzZWRcbiAgfVxuXG4gIC8vIFBhcnNlIHRoZSBVUkxcbiAgcGFyc2VkID0gZmFzdHBhcnNlKHVybClcbiAgcGFyc2VkLl9yYXcgPSB1cmxcblxuICByZXR1cm4gKHJlcS5fcGFyc2VkVXJsID0gcGFyc2VkKVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgYHJlcWAgb3JpZ2luYWwgdXJsIHdpdGggZmFsbGJhY2sgYW5kIG1lbW9pemF0aW9uLlxuICpcbiAqIEBwYXJhbSB7U2VydmVyUmVxdWVzdH0gcmVxXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gb3JpZ2luYWx1cmwgKHJlcSkge1xuICB2YXIgdXJsID0gcmVxLm9yaWdpbmFsVXJsXG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gRmFsbGJhY2tcbiAgICByZXR1cm4gcGFyc2V1cmwocmVxKVxuICB9XG5cbiAgdmFyIHBhcnNlZCA9IHJlcS5fcGFyc2VkT3JpZ2luYWxVcmxcblxuICBpZiAoZnJlc2godXJsLCBwYXJzZWQpKSB7XG4gICAgLy8gUmV0dXJuIGNhY2hlZCBVUkwgcGFyc2VcbiAgICByZXR1cm4gcGFyc2VkXG4gIH1cblxuICAvLyBQYXJzZSB0aGUgVVJMXG4gIHBhcnNlZCA9IGZhc3RwYXJzZSh1cmwpXG4gIHBhcnNlZC5fcmF3ID0gdXJsXG5cbiAgcmV0dXJuIChyZXEuX3BhcnNlZE9yaWdpbmFsVXJsID0gcGFyc2VkKVxufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgYHN0cmAgdXJsIHdpdGggZmFzdC1wYXRoIHNob3J0LWN1dC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZhc3RwYXJzZSAoc3RyKSB7XG4gIGlmICh0eXBlb2Ygc3RyICE9PSAnc3RyaW5nJyB8fCBzdHIuY2hhckNvZGVBdCgwKSAhPT0gMHgyZiAvKiAvICovKSB7XG4gICAgcmV0dXJuIHBhcnNlKHN0cilcbiAgfVxuXG4gIHZhciBwYXRobmFtZSA9IHN0clxuICB2YXIgcXVlcnkgPSBudWxsXG4gIHZhciBzZWFyY2ggPSBudWxsXG5cbiAgLy8gVGhpcyB0YWtlcyB0aGUgcmVnZXhwIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2pveWVudC9ub2RlL3B1bGwvNzg3OFxuICAvLyBXaGljaCBpcyAvXihcXC9bXj8jXFxzXSopKFxcP1teI1xcc10qKT8kL1xuICAvLyBBbmQgdW5yb2xscyBpdCBpbnRvIGEgZm9yIGxvb3BcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKHN0ci5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDB4M2Y6IC8qID8gICovXG4gICAgICAgIGlmIChzZWFyY2ggPT09IG51bGwpIHtcbiAgICAgICAgICBwYXRobmFtZSA9IHN0ci5zdWJzdHJpbmcoMCwgaSlcbiAgICAgICAgICBxdWVyeSA9IHN0ci5zdWJzdHJpbmcoaSArIDEpXG4gICAgICAgICAgc2VhcmNoID0gc3RyLnN1YnN0cmluZyhpKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIDB4MDk6IC8qIFxcdCAqL1xuICAgICAgY2FzZSAweDBhOiAvKiBcXG4gKi9cbiAgICAgIGNhc2UgMHgwYzogLyogXFxmICovXG4gICAgICBjYXNlIDB4MGQ6IC8qIFxcciAqL1xuICAgICAgY2FzZSAweDIwOiAvKiAgICAqL1xuICAgICAgY2FzZSAweDIzOiAvKiAjICAqL1xuICAgICAgY2FzZSAweGEwOlxuICAgICAgY2FzZSAweGZlZmY6XG4gICAgICAgIHJldHVybiBwYXJzZShzdHIpXG4gICAgfVxuICB9XG5cbiAgdmFyIHVybCA9IFVybCAhPT0gdW5kZWZpbmVkXG4gICAgPyBuZXcgVXJsKClcbiAgICA6IHt9XG4gIHVybC5wYXRoID0gc3RyXG4gIHVybC5ocmVmID0gc3RyXG4gIHVybC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gIHVybC5xdWVyeSA9IHF1ZXJ5XG4gIHVybC5zZWFyY2ggPSBzZWFyY2hcblxuICByZXR1cm4gdXJsXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHBhcnNlZCBpcyBzdGlsbCBmcmVzaCBmb3IgdXJsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJzZWRVcmxcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZyZXNoICh1cmwsIHBhcnNlZFVybCkge1xuICByZXR1cm4gdHlwZW9mIHBhcnNlZFVybCA9PT0gJ29iamVjdCcgJiZcbiAgICBwYXJzZWRVcmwgIT09IG51bGwgJiZcbiAgICAoVXJsID09PSB1bmRlZmluZWQgfHwgcGFyc2VkVXJsIGluc3RhbmNlb2YgVXJsKSAmJlxuICAgIHBhcnNlZFVybC5fcmF3ID09PSB1cmxcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICh7X19wcm90b19fOltdfSBpbnN0YW5jZW9mIEFycmF5ID8gc2V0UHJvdG9PZiA6IG1peGluUHJvcGVydGllcyk7XG5cbmZ1bmN0aW9uIHNldFByb3RvT2Yob2JqLCBwcm90bykge1xuXHRvYmouX19wcm90b19fID0gcHJvdG87XG5cdHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG1peGluUHJvcGVydGllcyhvYmosIHByb3RvKSB7XG5cdGZvciAodmFyIHByb3AgaW4gcHJvdG8pIHtcblx0XHRpZiAoIW9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuXHRcdFx0b2JqW3Byb3BdID0gcHJvdG9bcHJvcF07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBvYmo7XG59XG4iLCIvKiFcbiAqIHN0YXR1c2VzXG4gKiBDb3B5cmlnaHQoYykgMjAxNCBKb25hdGhhbiBPbmdcbiAqIENvcHlyaWdodChjKSAyMDE2IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgY29kZXMgPSByZXF1aXJlKCcuL2NvZGVzLmpzb24nKVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gc3RhdHVzXG5cbi8vIHN0YXR1cyBjb2RlIHRvIG1lc3NhZ2UgbWFwXG5zdGF0dXMuU1RBVFVTX0NPREVTID0gY29kZXNcblxuLy8gYXJyYXkgb2Ygc3RhdHVzIGNvZGVzXG5zdGF0dXMuY29kZXMgPSBwb3B1bGF0ZVN0YXR1c2VzTWFwKHN0YXR1cywgY29kZXMpXG5cbi8vIHN0YXR1cyBjb2RlcyBmb3IgcmVkaXJlY3RzXG5zdGF0dXMucmVkaXJlY3QgPSB7XG4gIDMwMDogdHJ1ZSxcbiAgMzAxOiB0cnVlLFxuICAzMDI6IHRydWUsXG4gIDMwMzogdHJ1ZSxcbiAgMzA1OiB0cnVlLFxuICAzMDc6IHRydWUsXG4gIDMwODogdHJ1ZVxufVxuXG4vLyBzdGF0dXMgY29kZXMgZm9yIGVtcHR5IGJvZGllc1xuc3RhdHVzLmVtcHR5ID0ge1xuICAyMDQ6IHRydWUsXG4gIDIwNTogdHJ1ZSxcbiAgMzA0OiB0cnVlXG59XG5cbi8vIHN0YXR1cyBjb2RlcyBmb3Igd2hlbiB5b3Ugc2hvdWxkIHJldHJ5IHRoZSByZXF1ZXN0XG5zdGF0dXMucmV0cnkgPSB7XG4gIDUwMjogdHJ1ZSxcbiAgNTAzOiB0cnVlLFxuICA1MDQ6IHRydWVcbn1cblxuLyoqXG4gKiBQb3B1bGF0ZSB0aGUgc3RhdHVzZXMgbWFwIGZvciBnaXZlbiBjb2Rlcy5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcG9wdWxhdGVTdGF0dXNlc01hcCAoc3RhdHVzZXMsIGNvZGVzKSB7XG4gIHZhciBhcnIgPSBbXVxuXG4gIE9iamVjdC5rZXlzKGNvZGVzKS5mb3JFYWNoKGZ1bmN0aW9uIGZvckVhY2hDb2RlIChjb2RlKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBjb2Rlc1tjb2RlXVxuICAgIHZhciBzdGF0dXMgPSBOdW1iZXIoY29kZSlcblxuICAgIC8vIFBvcHVsYXRlIHByb3BlcnRpZXNcbiAgICBzdGF0dXNlc1tzdGF0dXNdID0gbWVzc2FnZVxuICAgIHN0YXR1c2VzW21lc3NhZ2VdID0gc3RhdHVzXG4gICAgc3RhdHVzZXNbbWVzc2FnZS50b0xvd2VyQ2FzZSgpXSA9IHN0YXR1c1xuXG4gICAgLy8gQWRkIHRvIGFycmF5XG4gICAgYXJyLnB1c2goc3RhdHVzKVxuICB9KVxuXG4gIHJldHVybiBhcnJcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHN0YXR1cyBjb2RlLlxuICpcbiAqIEdpdmVuIGEgbnVtYmVyLCB0aGlzIHdpbGwgdGhyb3cgaWYgaXQgaXMgbm90IGEga25vd24gc3RhdHVzXG4gKiBjb2RlLCBvdGhlcndpc2UgdGhlIGNvZGUgd2lsbCBiZSByZXR1cm5lZC4gR2l2ZW4gYSBzdHJpbmcsXG4gKiB0aGUgc3RyaW5nIHdpbGwgYmUgcGFyc2VkIGZvciBhIG51bWJlciBhbmQgcmV0dXJuIHRoZSBjb2RlXG4gKiBpZiB2YWxpZCwgb3RoZXJ3aXNlIHdpbGwgbG9va3VwIHRoZSBjb2RlIGFzc3VtaW5nIHRoaXMgaXNcbiAqIHRoZSBzdGF0dXMgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IGNvZGVcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gc3RhdHVzIChjb2RlKSB7XG4gIGlmICh0eXBlb2YgY29kZSA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAoIXN0YXR1c1tjb2RlXSkgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIHN0YXR1cyBjb2RlOiAnICsgY29kZSlcbiAgICByZXR1cm4gY29kZVxuICB9XG5cbiAgaWYgKHR5cGVvZiBjb2RlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NvZGUgbXVzdCBiZSBhIG51bWJlciBvciBzdHJpbmcnKVxuICB9XG5cbiAgLy8gJzQwMydcbiAgdmFyIG4gPSBwYXJzZUludChjb2RlLCAxMClcbiAgaWYgKCFpc05hTihuKSkge1xuICAgIGlmICghc3RhdHVzW25dKSB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgc3RhdHVzIGNvZGU6ICcgKyBuKVxuICAgIHJldHVybiBuXG4gIH1cblxuICBuID0gc3RhdHVzW2NvZGUudG9Mb3dlckNhc2UoKV1cbiAgaWYgKCFuKSB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgc3RhdHVzIG1lc3NhZ2U6IFwiJyArIGNvZGUgKyAnXCInKVxuICByZXR1cm4gblxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFyZ3YgPSBwcm9jZXNzLmFyZ3Y7XG5cbnZhciB0ZXJtaW5hdG9yID0gYXJndi5pbmRleE9mKCctLScpO1xudmFyIGhhc0ZsYWcgPSBmdW5jdGlvbiAoZmxhZykge1xuXHRmbGFnID0gJy0tJyArIGZsYWc7XG5cdHZhciBwb3MgPSBhcmd2LmluZGV4T2YoZmxhZyk7XG5cdHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yICE9PSAtMSA/IHBvcyA8IHRlcm1pbmF0b3IgOiB0cnVlKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcblx0aWYgKCdGT1JDRV9DT0xPUicgaW4gcHJvY2Vzcy5lbnYpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCduby1jb2xvcicpIHx8XG5cdFx0aGFzRmxhZygnbm8tY29sb3JzJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj1mYWxzZScpKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWUnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPWFsd2F5cycpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAocHJvY2Vzcy5zdGRvdXQgJiYgIXByb2Nlc3Muc3Rkb3V0LmlzVFRZKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICgnQ09MT1JURVJNJyBpbiBwcm9jZXNzLmVudikge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHByb2Nlc3MuZW52LlRFUk0gPT09ICdkdW1iJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChwcm9jZXNzLmVudi5URVJNKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufSkoKTtcbiIsIi8qIVxuICogdHlwZS1pc1xuICogQ29weXJpZ2h0KGMpIDIwMTQgSm9uYXRoYW4gT25nXG4gKiBDb3B5cmlnaHQoYykgMjAxNC0yMDE1IERvdWdsYXMgQ2hyaXN0b3BoZXIgV2lsc29uXG4gKiBNSVQgTGljZW5zZWRcbiAqL1xuXG4ndXNlIHN0cmljdCdcblxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgdHlwZXIgPSByZXF1aXJlKCdtZWRpYS10eXBlcicpXG52YXIgbWltZSA9IHJlcXVpcmUoJ21pbWUtdHlwZXMnKVxuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICogQHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mcmVxdWVzdFxubW9kdWxlLmV4cG9ydHMuaXMgPSB0eXBlaXNcbm1vZHVsZS5leHBvcnRzLmhhc0JvZHkgPSBoYXNib2R5XG5tb2R1bGUuZXhwb3J0cy5ub3JtYWxpemUgPSBub3JtYWxpemVcbm1vZHVsZS5leHBvcnRzLm1hdGNoID0gbWltZU1hdGNoXG5cbi8qKlxuICogQ29tcGFyZSBhIGB2YWx1ZWAgY29udGVudC10eXBlIHdpdGggYHR5cGVzYC5cbiAqIEVhY2ggYHR5cGVgIGNhbiBiZSBhbiBleHRlbnNpb24gbGlrZSBgaHRtbGAsXG4gKiBhIHNwZWNpYWwgc2hvcnRjdXQgbGlrZSBgbXVsdGlwYXJ0YCBvciBgdXJsZW5jb2RlZGAsXG4gKiBvciBhIG1pbWUgdHlwZS5cbiAqXG4gKiBJZiBubyB0eXBlcyBtYXRjaCwgYGZhbHNlYCBpcyByZXR1cm5lZC5cbiAqIE90aGVyd2lzZSwgdGhlIGZpcnN0IGB0eXBlYCB0aGF0IG1hdGNoZXMgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge0FycmF5fSB0eXBlc1xuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHR5cGVpcyAodmFsdWUsIHR5cGVzXykge1xuICB2YXIgaVxuICB2YXIgdHlwZXMgPSB0eXBlc19cblxuICAvLyByZW1vdmUgcGFyYW1ldGVycyBhbmQgbm9ybWFsaXplXG4gIHZhciB2YWwgPSB0cnlOb3JtYWxpemVUeXBlKHZhbHVlKVxuXG4gIC8vIG5vIHR5cGUgb3IgaW52YWxpZFxuICBpZiAoIXZhbCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gc3VwcG9ydCBmbGF0dGVuZWQgYXJndW1lbnRzXG4gIGlmICh0eXBlcyAmJiAhQXJyYXkuaXNBcnJheSh0eXBlcykpIHtcbiAgICB0eXBlcyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSlcbiAgICBmb3IgKGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHR5cGVzW2ldID0gYXJndW1lbnRzW2kgKyAxXVxuICAgIH1cbiAgfVxuXG4gIC8vIG5vIHR5cGVzLCByZXR1cm4gdGhlIGNvbnRlbnQgdHlwZVxuICBpZiAoIXR5cGVzIHx8ICF0eXBlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gdmFsXG4gIH1cblxuICB2YXIgdHlwZVxuICBmb3IgKGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobWltZU1hdGNoKG5vcm1hbGl6ZSh0eXBlID0gdHlwZXNbaV0pLCB2YWwpKSB7XG4gICAgICByZXR1cm4gdHlwZVswXSA9PT0gJysnIHx8IHR5cGUuaW5kZXhPZignKicpICE9PSAtMVxuICAgICAgICA/IHZhbFxuICAgICAgICA6IHR5cGVcbiAgICB9XG4gIH1cblxuICAvLyBubyBtYXRjaGVzXG4gIHJldHVybiBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgcmVxdWVzdCBoYXMgYSByZXF1ZXN0IGJvZHkuXG4gKiBBIHJlcXVlc3Qgd2l0aCBhIGJvZHkgX19tdXN0X18gZWl0aGVyIGhhdmUgYHRyYW5zZmVyLWVuY29kaW5nYFxuICogb3IgYGNvbnRlbnQtbGVuZ3RoYCBoZWFkZXJzIHNldC5cbiAqIGh0dHA6Ly93d3cudzMub3JnL1Byb3RvY29scy9yZmMyNjE2L3JmYzI2MTYtc2VjNC5odG1sI3NlYzQuM1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZXF1ZXN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGhhc2JvZHkgKHJlcSkge1xuICByZXR1cm4gcmVxLmhlYWRlcnNbJ3RyYW5zZmVyLWVuY29kaW5nJ10gIT09IHVuZGVmaW5lZCB8fFxuICAgICFpc05hTihyZXEuaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgaW5jb21pbmcgcmVxdWVzdCBjb250YWlucyB0aGUgXCJDb250ZW50LVR5cGVcIlxuICogaGVhZGVyIGZpZWxkLCBhbmQgaXQgY29udGFpbnMgYW55IG9mIHRoZSBnaXZlIG1pbWUgYHR5cGVgcy5cbiAqIElmIHRoZXJlIGlzIG5vIHJlcXVlc3QgYm9keSwgYG51bGxgIGlzIHJldHVybmVkLlxuICogSWYgdGhlcmUgaXMgbm8gY29udGVudCB0eXBlLCBgZmFsc2VgIGlzIHJldHVybmVkLlxuICogT3RoZXJ3aXNlLCBpdCByZXR1cm5zIHRoZSBmaXJzdCBgdHlwZWAgdGhhdCBtYXRjaGVzLlxuICpcbiAqIEV4YW1wbGVzOlxuICpcbiAqICAgICAvLyBXaXRoIENvbnRlbnQtVHlwZTogdGV4dC9odG1sOyBjaGFyc2V0PXV0Zi04XG4gKiAgICAgdGhpcy5pcygnaHRtbCcpOyAvLyA9PiAnaHRtbCdcbiAqICAgICB0aGlzLmlzKCd0ZXh0L2h0bWwnKTsgLy8gPT4gJ3RleHQvaHRtbCdcbiAqICAgICB0aGlzLmlzKCd0ZXh0LyonLCAnYXBwbGljYXRpb24vanNvbicpOyAvLyA9PiAndGV4dC9odG1sJ1xuICpcbiAqICAgICAvLyBXaGVuIENvbnRlbnQtVHlwZSBpcyBhcHBsaWNhdGlvbi9qc29uXG4gKiAgICAgdGhpcy5pcygnanNvbicsICd1cmxlbmNvZGVkJyk7IC8vID0+ICdqc29uJ1xuICogICAgIHRoaXMuaXMoJ2FwcGxpY2F0aW9uL2pzb24nKTsgLy8gPT4gJ2FwcGxpY2F0aW9uL2pzb24nXG4gKiAgICAgdGhpcy5pcygnaHRtbCcsICdhcHBsaWNhdGlvbi8qJyk7IC8vID0+ICdhcHBsaWNhdGlvbi9qc29uJ1xuICpcbiAqICAgICB0aGlzLmlzKCdodG1sJyk7IC8vID0+IGZhbHNlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHR5cGVzLi4uXG4gKiBAcmV0dXJuIHtTdHJpbmd8ZmFsc2V8bnVsbH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiB0eXBlb2ZyZXF1ZXN0IChyZXEsIHR5cGVzXykge1xuICB2YXIgdHlwZXMgPSB0eXBlc19cblxuICAvLyBubyBib2R5XG4gIGlmICghaGFzYm9keShyZXEpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIHN1cHBvcnQgZmxhdHRlbmVkIGFyZ3VtZW50c1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpIHtcbiAgICB0eXBlcyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSlcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0eXBlc1tpXSA9IGFyZ3VtZW50c1tpICsgMV1cbiAgICB9XG4gIH1cblxuICAvLyByZXF1ZXN0IGNvbnRlbnQgdHlwZVxuICB2YXIgdmFsdWUgPSByZXEuaGVhZGVyc1snY29udGVudC10eXBlJ11cblxuICByZXR1cm4gdHlwZWlzKHZhbHVlLCB0eXBlcylcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYSBtaW1lIHR5cGUuXG4gKiBJZiBpdCdzIGEgc2hvcnRoYW5kLCBleHBhbmQgaXQgdG8gYSB2YWxpZCBtaW1lIHR5cGUuXG4gKlxuICogSW4gZ2VuZXJhbCwgeW91IHByb2JhYmx5IHdhbnQ6XG4gKlxuICogICB2YXIgdHlwZSA9IGlzKHJlcSwgWyd1cmxlbmNvZGVkJywgJ2pzb24nLCAnbXVsdGlwYXJ0J10pO1xuICpcbiAqIFRoZW4gdXNlIHRoZSBhcHByb3ByaWF0ZSBib2R5IHBhcnNlcnMuXG4gKiBUaGVzZSB0aHJlZSBhcmUgdGhlIG1vc3QgY29tbW9uIHJlcXVlc3QgYm9keSB0eXBlc1xuICogYW5kIGFyZSB0aHVzIGVuc3VyZWQgdG8gd29yay5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemUgKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGludmFsaWQgdHlwZVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAndXJsZW5jb2RlZCc6XG4gICAgICByZXR1cm4gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICBjYXNlICdtdWx0aXBhcnQnOlxuICAgICAgcmV0dXJuICdtdWx0aXBhcnQvKidcbiAgfVxuXG4gIGlmICh0eXBlWzBdID09PSAnKycpIHtcbiAgICAvLyBcIitqc29uXCIgLT4gXCIqLyoranNvblwiIGV4cGFuZG9cbiAgICByZXR1cm4gJyovKicgKyB0eXBlXG4gIH1cblxuICByZXR1cm4gdHlwZS5pbmRleE9mKCcvJykgPT09IC0xXG4gICAgPyBtaW1lLmxvb2t1cCh0eXBlKVxuICAgIDogdHlwZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGBleHBlY3RlZGAgbWltZSB0eXBlXG4gKiBtYXRjaGVzIGBhY3R1YWxgIG1pbWUgdHlwZSB3aXRoXG4gKiB3aWxkY2FyZCBhbmQgK3N1ZmZpeCBzdXBwb3J0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBleHBlY3RlZFxuICogQHBhcmFtIHtTdHJpbmd9IGFjdHVhbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWltZU1hdGNoIChleHBlY3RlZCwgYWN0dWFsKSB7XG4gIC8vIGludmFsaWQgdHlwZVxuICBpZiAoZXhwZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBzcGxpdCB0eXBlc1xuICB2YXIgYWN0dWFsUGFydHMgPSBhY3R1YWwuc3BsaXQoJy8nKVxuICB2YXIgZXhwZWN0ZWRQYXJ0cyA9IGV4cGVjdGVkLnNwbGl0KCcvJylcblxuICAvLyBpbnZhbGlkIGZvcm1hdFxuICBpZiAoYWN0dWFsUGFydHMubGVuZ3RoICE9PSAyIHx8IGV4cGVjdGVkUGFydHMubGVuZ3RoICE9PSAyKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyB2YWxpZGF0ZSB0eXBlXG4gIGlmIChleHBlY3RlZFBhcnRzWzBdICE9PSAnKicgJiYgZXhwZWN0ZWRQYXJ0c1swXSAhPT0gYWN0dWFsUGFydHNbMF0pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIC8vIHZhbGlkYXRlIHN1ZmZpeCB3aWxkY2FyZFxuICBpZiAoZXhwZWN0ZWRQYXJ0c1sxXS5zdWJzdHIoMCwgMikgPT09ICcqKycpIHtcbiAgICByZXR1cm4gZXhwZWN0ZWRQYXJ0c1sxXS5sZW5ndGggPD0gYWN0dWFsUGFydHNbMV0ubGVuZ3RoICsgMSAmJlxuICAgICAgZXhwZWN0ZWRQYXJ0c1sxXS5zdWJzdHIoMSkgPT09IGFjdHVhbFBhcnRzWzFdLnN1YnN0cigxIC0gZXhwZWN0ZWRQYXJ0c1sxXS5sZW5ndGgpXG4gIH1cblxuICAvLyB2YWxpZGF0ZSBzdWJ0eXBlXG4gIGlmIChleHBlY3RlZFBhcnRzWzFdICE9PSAnKicgJiYgZXhwZWN0ZWRQYXJ0c1sxXSAhPT0gYWN0dWFsUGFydHNbMV0pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB0cnVlXG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgdHlwZSBhbmQgcmVtb3ZlIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVR5cGUgKHZhbHVlKSB7XG4gIC8vIHBhcnNlIHRoZSB0eXBlXG4gIHZhciB0eXBlID0gdHlwZXIucGFyc2UodmFsdWUpXG5cbiAgLy8gcmVtb3ZlIHRoZSBwYXJhbWV0ZXJzXG4gIHR5cGUucGFyYW1ldGVycyA9IHVuZGVmaW5lZFxuXG4gIC8vIHJlZm9ybWF0IGl0XG4gIHJldHVybiB0eXBlci5mb3JtYXQodHlwZSlcbn1cblxuLyoqXG4gKiBUcnkgdG8gbm9ybWFsaXplIGEgdHlwZSBhbmQgcmVtb3ZlIHBhcmFtZXRlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHRyeU5vcm1hbGl6ZVR5cGUgKHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZVR5cGUodmFsdWUpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsIi8qIVxuICogdmFyeVxuICogQ29weXJpZ2h0KGMpIDIwMTQtMjAxNyBEb3VnbGFzIENocmlzdG9waGVyIFdpbHNvblxuICogTUlUIExpY2Vuc2VkXG4gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB2YXJ5XG5tb2R1bGUuZXhwb3J0cy5hcHBlbmQgPSBhcHBlbmRcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggZmllbGQtbmFtZSBpbiBSRkMgNzIzMCBzZWMgMy4yXG4gKlxuICogZmllbGQtbmFtZSAgICA9IHRva2VuXG4gKiB0b2tlbiAgICAgICAgID0gMSp0Y2hhclxuICogdGNoYXIgICAgICAgICA9IFwiIVwiIC8gXCIjXCIgLyBcIiRcIiAvIFwiJVwiIC8gXCImXCIgLyBcIidcIiAvIFwiKlwiXG4gKiAgICAgICAgICAgICAgIC8gXCIrXCIgLyBcIi1cIiAvIFwiLlwiIC8gXCJeXCIgLyBcIl9cIiAvIFwiYFwiIC8gXCJ8XCIgLyBcIn5cIlxuICogICAgICAgICAgICAgICAvIERJR0lUIC8gQUxQSEFcbiAqICAgICAgICAgICAgICAgOyBhbnkgVkNIQVIsIGV4Y2VwdCBkZWxpbWl0ZXJzXG4gKi9cblxudmFyIEZJRUxEX05BTUVfUkVHRVhQID0gL15bISMkJSYnKitcXC0uXl9gfH4wLTlBLVphLXpdKyQvXG5cbi8qKlxuICogQXBwZW5kIGEgZmllbGQgdG8gYSB2YXJ5IGhlYWRlci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVyXG4gKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gZmllbGRcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBhcHBlbmQgKGhlYWRlciwgZmllbGQpIHtcbiAgaWYgKHR5cGVvZiBoZWFkZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignaGVhZGVyIGFyZ3VtZW50IGlzIHJlcXVpcmVkJylcbiAgfVxuXG4gIGlmICghZmllbGQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdmaWVsZCBhcmd1bWVudCBpcyByZXF1aXJlZCcpXG4gIH1cblxuICAvLyBnZXQgZmllbGRzIGFycmF5XG4gIHZhciBmaWVsZHMgPSAhQXJyYXkuaXNBcnJheShmaWVsZClcbiAgICA/IHBhcnNlKFN0cmluZyhmaWVsZCkpXG4gICAgOiBmaWVsZFxuXG4gIC8vIGFzc2VydCBvbiBpbnZhbGlkIGZpZWxkIG5hbWVzXG4gIGZvciAodmFyIGogPSAwOyBqIDwgZmllbGRzLmxlbmd0aDsgaisrKSB7XG4gICAgaWYgKCFGSUVMRF9OQU1FX1JFR0VYUC50ZXN0KGZpZWxkc1tqXSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZpZWxkIGFyZ3VtZW50IGNvbnRhaW5zIGFuIGludmFsaWQgaGVhZGVyIG5hbWUnKVxuICAgIH1cbiAgfVxuXG4gIC8vIGV4aXN0aW5nLCB1bnNwZWNpZmllZCB2YXJ5XG4gIGlmIChoZWFkZXIgPT09ICcqJykge1xuICAgIHJldHVybiBoZWFkZXJcbiAgfVxuXG4gIC8vIGVudW1lcmF0ZSBjdXJyZW50IHZhbHVlc1xuICB2YXIgdmFsID0gaGVhZGVyXG4gIHZhciB2YWxzID0gcGFyc2UoaGVhZGVyLnRvTG93ZXJDYXNlKCkpXG5cbiAgLy8gdW5zcGVjaWZpZWQgdmFyeVxuICBpZiAoZmllbGRzLmluZGV4T2YoJyonKSAhPT0gLTEgfHwgdmFscy5pbmRleE9mKCcqJykgIT09IC0xKSB7XG4gICAgcmV0dXJuICcqJ1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWVsZHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZmxkID0gZmllbGRzW2ldLnRvTG93ZXJDYXNlKClcblxuICAgIC8vIGFwcGVuZCB2YWx1ZSAoY2FzZS1wcmVzZXJ2aW5nKVxuICAgIGlmICh2YWxzLmluZGV4T2YoZmxkKSA9PT0gLTEpIHtcbiAgICAgIHZhbHMucHVzaChmbGQpXG4gICAgICB2YWwgPSB2YWxcbiAgICAgICAgPyB2YWwgKyAnLCAnICsgZmllbGRzW2ldXG4gICAgICAgIDogZmllbGRzW2ldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG4vKipcbiAqIFBhcnNlIGEgdmFyeSBoZWFkZXIgaW50byBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVyXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2UgKGhlYWRlcikge1xuICB2YXIgZW5kID0gMFxuICB2YXIgbGlzdCA9IFtdXG4gIHZhciBzdGFydCA9IDBcblxuICAvLyBnYXRoZXIgdG9rZW5zXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBoZWFkZXIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBzd2l0Y2ggKGhlYWRlci5jaGFyQ29kZUF0KGkpKSB7XG4gICAgICBjYXNlIDB4MjA6IC8qICAgKi9cbiAgICAgICAgaWYgKHN0YXJ0ID09PSBlbmQpIHtcbiAgICAgICAgICBzdGFydCA9IGVuZCA9IGkgKyAxXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgMHgyYzogLyogLCAqL1xuICAgICAgICBsaXN0LnB1c2goaGVhZGVyLnN1YnN0cmluZyhzdGFydCwgZW5kKSlcbiAgICAgICAgc3RhcnQgPSBlbmQgPSBpICsgMVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZW5kID0gaSArIDFcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICAvLyBmaW5hbCB0b2tlblxuICBsaXN0LnB1c2goaGVhZGVyLnN1YnN0cmluZyhzdGFydCwgZW5kKSlcblxuICByZXR1cm4gbGlzdFxufVxuXG4vKipcbiAqIE1hcmsgdGhhdCBhIHJlcXVlc3QgaXMgdmFyaWVkIG9uIGEgaGVhZGVyIGZpZWxkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZXNcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fSBmaWVsZFxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHZhcnkgKHJlcywgZmllbGQpIHtcbiAgaWYgKCFyZXMgfHwgIXJlcy5nZXRIZWFkZXIgfHwgIXJlcy5zZXRIZWFkZXIpIHtcbiAgICAvLyBxdWFjayBxdWFja1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3JlcyBhcmd1bWVudCBpcyByZXF1aXJlZCcpXG4gIH1cblxuICAvLyBnZXQgZXhpc3RpbmcgaGVhZGVyXG4gIHZhciB2YWwgPSByZXMuZ2V0SGVhZGVyKCdWYXJ5JykgfHwgJydcbiAgdmFyIGhlYWRlciA9IEFycmF5LmlzQXJyYXkodmFsKVxuICAgID8gdmFsLmpvaW4oJywgJylcbiAgICA6IFN0cmluZyh2YWwpXG5cbiAgLy8gc2V0IG5ldyBoZWFkZXJcbiAgaWYgKCh2YWwgPSBhcHBlbmQoaGVhZGVyLCBmaWVsZCkpKSB7XG4gICAgcmVzLnNldEhlYWRlcignVmFyeScsIHZhbClcbiAgfVxufVxuIiwiaW1wb3J0IHsgYXBwIH0gZnJvbSBcIkBCb25ib25zXCI7XG5cbmFwcC51c2UoYXN5bmMgKGN0eCkgPT4ge1xuICBjdHguYm9keSA9IFwiaGVsbG8ga29hMlwiO1xufSk7XG5cbmFwcC5saXN0ZW4oMzAwMCk7XG5jb25zb2xlLmxvZyhcIltkZW1vXSBzdGFydC1xdWljayBpcyBzdGFydGluZyBhdCBwb3J0IDMwMDBcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3J5cHRvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV2ZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5ldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5c3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmVhbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0dHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
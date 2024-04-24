"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames2=_interopRequireDefault(require("../helpers/libs/classNames")),_utils=require("./utils");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ownKeys(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(n,!0).forEach(function(e){_defineProperty(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _toptips=null;(0,_baseComponent.default)({useFunc:!0,data:_utils.defaults,computed:{classes:["prefixCls, icon",function(e,t){var n=t||"cancel";return{wrap:(0,_classNames2.default)(e),content:(0,_classNames2.default)("".concat(e,"__content"),_defineProperty({},"".concat(e,"__content--").concat(n),n)),icon:"".concat(e,"__icon"),text:"".concat(e,"__text")}}]},methods:{hide:function(){if(this.removed)return!1;this.removed=!0,_toptips&&(clearTimeout(_toptips.timeout),_toptips=null),this.$$setData({in:!1}),"function"==typeof this.fns.success&&this.fns.success()},show:function(e){function t(){_toptips&&_toptips.hide.call(n)}var n=this,r=0<arguments.length&&void 0!==e?e:{},o=new Promise(function(e){var t=n.$$mergeOptionsAndBindMethods(Object.assign({},_utils.defaults,r));n.removed=!1,n.$$setData(_objectSpread({in:!0},t)),_toptips&&(clearTimeout(_toptips.timeout),_toptips=null),(_toptips={hide:n.hide}).timeout=setTimeout(function(){return n.hide(),e(!0)},t.duration)});return t.then=function(e,t){return o.then(e,t)},t.promise=o,t},success:function(e){var t=0<arguments.length&&void 0!==e?e:{};return this.show(Object.assign(_objectSpread({},t,{icon:"success"})))},info:function(e){var t=0<arguments.length&&void 0!==e?e:{};return this.show(Object.assign(_objectSpread({},t,{icon:"info"})))},warn:function(e){var t=0<arguments.length&&void 0!==e?e:{};return this.show(Object.assign(_objectSpread({},t,{icon:"warn"})))},error:function(e){var t=0<arguments.length&&void 0!==e?e:{};return this.show(Object.assign(_objectSpread({},t,{icon:"cancel"})))}}});
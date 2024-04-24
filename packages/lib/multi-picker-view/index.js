"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames=_interopRequireDefault(require("../helpers/libs/classNames")),_shallowEqual=_interopRequireDefault(require("../helpers/libs/shallowEqual")),_fieldNamesBehavior=_interopRequireDefault(require("../helpers/mixins/fieldNamesBehavior")),_props=require("./props"),_utils=require("./utils");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function ownKeys(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,a)}return r}function _objectSpread(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(r,!0).forEach(function(e){_defineProperty(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,_baseComponent.default)({behaviors:[_fieldNamesBehavior.default],properties:_props.props,data:{inputValue:[],cols:[]},observers:_defineProperty({},"value, options",function(e,t){var r=this.getFieldNames(),a=(0,_utils.getRealCols)(t,r);(0,_shallowEqual.default)(this.data.cols,a)||this.setData({cols:a}),this.setValue(e,!0)}),methods:{updated:function(e,t){this.data.inputValue===e&&!t||this.setData({inputValue:e})},setValue:function(e,t){var r=this.getValue(e).value;this.updated(r,t)},getValue:function(e,t){var r=0<arguments.length&&void 0!==e?e:this.data.inputValue,a=1<arguments.length&&void 0!==t?t:this.data.cols,n=this.getFieldNames(),i=(0,_utils.getRealValues)(Array.isArray(r)?r:[],a,n),o=_toConsumableArray(i),l=(0,_utils.getIndexesFromValues)(i,a,n);return{value:i,displayValue:(0,_utils.getLabelsFromIndexes)(l,a,n.label),selectedIndex:l,selectedValue:o,cols:a}},onChange:function(e,t,r){var a=_toConsumableArray(this.data.inputValue);a[e]=t,r&&this.triggerEvent(r,_objectSpread({},this.getValue(a),{index:e}))},onBeforeChange:function(e){var t=e.detail.value,r=e.currentTarget.dataset.index;this.onChange(r,t,"beforeChange")},onValueChange:function(e){var t=e.detail.value,r=e.currentTarget.dataset.index;this.onChange(r,t,"valueChange")},onScrollChange:function(e){var t=e.detail.value,r=e.currentTarget.dataset.index;this.onChange(r,t,"scrollChange")}},attached:function(){var e=this.data,t=e.value,r=e.options,a=this.getFieldNames(),n=(0,_utils.getRealCols)(r,a);this.setData({cols:n}),this.setValue(t)}});
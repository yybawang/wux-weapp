"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames2=_interopRequireDefault(require("../helpers/libs/classNames"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,_baseComponent.default)({relations:{"../tabbar/index":{type:"parent"}},properties:{prefixCls:{type:String,value:"wux-tabbar-item"},key:{type:String,value:""},title:{type:String,value:""},disabled:{type:Boolean,value:!1}},data:{width:"100%",current:!1,index:"0"},computed:{classes:["prefixCls, theme, current, disabled",function(e,t,r,n){var a;return{wrap:(0,_classNames2.default)(e,(_defineProperty(a={},"".concat(e,"--").concat(t),t),_defineProperty(a,"".concat(e,"--current"),r),_defineProperty(a,"".concat(e,"--disabled"),n),a)),icon:"".concat(e,"__icon"),title:"".concat(e,"__title")}}]},methods:{changeCurrent:function(e,t,r,n){var a=100/n+"%";this.setData({width:a,current:e,theme:r,index:t})},onTap:function(){var e=this.data,t=e.index,r=e.disabled,n=this.getRelationsByName("../tabbar/index")[0];!r&&n&&(this.triggerEvent("click",{index:t}),n.setActiveKey(t))}}});
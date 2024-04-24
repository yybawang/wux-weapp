"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getVisibleItemBounds=exports.mapVirtualToProps=void 0;var _styleToCssString=_interopRequireDefault(require("../helpers/libs/styleToCssString"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var mapVirtualToProps=function(e,t){var r=e.items,i=e.itemHeight,s=t.startIndex,o=t.endIndex,a=-1<o?r.slice(s,o+1):[],n=r.length*i;return{virtual:{items:a,style:(0,_styleToCssString.default)({boxSizing:"border-box",width:"100%",height:n})}}};exports.mapVirtualToProps=mapVirtualToProps;var getVisibleItemBounds=function(e,t,r,i,s){var o=Math.max(0,e),a=Math.max(0,Math.floor(o/i));return{startIndex:a,endIndex:Math.min(a+Math.ceil(t/i)+s-1,r)}};exports.getVisibleItemBounds=getVisibleItemBounds;
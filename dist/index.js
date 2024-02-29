"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var o=c(function(w,s){
var l=require('@stdlib/assert-is-object/dist'),m=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,f=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function p(r,e,i,v){var a,u,t;if(!l(r))throw new TypeError(n('null3L',r));if(!m(e))throw new TypeError(n('null45',e));if(!f(i))throw new TypeError(n('null3N',i));a=0;for(t in r)if((Object.prototype.hasOwnProperty.call(r,t)||Object.prototype.hasOwnProperty.call(Object.getPrototypeOf(r),t))&&(u=i.call(v,r[t],t,r),u&&(a+=1,a===e)))return!0;return!1}s.exports=p
});var y=o();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

System.register(["./p-ea9af1c8.system.js"],(function(e){"use strict";var r,t,n,i;return{setters:[function(e){r=e.r;t=e.h;n=e.d;i=e.H}],execute:function(){var o=function(e,r,t,n){var i=e.closest("ion-nav");if(i){if(r==="forward"){if(t!==undefined){return i.push(t,n,{skipIfBusy:true})}}else if(r==="root"){if(t!==undefined){return i.setRoot(t,n,{skipIfBusy:true})}}else if(r==="back"){return i.pop({skipIfBusy:true})}}return Promise.resolve(false)};var u=e("ion_nav_link",function(){function e(e){var t=this;r(this,e);this.routerDirection="forward";this.onClick=function(){return o(t.el,t.routerDirection,t.component,t.componentProps)}}e.prototype.render=function(){return t(i,{onClick:this.onClick})};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return e}())}}}));
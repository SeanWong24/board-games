var __awaiter=this&&this.__awaiter||function(e,n,r,t){function i(e){return e instanceof r?e:new r((function(n){n(e)}))}return new(r||(r=Promise))((function(r,a){function o(e){try{s(t.next(e))}catch(n){a(n)}}function u(e){try{s(t["throw"](e))}catch(n){a(n)}}function s(e){e.done?r(e.value):i(e.value).then(o,u)}s((t=t.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(n){return s([e,n])}}function s(o){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=n.call(e,r)}catch(u){o=[6,u];i=0}finally{t=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,n=0,r=arguments.length;n<r;n++)e+=arguments[n].length;for(var t=Array(e),i=0,n=0;n<r;n++)for(var a=arguments[n],o=0,u=a.length;o<u;o++,i++)t[i]=a[o];return t};System.register(["./p-49d0d9dd.system.js","./p-506cc8db.system.js"],(function(e){"use strict";var n,r,t;return{setters:[function(e){n=e.g;r=e.c},function(e){t=e.OVERLAY_BACK_BUTTON_PRIORITY}],execute:function(){var i=this;var a=0;var o=e("c",new WeakMap);var u=function(e){return{create:function(n){return v(e,n)},dismiss:function(n,r,t){return h(document,n,r,e,t)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,y(document,e)]}))}))}}};var s=e("h",u("ion-alert"));var c=e("g",u("ion-action-sheet"));var f=e("b",u("ion-picker"));var l=e("f",u("ion-popover"));var d=e("p",(function(e){var n=document;p(n);var r=a++;e.overlayIndex=r;if(!e.hasAttribute("id")){e.id="ion-overlay-"+r}}));var v=function(e,n){return customElements.whenDefined(e).then((function(){var r=document;var t=r.createElement(e);t.classList.add("overlay-hidden");Object.assign(t,n);w(r).appendChild(t);return t.componentOnReady()}))};var p=function(e){if(a===0){a=1;e.addEventListener("focusin",(function(n){var r=y(e);if(r&&r.backdropDismiss&&!x(r,n.target)){var t=r.querySelector("input,button");if(t){t.focus()}}}));e.addEventListener("ionBackButton",(function(n){var r=y(e);if(r&&r.backdropDismiss){n.detail.register(t,(function(){return r.dismiss(undefined,B)}))}}));e.addEventListener("keyup",(function(n){if(n.key==="Escape"){var r=y(e);if(r&&r.backdropDismiss){r.dismiss(undefined,B)}}}))}};var h=function(e,n,r,t,i){var a=y(e,t,i);if(!a){return Promise.reject("overlay does not exist")}return a.dismiss(n,r)};var m=function(e,n){if(n===undefined){n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(n)).filter((function(e){return e.overlayIndex>0}))};var y=function(e,n,r){var t=m(e,n);return r===undefined?t[t.length-1]:t.find((function(e){return e.id===r}))};var _=e("a",(function(e,t,a,o,u){return __awaiter(i,void 0,void 0,(function(){var i,s,c;return __generator(this,(function(f){switch(f.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();i=n(e);s=e.enterAnimation?e.enterAnimation:r.get(t,i==="ios"?a:o);return[4,g(e,s,e.el,u)];case 1:c=f.sent();if(c){e.didPresent.emit()}return[2]}}))}))}));var b=e("d",(function(e,t,a,u,s,c,f){return __awaiter(i,void 0,void 0,(function(){var i,l,d;return __generator(this,(function(v){switch(v.label){case 0:if(!e.presented){return[2,false]}e.presented=false;v.label=1;case 1:v.trys.push([1,4,,5]);e.willDismiss.emit({data:t,role:a});i=n(e);l=e.leaveAnimation?e.leaveAnimation:r.get(u,i==="ios"?s:c);if(!(a!=="gesture"))return[3,3];return[4,g(e,l,e.el,f)];case 2:v.sent();v.label=3;case 3:e.didDismiss.emit({data:t,role:a});o.delete(e);return[3,5];case 4:d=v.sent();console.error(d);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var w=function(e){return e.querySelector("ion-app")||e.body};var g=function(e,n,t,a){return __awaiter(i,void 0,void 0,(function(){var i,u,s;return __generator(this,(function(c){switch(c.label){case 0:t.classList.remove("overlay-hidden");i=t.shadowRoot||e.el;u=n(i,a);if(!e.animated||!r.getBoolean("animated",true)){u.duration(0)}if(e.keyboardClose){u.beforeAddWrite((function(){var e=t.ownerDocument.activeElement;if(e&&e.matches("input, ion-input, ion-textarea")){e.blur()}}))}s=o.get(e)||[];o.set(e,__spreadArrays(s,[u]));return[4,u.play()];case 1:c.sent();return[2,true]}}))}))};var k=e("e",(function(e,n){var r;var t=new Promise((function(e){return r=e}));A(e,n,(function(e){r(e.detail)}));return t}));var A=function(e,n,r){var t=function(i){e.removeEventListener(n,t);r(i)};e.addEventListener(n,t)};var E=e("i",(function(e){return e==="cancel"||e===B}));var x=function(e,n){while(n){if(n===e){return true}n=n.parentElement}return false};var L=function(e){return e()};var D=e("s",(function(e,n){if(typeof e==="function"){var t=r.get("_zoneGate",L);return t((function(){try{return e(n)}catch(r){console.error(r)}}))}return undefined}));var B=e("B","backdrop")}}}));
var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function a(e){try{c(r.next(e))}catch(t){o(t)}}function u(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(a,u)}c((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(t){return c([e,t])}}function c(a){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=a[0]&2?i["return"]:a[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;if(i=0,o)a=[a[0]&2,o.value];switch(a[0]){case 0:case 1:o=a;break;case 4:n.label++;return{value:a[1],done:false};case 5:n.label++;i=a[1];a=[0];continue;case 7:a=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!o||a[1]>o[0]&&a[1]<o[3])){n.label=a[1];break}if(a[0]===6&&n.label<o[1]){n.label=o[1];o=a;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(a);break}if(o[2])n.ops.pop();n.trys.pop();continue}a=t.call(e,n)}catch(u){a=[6,u];i=0}finally{r=o=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-ea9af1c8.system.js","./p-c50dc49a.system.js"],(function(e){"use strict";var t,n,r,i,o;return{setters:[function(e){t=e.r;n=e.h;r=e.H;i=e.d},function(e){o=e.a}],execute:function(){var a=":host(.tab-hidden){display:none !important}";var u=e("ion_tab",function(){function e(e){t(this,e);this.loaded=false;this.active=false}e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:if(!this.active)return[3,2];return[4,this.setActive()];case 1:e.sent();e.label=2;case 2:return[2]}}))}))};e.prototype.setActive=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.prepareLazyLoaded()];case 1:e.sent();this.active=true;return[2]}}))}))};e.prototype.changeActive=function(e){if(e){this.prepareLazyLoaded()}};e.prototype.prepareLazyLoaded=function(){if(!this.loaded&&this.component!=null){this.loaded=true;try{return o(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(undefined)};e.prototype.render=function(){var e=this,t=e.tab,i=e.active,o=e.component;return n(r,{role:"tabpanel","aria-hidden":!i?"true":null,"aria-labelledby":"tab-button-"+t,class:{"ion-page":o===undefined,"tab-hidden":!i}},n("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{active:["changeActive"]}},enumerable:true,configurable:true});return e}());u.style=a}}}));
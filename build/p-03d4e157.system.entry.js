System.register(["./p-353c9836.system.js"],(function(e){"use strict";var n,t,r;return{setters:[function(e){n=e.r;t=e.h;r=e.H}],execute:function(){var i=".sc-app-chat-h{display:block}";var a=e("app_chat",function(){function e(e){n(this,e)}e.prototype.render=function(){var e=this;var n;this.updateReadMessageCount(this.messageList.length);return t(r,null,t("ion-header",null,t("ion-toolbar",{color:"primary"},t("ion-title",null,"Chat"))),t("ion-content",null,(n=this.messageList)===null||n===void 0?void 0:n.map((function(e){return t("ion-card",null,t("ion-card-header",null,t("ion-card-subtitle",null,e.nickname)),t("ion-card-content",null,e.message))}))),t("ion-item",null,t("ion-textarea",{ref:function(n){return e.textareaElement=n},rows:3,placeholder:"Enter your message here"})),t("ion-button",{onClick:function(){return e.sendMessage(e.textareaElement.value)}},"Send"))};return e}());a.style=i}}}));
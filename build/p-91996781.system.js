System.register(["./p-ea9af1c8.system.js"],(function(t){"use strict";var n,e;return{setters:[function(t){n=t.e;e=t.w}],execute:function(){var r=t("startStatusTap",(function(){var t=window;t.addEventListener("statusTap",(function(){n((function(){var n=t.innerWidth;var r=t.innerHeight;var i=document.elementFromPoint(n/2,r/2);if(!i){return}var o=i.closest("ion-content");if(o){o.componentOnReady().then((function(){e((function(){return o.scrollToTop(300)}))}))}}))}))}))}}}));
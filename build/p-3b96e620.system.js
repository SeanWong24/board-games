System.register(["./p-ea9af1c8.system.js","./p-bca14043.system.js","./p-15a788f7.system.js","./p-4c054d59.system.js"],(function(a){"use strict";var e,t;return{setters:[function(){},function(){},function(a){e=a.c},function(a){t=a.g}],execute:function(){var n=a("mdTransitionAnimation",(function(a,n){var r="40px";var i="0px";var o=n.direction==="back";var s=n.enteringEl;var c=n.leavingEl;var f=t(s);var u=f.querySelector("ion-toolbar");var d=e();d.addElement(f).fill("both").beforeRemoveClass("ion-page-invisible");if(o){d.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)")}else{d.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY("+r+")","translateY("+i+")").fromTo("opacity",.01,1)}if(u){var l=e();l.addElement(u);d.addAnimation(l)}if(c&&o){d.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var m=e();m.addElement(t(c)).afterStyles({display:"none"}).fromTo("transform","translateY("+i+")","translateY("+r+")").fromTo("opacity",1,0);d.addAnimation(m)}return d}))}}}));
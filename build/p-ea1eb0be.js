import{g as o,c as t}from"./p-5da6f87a.js";import{OVERLAY_BACK_BUTTON_PRIORITY as n}from"./p-7261e130.js";let e=0;const a=new WeakMap,s=o=>({create:t=>p(o,t),dismiss:(t,n,e)=>m(document,t,n,o,e),getTop:async()=>f(document,o)}),i=s("ion-alert"),r=s("ion-action-sheet"),c=s("ion-picker"),u=s("ion-popover"),d=o=>{const t=document;l(t);const n=e++;o.overlayIndex=n,o.hasAttribute("id")||(o.id=`ion-overlay-${n}`)},p=(o,t)=>customElements.whenDefined(o).then(()=>{const n=document,e=n.createElement(o);return e.classList.add("overlay-hidden"),Object.assign(e,t),h(n).appendChild(e),e.componentOnReady()}),l=o=>{0===e&&(e=1,o.addEventListener("focusin",t=>{const n=f(o);if(n&&n.backdropDismiss&&!j(n,t.target)){const o=n.querySelector("input,button");o&&o.focus()}}),o.addEventListener("ionBackButton",t=>{const e=f(o);e&&e.backdropDismiss&&t.detail.register(n,()=>e.dismiss(void 0,E))}),o.addEventListener("keyup",t=>{if("Escape"===t.key){const t=f(o);t&&t.backdropDismiss&&t.dismiss(void 0,E)}}))},m=(o,t,n,e,a)=>{const s=f(o,e,a);return s?s.dismiss(t,n):Promise.reject("overlay does not exist")},f=(o,t,n)=>{const e=((o,t)=>(void 0===t&&(t="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"),Array.from(o.querySelectorAll(t)).filter(o=>o.overlayIndex>0)))(o,t);return void 0===n?e[e.length-1]:e.find(o=>o.id===n)},y=async(n,e,a,s,i)=>{if(n.presented)return;n.presented=!0,n.willPresent.emit();const r=o(n),c=n.enterAnimation?n.enterAnimation:t.get(e,"ios"===r?a:s);await k(n,c,n.el,i)&&n.didPresent.emit()},v=async(n,e,s,i,r,c,u)=>{if(!n.presented)return!1;n.presented=!1;try{n.willDismiss.emit({data:e,role:s});const d=o(n),p=n.leaveAnimation?n.leaveAnimation:t.get(i,"ios"===d?r:c);"gesture"!==s&&await k(n,p,n.el,u),n.didDismiss.emit({data:e,role:s}),a.delete(n)}catch(d){console.error(d)}return n.el.remove(),!0},h=o=>o.querySelector("ion-app")||o.body,k=async(o,n,e,s)=>{e.classList.remove("overlay-hidden");const i=n(e.shadowRoot||o.el,s);o.animated&&t.getBoolean("animated",!0)||i.duration(0),o.keyboardClose&&i.beforeAddWrite(()=>{const o=e.ownerDocument.activeElement;o&&o.matches("input, ion-input, ion-textarea")&&o.blur()});const r=a.get(o)||[];return a.set(o,[...r,i]),await i.play(),!0},g=(o,t)=>{let n;const e=new Promise(o=>n=o);return w(o,t,o=>{n(o.detail)}),e},w=(o,t,n)=>{const e=a=>{o.removeEventListener(t,e),n(a)};o.addEventListener(t,e)},b=o=>"cancel"===o||o===E,j=(o,t)=>{for(;t;){if(t===o)return!0;t=t.parentElement}return!1},x=o=>o(),B=(o,n)=>{if("function"==typeof o)return t.get("_zoneGate",x)(()=>{try{return o(n)}catch(t){console.error(t)}})},E="backdrop";export{E as B,y as a,c as b,a as c,v as d,g as e,u as f,r as g,i as h,b as i,d as p,B as s}
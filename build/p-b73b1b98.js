import{createGesture as t}from"./p-78321f41.js";import{c as o}from"./p-f1913487.js";const r=(r,e,s,n,a)=>{const c=r.ownerDocument.defaultView;return t({el:r,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&e(),onStart:s,onMove:t=>{n(t.deltaX/c.innerWidth)},onEnd:t=>{const r=c.innerWidth,e=t.deltaX/r,s=t.velocityX,n=s>=0&&(s>.2||t.deltaX>r/2),i=(n?1-e:e)*r;let p=0;if(i>5){const t=i/Math.abs(s);p=Math.min(t,540)}a(n,e<=0?.01:o(0,e,.9999),p)}})};export{r as createSwipeBackGesture}
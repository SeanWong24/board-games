import"./p-254cd0e5.js";import"./p-f1913487.js";import{c as t}from"./p-56193620.js";import{g as o}from"./p-0bd0a467.js";const r=(r,i)=>{const a="back"===i.direction,s=i.leavingEl,p=o(i.enteringEl),e=p.querySelector("ion-toolbar"),n=t();if(n.addElement(p).fill("both").beforeRemoveClass("ion-page-invisible"),a?n.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):n.duration(i.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),e){const o=t();o.addElement(e),n.addAnimation(o)}if(s&&a){n.duration(i.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const r=t();r.addElement(o(s)).afterStyles({display:"none"}).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),n.addAnimation(r)}return n};export{r as mdTransitionAnimation}
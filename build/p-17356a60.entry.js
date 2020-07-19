import{r as o,c as t,h as r,H as a,d as n}from"./p-254cd0e5.js";import{g as i}from"./p-5da6f87a.js";import{h as e,o as s,c}from"./p-5b51185b.js";const l=class{constructor(r){o(this,r),this.activated=!1,this.disabled=!1,this.routerDirection="forward",this.show=!1,this.translucent=!1,this.type="button",this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionFocus=t(this,"ionFocus",7),this.ionBlur=t(this,"ionBlur",7)}render(){const{el:o,disabled:t,color:n,href:l,activated:b,show:d,translucent:p,size:u}=this,f=e("ion-fab-list",o),h=i(this),g=void 0===l?"button":"a",v="button"===g?{type:this.type}:{download:this.download,href:l,rel:this.rel,target:this.target};return r(a,{"aria-disabled":t?"true":null,class:Object.assign(Object.assign({},c(n)),{[h]:!0,"fab-button-in-list":f,"fab-button-translucent-in-list":f&&p,"fab-button-close-active":b,"fab-button-show":d,"fab-button-disabled":t,"fab-button-translucent":p,"ion-activatable":!0,"ion-focusable":!0,[`fab-button-${u}`]:void 0!==u})},r(g,Object.assign({},v,{class:"button-native",disabled:t,onFocus:this.onFocus,onBlur:this.onBlur,onClick:o=>s(l,o,this.routerDirection)}),r("span",{class:"close-icon"},r("ion-icon",{name:"close",lazy:!1})),r("span",{class:"button-inner"},r("slot",null)),"md"===h&&r("ion-ripple-effect",null)))}get el(){return n(this)}};l.style={ios:':host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.fab-button-small){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.close-icon{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transform:scale(0.4) rotateZ(-45deg);transform:scale(0.4) rotateZ(-45deg);-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;opacity:0;z-index:1}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotateZ(0deg);transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(0.4) rotateZ(45deg);transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #3880ff);--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59)}:host(.ion-activated){--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transform:scale(1.1);--transition:0.2s transform ease-out}::slotted(ion-icon),.close-icon{font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light, #f4f5f8);--background-activated:var(--ion-color-light-shade, #d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint, #f5f6f9);--color:var(--ion-color-light-contrast, #000);--color-activated:var(--ion-color-light-contrast, #000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms, opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}:host(.ion-color.ion-focused) .button-native,:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after,:host(.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.9);--background-hover:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.8);--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.9);--background-hover:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.8);--background-focused:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.82)}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){@media (any-hover: hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb), 0.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb), 0.9)}:host(.ion-color.ion-focused.fab-button-translucent) .button-native,:host(.ion-color.ion-activated.fab-button-translucent) .button-native{background:var(--ion-color-base)}}'};export{l as ion_fab_button}
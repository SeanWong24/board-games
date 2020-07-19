import{r as t,c as i,f as r,h as e,H as o,d as a}from"./p-254cd0e5.js";import{g as n}from"./p-5da6f87a.js";import"./p-f1913487.js";import{g as s}from"./p-5b51185b.js";import"./p-7261e130.js";import{c as l}from"./p-56193620.js";import{B as c,i as d,p,a as b,d as h,e as g,s as u}from"./p-ea1eb0be.js";import{s as x}from"./p-3f998c08.js";const f=t=>{const i=l(),r=l(),e=l();return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e.addElement(t.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:"0.01",transform:"scale(1.1)"},{offset:1,opacity:"1",transform:"scale(1)"}]),i.addElement(t).easing("ease-in-out").duration(200).addAnimation([r,e])},m=t=>{const i=l(),r=l(),e=l();return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(t.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),i.addElement(t).easing("ease-in-out").duration(200).addAnimation([r,e])},k=t=>{const i=l(),r=l(),e=l();return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),e.addElement(t.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:"0.01",transform:"scale(0.9)"},{offset:1,opacity:"1",transform:"scale(1)"}]),i.addElement(t).easing("ease-in-out").duration(150).addAnimation([r,e])},w=t=>{const i=l(),r=l(),e=l();return r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),e.addElement(t.querySelector(".alert-wrapper")).fromTo("opacity",.99,0),i.addElement(t).easing("ease-in-out").duration(150).addAnimation([r,e])},v=class{constructor(r){t(this,r),this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,c)},this.dispatchCancelHandler=t=>{if(d(t.detail.role)){const t=this.processedButtons.find(t=>"cancel"===t.role);this.callButtonHandler(t)}},p(this.el),this.didPresent=i(this,"ionAlertDidPresent",7),this.willPresent=i(this,"ionAlertWillPresent",7),this.willDismiss=i(this,"ionAlertWillDismiss",7),this.didDismiss=i(this,"ionAlertDidDismiss",7)}buttonsChanged(){this.processedButtons=this.buttons.map(t=>"string"==typeof t?{text:t,role:"cancel"===t.toLowerCase()?"cancel":void 0}:t)}inputsChanged(){const t=this.inputs,i=new Set(t.map(t=>t.type));i.has("checkbox")&&i.has("radio")&&console.warn(`Alert cannot mix input types: ${Array.from(i.values()).join("/")}. Please see alert docs for more info.`),this.inputType=i.values().next().value,this.processedInputs=t.map((t,i)=>({type:t.type||"text",name:t.name||`${i}`,placeholder:t.placeholder||"",value:t.value,label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id||`alert-input-${this.overlayIndex}-${i}`,handler:t.handler,min:t.min,max:t.max}))}componentWillLoad(){this.inputsChanged(),this.buttonsChanged()}present(){return b(this,"alertEnter",f,k)}dismiss(t,i){return h(this,t,i,"alertLeave",m,w)}onDidDismiss(){return g(this.el,"ionAlertDidDismiss")}onWillDismiss(){return g(this.el,"ionAlertWillDismiss")}rbClick(t){for(const i of this.processedInputs)i.checked=i===t;this.activeId=t.id,u(t.handler,t),r(this)}cbClick(t){t.checked=!t.checked,u(t.handler,t),r(this)}buttonClick(t){const i=t.role,r=this.getValues();if(d(i))return this.dismiss({values:r},i);const e=this.callButtonHandler(t,r);return!1!==e?this.dismiss(Object.assign({values:r},e),t.role):Promise.resolve(!1)}callButtonHandler(t,i){if(t&&t.handler){const r=u(t.handler,i);if(!1===r)return!1;if("object"==typeof r)return r}return{}}getValues(){if(0===this.processedInputs.length)return;if("radio"===this.inputType){const t=this.processedInputs.find(t=>!!t.checked);return t?t.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(t=>t.checked).map(t=>t.value);const t={};return this.processedInputs.forEach(i=>{t[i.name]=i.value||""}),t}renderAlertInputs(t){switch(this.inputType){case"checkbox":return this.renderCheckbox(t);case"radio":return this.renderRadio(t);default:return this.renderInput(t)}}renderCheckbox(t){const i=this.processedInputs,r=n(this);return 0===i.length?null:e("div",{class:"alert-checkbox-group","aria-labelledby":t},i.map(t=>e("button",{type:"button",onClick:()=>this.cbClick(t),"aria-checked":`${t.checked}`,id:t.id,disabled:t.disabled,tabIndex:0,role:"checkbox",class:{"alert-tappable":!0,"alert-checkbox":!0,"alert-checkbox-button":!0,"ion-focusable":!0,"alert-checkbox-button-disabled":t.disabled||!1}},e("div",{class:"alert-button-inner"},e("div",{class:"alert-checkbox-icon"},e("div",{class:"alert-checkbox-inner"})),e("div",{class:"alert-checkbox-label"},t.label)),"md"===r&&e("ion-ripple-effect",null))))}renderRadio(t){const i=this.processedInputs;return 0===i.length?null:e("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":t,"aria-activedescendant":this.activeId},i.map(t=>e("button",{type:"button",onClick:()=>this.rbClick(t),"aria-checked":`${t.checked}`,disabled:t.disabled,id:t.id,tabIndex:0,class:{"alert-radio-button":!0,"alert-tappable":!0,"alert-radio":!0,"ion-focusable":!0,"alert-radio-button-disabled":t.disabled||!1},role:"radio"},e("div",{class:"alert-button-inner"},e("div",{class:"alert-radio-icon"},e("div",{class:"alert-radio-inner"})),e("div",{class:"alert-radio-label"},t.label)))))}renderInput(t){const i=this.processedInputs;return 0===i.length?null:e("div",{class:"alert-input-group","aria-labelledby":t},i.map(t=>e("div",{class:"alert-input-wrapper"},"textarea"===t.type?e("textarea",{placeholder:t.placeholder,value:t.value,onInput:i=>t.value=i.target.value,id:t.id,disabled:t.disabled,tabIndex:0,class:{"alert-input":!0,"alert-input-disabled":t.disabled||!1}}):e("input",{placeholder:t.placeholder,value:t.value,type:t.type,min:t.min,max:t.max,onInput:i=>t.value=i.target.value,id:t.id,disabled:t.disabled,tabIndex:0,class:{"alert-input":!0,"alert-input-disabled":t.disabled||!1}}))))}renderAlertButtons(){const t=this.processedButtons,i=n(this);return e("div",{class:{"alert-button-group":!0,"alert-button-group-vertical":t.length>2}},t.map(t=>e("button",{type:"button",class:y(t),tabIndex:0,onClick:()=>this.buttonClick(t)},e("span",{class:"alert-button-inner"},t.text),"md"===i&&e("ion-ripple-effect",null))))}render(){const{overlayIndex:t,header:i,subHeader:r}=this,a=n(this),l=`alert-${t}-hdr`,c=`alert-${t}-sub-hdr`,d=`alert-${t}-msg`;let p;return void 0!==i?p=l:void 0!==r&&(p=c),e(o,{role:"dialog","aria-modal":"true",style:{zIndex:`${2e4+t}`},class:Object.assign(Object.assign({},s(this.cssClass)),{[a]:!0,"alert-translucent":this.translucent}),onIonAlertWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap},e("ion-backdrop",{tappable:this.backdropDismiss}),e("div",{class:"alert-wrapper"},e("div",{class:"alert-head"},i&&e("h2",{id:l,class:"alert-title"},i),r&&e("h2",{id:c,class:"alert-sub-title"},r)),e("div",{id:d,class:"alert-message",innerHTML:x(this.message)}),this.renderAlertInputs(p),this.renderAlertButtons()))}get el(){return a(this)}static get watchers(){return{buttons:["buttonsChanged"],inputs:["inputsChanged"]}}},y=t=>Object.assign({"alert-button":!0,"ion-focusable":!0,"ion-activatable":!0},s(t.cssClass));v.style={ios:".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios,.alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-input-disabled.sc-ion-alert-ios,.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios,.alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios,.alert-checkbox.sc-ion-alert-ios,.alert-input.sc-ion-alert-ios,.alert-radio.sc-ion-alert-ios{outline:none}.alert-radio-icon.sc-ion-alert-ios,.alert-checkbox-icon.sc-ion-alert-ios,.alert-checkbox-inner.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-head.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color, #000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600, #666666);font-size:14px}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color, #000);font-size:13px;text-align:center}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;border:0.55px solid var(--ion-color-step-250, #bfbfbf);background-color:var(--ion-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-input.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-radio-group.sc-ion-alert-ios,.alert-checkbox-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-radio-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary, #3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary, #3880ff)}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios,[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}.alert-checkbox-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color, #000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-checkbox-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin-left:16px;margin-right:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));background-color:var(--ion-item-background, var(--ion-background-color, #fff));contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-checkbox-icon.sc-ion-alert-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px}}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color, #fff)}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios,[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}.alert-button-group.sc-ion-alert-ios{margin-right:-0.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.alert-button-group.sc-ion-alert-ios{margin-right:unset;-webkit-margin-end:-0.55px;margin-inline-end:-0.55px}}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:var(--ion-color-primary, #3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child,[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child{border-right:0}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:bold}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child,[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1)}"};export{v as ion_alert}
import{r as n,h as i,H as e}from"./p-254cd0e5.js";import{g as t,c as s}from"./p-5da6f87a.js";import{s as o}from"./p-3f998c08.js";const r=class{constructor(i){n(this,i)}componentDidLoad(){if(void 0===this.loadingSpinner){const n=t(this);this.loadingSpinner=s.get("infiniteLoadingSpinner",s.get("spinner","ios"===n?"lines":"crescent"))}}render(){const n=t(this);return i(e,{class:{[n]:!0,[`infinite-scroll-content-${n}`]:!0}},i("div",{class:"infinite-loading"},this.loadingSpinner&&i("div",{class:"infinite-loading-spinner"},i("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&i("div",{class:"infinite-loading-text",innerHTML:o(this.loadingText)})))}};r.style={md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"};export{r as ion_infinite_scroll_content}
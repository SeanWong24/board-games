import{r as n,h as o,H as t}from"./p-cd08f63e.js";const l=class{constructor(o){n(this,o)}render(){var n;return this.updateReadChatMessageCount(this.chatMessageList.length),o(t,null,o("ion-header",null,o("ion-toolbar",{color:"primary"},o("ion-title",null,"Chat"))),o("ion-content",null,null===(n=this.chatMessageList)||void 0===n?void 0:n.map(n=>o("ion-card",null,o("ion-card-header",null,o("ion-card-subtitle",null,n.player)),o("ion-card-content",null,n.content)))),o("ion-item",null,o("ion-textarea",{ref:n=>this.textareaElement=n,autofocus:!0,rows:3,placeholder:"Enter your message here"})),o("ion-button",{onClick:()=>this.sendChatMessage(this.textareaElement.value)},"Send"))}};l.style=".sc-app-chat-h{display:block}";export{l as app_chat}
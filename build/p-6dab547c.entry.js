import{r as o,h as i,H as t}from"./p-cd08f63e.js";const n=class{constructor(i){o(this,i)}render(){return i(t,null,i("ion-header",null,i("ion-toolbar",{color:"primary"},i("ion-title",null,this.peerId&&this.hostId&&this.peerId===this.hostId&&`Hosting ${this.hostId}`,this.peerId&&this.hostId&&this.peerId!==this.hostId&&`Joined ${this.hostId}`,this.peerId&&!this.hostId&&"Joining A Room...",!this.peerId&&"Home"))),this.peerId&&this.hostId&&i("ion-content",{class:"ion-padding"},i("ion-item",null,i("ion-label",{position:"stacked"},"My Nickname"),i("ion-input",{value:this.nickname,onIonChange:({detail:o})=>this.updateNickname(o.value)})),i("ion-item",null,i("ion-label",{position:"stacked"},"My Room Name"),i("ion-input",{readonly:!0,value:this.hostId,placeholder:"Getting a peer id..."}))),this.peerId&&!this.hostId&&i("ion-content",{class:"ion-padding"},i("ion-item",null,i("ion-input",{ref:o=>this.roomNameInputElement=o,autofocus:!0,placeholder:"Enter A Room Name to Join"})),i("ion-button",{onClick:()=>this.connectToRoom(this.roomNameInputElement.value.toString())},"Join")),!this.peerId&&!this.hostId&&i("ion-content",{class:"ion-padding"},i("ion-button",{expand:"block",size:"large",onClick:()=>this.hostRoom()},"Host A Room"),i("ion-button",{expand:"block",size:"large",onClick:()=>this.joinRoom()},"Join A Room")))}hostRoom(){const o=prompt("Please enter a room name");o?this.createPeer(o):alert("Please enter a room name.")}joinRoom(){this.createPeer()}connectToRoom(o){this.connectToPeer(o)}};n.style=".sc-app-home-h{display:block}";export{n as app_home}
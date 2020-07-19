import { Component, h, State } from '@stencil/core';
import Peer from 'peerjs';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  private peer: Peer;
  private connectionMap = new Map<string, Peer.DataConnection>();

  @State() peerId: string;
  @State() nickname: string = 'Player' + Math.random().toString().substring(2, 7);
  @State() messageList: { nickname: string, message: string }[] = [];

  connectedCallback() {
    this.peer = new Peer({ host: 'peer-signaling-server.herokuapp.com', secure: true, key: 'peerjs', path: '/' });
    this.peer.on('open', id => this.peerId = id);
    this.peer.on('connection', connection => {
      if (!this.connectionMap.has(connection.peer)) {
        this.connectionMap.set(connection.peer, this.peer.connect(connection.peer));
      }
      connection.on('data', data => this.messageList = this.messageList.concat(JSON.parse(data)));
    })
  }

  render() {
    return (
      <ion-app>
        <ion-menu side="start" menu-id="first" content-id="main">
          <ion-item>
            <ion-label position="stacked">My Peer Id</ion-label>
            <ion-input readonly value={this.peerId}></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">My Nickname</ion-label>
            <ion-input value={this.nickname} onIonChange={({ detail }) => this.nickname = detail.value}></ion-input>
          </ion-item>
          <ion-button onClick={() => {
            const otherPeerId = prompt('Enter peer id to connect');
            const connection = this.peer.connect(otherPeerId);
            this.connectionMap.set(otherPeerId, connection);
            connection.on('open', () => {
              const message = {
                nickname: this.nickname,
                message: 'hi!'
              };
              connection.send(JSON.stringify(message));
              this.messageList = this.messageList.concat(message);
            })
          }}>Connect To</ion-button>
          <app-chat
            messageList={this.messageList}
            onMessageSend={({ detail: message }) => {
              const messageObject = {
                nickname: this.nickname,
                message
              };
              for (const connection of this.connectionMap.values()) {
                connection.send(JSON.stringify(messageObject));
              }
              this.messageList = this.messageList.concat(messageObject);
            }}
          ></app-chat>
        </ion-menu>

        <ion-router useHash={true}>
          <ion-route url="/" component="app-home" />
        </ion-router>
        <ion-nav id="main" />
      </ion-app>
    );
  }
}

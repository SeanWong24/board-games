import { Component, h, State } from '@stencil/core';
import Peer from 'peerjs';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  peer: Peer;
  isHost: boolean;
  connectionMap = new Map<string, Peer.DataConnection>();

  @State() peerId: string;
  @State() nickname: string = 'Player' + Math.random().toString().substring(2, 7);
  @State() messageList: { nickname: string, message: string }[] = [];
  @State() readMessageCount: number = 0;


  connectedCallback() {
    this.createPeer();
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={true}>
          <ion-route-redirect from="/" to="/home" />
          <ion-route component="app-tabs" componentProps={{ unreadMessageCount: this.messageList.length - this.readMessageCount }}>
            <ion-route url="/home" component="home">
              <ion-route
                component="app-home"
                componentProps={{
                  peerId: this.peerId,
                  nickname: this.nickname,
                  updateNickname: this.updateNickname,
                  connectToPeer: this.connectToPeer,
                  claimHost: this.claimHost,
                  appendMessage: this.appendMessage
                }} />
            </ion-route>
            <ion-route url="/game" component="game">
              <ion-route component="app-game" />
            </ion-route>
            <ion-route
              url="/chat"
              component="chat">
              <ion-route component="app-chat" componentProps={{
                messageList: this.messageList,
                sendMessage: this.sendMessage,
                updateReadMessageCount: this.updateReadMessageCount
              }} />
            </ion-route>
          </ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }

  createPeer() {
    this.peer = new Peer({ host: 'peer-signaling-server.herokuapp.com', secure: true, key: 'peerjs', path: '/' });
    this.peer.on('open', id => this.peerId = id);
    this.peer.on('connection', connection => {
      if (!this.connectionMap.has(connection.peer)) {
        this.connectionMap.set(connection.peer, this.peer.connect(connection.peer));
      }
      connection.on('data', data => this.messageList = this.messageList.concat(JSON.parse(data)));
    })
  }

  connectToPeer = (peerId: string) => {
    const connection = this.peer.connect(peerId);
    this.connectionMap.set(peerId, connection);
    connection.on('open', () => {
      const message = {
        nickname: this.nickname,
        message: 'hi!'
      };
      connection.send(JSON.stringify(message));
      this.appendMessage(message);
    })
  }

  claimHost(isHost: boolean) {
    this.isHost = isHost;
  }

  updateNickname = (nickname: string) => this.nickname = nickname;

  sendMessage = (message: string) => {
    const messageObject = {
      nickname: this.nickname,
      message
    };
    for (const connection of this.connectionMap.values()) {
      connection.send(JSON.stringify(messageObject));
    }
    this.appendMessage(messageObject);
  }

  appendMessage = (message: { nickname: string, message: string }) => this.messageList = this.messageList.concat(message);

  updateReadMessageCount = (count: number) => this.readMessageCount = count;

}

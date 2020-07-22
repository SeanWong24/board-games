import { Component, h, State } from '@stencil/core';
import Peer from 'peerjs';
import { Message } from '../../utils/message';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  peer: Peer;
  connectionMap = new Map<string, Peer.DataConnection>();

  @State() peerId: string;
  @State() hostId: string;
  @State() nickname: string = 'Player' + Math.random().toString().substring(2, 7);
  @State() chatMessageList: Message[] = [];
  @State() readMessageCount: number = 0;

  render() {
    return (
      <ion-app>
        <ion-router useHash={true}>
          <ion-route-redirect from="/" to="/home" />
          <ion-route component="app-tabs" componentProps={{ unreadMessageCount: this.chatMessageList.length - this.readMessageCount }}>
            <ion-route url="/home" component="home">
              <ion-route
                component="app-home"
                componentProps={{
                  peerId: this.peerId,
                  hostId: this.hostId,
                  nickname: this.nickname,
                  updateNickname: this.updateNickname,
                  createPeer: this.createPeer,
                  connectToPeer: this.connectToPeer,
                  appendMessage: this.appendMessage
                }}></ion-route>
            </ion-route>
            <ion-route url="/game" component="game">
              <ion-route url="/" component="app-game"></ion-route>
              <ion-route url="/who-is-the-spy" component="app-game-who-is-the-spy"></ion-route>
              <ion-route url="/codenames" component="app-game-codenames"></ion-route>
            </ion-route>
            <ion-route
              url="/chat"
              component="chat">
              <ion-route component="app-chat" componentProps={{
                chatMessageList: this.chatMessageList,
                sendChatMessage: this.sendChatMessage,
                updateReadChatMessageCount: this.updateReadChatMessageCount
              }}></ion-route>
            </ion-route>
          </ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }

  createPeer = (peerId?: string) => {
    this.peer = new Peer(peerId, { host: 'peer-signaling-server.herokuapp.com', secure: true, key: 'peerjs', path: '/' });
    this.peer.on('open', id => {
      this.peerId = id;
      if (peerId) {
        this.hostId = id;
      }
    });
    this.peer.on('error', error => {
      if (error.type === 'unavailable-id') {
        alert('The id has been taken.');
      }
    });
    this.peer.on('connection', connection => {
      if (!this.connectionMap.has(connection.peer)) {
        this.connectionMap.set(connection.peer, this.peer.connect(connection.peer));
      }
      connection.on('data', data => {
        const message = JSON.parse(data) as Message;
        if (this.peerId === this.hostId) {
          this.sendChatMessage(message.content, message.player, connection.peer);
        } else {
          this.chatMessageList = this.chatMessageList.concat(JSON.parse(data));
        }
      });
    });
  }

  connectToPeer = (peerId: string) => {
    const connection = this.peer.connect(peerId);
    this.connectionMap.set(peerId, connection);
    connection.on('open', () => {
      if (this.peerId && !this.hostId) {
        this.hostId = peerId;
      }
      const message: Message = {
        type: 'chat',
        player: this.nickname,
        content: 'hi!'
      };
      connection.send(JSON.stringify(message));
      this.appendMessage(message);
    })
  }

  updateNickname = (nickname: string) => this.nickname = nickname;

  sendChatMessage = (content: string, player?: string, excludedPeerId?: string) => {
    const message: Message = {
      type: 'chat',
      player: player || this.nickname,
      content: content
    };
    let connectionList = [...this.connectionMap.values()];
    if (excludedPeerId) {
      connectionList = connectionList.filter(connection => connection.peer !== excludedPeerId);
    }
    for (const connection of connectionList) {
      connection.send(JSON.stringify(message));
    }
    this.appendMessage(message);
  }

  appendMessage = (message: Message) => this.chatMessageList = this.chatMessageList.concat(message);

  updateReadChatMessageCount = (count: number) => this.readMessageCount = count;

}

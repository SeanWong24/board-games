import { Component, Host, h, Prop } from '@stencil/core';
import Peer from 'peerjs';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  peer: Peer;

  @Prop() peerId: string;
  @Prop() nickname: string;
  @Prop() updateNickname: (nickname: string) => void;
  @Prop() connectToPeer: (peerId: string) => void;
  @Prop() claimHost: (isHost: boolean) => void;
  @Prop() appendMessage: (message: { nickname: string, message: string }) => void;

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Home</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-item>
            <ion-label position="stacked">My Nickname</ion-label>
            <ion-input value={this.nickname} onIonChange={({ detail }) => this.updateNickname(detail.value)}></ion-input>
          </ion-item>

          <ion-item>
            <ion-label position="stacked">My Peer Id</ion-label>
            <ion-input readonly value={this.peerId} placeholder="Getting a peer id..."></ion-input>
          </ion-item>

          <ion-button expand="block" size="large" disabled={!this.peerId} onClick={() => this.hostGame()}>Host A Game</ion-button>
          <ion-button expand="block" size="large" disabled={!this.peerId} onClick={() => this.joinGame()}>Join A Game</ion-button>
        </ion-content>
      </Host>
    );
  }

  hostGame() {
    this.claimHost(true);
  }

  joinGame() {
    this.claimHost(false);
    const hostPeerId = prompt('Enter peer id of the host');
    this.connectToPeer(hostPeerId);
  }

}

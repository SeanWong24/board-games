import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  scoped: true,
})
export class AppHome {

  roomNameInputElement: HTMLIonInputElement;

  @Prop() peerId: string;
  @Prop() hostId: string;
  @Prop() nickname: string;
  @Prop() updateNickname: (nickname: string) => void;
  @Prop() createPeer: (peerId?: string) => void;
  @Prop() connectToPeer: (peerId: string) => void;
  @Prop() appendMessage: (message: { nickname: string, message: string }) => void;

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>
              {this.peerId && this.hostId && this.peerId === this.hostId && `Hosting ${this.hostId}`}
              {this.peerId && this.hostId && this.peerId !== this.hostId && `Joined ${this.hostId}`}
              {this.peerId && !this.hostId && 'Joining A Room...'}
              {!this.peerId && 'Home'}
            </ion-title>
          </ion-toolbar>
        </ion-header>

        {
          this.peerId && this.hostId &&
          <ion-content class="ion-padding">
            <ion-item>
              <ion-label position="stacked">My Nickname</ion-label>
              <ion-input value={this.nickname} onIonChange={({ detail }) => this.updateNickname(detail.value)}></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="stacked">My Room Name</ion-label>
              <ion-input readonly value={this.hostId} placeholder="Getting a peer id..."></ion-input>
            </ion-item>
          </ion-content>
        }
        {
          this.peerId && !this.hostId &&
          <ion-content class="ion-padding">
            <ion-item>
              <ion-input ref={el => this.roomNameInputElement = el} autofocus={true} placeholder="Enter A Room Name to Join"></ion-input>
            </ion-item>
            <ion-button onClick={() => this.connectToRoom(this.roomNameInputElement.value.toString())}>Join</ion-button>
          </ion-content>
        }
        {
          !this.peerId && !this.hostId &&
          <ion-content class="ion-padding">
            <ion-button expand="block" size="large" onClick={() => this.hostRoom()}>Host A Room</ion-button>
            <ion-button expand="block" size="large" onClick={() => this.joinRoom()}>Join A Room</ion-button>
          </ion-content>
        }
      </Host>
    );
  }

  hostRoom() {
    const roomName = prompt('Please enter a room name');
    if (roomName) {
      this.createPeer(roomName);
    } else {
      alert('Please enter a room name.');
    }
  }

  joinRoom() {
    this.createPeer();
  }

  connectToRoom(roomName: string) {
    this.connectToPeer(roomName);
  }

}

import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
})
export class AppTabs implements ComponentInterface {

  @Prop() unreadMessageCount: number = 0;

  render() {
    return (
      <Host>
        <ion-tabs>
          <ion-tab tab="home">
            <ion-nav></ion-nav>
          </ion-tab>
          <ion-tab tab="game">
            <ion-nav></ion-nav>
          </ion-tab>
          <ion-tab tab="chat">
            <ion-nav></ion-nav>
          </ion-tab>

          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="home">
              <ion-icon name="home"></ion-icon>
              <ion-label>Home</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="game">
              <ion-icon name="game-controller"></ion-icon>
              <ion-label>Game</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="chat">
              <ion-icon name="chatbubbles"></ion-icon>
              <ion-label>Chat</ion-label>
              <ion-badge>{this.unreadMessageCount}</ion-badge>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </Host>
    );
  }

}

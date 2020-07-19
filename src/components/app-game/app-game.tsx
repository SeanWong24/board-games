import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-game',
  styleUrl: 'app-game.css',
})
export class AppGame implements ComponentInterface {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Game</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-text>Game works!</ion-text>
        </ion-content>
      </Host>
    );
  }

}

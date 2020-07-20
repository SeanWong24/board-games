import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-game-codenames',
  styleUrl: 'app-game-codenames.css',
  scoped: true,
})
export class AppGameCodenames implements ComponentInterface {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Codenames</ion-title>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/game"></ion-back-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          Codenames
        </ion-content>
      </Host>
    );
  }

}

import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-game-who-is-the-spy',
  styleUrl: 'app-game-who-is-the-spy.css',
  scoped: true,
})
export class AppGameWhoIsTheSpy implements ComponentInterface {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Who Is the Spy</ion-title>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/game"></ion-back-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          Who is the spy?
        </ion-content>
      </Host>
    );
  }

}

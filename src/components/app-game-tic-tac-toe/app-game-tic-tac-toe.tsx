import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-game-tic-tac-toe',
  styleUrl: 'app-game-tic-tac-toe.css',
  scoped: true,
})
export class AppGameTicTacToe implements ComponentInterface {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Tic Tac Toe</ion-title>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/game"></ion-back-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          Tic Tac Toe
      </ion-content>
      </Host>
    );
  }

}

import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-game',
  styleUrl: 'app-game.css',
  scoped: true,
})
export class AppGame implements ComponentInterface {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Games</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-button href="/game/who-is-the-spy">Who Is the Spy</ion-button>
              </ion-col>
              <ion-col>
                <ion-button href="/game/codenames">Codenames</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </Host>
    );
  }

}

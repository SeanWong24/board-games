import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-menu side="start" menu-id="first" content-id="main">
          <app-chat></app-chat>
        </ion-menu>

        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
        </ion-router>
        <ion-nav id="main" />
      </ion-app>
    );
  }
}

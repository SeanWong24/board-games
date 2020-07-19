import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'app-chat',
  styleUrl: 'app-chat.css',
})
export class AppChat implements ComponentInterface {

  render() {
    return (
      <Host>
        Chat works!
      </Host>
    );
  }

}

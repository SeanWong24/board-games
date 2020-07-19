import { Component, ComponentInterface, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-chat',
  styleUrl: 'app-chat.css',
})
export class AppChat implements ComponentInterface {

  @Prop() messageList: { nickname: string, message: string }[];

  @Event() messageSend: EventEmitter<string>;

  render() {
    return (
      <Host>
        <ion-content>
          {this.messageList?.map(message => (
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>{message.nickname}</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>{message.message}</ion-card-content>
            </ion-card>
          ))}
        </ion-content>
        <ion-button onClick={() => {
          this.messageSend.emit(prompt('Enter your message'));
        }}>Send New</ion-button>
      </Host>
    );
  }

}

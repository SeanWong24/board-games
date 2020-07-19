import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-chat',
  styleUrl: 'app-chat.css',
})
export class AppChat implements ComponentInterface {

  textareaElement: HTMLIonTextareaElement;

  @Prop() messageList: { nickname: string, message: string }[];
  @Prop() sendMessage: (message: string) => void;
  @Prop() updateReadMessageCount: (count: number) => void;

  render() {
    this.updateReadMessageCount(this.messageList.length);

    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Chat</ion-title>
          </ion-toolbar>
        </ion-header>

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
        <ion-item>
          <ion-textarea ref={el => this.textareaElement = el} rows={3} placeholder="Enter your message here"></ion-textarea>
        </ion-item>
        <ion-button onClick={() => this.sendMessage(this.textareaElement.value)}>Send</ion-button>
      </Host>
    );
  }

}

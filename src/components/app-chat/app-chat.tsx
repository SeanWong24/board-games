import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';
import { Message } from '../../utils/message';

@Component({
  tag: 'app-chat',
  styleUrl: 'app-chat.css',
  scoped: true,
})
export class AppChat implements ComponentInterface {

  textareaElement: HTMLIonTextareaElement;

  @Prop() chatMessageList: Message[];
  @Prop() sendChatMessage: (message: string) => void;
  @Prop() updateReadChatMessageCount: (count: number) => void;

  render() {
    this.updateReadChatMessageCount(this.chatMessageList.length);

    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Chat</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          {this.chatMessageList?.map(message => (
            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>{message.player}</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>{message.content}</ion-card-content>
            </ion-card>
          ))}
        </ion-content>
        <ion-item>
          <ion-textarea ref={el => this.textareaElement = el} autofocus={true} rows={3} placeholder="Enter your message here"></ion-textarea>
        </ion-item>
        <ion-button onClick={() => this.sendChatMessage(this.textareaElement.value)}>Send</ion-button>
      </Host>
    );
  }

}

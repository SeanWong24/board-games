import { Component, ComponentInterface, Host, h, State } from "@stencil/core";
import { TicTacToeGame } from "./tic-tac-toe-game";

@Component({
  tag: "app-game-tic-tac-toe",
  styleUrl: "app-game-tic-tac-toe.css",
  scoped: true,
})
export class AppGameTicTacToe implements ComponentInterface {

  game: TicTacToeGame;

  @State() isPlaying: boolean = false;
  @State() board: string[] //= ['', '', '', '', '', '', '', '', ''];

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Tic Tac Toe</ion-title>
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/game"></ion-back-button>
            </ion-buttons>
            <ion-buttons slot="end">
              <ion-button
                title={this.isPlaying ? "Quit Game" : "Launch Game"}
                onClick={() => {
                  this.isPlaying = !this.isPlaying;
                  this.game = new TicTacToeGame(this.gameUpdateHandler);
                }}
              >
                <ion-icon
                  slot="icon-only"
                  name={this.isPlaying ? "close-circle" : "rocket"}
                >
                </ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-grid>
            <ion-row>
              <ion-col size="0" size-md="4"></ion-col>
              <ion-col size="12" size-md="4">
                {this.isPlaying
                  ? (
                    <ion-grid>
                      <ion-row>
                        {
                          this.board.map((d, i) => (
                            <ion-col size="4">
                              <ion-button
                                color="medium"
                                fill={d ? 'outline' : 'solid'}
                                onClick={() => {
                                  this.game.play([parseInt((i / 3).toString()), i % 3]);
                                }}
                              >{d}</ion-button>
                            </ion-col>)
                          )
                        }
                      </ion-row>
                    </ion-grid>
                  )
                  : (
                    <ion-card>
                      <ion-card-header>
                        <ion-img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png"
                        >
                        </ion-img>
                        <ion-card-title>Tic Tac Toe</ion-card-title>
                      </ion-card-header>

                      <ion-card-content>
                        You are X’s and your opponent is O’s. On your turn,
                        click anywhere on the grid to place an X in that square.
                        Your goal is to get three in a row before your opponent
                        does.
                      </ion-card-content>
                    </ion-card>
                  )}
              </ion-col>
              <ion-col size="0" size-md="4"></ion-col>
            </ion-row>
          </ion-grid>
        </ion-content>
      </Host>
    );
  }

  gameUpdateHandler = (gameBoard: string[][], nextPlayer: string, isGameFinished?: boolean) => {
    this.board = gameBoard.flatMap(cell => cell);
    alert(`Player ${nextPlayer}'s turn.`);
  }

}

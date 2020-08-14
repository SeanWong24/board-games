export class TicTacToeGame {
    private gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    private currentPlayer: string = "o";
    private updateHandler: (
        gameBoard: string[][],
        nextPlayer: string,
        isGameFinished?: boolean,
    ) => void;

    constructor(
        updateHandler: (
            gameBoard: string[][],
            nextPlayer: string,
            isGameFinished?: boolean,
        ) => void,
    ) {
        this.updateHandler = updateHandler;

        this.updateHandler(this.gameBoard, this.currentPlayer);
    }

    play(coordinate: [number, number]) {
        const [x, y] = coordinate;
        if (!this.gameBoard[x][y]) {
            this.gameBoard[x][y] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer == "o" ? "x" : "o";
            this.updateHandler(this.gameBoard, this.currentPlayer);
        }
    }
}

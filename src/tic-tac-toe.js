class TicTacToe {
    constructor() {
        this.newBoard = [[null, null, null], [null, null, null], [null, null, null]];
        this.turn = 'o';
    }

    getCurrentPlayerSymbol() {
        return this.turn === 'x' ? 'o' : 'x';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.newBoard[rowIndex][columnIndex] === null) {
            this.newBoard[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn = this.getCurrentPlayerSymbol();
        }
    }

    isFinished() {
        if (this.isDraw() === true || this.getWinner() !== null) {
            return true;
        }
        return false;
    }

    getWinner() {
        for (let j = 0; j < 3; j++) {
            if (this.newBoard[j][0] === this.newBoard[j][1] && this.newBoard[j][0] === this.newBoard[j][2]) {
                return this.newBoard[j][0];
            }
        }
        for (let i = 0; i < 3; i ++) {
            if (this.newBoard[0][i] === this.newBoard[1][i] && this.newBoard[0][i] === this.newBoard[2][i]) {
                return this.newBoard[0][i];
            }
        }
        if (this.newBoard[0][0] === this.newBoard[1][1] && this.newBoard[0][0] === this.newBoard[2][2]) {
            return this.newBoard[0][0];
        }
        if (this.newBoard[0][2] === this.newBoard[1][1] && this.newBoard[0][2] === this.newBoard[2][0]) {
            return this.newBoard[0][2];
        }
        return null;   
    }

    noMoreTurns() {
        if (this.newBoard.flat().every(elem => elem !== null)) {
                return true;
            }
        return false;
    }

    isDraw() {
        if (this.noMoreTurns() === true && this.getWinner() === null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.newBoard[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

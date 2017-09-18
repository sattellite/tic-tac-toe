class TicTacToe {
  constructor() {
    this.field = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayer = 'x';
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayer;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.field[rowIndex][columnIndex]) {
      this.field[rowIndex][columnIndex] = this.currentPlayer;
      this._toggleCurrentPlayer();
    }
  }

  isFinished() {
    if (this.isDraw() || this.getWinner()) {
      return true;
    }
    return false;
  }

  getWinner() {
    // Row check
    for (let i = 0; i < 3; i += 1) {
      if (this.field[i][0] === this.field[i][1] && this.field[i][1] === this.field[i][2]) {
        return this.field[i][0];
      }
    }

    // Column check
    for (let i = 0; i < 3; i += 1) {
      if (this.field[0][i] === this.field[1][i] && this.field[1][i] === this.field[2][i]) {
        return this.field[0][i];
      }
    }

    // Diagonal check
    if (this.field[0][0] === this.field[1][1] && this.field[1][1] === this.field[2][2]) {
      return this.field[1][1];
    }
    if (this.field[0][2] === this.field[1][1] && this.field[1][1] === this.field[2][0]) {
      return this.field[1][1];
    }

    return null;
  }

  noMoreTurns() {
    try {
      this.field.forEach(row => {
        row.forEach(col => {
          if (!col) {
            throw { empty: true };
          }
        });
      });
      return true;
    } catch (e) {
      return false;
    }
  }

  isDraw() {
    if (this.noMoreTurns() && !this.getWinner()) {
      return true;
    }
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }

  _toggleCurrentPlayer() {
    if (this.currentPlayer === 'x') {
      this.currentPlayer = 'o';
    } else {
      this.currentPlayer = 'x';
    }
  }
}

module.exports = TicTacToe;

let winScore = document.getElementById("win");
let loseScore = document.getElementById("lose");

const game = {
  boardSize: 10,
  mineCount: 20,
  board: [],
  wins: 0,
  loses: 0,

  init() {
    this.initializeBoard();
    this.renderBoard();
    this.updateScores();
  },

  updateScores() {
    winScore.innerText = "Wins: " + this.wins;
    loseScore.innerText = "Loses: " + this.loses;
  },

  initializeBoard() {
    for (let i = 0; i < this.boardSize; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.boardSize; j++) {
        this.board[i][j] = {
          isMine: false,
          isRevealed: false,
          mineCount: 0,
        };
      }
    }

    let minesPlaced = 0;
    while (minesPlaced < this.mineCount) {
      const x = Math.floor(Math.random() * this.boardSize);
      const y = Math.floor(Math.random() * this.boardSize);

      if (!this.board[x][y].isMine) {
        this.board[x][y].isMine = true;
        minesPlaced++;
      }
    }

    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (!this.board[i][j].isMine) {
          this.board[i][j].mineCount = this.countAdjacentMines(i, j);
        }
      }
    }
  },

  countAdjacentMines(x, y) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const newX = x + i;
        const newY = y + j;

        if (
          newX >= 0 &&
          newX < this.boardSize &&
          newY >= 0 &&
          newY < this.boardSize &&
          this.board[newX][newY].isMine
        ) {
          count++;
        }
      }
    }
    return count;
  },

  revealCell(x, y) {
    if (
      x < 0 ||
      x >= this.boardSize ||
      y < 0 ||
      y >= this.boardSize ||
      this.board[x][y].isRevealed
    ) {
      return;
    }

    this.board[x][y].isRevealed = true;

    if (this.board[x][y].isMine) {
      this.revealAllMines();
      alert("Game Over! You hit a mine.");

      setTimeout(() => {
        this.loses = this.loses + 1;
        this.updateScores();
        this.reset();
      }, 0);
    } else if (this.board[x][y].mineCount === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          this.revealCell(x + i, y + j);
        }
      }
    }

    this.renderBoard();
  },

  revealAllMines() {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (this.board[i][j].isMine) {
          this.board[i][j].isRevealed = true;
        }
      }
    }
    this.renderBoard();
  },

  animateCell(x, y) {
    const cell = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
    cell.classList.add("revealed");
  },

  checkWin() {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (!this.board[i][j].isMine && !this.board[i][j].isRevealed) {
          return false;
        }
      }
    }
    return true;
  },

  revealAllCells() {
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        this.board[i][j].isRevealed = true;
      }
    }
    this.renderBoard();
  },

  renderBoard() {
    const boardElement = document.getElementById("board");
    boardElement.innerHTML = "";

    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = this.board[i][j].isRevealed
          ? this.board[i][j].isMine
            ? "💣"
            : this.board[i][j].mineCount || ""
          : "";
        if (this.board[i][j].isMine) {
          cell.classList.add("mine");
        } else if (this.board[i][j].isRevealed) {
          cell.classList.add("revealed");
        }
        cell.dataset.x = i;
        cell.dataset.y = j;
        cell.addEventListener("click", () => {
          this.revealCell(i, j);
          this.animateCell(i, j);
        });
        boardElement.appendChild(cell);
      }
    }
  },

  reset() {
    this.board = [];
    this.initializeBoard();
    this.renderBoard();
    this.updateScores();
  },

  getCellCoordinates(cell) {
    const x = parseInt(cell.dataset.x, 10);
    const y = parseInt(cell.dataset.y, 10);
    return { x, y };
  },
};

document.getElementById("board").addEventListener("contextmenu", (event) => {
  event.preventDefault();
  const cell = event.target;
  const { x, y } = game.getCellCoordinates(cell);

  if (
    !cell.classList.contains("revealed") &&
    !cell.classList.contains("flag")
  ) {
    cell.classList.add("flag");
    cell.textContent = "🚩";
  } else if (cell.classList.contains("flag")) {
    cell.classList.remove("flag");
    cell.textContent = "";
  }
});

document.getElementById("board").addEventListener("click", (event) => {
  const cell = event.target;
  const { x, y } = game.getCellCoordinates(cell);

  if (
    !cell.classList.contains("revealed") &&
    !cell.classList.contains("flag")
  ) {
    game.animateCell(x, y);

    if (game.checkWin()) {
      game.revealAllCells();
      alert("Congratulations! You won!");
      game.wins = game.wins + 1;
      game.updateScores();
      game.reset();
    }

    game.revealCell(x, y);
  }
});

game.init();

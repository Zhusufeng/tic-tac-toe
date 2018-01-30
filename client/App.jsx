class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
    };
  }

  handleInput(userInput) {
    userInput = parseInt(userInput);

    if (this.isValidMove(userInput)) {
      this.addToBoard(userInput, true);
    } else {
      alert('That is not valid input. Please enter a number 1-9 that has not been selected');
    }
  }

  isValidMove(input) {
    if (this.state.board[input - 1] === null) {
      return true;
    }
    return false;
  }

  addToBoard(input, isHuman) {
    let index = input - 1;
    let copy = this.state.board.slice();

    let marker;
    isHuman ? marker = 'X' : marker = 'O';
    copy[index] = marker;

    this.setState({
      board: copy
    }, () => {
      const squares = document.querySelectorAll('.square');
      squares[index].innerHTML = marker;

      if (isHuman) {
        if (!this.areAllSpacesTaken()) {
          this.giveComputerTurn();
        }
      } 
      this.checkForWinner();
    });
  }

  giveComputerTurn() {
    const compInput = this.selectNum();

    if(this.isValidMove(compInput)) {
      this.addToBoard(compInput, false);
      return;
    } else {
      this.giveComputerTurn();
    }
  }

  selectNum() {
    const max = 9;
    const min = 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  checkForWinner() {
    const wins = [
      [0, 1, 2], //horizontals
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // verticals
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonals
      [2, 4, 6]
    ];
    const board = this.state.board;
    let winner = null;

    for (let i = 0; i < wins.length; i++) {
      if (board[wins[i][0]] !== null && board[wins[i][0]] === board[wins[i][1]] && board[wins[i][0]] === board[wins[i][2]]) {
        winner = board[wins[i][0]];
        this.updateResult(winner);
        break;
      }
    }

    if (this.areAllSpacesTaken()) {
      this.updateResult(winner);
    }
  }

  areAllSpacesTaken() {
    const board = this.state.board;

    let areAllSpacesTaken = board.filter(el => {
      if (el !== null) return el;
    });

    if (areAllSpacesTaken.length === 9) {
      return true;
    }
    return false;
  }

  updateResult(winner) {
    const resultArea = document.getElementById('result-area');
    if (winner) {
      resultArea.value = `Winner is ${winner}`;
    } else {
      resultArea.value = `There is a tie!`;
    }
  }
  // Create reset game button to clear board and reset state?

  render() {
    return (
      <div>
        <h1 id="title">Tic Tac Toe</h1>
        <div id="description">
          <p>
            This is a 1 player game versus the computer.
          </p>
        </div>
        <div id="instructions">
          <p>
            Instructions: You will make a move first. Enter a number 1-9 where the first row is 1-3, second row is 4-6, and the third is 7-9.
          </p>
        </div>
        <div id="components">
          <p></p>
          <Form handleInput={this.handleInput.bind(this)}/>
          <p></p>
          <Board />
          <p></p>
          <Result />
        </div>
      </div>
    );
  }
}
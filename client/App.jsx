class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      // isHuman: true,
    };
  }

  handleInput(userInput) {
    // TODO: Handle invalid input
    userInput = parseInt(userInput);
    console.log('human input is ', userInput);

    if (this.isValidMove(userInput)) {
      console.log('Move is valid!');

      this.addToBoard(userInput, true);
    } 
    // Create else when move is NOT valid for a human
  }

  isValidMove(input) {
    if (!this.state.board[input - 1]) {
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
      console.log(this.state);

      const squares = document.querySelectorAll('.square');
      squares[index].innerHTML = marker;

      if (isHuman) {
        this.giveComputerTurn();
      } else {
        this.checkForWinner();
      }
    });
  }

  giveComputerTurn() {
    const compInput = this.selectNum();
    console.log('computer Input is ', compInput);

    if(this.isValidMove(compInput) && !this.areAllSpacesTaken()) {
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
    // Check state for any winning combos
    // Update result
    // If state has been updated 9x
      // Update result as cat's game (tie)
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
    let winner;

    for (let i = 0; i < wins.length; i++) {
      console.log(wins[i][0], wins[i][1], wins[i][2]);
      if (board[wins[i][0]] !== null && board[wins[i][0]] === board[wins[i][1]] && board[wins[i][0]] === board[wins[i][2]]) {
        console.log('Winner is ', board[wins[i][0]]);
        winner = board[wins[i][0]];
        this.updateResult(winner);
        break;
      }
    }

    this.areAllSpacesTaken();
  }

  areAllSpacesTaken() {
    const board = this.state.board;

    let areAllSpacesTaken = board.filter(el => {
      if (el !== null) return el;
    });

    if (areAllSpacesTaken.length === 9) {
      this.updateResult();
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
          <p>Description of game here.
          </p>
        </div>
        <div id="instructions">
          <p>Instructions here.
          </p>
        </div>
        <Form handleInput={this.handleInput.bind(this)}/>
        <Board />
        <Result />
      </div>
    );
  }
}
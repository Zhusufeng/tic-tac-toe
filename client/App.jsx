class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      isHuman: true,
    };
  }

  handleInput(userInput) {
    // TODO: Handle invalid input
    userInput = parseInt(userInput);
    console.log(userInput);

    if (this.isValidMove(userInput)) {
      console.log('Move is valid!');
      // Call addToBoard(userInput)
      // Call giveComputerTurn
      // Call checkForWinner
    }
    
  }

  isValidMove(input) {
    if (!this.state.board[input]) {
      return true;
    }
    return false;
  }

  addToBoard(input) {
    // Update state 
    // Update DOM/board with X or O
  }

  giveComputerTurn() {
    // compInput = selectNum()
    // if(isValidMove(compInput))
      // Call addToBoard(compInput)
      // Return
    // else
      // Call giveComputerTurn again
  }

  selectNum() {
    // Return a random number from 1-9
  }

  checkForWinner() {
    // Check state for any winning combos
    // Update result
    // If state has been updated 9x
      // Update result as cat's game (tie)
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
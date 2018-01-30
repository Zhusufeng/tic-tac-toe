class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleInput(userInput) {
    // TODO: Handle invalid input
    userInput = parseInt(userInput);
    console.log(userInput);

    // Call isValidMove(userInput)
    // Call addToBoard(userInput)
    // Call giveComputerTurn
    // Call checkForWinner
  }

  isValidMove(userInput) {
    // Check state if square is free
      // Return true
    // Return false
  }

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
class Form extends React.Component {
  render() {
    return (
      <div>
        <form
          id="user-form" 
          onSubmit={e => {
            e.preventDefault();
            const userForm = document.getElementById('user-form');
            const userInput = document.getElementById('user-input').value;
            this.props.handleInput(userInput);
            userForm.reset();
          }}
        >
          <input type="text" id="user-input" placeholder="Text here" />
          <input type="submit" id="user-submit" value="Submit" />
        </form>
      </div>
    );
  }
}
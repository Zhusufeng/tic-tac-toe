class Form extends React.Component {
  render() {
    return (
      <div>
        <form 
          onSubmit={e => {
            e.preventDefault();
            this.props.handleInput('Message from form');
          }}
        >
          <input type="text" placeholder="Text here" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
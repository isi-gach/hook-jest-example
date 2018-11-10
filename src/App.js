import React from 'react';

class App extends React.Component {
  state = {};

  handleClick = () => this.setState({ message: 'Hello world!' });

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>Click me</button>
        {this.state.message}
      </React.Fragment>
    );
  }
}

export default App;

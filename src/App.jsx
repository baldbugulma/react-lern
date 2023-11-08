import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      someKey: false
    };
  }

  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }

  handleClickPlus = () => {
    this.setState({count: this.state.count + 1})
  }

  handleClickMinus = () =>{
    this.setState({count: this.state.count - 1})
  }


  
  render (){
    return (
      <div className="App">
        <button onClick={this.handleClickMinus}>-</button>
        <p>{this.state.count}</p>
        <button onClick={this.handleClickPlus}>+</button>
      </div>
    );
  }

}

export default App;

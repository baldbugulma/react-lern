import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      someKey: false
    };
    this.handleClickPlus = this.handleClickPlus.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }


  handleClickPlus (){
    this.setState({count: this.state.count + 1})
  }

  handleClickMinus (){
    this.setState({count: this.state.count - 1})
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  
  render (){
    console.log('render', this.state.count);
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

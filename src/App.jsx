import React, {Component} from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: parseInt(localStorage.getItem('count')) || 0,
      stop: true
    };
    this.handleClickStart = this.handleClickStart.bind(this);
    this.handleClickStop = this.handleClickStop.bind(this);

  }


  handleClickStart (){
    this.setState({stop: false});
    const interval = setInterval(() => {
      this.setState({count: this.state.count + 1});
      localStorage.setItem('count', this.state.count+1)
      if (this.state.stop === true){
        clearInterval(interval);
      }
    },1000);

  }

  handleClickStop (){
    this.setState({stop: true});
  }




  componentDidMount(){
    console.log('componentDidMount');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
    console.log(this.state.count)
    console.log(this.state.stop)
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  
  render (){
    console.log('render', this.state.count);
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <button onClick={this.handleClickStart}>Start</button> 
        <button onClick={this.handleClickStop}>Stop</button> 
      </div>
    );
  }

}

export default App;

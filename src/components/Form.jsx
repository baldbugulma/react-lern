import React from 'react';

class Form extends React.Component {

  initialState = {
    email: '',
    subscription: false
  };

  state = {
     ...this.initialState
  };

  resetForm = () => {
    this.setState({ ...this.initialState }); // Сбрасываем состояние формы к исходным значениям
  };

  handleChange = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  handleCheckBox = (event) => {
    this.setState({[event.target.name] : event.target.checked})
  }

  handleSend = () => {
    if(this.state.email.length < 5){
      alert('Некорректный эмейл')
    }
    else if (this.state.subscription !== true){ 
      alert('Нужно принять пользовательское соглашение')
    }
    else {
      alert('Поздравляю с подпиской')
      this.resetForm()
    }
  }

  render() {

    const{subscription, email} = this.state;
    return(
      <div>
        <input 
        type="email" 
        name="email"   
        placeholder='Email'       
        value={email}
        onChange={this.handleChange}
        />
        <br/>
        <label>
          <input type="checkbox" 
          name="subscription"
          checked={subscription}
          onChange={this.handleCheckBox}
          />
          Я принимаю условия лицензионного соглашения
        </label>
        <br/>
        <button onClick={this.handleSend}>Send</button>
      </div>
    )


  }



}

export { Form };

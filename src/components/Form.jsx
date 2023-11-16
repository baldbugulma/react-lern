import React from 'react';

class Form extends React.Component {
  state = {
    firstName: '',
    email: '',
    message: '', 
    select: '',
    subscription:false,
    gender: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateName = () => {
    if (this.state.firstName.length < 5) {
      alert('Введите больше символов в поле "Имя"');
    }
  };

  handleCheckBox = (event) =>{
    this.setState({[event.target.name]: event.target.checked })
  }

  render() {
    const { firstName, email, message, select, subscription } = this.state;
    return (
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="Имя"
          value={firstName}
          onChange={this.handleChange}
          onBlur={this.validateName}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateName}
        />

        <select name="select" value={select} onChange={this.handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <br />

        {/* Обновленная текстовая область (textarea) для корректной работы с полем message */}
        <textarea
          name="message"
          value={message}
          onChange={this.handleChange} // Добавляем обработчик изменения значения
          onBlur={this.validateName} // Может потребоваться отрегулировать onBlur для textarea в соответствии с вашими требованиями
        />

        <input 
        type="checkbox" 
        name="subscription" 
        checked={subscription}
        onChange={this.handleCheckBox}
        />

        <br />

        <input type="radio" name="gender" value="male" onChange={this.handleChange}/>Male
        <input type="radio" name="gender" value="female" onChange={this.handleChange}/>Female
      </div>
      
    );
  }
}

export { Form };

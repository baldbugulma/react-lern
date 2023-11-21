import React from 'react';

class FormWithRef extends React.Component {
    constructor(){
        super();
        this.state = {
            card: '',
            email: ''
        }
        this.firstName = React.createRef();
    }


    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    componentDidMount(){
        console.log(this.firstNameRef)
        this.firstName.current.focus();
    }

    render() {
        const { email, card } = this.state;

        return (
            <div>
                <input
                    type="text"
                    name="card"
                    placeholder="card"
                    value={card}
                    onChange={this.handleChange}
                    ref = {this.firstName}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChange}
                />

            </div>
        );
    }
}

export {FormWithRef};
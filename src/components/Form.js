import React from "react";
import MyButton from "./UI/Buttons/MyButton";
import MyInput from "./UI/Inputs/MyInput";
import MyForm from "./UI/Form/MyForm";
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
        };
        this.ChangeInput = this.ChangeInput.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
        this.sendData = this.sendData.bind(this);
        this.socket = props.socket;
    }

    ChangeInput(event) {
        this.setState({ login: event.target.value });
    }

    ChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    sendData() {
        let data = {
            login:this.state.login,
            password:this.state.password
        }

        this.socket.emit('send-message', ( data ));
        /* this.socket.on('error', (data) => {
            console.log(data)
        }) */
    }
    render() {
        return (
            <MyForm className='Form'>
                <MyInput id='login' value={this.state.login} onChange={this.ChangeInput} />
                <MyInput id='password' value={this.state.password} onChange={this.ChangePassword} />
                <MyButton onClick={this.sendData}></MyButton>
            </MyForm>
        );
    }
}
export default Form;
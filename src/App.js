import React from "react";
import Form from "./components/Form";
import { io } from 'socket.io-client';
import "./App.css";
const socket = io('http://localhost:3003');

class App extends React.Component {
  form() {
    return (<Form socket={socket} />);
  }
  showForm(){
    return this.setState(()=>this.form());//аааааааа
  }
  render() {
    return (
      <div id='header'>
        <button id="openRegistration" onClick={()=>this.form()} onChange={this.showForm}>Зарегистрироваться</button>
      </div>
    );
  }
}

export default App;

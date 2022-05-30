import React, { useState } from "react";
import { io } from 'socket.io-client';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Reg from "./components/reg/Reg";
import Auth from "./components/auth/Auth";
import PersonalCabinet from "./components/main/PersonalCabinet";


const socket = io('http://localhost:3003');

const App = () => {
  const [showForm, setShowForm] = useState(null);
  const [authorized, setAuthorized] = useState(false);

  //socket.on('getName', ({userName}));
  return (
    <>
      <Header setShowForm={setShowForm} authorized={authorized}/*  userName={userName} */ />
      <Main />
      {
        showForm === null ? '' :
          showForm === 'auth' ? <Auth socket={socket} setAuthorized={setAuthorized} setShowForm={setShowForm} /> :
            showForm === 'reg' ? <Reg socket={socket} setAuthorized={setAuthorized} setShowForm={setShowForm} /> :
              showForm === 'cabinet' ? <PersonalCabinet /* socket={socket} setAuthorized={setAuthorized} setShowForm={setShowForm}  *//> : ''}
    </>
  )
}
export default App;
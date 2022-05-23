const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, { //сокеты втыкаем в порт бэка
    cors: {
        origin: '*' //делаем разрешение на все кроссдоменные запросы
    },
});

const { NAME, PORT, DATABASE } = require('./config.js');
const DB = require('./application/modules/DB/DB');
const APP = require('./application/Application');
const db = new DB(DATABASE);

/* function router(method) {
    const app = new APP(params, db); //в параметрах будет метод + логин + пароль
    if (method) {
        switch (method) {
            case 'registration':
                return app.registration();
            case 'login':
                return app.loginMethod();
            case 'logout':
                return app.logoutMethod();
        }
    }
} */

io.on("connection", (socket) => {
    console.log(socket.id);
    socket.on('send-message', (params) => {

    });
});



server.listen(PORT, () => console.log('все ок, работаем над', NAME));
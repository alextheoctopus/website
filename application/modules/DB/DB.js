const sqlite3 = require('sqlite3').verbose();
const { resolve } = require('path');
const path = require('path');

class DB {
    constructor({ NAME }) {
        this.db = new sqlite3.Database(path.join(__dirname, NAME));
        this.token;
    }

    destructor() {
        if (this.db) this.db.close();
    }

    generateToken() {
        let token = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 10; i++)
            token += possible.charAt(Math.floor(Math.random() * possible.length));
        return token;
    }

    registration(data) {
        let token = this.generateToken();
        const query = "INSERT INTO USERS ( token,login, password) VALUES( '" + token + "','" +
            data.login + "','" + data.password + "')";

        this.db.run(query);
    }
    getUser(login) {
        const query = "SELECT token, login, password FROM USERS WHERE login='" + login + "'";
        console.log(new Promise(resolve => this.db.all(query, (err, row) => resolve(err ? null : row))));
    }

}

module.exports = DB;
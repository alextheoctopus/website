const USERS = require('./modules/users/Users');

class Application {
    constructor(params, db) {
        this.db = db;
        this.user = new USERS(db);
        this.login = params.login; //а я хотела деструктурирующее присваивание
        this.password = params.password;
    }
    registration() {
        if (this.login && this.password) {
            return this.user.registration(this.login, this.password);
        }
    }
    loginMethod() {
        if (this.login && this.password) {
            return this.user.loginMethod(this.login, this.password);
        }
    }
    logoutMethod() {
        /* тут надо взять токен из бд 
        let token=this.db.getToken();
        if(token){
            return this.user.logoutMethod(token);
        }*/
    }
}
module.exports = Application;
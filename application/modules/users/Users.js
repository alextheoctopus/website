class Users {
    constructor(db) {
        this.db = db;
    }
    loginMethod(login, password) {
        let user = this.db.getUser(login);
        let token = this.db.generateToken();
        if (user) {
            if (password == user.password) {
                let updateUser = {
                    'login': user.login,
                    'token': token
                }
                return updateUser;
            }
        }
    }
    logoutMethod() {
        return true; /* тут по токену нужно будет найти юзера которого кикнуть */
    }
    registration(login, password) {
        let user = this.db.registration(login, password);
        if (user) {
            console.log('Вы успешно зарегистрированы');
        }
    }
}
module.exports = Users;
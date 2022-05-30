class Users {
    constructor(db) {
        this.db = db;
    }
    async loginMethod(login, password) {
        let user  = await this.db.getUser(login, password);
        if (user) {
            this.db.updateToken(user.login);
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
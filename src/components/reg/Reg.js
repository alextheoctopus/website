import { useRef } from "react";
import '../auth/Auth.css';

const Reg = ({ socket, setAuthorized, setShowForm }) => {
    const inputLogin = useRef(null);
    const inputPassword = useRef(null);

    const registrationClickHandler = () => {
        const login = inputLogin.current.value;
        const password = inputPassword.current.value;
        /* здесь проверить данные и отправить в бэк */
        console.log(login, password);
        socket.emit('registration', ({ login, password }));
        setAuthorized(true);
        setShowForm(null);
    };

    return (
        <div className="reg-form">
            <input id="login" ref={inputLogin} placeholder="Логин" />
            <input id="password" ref={inputPassword} placeholder="Пароль" />
            <button id="regSbmBtn" onClick={registrationClickHandler}>Зарегистрироваться</button>
        </div>
    );
}

export default Reg;
import './Header.css';

const Header = ({ setShowForm, authorized, userName }) => {
    return (
        <div className='header'>
            {authorized ? <button id="openRoom" onClick={() => setShowForm('cabinet')} ></button> :
                <>
                    <button id="openauth" onClick={() => setShowForm('auth')}>Войти</button>
                    <button  id="openRegi" onClick={() => setShowForm('reg')}>Зарегистрироваться</button>
                </>
            }
        </div>
    );
};

export default Header;
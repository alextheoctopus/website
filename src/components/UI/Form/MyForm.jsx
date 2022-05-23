import React from 'react';
import classes from './MyForm.module.css';
import MyButton from '../Buttons/MyButton';
import MyInput from '../Inputs/MyInput';

const MyForm = (props ) => {
    return (
        <div className={classes.myForm} {...props}>{/* в общем нужно вложенность компонентов сделать (композицию) */}
        </div>
    );
}

export default MyForm;
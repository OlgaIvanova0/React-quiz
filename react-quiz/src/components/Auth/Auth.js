import React, { Component } from 'react';
import style from './Auth.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input/Input';

export class Auth extends Component {

  loginHandler = () =>{}

  registrHandler = () =>{}

  submitHandler = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div className={style.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={style.AuthForm}>
            <Input label='Email' />
            <Input label='Пароль' errorMessage={'test'}/>
            <Button type='Btn-success'
            onClick={this.loginHandler}>
              Войти
            </Button>
            <Button type='Btn-primary'
            onClick={this.registrHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default Auth
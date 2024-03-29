import React, { Component } from 'react';
import style from './Auth.module.css';
import Button from '../UI/Button';
import Input from '../UI/Input/Input';
import is from 'is_js'

export class Auth extends Component {

  state = {
    isFormValid: false,
    formControls:{
      email:{
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Введите корректный email',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password:{
        value: '',
        type: 'password',
        label: 'Пароль',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6
        }
      },
    }
  }

  loginHandler = () =>{}

  registrHandler = () =>{}

  submitHandler = event => {
    event.preventDefault()
  }

  validateControl(value, validation){
    if(!validation){
      return true
    }

    let isValid = true

    if(validation.required){
      isValid = value.trim() !=='' && isValid
    }

    if(validation.email){
      isValid = is.email(value) && isValid

    }
    if(validation.minLength){
      isValid = value.length >= validation.minLength && isValid
    }

    return isValid
  }


  onChangeHandler = (event, controlName) => {
    const formControls = {...this.state.formControls}
    const control = {...formControls[controlName]}
    control.value = event.target.value
    control.touched = true
    control.valid = this.validateControl(control.value, control.validation)
    formControls[controlName] = control

    let isFormValid = true
    Object.keys(formControls).forEach(name =>{
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls, isFormValid
    })
  }

  renderInputs(){
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName]
      return(
        <Input 
           key = {controlName + index}
           type = {control.type}
           value = {control.value}
           valid = {control.valid}
           touched = {control.touched}
           label = {control.label}
           shouldValidate = {!!control.validation}
           errorMessage = {control.errorMessage}
           onChange = {event => this.onChangeHandler(event, controlName)}        
        />
      )
    })
  }

  render() {
    return (
      <div className={style.Auth}>
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className={style.AuthForm}>
            {this.renderInputs()}
            <Button type='Btn-success'
            onClick={this.loginHandler}
            disabled = {!this.state.isFormValid}
            >
              Войти
            </Button>
            <Button type='Btn-primary'
            onClick={this.registrHandler}
            disabled = {!this.state.isFormValid}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default Auth
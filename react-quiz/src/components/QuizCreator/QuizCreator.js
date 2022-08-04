import React, { Component } from 'react';
import style from './QuizCreator.module.css';
import Button from '../UI/Button'

export class QuizCreator extends Component {
  submitHandler = event =>{
    event.preventDefault()
  }

  addQuestionHandler = () =>{

  }

  createQuizHandler = () =>{

  }

  render() {
    return (
      <div className={style.QuizCreator}>
        <div>
          <h1>Создание теста</h1>
          <form onSubmit={this.submitHandler}>
            <input type='text'/>
            <hr/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <input type='text'/>
            <select></select>
            <Button
            type='Btn-primary'
            onClick={this.addQuestionHandler}>
              Добавить вопрос
            </Button>
            <Button
            type='Btn-success'
            onClick={this.createQuizHandler}>
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

export default QuizCreator
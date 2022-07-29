import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './QuizList.module.css';


export class QuizList extends Component {
  renderQuiz(){
    return [1, 2, 3].map((quiz, index) =>{
      return(
        <li key={index}>
          <NavLink to={'/quiz/' + quiz}>
            Тест {quiz}
          </NavLink>
        </li>
      )
    })
  }


  render() {
    return (
      <div className={style.QuizList}>
        <div>
          <h1>Список тестов</h1>
          <ul>{this.renderQuiz()}</ul>
        </div>
      </div>
    )
  }
}

export default QuizList
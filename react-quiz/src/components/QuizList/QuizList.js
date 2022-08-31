import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import style from './QuizList.module.css';
import axios from '../../Axios/axios-quiz';
import Loader from '../UI/Loader/Loader';


export class QuizList extends Component {

  state = {
    quizes: [],
    loading: true,
    
 
  }

  renderQuiz(){
    
    return this.state.quizes.map(quiz =>{
      
      return(
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>
            {quiz.name}
          </NavLink>
        </li>
      )
    })
    
  }

  async componentDidMount(){
    try{
      const response = await axios.get('/quizes.json')
      const quizes = []
      Object.keys(response.data).forEach((key, index) =>{
        quizes.push({
          id: key,
          name: `Тест № ${index+1}`
        })
      })
      this.setState({
        quizes, loading: false
      }) 
    }catch (e){
      console.log(e)
    }   
  }

  render() {
    return (
      <div className={style.QuizList}>
        <div>
          <h1>Список тестов</h1>
          {
            this.state.loading
            ? <Loader />
            : <ul>{this.renderQuiz()}</ul>
          }
        </div>
      </div>
    )
  }
}

export default QuizList
import React, { Component } from "react";
import style from './Quiz.module.css';
import ActivQuiz from "../../components/ActivQuiz/ActivQuiz";

class Quiz extends Component {
    state = {
        quiz:[
            {
            question: 'Какого цвета небо?',
            rightAnswerId: 2,
            answers:[
                {text: 'Вопрос 1', id: 1},
                {text: 'Вопрос 2', id: 2},
                {text: 'Вопрос 3', id: 3},
                {text: 'Вопрос 4', id: 4},
            ]}
        ]
    }

    onAnswerClickHandler = answerId =>{
        console.log('Answer Id: ', answerId)
    }


    render(){
        return(
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                   <h1>Ответьте на вопросы</h1>
                   <ActivQuiz 
                      answers = {this.state.quiz[0].answers} 
                      question = {this.state.quiz[0].question}  
                      onAnswerClick = {this.onAnswerClickHandler}                
                   />
                </div>
            </div>
        )
    }
}

export default Quiz
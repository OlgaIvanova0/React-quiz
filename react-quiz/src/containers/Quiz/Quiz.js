import React, { Component } from "react";
import style from './Quiz.module.css';
import ActivQuiz from "../../components/ActivQuiz/ActivQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz:[
            {
            question: 'Какого цвета небо?',
            rightAnswerId: 2,
            id: 1,
            answers:[
                {text: 'Черного', id: 1},
                {text: 'Синего', id: 2},
                {text: 'Красного', id: 3},
                {text: 'Зеленого', id: 4},
            ]},
            {
                question: 'Какого цвета трава?',
                rightAnswerId: 4,
                id: 2,
                answers:[
                    {text: 'Черного', id: 1},
                    {text: 'Синего', id: 2},
                    {text: 'Красного', id: 3},
                    {text: 'Зеленого', id: 4},
                ]}
        ]
    }

    onAnswerClickHandler = answerId =>{
        console.log('Answer Id: ', answerId)
        this.setState({
            activeQuestion: this.state.activeQuestion + 1
        })
    }


    render(){
        return(
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                   <h1>Ответьте на вопросы</h1>
                   <ActivQuiz 
                      answers = {this.state.quiz[this.state.activeQuestion].answers} 
                      question = {this.state.quiz[this.state.activeQuestion].question}  
                      onAnswerClick = {this.onAnswerClickHandler}  
                      quizLenght = {this.state.quiz.length} 
                      answerNumber = {this.state.activeQuestion + 1}             
                   />
                </div>
            </div>
        )
    }
}

export default Quiz
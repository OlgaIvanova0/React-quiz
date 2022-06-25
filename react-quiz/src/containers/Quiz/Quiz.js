import React, { Component } from "react";
import style from './Quiz.module.css';
import ActivQuiz from "../../components/ActivQuiz/ActivQuiz";

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        answerState: null,
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
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success'){
                return
            }
        }


        const question = this.state.quiz[this.state.activeQuestion]

        if(question.rightAnswerId === answerId){
            this.setState({
                answerState: {[answerId]: 'success'}
            })

            const timeout = window.setTimeout(() =>{
                if(this.isQuizFinished()){
                    console.log('Finished')
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)

            }, 1000)
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
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
                      state = {this.state.answerState}         
                   />
                </div>
            </div>
        )
    }
}

export default Quiz
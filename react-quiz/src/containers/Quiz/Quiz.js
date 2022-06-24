import React, { Component } from "react";
import style from './Quiz.module.css';
import ActivQuiz from "../../components/ActivQuiz/ActivQuiz";

class Quiz extends Component {
    state = {
        quiz:[]
    }
    render(){
        return(
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                   <h1>Quiz</h1>
                   <ActivQuiz />
                </div>
            </div>
        )
    }
}

export default Quiz
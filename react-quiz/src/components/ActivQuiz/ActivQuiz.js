import React from "react";
import style from './ActivQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

const ActivQuiz = props =>(
    <div className={style.ActivQuiz}>
        <p className={style.Question}>
            <span>
                <strong>{props.answerNumber}. </strong>
                {props.question}
            </span>
            
            <small>
            {props.answerNumber} из {props.quizLenght}
            </small>
        </p>
        <AnswersList 
           answers = {props.answers}
           onAnswerClick ={props.onAnswerClick}
        />
    </div>
)

export default ActivQuiz
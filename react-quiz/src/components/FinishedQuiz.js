import React from "react";
import style from './FinishedQuiz.module.css'
import Button from "./UI/Button";

const FinishedQuiz = props =>{
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if(props.results[key] === 'success'){
            total++
        }
        return total
    })
    return(
        <div className={style.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) =>{
                    const cls =[
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        style[props.results[quizItem.id]]
                    ]
                    return(
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type='Btn-primary'>Повторить</Button>
                <Button type='Btn-success'>Перейти в список тестов</Button>
            </div>
        </div>
    )
}

export default FinishedQuiz
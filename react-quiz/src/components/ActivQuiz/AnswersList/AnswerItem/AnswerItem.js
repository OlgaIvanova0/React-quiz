import React from "react";
import style from './AnswerItem.module.css'

const AnswerItem = props =>{
    return(
        <li className={style.AnswerItem}>
            {props.answer.text}
        </li>
    )
}

export default AnswerItem
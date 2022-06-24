import React from 'react';
import style from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = props =>(
    <ul className={style.AnswersList}>
        {props.answers.map((answer, index) => {
            return(
                <AnswerItem answer={answer} />
            )

        })}

    </ul>
)

export default AnswersList
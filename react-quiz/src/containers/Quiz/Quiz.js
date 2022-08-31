import React, { Component } from "react";
import style from './Quiz.module.css';
import ActivQuiz from "../../components/ActivQuiz/ActivQuiz";
import FinishedQuiz from "../../components/FinishedQuiz";
import axios from '../../Axios/axios-quiz';
import Loader from "../../components/UI/Loader/Loader";


class Quiz extends Component {
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz:[],
        loading: true
    }

    onAnswerClickHandler = answerId =>{
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0]
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const results = this.state.results

        if(question.rightAnswerId === answerId){
            if(!results[question.id]){
                results[question.id] = 'success'
            }
            this.setState({
                answerState: {[answerId]: 'success'},
                results
            })
            this.isTimeout()


        } else {
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
            this.isTimeout()
        }
    }

    isTimeout(){
        return(
            window.setTimeout(() =>{
        if(this.isQuizFinished()){
            this.setState({
                isFinished: true
            })
        } else {
            this.setState({
                activeQuestion: this.state.activeQuestion + 1,
                answerState: null
            })
        }
        window.clearTimeout(this.isTimeout)

    }, 1000))}

    isQuizFinished(){
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }
    retryHandler =() =>{
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    async componentMount() {
       try{ 
        console.log(this.props)  
        
         const response = await axios.get(`/quizes/${this.props.quiz.id}.json`)
         const quiz = response.data
         this.setState({
            quiz,
            loading: false
         })
       }catch(error){
        console.log(error)
       }
    }

    render(){
        return(
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                   <h1>Ответьте на вопросы</h1>
                   {   this.state.loading
                       ? <Loader />
                       : this.state.isFinished
                       ? <FinishedQuiz 
                          results = {this.state.results}
                          quiz = {this.state.quiz}
                          onRetry={this.retryHandler}
                       />
                       : <ActivQuiz 
                       answers = {this.state.quiz[this.state.activeQuestion].answers} 
                       question = {this.state.quiz[this.state.activeQuestion].question}  
                       onAnswerClick = {this.onAnswerClickHandler}  
                       quizLenght = {this.state.quiz.length} 
                       answerNumber = {this.state.activeQuestion + 1}    
                       state = {this.state.answerState} />
                   }
                   
                </div>
            </div>
        )
    }
}

export default Quiz
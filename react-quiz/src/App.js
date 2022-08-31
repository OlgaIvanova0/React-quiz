import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Layout from './hoc/Layout';
import Quiz from './containers/Quiz/Quiz';
import Auth from './components/Auth/Auth';
import QuizCreator from './components/QuizCreator/QuizCreator';
import QuizList from './components/QuizList/QuizList';

class App extends Component {
  
  render(){
    return(
      <Layout>
        <Routes>
          <Route path='/auth' element={<Auth/>} />
          <Route path='/quiz-creator' element={<QuizCreator/>} />
          <Route path='/quiz/:id' element={<Quiz />} />
          <Route path='/' element={<QuizList />} />
        </Routes>
      </Layout>
    )
  }
}

export default App;

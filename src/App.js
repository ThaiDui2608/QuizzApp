import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('')
  const [questions, setQuestion] = useState()
  const [score, setScore] = useState(0)

  const fetchQuestions = async (category = '', difficulty = '') => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );
      setQuestion(data.results)
    }

  return (
    <BrowserRouter>
      <div className="container">
        <Header/>

        <Routes>
          <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}>
          </Route> 

          <Route path='/quiz' element={<Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestion={setQuestion}
          />}>
          </Route>

          <Route path='/result' element={<Result name={name} score={score}/>}>
          </Route>
        </Routes>

      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

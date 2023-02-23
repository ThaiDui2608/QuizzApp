import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import Questions from '../../components/Questions/Questions'
import './Quiz.css'

const Quiz = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState()
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const handleQuestion = (options) => {
    return options.sort(() => Math.random() - 0.5)
  }

  useEffect(() => {
    setOptions(
      questions && 
        handleQuestion([
          questions[currentQuestion] ?.correct_answer,
          ...questions[currentQuestion] ?.incorrect_answers
    ]))
  }, [currentQuestion, questions])

  
  return (
    <div className='quiz'>
      <span className='subtitle'>
        Hello, {name}
      </span>

      {questions ? (
          <>
            <div className="quizInfo">
              <span>{questions[currentQuestion].category}</span>
              <span>
                Score : {score}
              </span>
              </div>

              <Questions
                questions={questions}
                setQuestions={setQuestions}
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                options={options}
                score={score}
                setScore={setScore}
                correct={questions[currentQuestion]?.correct_answer}
              />
          </>
        ) : 
        (
          <CircularProgress
            style={{
              margin: 100,
              color: '#000',
              size: 150,
              thickness: 1
            }}
          />
        )
      }
    </div>
  )
}

export default Quiz
import React, { useState } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import './Questions.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Questions = ({
    questions,
    currentQuestion,
    setCurrentQuestion,
    options,
    score,
    setScore,
    correct
}) => {
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const handleSelected = (i) => {
        if(selected === i && selected === correct){
            return 'select'
        } else if(selected === i && selected !== correct) {
            return 'wrong'
        } else if(i === correct) {
            return 'select'
        }
    }

    const handleCheck = (i) => {
        setSelected(i)
        if(i === correct){
            setScore(score + 1)
        }
        setError(false)
    }


    const handleNext = () => {
        if(currentQuestion > 1){
            navigate('/result')
        } else if(selected) {
            setCurrentQuestion(currentQuestion + 1)
            setSelected()
        } else{
            setError('Select an option first')
        }
    }

  return (
    <div className='question'>
        <h1>Questions {currentQuestion + 1}</h1>

        <div className='singleQuestion'>
            <h2>{questions[currentQuestion].question}</h2>
            <div className='options'>
                {error && <ErrorMessage>{error}</ErrorMessage>}

                {
                    options && 
                    options.map(i => (
                        <button
                            onClick={() => handleCheck(i)}
                            className={`singleOption ${selected && handleSelected(i)}`}
                            key={i}
                            disabled={selected}
                        >
                            {i}
                        </button>
                    ))
                }
            </div>

            <div className='controls'>
                <Button
                    variant='contained'
                    size='large'
                    style={{
                        width: 185,
                        backgroundColor: 'pink',
                        color: '#000'
                    }}
                    href='/'
                >Quit</Button>
                <Button
                    variant='contained'
                    size='large'
                    style={{
                        width: 185,
                        backgroundColor: '#000',
                        color: 'pink'
                    }}
                    onClick={handleNext}
                >Next question</Button>
            </div>
        </div>
    </div>
  )
}

export default Questions
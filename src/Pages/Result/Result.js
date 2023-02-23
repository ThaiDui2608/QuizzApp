import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Result.css'
import { Button } from '@mui/material'

const Result = ({ name, score }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if(!name) navigate('/')

  }, [name, navigate])

  return (
    <div className='result'>
      <span className='title'>
        Your score: {score}
      </span>
      <Button
        variant='contained'
        size='large'
        style={{
            width: 185,
            backgroundColor: 'pink',
            color: '#000'
        }}
        href='/'
      >
        Back to homepage
      </Button>
    </div>
  )
}

export default Result
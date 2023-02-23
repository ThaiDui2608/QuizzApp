import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './Home.css'
import { MenuItem, TextField, Button } from '@mui/material'
import Categories, {} from '../../components/Data/Categories'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const Home = ({name, setName, fetchQuestions}) => {
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  function handleSubmit(){
    if( !category || !difficulty || !name){
      setError(true)
      return
    } else {
      setError(false)
      fetchQuestions(category, difficulty)
      navigate('/quiz')
    } 
    
  }

  return (
    <div className='content'>
      <div className='settings'>
        <span>Quiz Settings</span>

        <div className='settings_select'>
          {error && <ErrorMessage>please fill out blank input</ErrorMessage>}
          <TextField
            style={{marginBottom: 25}}
            label='Enter your name'
            variant='outlined'
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label='Category'
            variant='outlined'
            value={category}
            style={{marginBottom: 30}}
            onChange={(e) => setCategory(e.target.value)}
          >
            {Categories.map((cate) => (
              <MenuItem key={cate.category} value={cate.value}>
                {cate.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label='Difficulty'
            variant='outlined'
            style={{marginBottom: 30}}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key='Easy' value='easy'>
              Easy  
            </MenuItem>
            <MenuItem key='Medium' value='medium'>
              Medium  
            </MenuItem>
            <MenuItem key='Hard' value='hard'>
              Hard  
            </MenuItem>
          </TextField>

          <Button
            variant='container'
            color='primary'
            size='large'
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
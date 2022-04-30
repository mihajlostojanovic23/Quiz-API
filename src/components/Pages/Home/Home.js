import { Button, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import './Home.css'
import Categories from '../../../DATA/Categories'
import ErrorMessage from '../../ErrorMessage/ErrorMessage'
import { useNavigate } from 'react-router-dom'

const Home = ({name,setIme , fetchQuestions}) => {
  const [category, setCategory] = useState("")
  const [LevelState, setLevel] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = () => {
    if(!category || !LevelState || !name ) {
      setError(true)
      return;
    }

    else{
      setError(false)
      fetchQuestions(category, LevelState)
      navigate('/quiz')
    }
  }
  const Level = [
    {
      level: 'Easy',
      value: 'easy'
    },
    
    {
      level: 'Medium',
      value: 'medium'
    },

    {
      level: 'Hard',
      value: 'hard'
    },
  ]
  return (
    <div className='content'>
      <div className='settings'>
       <span className='quiz_title'>Quiz Settings</span>
       <div className='settings_select'>

         {error && <ErrorMessage>Error, enter data</ErrorMessage>}
         <TextField className='input' label="Enter Your Name" variant='outlined'
         onChange={(e)=> {setIme(e.target.value)}}></TextField>
      
        <TextField className='select' select label='Select Category'
        variant='outlined' value={category} onChange={(e)=> {setCategory(e.target.value)}}>
          {Categories.map((cate) =>( <MenuItem key={cate.category} value={cate.value} >{cate.category}</MenuItem>
        ))} 
        </TextField>

        <TextField className='select' select label='Select Level'
        variant='outlined' value={LevelState} onChange={(e)=> {setLevel(e.target.value)}}>
        <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
        </TextField>
        <Button className="btn" variant='contained' size="large" color='primary' onClick={handleSubmit}>Start Quiz</Button>

       </div>
       </div>
      <img src='/quiz2.svg' className='picture' alt='quiz-img'></img>
      
      </div>

    
    
  )
}

export default Home
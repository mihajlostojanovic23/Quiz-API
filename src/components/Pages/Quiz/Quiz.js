import { CircularProgress } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Question from '../Question/Question'
import './Quiz.css'

const Quiz = ({name, score, questions, setQuestions, setScore}) => {
  
const [options, setOptions] = useState()
const [currentQuestion, setCurrentQuestion] = useState(0)

  useEffect(() => {
    setOptions(questions && handleShuffle
      ([questions[currentQuestion].correct_answer,
        ...questions[currentQuestion].incorrect_answers, ]))
        
  }, [questions,currentQuestion])
  
const handleShuffle = (optionss) => {
  return optionss.sort(() => Math.random() - 0.5);
}


  
  return (
    <div className='quiz'>
     <span className='subtitle'> Name: {name} </span>
     <br></br>

     {questions ? 
     (
       <div className='question_content' >
      
       
       <div className='info'> 
        <span style={{paddingLeft: '20px'}}>{questions[currentQuestion].category}</span>
        <span style={{paddingRight: '20px'}}>Score: {score}</span>
        </div>
        

        <Question
        questions ={questions}
        setQuestions = {setQuestions}
        options ={options}
        currentQuestion = {currentQuestion}
        setCurrentQuestion = {setCurrentQuestion}
        correct = {questions[currentQuestion]?.correct_answer}
        score= {score}
        setScore={setScore}
        />
        </div>
     ) 
     : (  <div className="loader">  
     <CircularProgress  style={{
      margin: 'auto',
       width: '70px',
       height:'70px',
       color: 'black',
       display: 'flex',
       justifyContent: 'center',
       }} /> 
       </div>)} 
    </div>
  )
}

export default Quiz
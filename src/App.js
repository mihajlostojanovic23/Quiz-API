import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Quiz from './components/Pages/Quiz/Quiz';
import Result from './components/Pages/Result/Resut';

function App() {
  const [name, setIme] = useState("")
  const [questions, setQuestions] = useState("")
  const [score, setScore] = useState(0)

  const fetchQuestions =async(category ='',LevelState ='') => {
  const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${
    category && `&category=${category}`
  }${LevelState && `&difficulty=${LevelState}`}&type=multiple`)
  setQuestions(data.results)
  };

  
 



  return (
    <BrowserRouter>
    <div className="App">
      <div className='overlay'></div>
      <Header></Header>

      <Routes>
        <Route path='/' exact element={<Home name={name} setIme={setIme} fetchQuestions={fetchQuestions} />} />
        <Route path='/quiz' exact element={<Quiz 
        name={name} 
        questions={questions} 
        score={score} 
        setScore={setScore}
        setQuestions = {setQuestions}
        />} />
        <Route path='/result' exact element={<Result name={name} score={score}q />} />
        </Routes>


    </div>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

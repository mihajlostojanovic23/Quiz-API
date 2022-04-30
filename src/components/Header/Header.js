import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import  './Header.css'
class Header extends Component {

  render() {
    
    return (
      <div className='header'>
         <Link className='title' to="/" >INTUITIVE QUIZ HUB</Link>
         <hr className='divider'></hr>
      </div>
    )
  }
}

export default Header
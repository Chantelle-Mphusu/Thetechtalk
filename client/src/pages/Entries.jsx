import React from 'react'
import '../App.css'
import passion from '../imgs/passion.jpg'

const Entries = () => {
  return (
    <>
      <main>
          <header>
              <a href="/" className="Logo">My Blog</a>
              <nav>
                  <a href="/login">Login</a>
                  <a href="/register">Register</a>
                  <a href="/aboutme">About Me</a>
              </nav>
          </header>
          
          <div className="entry">
             <img src={passion} style={{width:'480px',height:'380px', marginLeft:'140px'}} alt="passionpicture"/>
              <div className="text">
              <h2 >Passion is what we have</h2>
              <p >Before anything you are a woman</p>
              </div>
          </div>
          
          <div className="entry">
             <img src={passion} style={{width:'480px',height:'380px', marginLeft:'140px'}} alt="passionpicture"/>
              <div className="text">
              <h2 >Passion is what we have</h2>
              <p >Before anything you are a woman</p>
              </div>
          </div>
          <div className="entry">
             <img src={passion} style={{width:'480px',height:'380px', marginLeft:'140px'}} alt="passionpicture"/>
              <div className="text">
              <h2 >Passion is what we have</h2>
              <p >Before anything you are a woman</p>
              </div>
          </div>
      </main>
   </>
  )
}

export default Entries
import { useState } from 'react'

// import mypic from './assets/Portfolioimage1.jpg'
import advofu from './assets/portfoliopictureadvocacyofunderstanding.jpg'
import './App.css'
import webisteshowcasingvideo from './assets/Untitled design.mp4'


function App() {
  const [count, setCount] = useState(0)
  console.log('app component rendered')
  return (
    <>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hisamu Gomi</title>
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </head>
      <div>
        {/* <img src={mypic} className="mypic" /> */}
          
          </div>
          <div classcame='nameletters' >
          <c>H</c>
          <c>i</c>
          <c>s</c>
          <c>a</c>
          <c>m</c>
          <c>u</c>
          <a> </a>
          <c>G</c>
          <c>o</c>
          <c>m</c>
          <c>i</c>
          </div>
      <p className="read-the-docs">
        Hello, this is the portfolio site of Hisamu Gomi.
        I am an international student from Japan at the university of Lethbridge.
        Majoring Psychology, interested in social change through technology.
      
      <div className= "spacer"></div>

 {/* --- New Video Section Starts Here --- */}
      <div className="video-section">
        <h2>Project Showcase</h2>
        <div className="video-container">
          <video className="project-video" controls>
            <source src={webisteshowcasingvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
{/* Video section ends here */}

          <div>my linktree</div>
        <a href="https://linktr.ee/advocacyofunderstanding" className='logo'>
          
          <img src={advofu} className="logo" />
        </a>
      </p>
      
    </>
  )
}

export default App

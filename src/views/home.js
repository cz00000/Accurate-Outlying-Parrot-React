import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>DISCOVERY2</title>
        <meta property="og:title" content="DISCOVERY2" />
      </Helmet>
      <div className="home-container1">
        <h1 className="home-text">DISCOVERY</h1>
      </div>
      <div className="home-container2">
        <h1 className="home-text1">O MUNDO DOS JOGOS</h1>
      </div>
      <div className="home-container3">
        <a href="https://rockstargames.com" className="home-link">
          <div className="home-container4">
            <h1 className="home-text2">GTA V</h1>
          </div>
        </a>
        <a href="https://rockstargames.com" className="home-link1">
          <img
            alt="pastedImage"
            src="/external/pastedimage-oyvsh-400h.png"
            className="home-pasted-image"
          />
        </a>
        <a href="https://www.fortnite.com" className="home-link2">
          <div className="home-container5">
            <h1 className="home-text3">FORTNITE</h1>
          </div>
        </a>
        <a href="https://www.fortnite.com" className="home-link3">
          <img
            alt="pastedImage"
            src="/external/pastedimage-xzyk-300h.png"
            className="home-pasted-image1"
          />
        </a>
        <a href="https://playvalorant.com" className="home-link4">
          <div className="home-container6">
            <h1 className="home-text4">
              <span>VALORANT</span>
              <br></br>
              <br></br>
            </h1>
          </div>
        </a>
        <a href="https://playvalorant.com" className="home-link5">
          <img
            alt="pastedImage"
            src="/external/pastedimage-y3n-300h.png"
            className="home-pasted-image2"
          />
        </a>
      </div>
    </div>
  )
}

export default Home

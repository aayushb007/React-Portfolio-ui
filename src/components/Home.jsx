import React from 'react';
import Typed from 'react-typed';

const Home = () => {
    return (
        <>
          <div className="home-page">
              <div className="home-div">
                  <p className="pt-5">WELCOME</p>
                  <h1>We are <Typed
                    strings={['Web Developer','Interior Designer','Graphics Designer']}
                    typeSpeed={90}
                    backSpeed={80}
                loop/></h1>
                 
              </div>
          </div>
        </>
    )
}

export default Home

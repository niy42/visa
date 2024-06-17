import React, { useEffect } from 'react'
import { Navbar, Welcome, Footer, Evolution, Utilities } from './components'
import '../App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


export const Design = () => {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
      <h3></h3>
    </>
  );
}

const App = () => {


  return (
    <div className='App'>

      <div className='area circles'>
        <Design />
        <Navbar />
        <Welcome />
      </div>

      <div className='area'>
        <div data-aos='fade-down'>
          <Evolution />
        </div>
        <div data-aos='fade-up'>
          <Utilities />
        </div>
        <div data-aos='fade-right' >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

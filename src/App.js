import React from 'react'

import { Footer, Possibility, Whattalentasso, Header, Features } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import './index.css';


const App = () => {
  return (
    <div classname= 'App'>
      <div className='gradient__bg__app'>
      <Navbar />
      <Header />
      <Brand />
      <Whattalentasso />
      <Features />
      <CTA />   
      <Possibility />
      <Footer />

      </div>

    </div>
  )
}

export default App


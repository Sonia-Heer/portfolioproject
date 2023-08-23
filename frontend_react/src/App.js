import React from 'react'

import { About, Header, Work, Footer, Testimonials, Skills } from './container';

import { Navbar } from './components';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Footer />
        <Work />
        <Skills />
        <Testimonials />
    </div>
  )
}

export default App
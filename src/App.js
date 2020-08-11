import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import bgImage from './components/bgImage.png'
import ContactUs from './components/contact_gq'
import './App.css'


function App() {

  return (
    <div className='content-fluid'>
      <div className='row'>
        <div className='back-component col-md-4 col-lg-6 col-sm-2 col-12 p-0 '>
          <img src={bgImage} alt='backround' />
        </div>
        <div className='form-component col-lg-6 col-md-8 col-sm-8 col-xs-10 col-10 pt-4 m-auto d-flex align-items-center'>
          <ContactUs/>
        </div>
      </div>
    </div>
  )
}

export default App

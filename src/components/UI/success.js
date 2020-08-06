import React from 'react'
import './alert-msg.css'

export default (props) => {

  return(
    <>
      <div className='warning-msg'></div>
      <div className='d-flex flex-column align-items-center justify-content-center alert-succes col-md-10 m-auto p-0'>
        <div className='icon-msg-scs'></div>
        <p>Thank you for contacting us!</p>
        <button className='button-success'
                onClick={props.handleClickClose}
        >
          CONTINUE
        </button>
      </div>
    </>
  )
}

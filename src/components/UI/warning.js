import React from 'react'
import './alert-msg.css'

export default (props) => {

  return(
    <>
      <div className='warning-msg'></div>
      <div className='d-flex flex-column align-items-center justify-content-center alert-warning col-md-10 m-auto p-0'>
        <div className='icon-msg-wng'></div>
        <p>Sorry <br/> your specific request <br/> is temporarily inaccessible.</p>
        <button className='button-warning-border'
                onClick={props.handleClickClose}
        >
          HIDE
        </button>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import './alert-msg.css'

const useWarning = ( onWarinigClose ) => {
  
  const [visible, setVisible] = useState(true)

  const hideError = () => {
    setVisible(false)
    onWarinigClose();
  }

  const errorMsg = visible ? (
                        <div className='alert-warning 
                                        d-flex mb-3 flex-column 
                                        align-items-center 
                                        justify-content-center 
                                        col-md-10 m-auto p-0'>
                          <div className='icon-msg-wng'></div>
                          <p>Sorry <br/> your specific request <br/> is temporarily inaccessible.</p>
                          <button className='button-warning-border'
                                  onClick= {() =>  hideError() }
                          >
                            HIDE
                          </button>
                        </div>
                        ) : null

  return [ errorMsg, hideError ]
}
export default useWarning



import React, { useState } from 'react'
import './alert-msg.css'


const useSuccess = (onWarinigClose) => {
  const [visible, setVisible] = useState(true)

  const hideSuccess = () => {
    setVisible(false)
    onWarinigClose();
  }

  const successMsg = visible ? (
                      <div className='alert-warning 
                                      d-flex mb-3 flex-column
                                      align-items-center 
                                      justify-content-center 
                                      col-md-10 
                                      m-auto p-0'>
                        <div className='icon-msg-scs'></div>
                        <p>Thank you for contacting us!</p>
                        <button className='button-warning-border'
                                onClick= {() => hideSuccess()}
                        >
                          CONTINUE
                        </button>
                      </div>
                    ) : null

  return [ successMsg, hideSuccess ]
}
export default useSuccess



import React, { useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client';
import ContactForm from './contact-form'
import Loader from './UI/loader'
import useWarning from './UI/warning'
import useSuccess from './UI/success'
import './contactForm.css'

const GETCONTACT = gql`
  query GetContact( $email: String!, 
                    $name: String!,
                    $message: String!
                    ){ contact(contactInput: { 
                      email: $email, 
                      name: $name, 
                      message: $message,
    }){ success }}            
  `;

export default () => {

  const [ contact, { called, loading, data, error } ] = useLazyQuery( GETCONTACT );
  
  const [ warningClosed, setWarningClosed ] = useState(false)
  
  const onWarinigClose = () => {
    setWarningClosed(true)
  }

  const [ errorMsg ] = useWarning(onWarinigClose)
  const [ successMsg ] = useSuccess(onWarinigClose)
 
  const handleOnSubmit = (values, actions) => {
    contact({
      variables: {
       email: values.email,
       name: values.name,
       message: values.message
      }
    });
    actions.setSubmitting(false);
    actions.resetForm();
  }

  return (
    <>
      {error && errorMsg }
      {data && successMsg }

      <div className="popup-msg">
       {(called && loading) && <Loader/>}
      </div>
      
      <div className={ (error || data) && !warningClosed ? "d-flex col-md-12 form-hided" 
                                                         : "d-flex col-md-12" }>
        <ContactForm handleOnSubmit = { handleOnSubmit } />               
      </div>
    </>
  )
}

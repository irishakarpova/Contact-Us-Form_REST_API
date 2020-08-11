import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import validationSchema from './validation'
import './contactForm.css'

export default (props) => {
  const [length, setLength] = useState(0)
  const handleChange = (event) => {
    setLength(event.target.value.length)
  }
  return(
    <div data-testid="form" className='contactForm col-md-10 m-auto p-0'>
      <h1>CONTACT US</h1>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit= {(values, actions) => { 
          props.handleOnSubmit(values, actions)
        }}
        validationSchema={validationSchema}
      >
      {({ isSubmitting }) => (
        <Form id="cnt-form" noValidate>
          <div className="form-group col-md-12 p-0">
           <label className="input-lebel" htmlFor="name">Name</label>
            <Field data-testid="name" type="text" name="name" className="form-control" />
            <ErrorMessage data-testid="errors-name" name="name" className="errorMessage" component="div" />
          </div>

          <div className="form-group col-md-12 p-0">
            <label className='input-lebel' htmlFor="email">Email</label>
            <Field data-testid="email" type="email" name="email" className="form-control" />
            <ErrorMessage data-testid="errors-email" name="email" className="errorMessage" component="div" />
          </div>
          <div className="form-group col-md-12 p-0">
            <label className='textarea-lebel' htmlFor="message">Question&Comments</label>
            <Field data-testid="message"
                   name="message"
                   component="textarea"
                   rows="3"
                   className="form-control"
                   onKeyUp={handleChange}
              />
            <ErrorMessage data-testid="errors-message" name="message" className="errorMessage" component="div" />
            <p className='counter'>{length}/150</p>
          </div>
          <div className="col-md-4 p-0 float-right">
            <button data-testid="submit-button"
                    type="submit"
                    className="btn-blue-border"
                    disabled={isSubmitting}
            >
             Submit
            </button>
          </div>
        </Form>
      )}
      </Formik>
    </div>
  )
}

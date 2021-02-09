import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from './validation';
import './contactForm.css';
export default (props => {
  const [length, setLength] = useState(0);

  const handleChange = event => {
    setLength(event.target.value.length);
  };

  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "form",
    className: "contactForm col-md-10 m-auto p-0"
  }, /*#__PURE__*/React.createElement("h1", null, "CONTACT US"), /*#__PURE__*/React.createElement(Formik, {
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    onSubmit: props.handleOnSubmit,
    validationSchema: validationSchema
  }, ({
    isSubmitting
  }) => /*#__PURE__*/React.createElement(Form, {
    id: "cnt-form",
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-group col-md-12 p-0"
  }, /*#__PURE__*/React.createElement("label", {
    className: "input-lebel",
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/React.createElement(Field, {
    "data-testid": "name",
    id: "name",
    type: "text",
    name: "name",
    className: "form-control"
  }), /*#__PURE__*/React.createElement(ErrorMessage, {
    "data-testid": "errors-name",
    name: "name",
    className: "errorMessage",
    component: "div"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group col-md-12 p-0"
  }, /*#__PURE__*/React.createElement("label", {
    className: "input-lebel",
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement(Field, {
    "data-testid": "email",
    id: "email",
    type: "email",
    name: "email",
    className: "form-control"
  }), /*#__PURE__*/React.createElement(ErrorMessage, {
    "data-testid": "errors-email",
    name: "email",
    className: "errorMessage",
    component: "div"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-group col-md-12 p-0"
  }, /*#__PURE__*/React.createElement("label", {
    className: "textarea-lebel",
    htmlFor: "message"
  }, "Question&Comments"), /*#__PURE__*/React.createElement(Field, {
    "data-testid": "message",
    id: "message",
    name: "message",
    component: "textarea",
    rows: "3",
    className: "form-control",
    onKeyUp: handleChange
  }), /*#__PURE__*/React.createElement(ErrorMessage, {
    "data-testid": "errors-message",
    name: "message",
    className: "errorMessage",
    component: "div"
  }), /*#__PURE__*/React.createElement("p", {
    className: "counter"
  }, length, "/150")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-4 p-0 float-right"
  }, /*#__PURE__*/React.createElement("button", {
    "data-testid": "submit-button",
    type: "submit",
    className: "btn-blue-border",
    disabled: isSubmitting
  }, "Submit")))));
});
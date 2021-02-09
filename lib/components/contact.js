import React, { useState } from 'react';
import axios from "axios";
import ContactForm from './contact-form';
import WarningMessage from './UI/warning';
import SuccessMessage from './UI/success'; ///error.response.data.error

export default (() => {
  const [serverState, setServerState] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const serverResponse = (isSuccess, message) => {
    setServerState({
      isSuccess,
      message
    });
  };

  const handleOnSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "/api/messages",
      data: values
    }).then(response => {
      actions.setSubmitting(false);
      actions.resetForm();
      serverResponse(true, /*#__PURE__*/React.createElement(SuccessMessage, {
        handleClickClose: () => setIsOpen(false)
      }));
      setIsOpen(true);
    }).catch(error => {
      actions.setSubmitting(false);
      setIsOpen(true);
      serverResponse(false, /*#__PURE__*/React.createElement(WarningMessage, {
        handleClickClose: () => setIsOpen(false)
      }));
      actions.resetForm();
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: isOpen ? "form-hided col-md-12" : 'd-flex col-md-12'
  }, /*#__PURE__*/React.createElement(ContactForm, {
    handleOnSubmit: handleOnSubmit
  })), isOpen && serverState && /*#__PURE__*/React.createElement("div", {
    className: "popup d-flex align-items-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8 m-auto p-0"
  }, serverState.message)));
});
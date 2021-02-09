import React from 'react';
import './alert-msg.css';
export default (props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "warning-msg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-column align-items-center justify-content-center alert-succes col-md-10 m-auto p-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-msg-scs"
  }), /*#__PURE__*/React.createElement("p", null, "Thank you for contacting us!"), /*#__PURE__*/React.createElement("button", {
    className: "button-success",
    onClick: props.handleClickClose
  }, "CONTINUE")));
});
import React from 'react';
import './alert-msg.css';
export default (props => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "warning-msg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "d-flex flex-column align-items-center justify-content-center alert-warning col-md-10 m-auto p-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "icon-msg-wng"
  }), /*#__PURE__*/React.createElement("p", null, "Sorry ", /*#__PURE__*/React.createElement("br", null), " your specific request ", /*#__PURE__*/React.createElement("br", null), " is temporarily inaccessible."), /*#__PURE__*/React.createElement("button", {
    className: "button-warning-border",
    onClick: props.handleClickClose
  }, "HIDE")));
});
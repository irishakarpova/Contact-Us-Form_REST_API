import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import bgImage from './components/bgImage.png';
import ContactUs from './components/contact';
import './App.css';

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "content-fluid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "back-component col-md-4 col-lg-6 col-sm-2 col-12 p-0 "
  }, /*#__PURE__*/React.createElement("img", {
    src: bgImage,
    alt: "backround"
  })), /*#__PURE__*/React.createElement("div", {
    className: "form-component col-lg-6 col-md-8 col-sm-8 col-xs-10 col-10 pt-4 m-auto d-flex align-items-center"
  }, /*#__PURE__*/React.createElement(ContactUs, null))));
}

export default App;
import React from "react";
import ReactDom from "react-dom";

import Header from "./Header";

import Main from "./Component";

import Footer from "./Footer";


ReactDom.render(
 <div className="app">
  <Header />
  <Main />
  <Footer />
  </div>,document.getElementById("root"));


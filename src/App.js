import React from 'react';
import { Helmet } from 'react-helmet';

import './App.css';

// import global components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="l-body">
      {/* This Helmet tag's content will alway get elevated to the <head> section of the page.
      We have an opportunity here to establish the best place for this </head> */}
      <Helmet>
        <title>Play React Project</title>
        <meta name="description" content="This is my meta description" />
        <meta name="theme-color" content="#58a4b0" />
        <html lang="en"/> {/* Allows ability to udpate HTML attr(s) */}
        <body class="dark" /> {/* Allows ability to udpate body attr(s) */}
      </Helmet>
      <Header />
      <Main className="" />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;

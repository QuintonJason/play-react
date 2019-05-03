import React from 'react';
import './App.css';

// import global components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="l-body">
      <Header />
      <Main className="testing" />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;

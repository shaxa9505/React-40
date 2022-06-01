import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './components/Shop';
import { ToastContainer } from "react-toastify"
import "./App.css";
import { ContextProvider } from './components/Context';

function App(props) {
  return (
    <>
      <ToastContainer />
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
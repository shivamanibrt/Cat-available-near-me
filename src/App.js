import React from "react";

import { Home } from "./Components/Home";
import { SearchPage } from "./Components/SearchPage";
import { Container, Row } from "react-bootstrap";
import { About } from "./Components/About";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import './App.css';

function App() {

  return (

    <div className="wrapper">

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;


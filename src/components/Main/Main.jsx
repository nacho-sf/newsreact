import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Form from './Form';
import ListNews from './ListNews';
import NotFound from '../NotFound';

class Main extends Component {
  render() {
    return <main>
      <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<Form />} path={"/form"} />
          <Route element={<ListNews />} path={"/list"} />
          <Route element={<NotFound />} path={"/*"} />
        </Routes>
    </main>;
  }
}

export default Main;

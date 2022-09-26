import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Form from './Form';
import ListNews from './ListNews';
import NotFound from '../NotFound';

class Main extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      newsList: this.props.defaultList
    }
    console.log("constructor");
  }


  async componentDidMount(){
    const resp = await fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=3qEoryesYiMfPGEvxmbBgnbfpCD3wZwq');
    const data = await resp.json();
    console.log(data);
    this.setState({
        newsList: data.results
    })
    console.log('componentDidMount');
}



  render() {
    return <main>
      <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<Form />} path={"/form"} />
          <Route element={<ListNews data={this.state.newsList} />} path={"/list"} />
          <Route element={<NotFound />} path={"/*"} />
        </Routes>
    </main>;
  }
}

Main.defaultProps = {
  defaultList: []
}

export default Main;

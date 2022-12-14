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


  addNews = (e) => {

    e.preventDefault();
    const title = e.target.title.value;
    const abstract = e.target.abstract.value;
    const image = e.target.image.value;
    const url = e.target.url.value;

    const newNewsList = {title,abstract,image,url};
    this.setState({newsList:[newNewsList,...this.state.newsList]})
    e.target.reset();
  }


  render() {
    return <main className={"main"}>
      <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<Form value={this.state.value} onFormSubmit={this.addNews} />} path={"/form"} />
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

import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid"
import Card from './Card'

class ListNews extends Component {



  render() {
    const newsList = this.props.data
    console.log(newsList);

    return <div className={"list-news"}>
      {newsList.map(news => 
        <Card data={news} key={uuidv4()}/>
        )
      }
      
    </div>;
  }
}

export default ListNews;

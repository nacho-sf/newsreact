import React, { Component } from "react";

class Card extends Component {
  render() {
    const {section, title, abstract, multimedia} = this.props.data
    
console.log(multimedia);
const img = multimedia===null? "" :multimedia[0].url;
    return <div>
      <p>{section}</p>
      <h3>{title}</h3>
      <p>{abstract}</p><br/>
      <img src={img} alt={"hola"}/>
    </div>;
  }
}

export default Card;

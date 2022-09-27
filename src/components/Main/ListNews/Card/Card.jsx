import React, { Component } from "react";

class Card extends Component {
  render() {
    const {title, abstract, multimedia} = this.props.data
    
console.log(multimedia);
const img = multimedia===null? "" :multimedia[0].url;
    return <div className={"card"}>
      <figure className={"figure"}>
        <img src={img} alt={"hola"}/>
      </figure>
      <section className={"content"}>
        <h3>{title}</h3>
        <p>{abstract}</p>
      </section>
    </div>;
  }
}

export default Card;

import React, { Component } from "react";

class Card extends Component {
  render() {
    const {title, url, abstract, multimedia} = this.props.data
    console.log(multimedia);
    const img = multimedia===null? "" :multimedia[0].url;

    return <div className={"card"}>
      <figure className={"figure"}>
        <img src={img} alt={"hola"}/>
      </figure>
      <section className={"content"}>
        <h3><a className={"link"} href={url}>{title}</a></h3>
        <p>{abstract}</p>
      </section>
    </div>;
  }
}

export default Card;

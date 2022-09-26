import React, { Component } from "react";

class Card extends Component {
  render() {
    const {section, title, abstract} = this.props.data

    return <div>
      <p>{section}</p>
      <h3>{title}</h3>
      <p>{abstract}</p><br/>
    </div>;
  }
}

export default Card;

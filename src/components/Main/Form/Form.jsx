import React, { Component } from "react";

class Form extends Component {


  render() {
    return <section className={"form"}>

      <form onSubmit={this.props.onFormSubmit}>

  <input 
  type="text"
  name="title"
  placeholder="Titular..."
  value={this.props.title}
  />

  <textarea 
  type="text"
  name="abstract"
  placeholder="Resumen..."
  value={this.props.abstract}
  />

  <input 
  type="url"
  name="image"
  placeholder="URL imágen..."
  value={this.props.image}
  />

  <input 
  type="url"
  name="url"
  placeholder="URL fuente..."
  value={this.props.url}
  />

  <button type="submit">Enviar</button>

</form>
    </section>;
  }
}

export default Form;

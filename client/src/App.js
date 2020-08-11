import React, { Component } from 'react';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }

  callAPI(){
    fetch("http://localhost:9000/testAPI")  // 9000
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res}));
  }
  componentWillMount(){
    this.callAPI();
  }

  render() {
    return (
      <div class="container">
        <nav class="navbar">



          <p>{this.state.apiResponse} </p>


      <ul>
        <li><a href="#home">Home </a></li>
        <li><a href="#about">About </a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume </a></li>
        <li><a href="#contact">Contact </a></li>
      </ul>
        </nav>
        <section id="home">
        <h1> Home section </h1>
        <p> Info and what not </p>
        </section>

        <section id="about">
        <h1> About section </h1>
        <p>

        I love complex systems, I marvel over how many exist in the world and how often we can draw
        parallels between different systems.
        I was meant to be an engineer and I gravitated toward it from the opposite side of the world, unknowingly completing
        the journey from jock to nerd gaining much empathy and humility in the process.     </p>
        </section>

        <section id="projects">
        <h1> Projects section </h1>
        <p> Info and what not </p>
        </section>

        <section id="resume">
        <h1> Resume section </h1>
        <p> Info and what not </p>
        </section>

        <section id="contact">
        <h1> Contact section </h1>
        <p> Info and what not </p>
        </section>




          </div>

    );
  }
}



      export default App;

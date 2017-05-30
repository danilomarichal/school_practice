import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color:'white'
    }
    this.colorChange = this.colorChange.bind(this);
  }
  componentDidMount(){
    this.setState({
      color:"green"
    })
  }
  colorChange(e){
    this.setState({
      color: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Type in a color name!!</h1>
      <input className="square" type="text" onChange={this.colorChange} />
<div id="figure" style={{height: "800px", width:"800px", background:this.state.color}}/>
  </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor='#fff';
let defaultStyle={
  color:defaultTextColor
};

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, display:'inline-block', width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}
class Aggregate extends Component{
  render(){
    return(
      <div className="aggregate">
          <h2 style={defaultStyle}>Second Text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div style={{color:defaultTextColor}}>
        <img/>
        <input type="txt"/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Website</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}
export default App;

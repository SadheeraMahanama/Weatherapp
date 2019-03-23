// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";

import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "cf1eab6b5f0fd6367b1a7530e4043dd9"

class App extends React.Component{

  // constructor(){
  //   this.getWeather = this.getWeather.bind(this);
  // }
  getWeather = async (e) => {
   e.preventDefault();
   const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;

    // const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&appid=cf1eab6b5f0fd6367b1a7530e4043dd9`, {mode: 'cors'}

    
    
  );
    const data = await api_call.json();
    console.log(data);
  } 
  render(){
    return(
      <div>
         <Titles/>
         <Form getWeather={this.getWeather}/>
         <Weather/>
      </div>
    );
  }
};

export default App;

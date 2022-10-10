import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


let datafromapi = 'intial data from api';
class RapidAPI extends React.Component{
  render(){
    axios.request(options).then(function (response) {
      console.log(response.data);
      datafromapi = response.data;
    }).catch(function (error) {
      console.error(error);
    });
return (<p>{datafromapi} </p>)
  
  }
}

const options = {
  method: 'GET',
  url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
  params: {count: '5'},
  headers: {
    'X-RapidAPI-Key': '5645703104msh4477ec93fd29ef5p105f02jsn43b1d3a07716',
    'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
  }
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <RapidAPI/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



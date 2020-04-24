import React from 'react';
import ReactDOM from 'react-dom';

// import ReactJs components

import PricesList from '../components/pricesList.js'

import Basic from '../components/basic.js'
/*
* props can be of any type, here an array
*/
const pricesReact =() =>
    fetch('http://127.0.0.1:3000/pricesRest/', { method :'GET' })
      .then( response => response.json() )
      .then( pri => ReactDOM.render(
          <Basic allPrices = {pri}/>,
          document.getElementById('insertReactHere')
        ))






window.addEventListener('DOMContentLoaded', pricesReact );

import React from 'react';
import ReactDOM from 'reactDOM';
import $ from 'jquery';
import HomeHTML from 'text!partials/home.html';

// React
ReactDOM.render(<h1 className="text-center">Hello, React!</h1>, document.body);

// jQuery
$('body').append(HomeHTML);

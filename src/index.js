import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Hello from './myForm';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<MyForm />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

ReactDOM.render(React.createElement(Hello, {
    name: "",
    email: "Input email..",
    description: "Input description..",
    profession: "profession",
  }), document.getElementsByClassName('form-outer')[0]);


serviceWorker.unregister();

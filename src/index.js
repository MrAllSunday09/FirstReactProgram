import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './hello.css';
import reportWebVitals from './reportWebVitals';

var courseNames = ['React', 'Angular', 'JavaScript']
function generateJSX()
{
  return courseNames.map((course, index) => <li key={index}>{course}</li>)
}
const element = <ol>{generateJSX()}</ol>
ReactDOM.render(
    element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

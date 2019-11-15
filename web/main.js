import React from 'react'
import ReactDOM from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

ReactDOM.render(<App />, document.getElementById('rootApp'));

export function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    if (typeof obj !== "object") return true;
    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
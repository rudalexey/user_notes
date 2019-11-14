import React from 'react'
import {render} from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


if (typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function') {
    window.renderClient = () => {
        render(
            <App/>,
            document.getElementById('rootApp')
        );
    }
} else {
    global.renderServer = () => {
        return renderToString(
            <App/>
        )
    };
}

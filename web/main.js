import React from 'react'
import {render} from 'react-dom'
import {renderToString} from 'react-dom/server'
import App from './App'


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

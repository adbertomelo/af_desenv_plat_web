import React from 'react';
import ReactDOM from 'react-dom';
import MainRoutes from './routers/router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <MainRoutes />        
    </React.StrictMode>,
    document.getElementById('root')
);

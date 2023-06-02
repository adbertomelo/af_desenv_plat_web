import React from 'react';
import ReactDOM from 'react-dom';
import MainRoutes from './routers/router';
import LoginRoute from './routers/loginrouter';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <LoginRoute />
        <MainRoutes />        
    </React.StrictMode>,
    document.getElementById('root')
);

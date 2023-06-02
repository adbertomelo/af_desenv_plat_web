import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import Login from '../pages/account/login';


export default function LoginRoute() {

    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>

    )
};
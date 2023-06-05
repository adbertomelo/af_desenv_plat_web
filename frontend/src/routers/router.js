import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import CreateUser from '../pages/user/create';
import ListUser from '../pages/user/list';
import EditUser from '../pages/user/edit';
import DeleteUser from '../pages/user/delete';
import Admin from '../pages/admin'
import Home from '../pages/home'
import Login from '../pages/account/login';
import LandingPage from '../pages/landingpage';

export default function MainRoutes() {

    return (
            
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/user/list" element={<ListUser />} />
                    <Route exact path="/user/create" element={<CreateUser />} />
                    <Route exact path="/user/edit/:id" element={<EditUser />} />
                    <Route exact path="/user/delete/:id" element={<DeleteUser />} />
                    <Route exact path="/admin" element={<Admin />} />
                    
                </Routes>
            </BrowserRouter>

        

    )
};
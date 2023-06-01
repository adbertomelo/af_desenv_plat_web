import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import Login from '../pages/account/login';
import CreateUser from '../pages/user/create';
import EditUser from '../pages/user/edit';
import DeleteUser from '../pages/user/delete';
import Admin from '../pages/admin'
import Home from '../pages/home'

export default function MainRoutes() {

    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/user/create" element={<CreateUser />} />
                <Route exact path="/user/edit/:id" element={<EditUser />} />
                <Route exact path="/user/delete/:id" element={<DeleteUser />} />
                <Route exact path="/admin" element={<Admin />} />
                <Route exact path="/admin/listofusers" element={<ListOfUsers />} />
            </Routes>
        </BrowserRouter>

    )
};
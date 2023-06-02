import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { URL_API } from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'


const Admin = () => {

    const [users, setUsers] = useState([]);
    const [msgError, setMsgError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {

        setMsgError('');

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch(`${URL_API}/admin/getusers`, requestOptions)
            .then(response => {

                if (!response.ok) {
                    return Promise.reject(response.text());
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setUsers(data);
            })
            .catch(error => {
                error.then(
                    msg => { setMsgError(msg) });
            });

    }, []);

    const listOfUsers = () => {

        const res = users.map((u) => {
            return <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td><Link to={`/user/edit/${u.id}`} title="Alterar" ><FontAwesomeIcon icon={faPencil} /></Link></td>
                <td><Link to={`/user/delete/${u.id}`} title="Excluir"><FontAwesomeIcon icon={faTrash} /></Link></td>
            </tr>
        });

        return res;

    }
    return (


        <div>
            <h3>Usu�rios</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th colSpan="2">A��es</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listOfUsers()
                    }
                </tbody>
            </table>
        </div>


    );

};

export default Admin;
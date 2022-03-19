import React, {Component} from "react";
import {Table} from "react-bootstrap";
import axios from "axios";

class User extends Component{
    BASE_URL='http://localhost:8080/api/user'
    render() {
        return (
            <React.Fragment>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th >ID</th>
                        <th >NAME</th>
                        <th >SURNAME</th>
                        <th >EMAIL</th>
                        <th >AGE</th>
                        <th >PASSWORD</th>
                        <th >ROLE</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.listUsers.length>0 &&
                        this.state.listUsers.map(user=>(
                            <tr>
                                <td >{user.id}</td>
                                <td >{user.name}</td>
                                <td >{user.surname}</td>
                                <td >{user.email}</td>
                                <td >{user.age}</td>
                                <td >{user.password}</td>
                                <td >{user.roles.map(role => role.name === 'ROLE_USER' ? 'ADMIN' :'USER' )}</td>
                                <td>
                                    <button type="button" data-userid="${user.id}" data-action="edit"
                                            className="btn btn-info"
                                            data-toggle="modal" data-target="modal" id="edit-user"
                                            data-id="${user.id}">Edit
                                    </button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger" id="delete-user"
                                            data-action="delete"
                                            data-id="${user.id}" data-target="modal">Delete
                                    </button>
                                </td>

                            </tr>

                        ))}


                    </tbody>
                </Table>
            </React.Fragment>

        );
    }
}

export default class User {
}
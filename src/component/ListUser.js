import React, {Fragment, Component} from "react";
import axios from "axios";
import {Table,Nav} from "react-bootstrap";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import HelloWorld from "./HelloWorld";
import UpdateUser from "./UpdateUser";
import DeleteUser from "./DeleteUser";
class ListUser extends Component {
    BASE_URL = 'http://localhost:8081/api'

    constructor(props) {
        super(props);
        this.state = {
            listUsers: []
        }
    }

    componentDidMount() {
        this.loadData();

    }

    loadData() {
        axios.get(this.BASE_URL + '/users',
            {
                method: 'GET',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjQ3ODYyNzEyfQ.lol85ZTQ0hnJCkx41llhhpvvCDvFjuzXagumQwLr7kREs_DznMmimz6c7btjhIpelUg6AkFMCkwyRE3jv634Wg",
                    "Content-Type": "application/json"
                }})
            .then(json => this.setState({listUsers: json.data}))
    }

    render() {

        return (
            <React.Fragment>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>SURNAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                        <th>PASSWORD</th>
                        <th>ROLE</th>
                    </tr>
                    </thead>
                    <tbody>

                    {this.state.listUsers.length > 0 &&
                        this.state.listUsers.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.password}</td>
                                <td>{user.roles.map(role => role.name === 'ROLE_USER' ? 'ADMIN' : 'USER')}</td>
                                <td>
                                    <Nav.Link
                                        type="button"
                                        className="btn btn-info"
                                        href='/edit'>
                                        Edit
                                    </Nav.Link>
                                </td>
                                <td>
                                    <Nav.Link
                                        type="button"
                                        className="btn btn-info"
                                        href='/delete'>
                                        Delete
                                    </Nav.Link>
                                </td>

                            </tr>

                        ))}


                    </tbody>
                </Table>
                {/*<Switch>*/}

                {/*    <Route  exact path={'/'} />*/}
                {/*    <Route  path={'/edit'} component={HelloWorld}/>*/}
                {/*</Switch>*/}
                <Switch>

                    <Route  exact path={'/'} />
                    <Route  path={'/edit'} component={UpdateUser}/>
                </Switch>
                <Switch>

                    <Route  exact path={'/'} />
                    <Route  path={'/delete'} component={DeleteUser}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(ListUser);




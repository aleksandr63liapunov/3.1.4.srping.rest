import React, {Component} from "react";
import axios from "axios";
import {Button, Form, Modal, Table} from "react-bootstrap";
import {withRouter} from "react-router-dom";
class DeleteUser extends Component{

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
        axios.get(this.BASE_URL + '/delete',
            {
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjQ3ODYyNzEyfQ.lol85ZTQ0hnJCkx41llhhpvvCDvFjuzXagumQwLr7kREs_DznMmimz6c7btjhIpelUg6AkFMCkwyRE3jv634Wg",
                    "Content-Type": "application/json"
                }})
            .then(json => this.setState({listUsers: json.data}))
    }

    render() {
        return (

            <Modal
                size="lg"
                show={this.state.open}
                onHide={() => this.setState({open: false})}
                centered>
                <Modal.Header>
                    <Modal.Title>Delete</Modal.Title>
                    <Modal.Body>
                        <Form>
                            {/*<Form.Group className="mb-3" controlId="formBasicEmail">*/}
                            {/*    <Form.Label>Логин</Form.Label>*/}
                            {/*    <Form.Control type="login"*/}
                            {/*                  name='login'*/}
                            {/*                  placeholder="Введите логин"*/}
                            {/*                  onChange={(event) => {*/}
                            {/*                      this.setState({login: event.target.value})*/}
                            {/*                  }}/>*/}
                            {/*</Form.Group>*/}
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="Id" value={user.id} placeholder="Id" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="Name" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control type="Surname" placeholder="Surname" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="Email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="Age" placeholder="Age" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={() => console.log('my event')}>
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={() => this.setState({open: false})}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Header>
            </Modal>

        );
    }
}

export default withRouter(DeleteUser);
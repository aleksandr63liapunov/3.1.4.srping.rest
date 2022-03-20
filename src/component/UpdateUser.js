import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Button, Form, Modal} from "react-bootstrap";

class UpdateUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            login: ""
        }
    }

    componentDidMount() {
        this.setState({open: true})
    }
    componentDidUpdate() {
        if(!this.state.open)
            this.props.history.push('/')
    }

    render() {
        return (

            <Modal
                size="lg"
                show={this.state.open}
                onHide={() => this.setState({open: false})}
                centered>
                <Modal.Header>
                    <Modal.Title>Edit</Modal.Title>
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
                                <Form.Control type="Id" placeholder="Id" />
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
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Role</Form.Label>

                                 <select>
                                    <option value="select">USER</option>
                                    <option value="other">ADMIN</option>
                            </select>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={() => console.log('my event')}>
                            Edit
                        </Button>
                        <Button variant="secondary" onClick={() => this.setState({open: false})}>
                            Закрыть
                        </Button>
                    </Modal.Footer>
                </Modal.Header>
            </Modal>

        );
    }
}

export default withRouter(UpdateUser);
import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Button, Form, Modal} from "react-bootstrap";

class HelloWorld extends Component {
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
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Логин</Form.Label>
                                <Form.Control type="login"
                                              name='login'
                                              placeholder="Введите логин"
                                              onChange={(event) => {
                                                  this.setState({login: event.target.value})
                                              }}/>
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

export default withRouter(HelloWorld);
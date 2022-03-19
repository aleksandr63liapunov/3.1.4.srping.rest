import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import HelloWorld from "./HelloWorld";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

class Header extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="mb-5">
                    <Navbar fixed="top" bg="dark" variant="dark">
                        <Container className='header-container'>
                            <Nav className="me-auto">
                                <Navbar.Brand>
                              TExt

                            </Navbar.Brand>
                            <Nav.Link href='/download'>

                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <BrowserRouter>
                    <Route exact path='/download' component={HelloWorld}/>
                </BrowserRouter>
            </div>
    </Router>
    )
        ;
    }
}

export default Header;
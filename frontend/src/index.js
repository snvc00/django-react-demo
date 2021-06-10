import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RegisterProduct from './RegisterProduct';
import ShowProducts from './ShowProducts';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Row,
    Col
} from "react-bootstrap";

ReactDOM.render(
    <React.StrictMode>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Products" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/products/register">Register</NavDropdown.Item>
                        <NavDropdown.Item href="/products">Show</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <Router>
            <Container>
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path="/" component={App} />
                            <Route exact path="/products" component={ShowProducts} />
                            <Route exact path="/products/register" component={RegisterProduct} />
                        </Switch>
                    </Col>
                </Row>
            </Container>

        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

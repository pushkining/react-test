import React, {Component} from 'react';
import {Navbar, Nav, Container, Button, FormControl, Form,} from "react-bootstrap";
import logo from './pushkin_logo1.png';
import {BrowserRouter as Router, Switch,  Route, Link} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

class Header extends Component {
    render() {
        return (<>
                <Navbar collapseOnSelect  expand="md" variant="dark" bg="dark" >
                   <Container>
                       <Navbar.Brand href="/" >
                           <img src={logo} height="50" width="50" className="d-inline-block align-top" alt="Logo"/>
                           {" "}
                           {/*My blog*/}
                       </Navbar.Brand >
                       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                       <Navbar.Collapse id="responsive-navbar-nav" text="white">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About us</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/blog">Blog</Nav.Link>
                            </Nav>
                           <Form inline>
                               <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                               <Button variant="outline-info">Search</Button>
                           </Form>
                       </Navbar.Collapse>
                   </Container>
                 </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                    </Switch>
                </Router>
                </>
        );
    }
}

export default Header;
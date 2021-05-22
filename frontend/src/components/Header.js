import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Navbar, Nav, NavLink} from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import SearchBox from './SearchBox'
import { allMoviesButtonClicked } from '../actions/buttonActions'


const Header  = () => {
    const dispatch = useDispatch();

    return (
        <Navbar collapseOnSelect expand="lg" variant="success">
            <Container>
                <NavLink href='/'>
                    <Navbar.Brand>
                        <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="EasePlayers" />
                    </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"> </Nav>
                    
                    <Route render={({ history, location }) => <SearchBox history={history} />} />

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
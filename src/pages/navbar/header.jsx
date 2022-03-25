import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

import './header.css'
import Intro from '../../components/intro/intro'
import ProjectList from '../../components/projectList/projectList';
import Contact from '../../components/contact/contact';

const Header = () => {
    return (
        <Router>
            <div className='main'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className='nav-wrapper'>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link className="nav-link" to="/react-portfolio-wwn">Main</Link>
                            </li>
                            <li class="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route
                        path="/react-portfolio-wwn"
                        element={<Intro />}
                    />
                    <Route 
                        path="/projects"
                        element={<ProjectList />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default Header
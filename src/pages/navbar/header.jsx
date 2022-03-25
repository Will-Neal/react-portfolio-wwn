import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
                                <a class="nav-link" href="/react-portfolio-wwn/">Main</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Contact</a>
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
import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/header.js';
import About from './components/about.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'


const LandingPage = (props) => {
    return(
        <div>
            <Header />
            <Route path= '/about' component={About} />
            <Route path= '/contact' component={Contact} />
            <Route path= '/projects' component={Projects} />
        </div>
    )
}

export default LandingPage
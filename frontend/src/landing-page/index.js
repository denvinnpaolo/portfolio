import React from 'react';
import { Route } from 'react-router-dom'

import Header from './components/header.js';
import About from './components/about.js'
import Projects from './components/projects.js'
import Contact from './components/contact.js'


const LandingPage = () => {
    return(
        <div id="main-container">
            <Route path= '/about' component={About} />
            <Route path= '/contact' component={Contact} />
            <Route path= '/projects' component={Projects} />

            <div id="container">
                <div id="container-mid">
                    <div>
                        <h2 id="txts">About</h2>
                    </div>

                    <div id="header">
                        <h1 id="txts">Denvinn Paolo Magsino</h1>
                        <h2 id="txts">Software Engineer || Fullstack Developer</h2>
                    </div>

                    <div>
                        <h2 id="txts">Contacts</h2>
                    </div>
                </div>

                <div id="proj-link">
                    <h2 id="txts">Projects</h2>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
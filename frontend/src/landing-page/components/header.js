import React, { useState } from 'react';
import Nav from './nav'

const Header = props => {
    const [welcome, setWelcome] = useState("Denvinn Paolo Magsino")
    return(
        <div>
            <h1 id="name">{welcome}</h1>
            <Nav />
        </div>
    )
}

export default Header
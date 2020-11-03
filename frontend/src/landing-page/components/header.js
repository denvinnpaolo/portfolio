import React, { useState } from 'react';
import Nav from './nav'

const Header = props => {
    const [welcome, setWelcome] = useState({
        name: "Denvinn Magsino",
        occupation: "Full Stack Engineer"
    })

    return(
        <div>
            <h1 id="txts">{welcome.name}</h1>
            <h2 id="txts">{welcome.occupation}</h2>
            <Nav />
        </div>
    )
}

export default Header
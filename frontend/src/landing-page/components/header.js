import React, { useState } from 'react';
import Nav from './nav'

const Header = props => {
    const [welcome, setWelcome] = useState({
        name: "Denvinn Magsino",
        occupation: "Full Stack Engineer"
    })

    return(
        <div>

            <Nav />
        </div>
    )
}

export default Header
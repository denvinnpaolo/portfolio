import React from 'react'

import { Link } from 'react-router-dom';

const Nav = props => {
    return(
        <div>
            <Link to= '/' >Home</Link>
            <Link to= '/about-me' >About Me</Link>
            <Link to= '/projects' >Projects</Link>
            <Link to= '/contact' >Contact</Link>
        </div>
    )

}

export default Nav
import React from 'react'

import { Link } from 'react-router-dom';

const Nav = props => {
    return(
        <div>
            <Link id="links" exact to= '/' >Home</Link>
            <Link id="links" to= '/about' >About Me</Link>
            <Link id="links" to= '/projects' >Projects</Link>
            <Link id="links" to= '/contact' >Contact</Link>
        </div>
    )

}

export default Nav
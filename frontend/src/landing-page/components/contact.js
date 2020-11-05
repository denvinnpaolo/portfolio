import React, { useState } from 'react';

const Contact = props => {
    const [contact, setContact] = useState({
        number: '818-404-5749',
        email: 'denvinnpaolo@gmail.com',
        address: 'Los Angeles, CA',
        linkdIn: 'https://www.linkedin.com/in/denvinn-magsino/'
    })

    return(
        <div>
            {contact}
        </div>
    )
}

export default Contact
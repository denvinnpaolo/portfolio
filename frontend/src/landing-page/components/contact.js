import React, { useState } from 'react';

const Contact = props => {
    const [contact, setContact] = useState('Contact')

    return(
        <div>
            {contact}
        </div>
    )
}

export default Contact
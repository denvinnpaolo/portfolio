import React, { useState } from 'react';

const Projects = props => {
    const [projects, setProjects] = useState({
        data_struct: 'http://.com',
        front: 'http://life-logger.com',
        back: 'http://food-truck-tracker.com'
    })

    return(
        <div>
            {projects}
        </div>
    )
}

export default Projects
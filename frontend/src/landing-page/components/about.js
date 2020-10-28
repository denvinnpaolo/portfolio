import React, { useState, useEffect } from 'react';
import profile from '../../assets/img/profile.jpg';

const About = props => {
    const [about, setAbout] = useState('About ME :)')

    return(
        <div>
            <div><img src={profile} height='200px' /></div>
            <div>Software Engineer/Full Stack Developer</div>
            <div>My name is Denvinn Paolo Magsino and I have 2 years experience in software engineering and 
                web development. I have acquired my certification at Lambda School. My experience being a student
                had made me grow in way I cannot imagine. I can build an application from top to bottom. 
            </div>
        </div>
    )
}

export default About
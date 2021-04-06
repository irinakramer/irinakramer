import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHackerrank, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faGithub, faHackerrank, faLinkedinIn, faInstagram, faTwitter, faHome);

export default (props) => (
    <div className="header">
        <ul className="header__menu">
            <li><Link to="/"><FontAwesomeIcon icon={['fas', 'home']} size="lg" /></Link></li>
            <li><Link to="/#projects">Projects</Link></li>
            <li><Link to="/static/Irina_Kramer_Resume_2021.pdf">Resume</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
        </ul>
        <ul className="header__social">
            <li><a href="https://github.com/irinakramer" aria-label="Github"><FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a></li>
            <li><a href="https://www.hackerrank.com/irinakramer" aria-label="Hackerrank"><FontAwesomeIcon icon={['fab', 'hackerrank']} size="lg" /></a></li>
            <li><a href="https://www.linkedin.com/in/irinakramer/" aria-label="LinkedIn"><FontAwesomeIcon icon={['fab', 'linkedin-in']} size="lg" /></a></li>
            <li><a href="https://www.instagram.com/irinakramer_/" aria-label="Instagram"><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></a></li>
            <li><a href="https://twitter.com/irinakramer" aria-label="Twitter"><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" /></a></li>
        </ul>
    </div>
)
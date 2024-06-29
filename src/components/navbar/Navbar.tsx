import React from 'react';
import './navbar.css';
import LogoImage from '../../images/comp-logo.png';
import Instagram from '../../images/instagram.png';
import LinkedIn from '../../images/linkedin.png';
import Twitter from '../../images/twitter.png';
import Facebook from '../../images/facebook.png';

const Navbar:React.FC = () => {
    return(
        <div className={'navbar-container'}>
            <div className={'navbar-logo-content'}>
                <img src={LogoImage} alt={'comp-logo'} data-testid={'comp-logo'} />
                <h2> UJ-Portal </h2>
            </div>
            <div className={'navbar-images-container'}>
                <img src={Instagram} alt={'instagram-logo'}/>
                <img src={LinkedIn} alt={'linkedin-logo'}/>
                <img src={Facebook} alt={'facebook-logo'}/>
                <img src={Twitter} alt={'twitter-logo'}/>
            </div>
        </div>
    )
}

export default Navbar;
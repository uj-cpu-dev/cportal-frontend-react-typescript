import React from 'react';
import './navbar.css';
import Search from "../control/search/Search";
import LogoImage from '../../images/comp-logo.png';
import {NavbarType} from "./navbar-type";

const Navbar:React.FC<NavbarType> = ( { shouldShowSearchBar } ) => {
    return(
        <div className={'navbar-container'}>
            <div className={'navbar-logo-content'}>
                <img src={LogoImage} alt={'comp-logo'} data-testid={'comp-logo'} />
                <h2> UJ-Portal </h2>
            </div>
            {shouldShowSearchBar && <Search />}
        </div>
    )
}

export default Navbar;
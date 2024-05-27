import React from 'react'
import './navbar.css'
import Search from "../search/Search";

const Navbar:React.FC = () => {
    return(
        <div className={'navbar-container'}>
            <h2> UJ-Portal </h2>
            <Search />
        </div>
    )
}

export default Navbar;
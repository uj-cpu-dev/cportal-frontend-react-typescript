import { useState, useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
    const location = useLocation();
    const [shouldShowSearchBar, setShouldShowSetBar] = useState(false)

    useEffect(() => {
        setShouldShowSetBar(location.pathname === '/');
    }, [location]);

    return (
        <>
            <div className={'container'}>
                <Navbar shouldShowSearchBar={shouldShowSearchBar} />
                <div id="detail">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Root;
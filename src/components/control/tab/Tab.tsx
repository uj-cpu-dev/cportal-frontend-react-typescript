import React, { FC } from 'react';
import {TabType} from "./tab-type";
const Tab:FC<TabType> = ( { title } ) => {
    return(
        <span> {title} </span>
    )
}

export default Tab;
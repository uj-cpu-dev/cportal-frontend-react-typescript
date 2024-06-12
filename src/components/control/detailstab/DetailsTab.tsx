import React, {FC} from 'react';

const DetailsTab:FC<{title:string, text:string}> = ( { title, text }) => {
    return(
        <div className={`details-tab`}>
            <p>{title}</p>
            <p> {text} </p>
        </div>
    )
}

export default DetailsTab;
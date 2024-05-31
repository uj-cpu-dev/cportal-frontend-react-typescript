import React from 'react';
import './search.css'

const Search:React.FC = () => {
    return(
        <div className={'search-container'}>
            <input placeholder={'Search...'} />
        </div>
    )
}

export default Search;
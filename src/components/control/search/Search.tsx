import React from 'react';
import './search.css';

const Search:React.FC = () => {
    return(
        <div className={'search-container'}>
            <input placeholder={'Search...'} data-testid={'search-input'} />
        </div>
    )
}

export default Search;
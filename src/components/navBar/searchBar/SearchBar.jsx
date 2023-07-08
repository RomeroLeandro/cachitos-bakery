import React, { useState } from 'react';

export const SearchBar = () => {
    const [isSearchVisible, setSearchVisible] = useState(false);

    const handleIconClick = () => {
        setSearchVisible(!isSearchVisible);
    };

    return (
        <div className="search-container">
            <i className="fas fa-search" onClick={handleIconClick}></i>
            {isSearchVisible && <input type="text" placeholder="Buscar..." />}
        </div>
    );
};
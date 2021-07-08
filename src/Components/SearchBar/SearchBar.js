import React from 'react';
import './SearchBar.css';
import SearchForm from '../SearchForm/SearchForm';

export default function SearchBar({fetchPictures}) {
    return (
        <header className="Searchbar">
            <SearchForm fetchPictures={fetchPictures}></SearchForm>
        </header>
    )
}

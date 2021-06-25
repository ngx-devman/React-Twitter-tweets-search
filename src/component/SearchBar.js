
import React, { useState } from 'react'

function SearchBar({ searchTweet }) {
    const [skeyword, setSearchKeyword] = useState('');
    const handleChange = value => {
        setSearchKeyword(value)
    }

    const handleSubmit = (e) =>{
        if (e.key === 'Enter') {
        e.preventDefault();
            searchTweet(skeyword)
        }
    }
    return (
        <div className="search-bar">
                <div className="input-group mb-3">
                    <input type="text"
                        className="form-control"
                        placeholder="Search by keyword"
                        aria-label="Search"
                        onChange={e => handleChange(e.target.value)}
                        value={skeyword}
                        onKeyDown={handleSubmit}
                        />
                </div>
        </div>
    )
}

export default SearchBar
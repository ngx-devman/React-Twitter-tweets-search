/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function SearchBar() {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <div className="filter">
            <div className="card">
                <div className="card-body  text-start">
                    <h4 className="card-title">Filter by hashtag</h4>
                    <button type="button" className="btn btn-light rounded-pill m-2 filter-btn">#coding</button>
                    <button type="button" className="btn btn-light rounded-pill m-2 filter-btn">#Python</button>
                    <button type="button" className="btn btn-light rounded-pill m-2 filter-btn">#ComputerScience</button>
                    <button type="button" className="btn btn-light rounded-pill m-2 filter-btn">#coding</button>
                    <button type="button" className="btn btn-light rounded-pill m-2 filter-btn">#gitmergeme</button>
                    <button type="button" className="btn btn-light rounded-pill m-2 filter-btn">#Enguneering</button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
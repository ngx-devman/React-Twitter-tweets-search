
import axios from 'axios';
import React, { useState } from 'react'
import './App.css';
import SearchBar from './component/SearchBar';
import Filter from './component/Filter';
import SearchResult from './component/SearchResult';


function App() {
  const [lists, setLists] = useState([]);
  const [error, setError] = useState('');
  const [keyword, setKeyword] = useState('');
  const [search, setSearch] = useState(false);
  const [count, setCount] = useState(5);
  const handleClick = async () => {
    setCount(count + 5)
    await createSearch(keyword, count)
  }
  const createSearch = async (val, count) => {
    setKeyword(val)
    await makeRequest(keyword, count)
  }

  const makeRequest = async (filter, count) => {
    await axios.get(`/api/tweets?q=${filter}&count=${count}`).then(res => {
      if (res.error) {
        setError({ error: 'api returns error'})
      } else {
        setLists(res.data.items)
        setSearch(true)
      }
    })
  }
  return (
    <div className="App">
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-md-8">
            <SearchBar searchTweet={ skeyword => createSearch(skeyword, count)} />
            <div className='card'>
              {
                search ? 
                  <div>
                    <SearchResult lists={lists} />
                    <div className="card-footer text-muted">
                      <button className="btn btn-primary" onClick={handleClick}>Load More</button> 
                    </div>
                  </div>
                : <div className="alert alert-info m-0" role="alert">There is no item to display!</div>
              }
               
            </div>
          </div>
          <div className="col-md-4">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

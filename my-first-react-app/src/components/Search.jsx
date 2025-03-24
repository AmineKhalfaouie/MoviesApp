import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search' style={{ position: 'relative' }}>
      <img src="./search.svg" alt="search-logo" style={{left: '2%', top: '30%', width: '30px'}}/>
      <input
        type="text"
        placeholder='Search through thousands of movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
export default Search

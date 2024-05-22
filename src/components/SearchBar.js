import React from 'react'
import './searchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <form className='search-form d-flex align-items-center'
        method='Post'
        action='#'>
            <input
            type='text'
            name='query'
            placeholder='Buscar'
            title='Enter'>

            </input>
            <button type='submit' title='Search'>
                <i className='bi bi-search'></i>
            </button>


        </form>



    </div>
  )
}

export default SearchBar
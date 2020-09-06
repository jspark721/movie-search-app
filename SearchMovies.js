import React from 'react';

function SearchMovies() {
  return (
    <form className='form'>
      <label htmlFor='query' className='Label'>
        Search
      </label>
      <input
        className='input'
        type='text'
        name='query'
        placeholder='i.e. Harry Potter'
      />
      <button className='button' type='submit'>
        Submit
      </button>
    </form>
  );
}

export default SearchMovies;

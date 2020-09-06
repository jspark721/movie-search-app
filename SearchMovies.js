import React from 'react';

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('clicked!');
  };
  return (
    <form className='form' onSubmit={searchMovies}>
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

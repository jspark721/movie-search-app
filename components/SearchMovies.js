import React, { useState } from 'react';

function SearchMovies() {
  //states - input query, movies
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('clicked!');

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f737c6529027c853be15b4b75c82737d&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
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
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button className='button' type='submit'>
        Submit
      </button>
    </form>
  );
}

export default SearchMovies;

import React from 'react';

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log('clicked!');

    const query = 'Jurassic Park';

    const url = `https://api.themoviedb.org/3/search/movie?api_key=f737c6529027c853be15b4b75c82737d&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
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
      />
      <button className='button' type='submit'>
        Submit
      </button>
    </form>
  );
}

export default SearchMovies;

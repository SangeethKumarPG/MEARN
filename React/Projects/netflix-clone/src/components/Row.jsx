import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css';

function Row({title, fetchUrl}) {
  console.log(title);
  const base_image_url = "https://image.tmdb.org/t/p/original";
  const [allMovies, setAllMovies] = useState()
  const fetchData = async () => {
    const response =  await instance.get(fetchUrl);
    // console.log(response);
    setAllMovies(response.data.results);
  }

  useEffect(()=>{
    fetchData();
  },[]);
  console.log(allMovies);
  return (
    <div className='row'>
      <h4 style={{color:"white"}} className='mt-2'>{title}</h4>
      <div className="movie_row">
        {
          allMovies?.map(item =>(
            <img className='movies' src={`${base_image_url}${item?.poster_path}`} alt="poster"/>
          ))
        }
      </div>
    </div>
  )
}

export default Row
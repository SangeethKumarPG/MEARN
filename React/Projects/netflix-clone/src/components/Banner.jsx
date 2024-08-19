import React, { useEffect, useState } from "react";
import instance from "../instance";
import "./Banner.css";
import Nav from "./Nav";

function Banner({ fetchUrl }) {
  console.log(fetchUrl);
  const [movie, setMovie] = useState();
  const [moreInfo, setMoreInfo] = useState(false);
  const base_image_url = "https://image.tmdb.org/t/p/original";
  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 20);
  };
  const viewMoreInfo = () => {
    console.log("more info : ", moreInfo);
    setMoreInfo((prevState) => !prevState);
  };
  const fetchData = async () => {
    const result = await instance.get(fetchUrl);
    var randomIndex = randomNumberGenerator();
    // console.log(result.data.results[index]);
    // console.log(randomIndex);
    // console.log(result.data.results[randomIndex])

    // var topRandomMovie = result.data.results[randomIndex];
    // base_url+= topRandomMovie.backdrop_path;
    // console.log(base_url);

    const { data } = result;
    // console.log(data.results[randomIndex]);

    setMovie(data.results[randomIndex]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("more info changed : ", moreInfo);
  }, [moreInfo]);

  useEffect(() =>{
    setInterval(() =>{
      fetchData()
    },10000)
  },[])

  // console.log(movie);
  return (

    <div
      style={{
        height: "36rem",
        backgroundImage: `url(${base_image_url}${movie?.backdrop_path})`,
      }}
    >
      <Nav/>
      <div className="banner_content ms-3">
        <div className="content_container">
          <h2 className="movie-name">{movie?.name}</h2>
          <p className="movie-overview">
            {movie?.overview &&
              (movie?.overview?.length <= 200 || moreInfo
                ? movie?.overview
                : `${movie?.overview?.substring(0, 200)}...`)}
          </p>
          <button className="btn btn-danger">
            <i className="fa-solid fa-play"> </i>&nbsp; Play
          </button>
          <button
            className="ms-3 btn btn-outline-light"
            onClick={viewMoreInfo}
          >
            {moreInfo === false ? (
              <>
                <i className="fa-solid fa-caret-down"></i> More Info
              </>
            ) : (
              <>
                <i className="fa-solid fa-caret-up"></i>Show Less
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;

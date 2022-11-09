import React, { useEffect, useState } from 'react'
import './banner.css'
import axios from '../../api/axios'
import requests from '../../api/Requests'

function Banner() {
  const [movie, setMovie] = useState([])

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request
    }
    fetchData()
  }, [])

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center'
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.original_name || movie?.title}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  )
}

export default Banner

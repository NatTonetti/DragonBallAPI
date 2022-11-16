import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [anime, setAnime] = useState()


  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime?filter[text]=dragonball`)
      .then(res => res.json())
      .then(res => {
        setAnime(res)
      })
  }, [])


  return (
    <div class='main-container'>
      {anime !== undefined ?
        <div class='sub-container'>
          {anime.data.slice(0, 2).map((info, id) => (
            <div class='map-container' key={id}>
              <h2>
                {info.attributes.titles.en + "-" + info.attributes.titles.ja_jp}
              </h2>
              <div class='description-container'>
              <h4>
                  {info.attributes.description}
                </h4>
                </div>
              
              <div class='img-container' >
                <img class='img-poster' src={info.attributes.posterImage.small} />
                <img class='img-cover' src={info.attributes.coverImage.small} />
              </div>
            </div>
          ))}
        </div>
        : null
        }
    </div>
  )
}

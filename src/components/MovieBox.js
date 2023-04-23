import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useState, useEffect} from 'react'

function MovieBox({title, num}) {
    const [posterPath,setPosterPath]=useState("");

    const api_key="0951ee048596df6005f6a81975724d2e";
  let API_URL=`https://api.themoviedb.org/3/movie/${num}?api_key=${api_key}`

  useEffect(() => {
      axios.get(API_URL).then((response) => {
          title = response.data.original_title;
          setPosterPath(response.data.poster_path);
      }).catch(()=>{
          console.log("Error");
      });
      
  },[])

  return (
    <Img>
        <h1>{title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}?api_key=${api_key}`} alt={title}/>
    </Img>
  )
}

export default MovieBox

const Img = styled.div`
  display: flex;
  flex-direction: column;
  img{
    width: 100%;
    height: 200px; 
    boder: 2px solid white;
  }
  h1{
    font-weight: 300;
    font-size: 20px;
    margin-top: 10px;
  }
`
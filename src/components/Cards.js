import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import MovieBox from './MovieBox'

let title, poster_path;
function Cards(props) {
  return (
    <div>
        <CardMenu>
            <MovieBox
                title={title}
                poster_path={poster_path}
                num={props.nums}
            />
        </CardMenu>
        <CardMenu>
            <MovieBox
                title = {title}
                poster_path = {poster_path}
                num = {props.nums + 2}
            />
        </CardMenu>
        <CardMenu>
            <MovieBox
                title = {title}
                poster_path = {poster_path}
                num = {props.nums + 4}
            />
        </CardMenu>
        <CardMenu>
            <MovieBox
                title = {title}
                poster_path = {poster_path}
                num = {props.nums + 6}
            />
        </CardMenu>
    </div>
  )
}

export default Cards

const CardMenu = styled.div`
    color: white;
    float: left;
    height: 260px;
    margin-top: 80px;
    margin-bottom: 10px;
    background-color: rgb(0, 0, 0, 0.5);
    cursor: pointer;
    width: 20%;
    margin-left: 4%;
`
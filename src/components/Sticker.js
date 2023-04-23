import React from 'react'
import styled from 'styled-components'
// import video from './[IAS] One Piece-1038_(1080p).mkv'

function Sticker() {

  return (
    <div>
        <StickerMenu>
            <img src="/images/viewers-disney.png"/>
        </StickerMenu>
        <StickerMenu>
            <img src="/images/viewers-pixar.png"/>
        </StickerMenu>
        <StickerMenu>
            <img src="/images/viewers-marvel.png"/>
        </StickerMenu>
        <StickerMenu>
            <img src="/images/viewers-starwars.png"/>
        </StickerMenu>
        <StickerMenu>
            <img src="/images/viewers-national.png"/>
        </StickerMenu>
    </div>
  )
}

export default Sticker

const StickerMenu = styled.div`
    display: grid;
    border-radius: 10px;
    width: 14%;
    margin-left: 5%;
    float: left;
    height: 100px;
    cursor: pointer;
    img: hover{
        background-color: rgb(120, 130, 140);
        transition: background 1s;
    }
    img{
        width: 100%;
        height: 100%;
        box-shadow: rgba(20, 0, 0, 0.19) 0px 20px 20px, rgba(40, 30, 0, 0.23) 0px 16px 16px;
    }
`
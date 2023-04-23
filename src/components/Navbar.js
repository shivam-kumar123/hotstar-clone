import React from 'react'
import styled from 'styled-components'

function Navbar() {
  return (
    <Nav>
      <Logo><img src="/images/logo.svg"/></Logo>
      <NavItem>
        <a href="#">Home</a>
      </NavItem>
      <NavItems>
        <Img><img src="/images/home-icon.svg"/></Img>
      </NavItems>
      <NavItem>
        <a href="#">Search</a>
      </NavItem>
      <NavItems>
        <Img><img src="/images/search-icon.svg"/></Img>
      </NavItems>
      <NavItem>
        <a href="#">WatchList</a>
      </NavItem>
      <NavItems>
        <Img><img src="/images/watchlist-icon.svg"/></Img>
      </NavItems>
      <NavItem>
        <a href="#">Originals</a>
      </NavItem>
      <NavItems>
        <Img><img src="/images/original-icon.svg"/></Img>
      </NavItems>
      <NavItem>
        <a href="#">Movies</a>
      </NavItem>
      <NavItems>
        <Img><img src="/images/movie-icon.svg"/></Img>
      </NavItems>
      <NavItem>
        <a href="#">Series</a>
      </NavItem>
      <NavItems>
        <Img><img src="/images/series-icon.svg"/></Img>
      </NavItems>
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  height: 60px;
  position: fixed;
  top: 0;
  width: 100%;
  background: #282c34;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 20px;  
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
  img {
    height: 20px;
  }
  font-size: 1.2rem;
  margin-right: 120px;
  justify-content: center;
  flex-direction: column;
  margin: 0 1%;
  coursor: pointer;
  a{
    color: white;
    text-decoration: none;
  }
`

const Logo = styled.div`
  img{
    width: 12vh;
  }
` 

const Img = styled.div`
  width: 20px;
  height: 20px;
  img{
    width: 100%;
    height: 100%;
  }
`

const NavItems = styled.div`
  cursor: pointer;
  margin-right: 5%;
`
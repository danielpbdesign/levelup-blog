import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'


import logo from '../images/giraffe.svg'

const HeaderWrapper = styled.div`
    background: #524763;
    margin-bottom: 1.45rem;
    h1 {
        img {
            height: 100px;
        }
    }
`

const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
`


const Header = ({siteTitle, siteDesc}) => (
  <HeaderWrapper>
    <HeaderContainer>
      
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
        <h1 style={{ margin: 0 }}>{siteTitle}</h1>
        
        <p>{siteDesc}</p>
        <img src={logo} alt="level up logo"/>
        </Link>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header





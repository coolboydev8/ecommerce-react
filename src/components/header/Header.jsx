import React from 'react'
import { Link } from 'react-router-dom'
import { GrCart } from 'react-icons/gr'
import { HeaderContainer, HeaderBar, LogoContainer, HeaderLinksContainer, StyledLink } from './HeaderStyles'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBar>
          <LogoContainer>
              <StyledLink to='/e-commerce-react/'>Shop</StyledLink>
          </LogoContainer>
          <HeaderLinksContainer>
              <Link to='/e-commerce-react/cart'>
                  <GrCart 
                  style={{
                      fontSize: '24px',
                      filter: 'invert(100%)'
                    }}
                  />
              </Link>
          </HeaderLinksContainer>
      </HeaderBar>
    </HeaderContainer>
  )
}


import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {theme} from '../../../theme'

export default function NavRight({username}) {
  return (
    <NavRightstyled className='right-side'>
        <div className="info">
          <p>
            Hey, <b>{username}</b>
          </p>
          <Link to="/">
            <div className="description">
              <small>Se déconnecter</small>
            </div>
          </Link>
        </div>
        <div className="picture">
          <BsPersonCircle />
        </div>
    </NavRightstyled>
  )
}
const NavRightstyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      font-family: 'Open Sans', sans-serif;
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    /* border: 1px solid red; */
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }
`;
import React from 'react'
import styled from 'styled-components'
import useAuth from '../hooks/useAuth'
import { theme } from '../theme'
import AvatarDefault from '../assets/Avatar.jpg'
import useDropdown from '../hooks/useDropdown'
import OutsideClickHandler from 'react-outside-click-handler'

const ProfileStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${theme.colors.white};
  text-align: right;
  cursor: pointer;
  z-index: ${theme.positions.headerAdmin};

  .username {
    font-size: 16px;
  }

  .role {
    font-size: 12px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.white};
    img {
      width: 80%;
      height: 80%;
      object-fit: cover;
      object-position: center;
    }
  }

  .profile__dropdown {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    top: 140%;
    transition: .3s;
    position: absolute;
    border-radius: 8px;
    right: 0;
    flex-flow: column wrap;
    padding: 20px;
    background-color: ${theme.colors.primary};
    width: 150px;
    cursor: default;
    text-align: left;

    h5 {
      font-size: 14px;
      color: ${theme.colors.secundaryDark};
      margin-bottom: 10px;
    }

    ul {
      display: grid;
      grid-auto-rows: min-content;
      grid-gap: 5px;
    }

    button {
      color: ${theme.colors.white};
    }
  }
`

const Profile = () => {
  const { user, logout } = useAuth()
  const { isDropdownOpen, closeDropdown, toggleDropdown } = useDropdown()

  return (
    <OutsideClickHandler onOutsideClick={closeDropdown}>
      <ProfileStyled isOpen={isDropdownOpen} onClick={toggleDropdown}>
        <div className="profile__info">
          <p className="username">{user.username}</p>
          <p className="role">{user.role}</p>
        </div>
        <div className="avatar">
          <img src={AvatarDefault} alt="Avatar" />
        </div>
        <div className="profile__dropdown">
          <h5>Opciones</h5>
          <ul>
            <li><button type="button" onClick={() => {}}>Perfil</button></li>
            <li><button type="button" onClick={logout}>Cerrar Sesión</button></li>
          </ul>
        </div>
      </ProfileStyled>
    </OutsideClickHandler>
  )
}

export default Profile

import React from 'react'
import './header.css'
import Logo from '../../assets/logo.svg'

import { HOME_PATH, CREATE_PATH } from '../../routes'

class Header extends React.Component {

  render = () => {
    return (
      <header>
        <a href = { HOME_PATH } className = 'header-title'>
          <img src = { Logo } className = 'logo' alt = 'book catalog logo'/>
          <p className = 'name'>book catalog</p>
        </a>

        <div>
          <a href = { CREATE_PATH } className = 'menu-action'>Create</a>
        </div>
      </header>
    )
  }
}

export default Header
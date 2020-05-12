import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container, Menu, MenuItem } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Menu>
          <NavLink activeClassName="active" exact to="/">
            <MenuItem>Listagem</MenuItem>
          </NavLink>
          <NavLink activeClassName="active" to="/import">
            <MenuItem>Importar</MenuItem>
          </NavLink>
        </Menu>
      </nav>
    </header>
  </Container>
);

export default Header;

import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

interface IProps {
}

const Header: React.FC = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Github Api</NavbarBrand>
    </Navbar>
  );
};

export default Header;

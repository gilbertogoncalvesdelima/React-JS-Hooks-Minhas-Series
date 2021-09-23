import React, { useState } from 'react'
import { 
Navbar,
NavbarBrand, // Colocar Logo
Collapse, // Rezir o menu automaticamente
Nav, // Navegação
NavItem,
NavLink,
NavbarToggler // aparecendo sanduiche
} from 'reactstrap'
import { Link } from 'react-router-dom' // tratando o link

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Navbar color="light" light expand="md">
      <div className="container">
        <NavbarBrand tag={Link} to="/">
          Minhas Séries
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={open} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/series">
                Séries
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/generos">
                Gêneros
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
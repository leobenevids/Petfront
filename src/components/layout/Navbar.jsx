import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { MyNavbar } from "./NavbarStyles";

import Logo from "../../assets/img/logo.svg";

/* contexts */
import { Context } from "../../context/UserContext";

/* hooks */

function Navbar() {
  const { authenticated, logout } = useContext(Context);

  return (
    <MyNavbar>
      <div>
        <img src={Logo} alt="Petfy" />
      </div>
      <ul>
        <li>
          <Link to="/">Adotar</Link>
        </li>
        {authenticated ? (
          <>
            <li>
              <Link to="/pet/myadoptions">Minhas Adoções</Link>
            </li>
            <li>
              <Link to="/pet/mypets">Meus Pets</Link>
            </li>
            <li>
              <Link to="/user/profile">Meu Perfil</Link>
            </li>
            <li onClick={logout}>Sair</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <li>
              <Link to="/register">Registrar</Link>
            </li>
          </>
        )}
      </ul>
    </MyNavbar>
  );
}

export default Navbar;

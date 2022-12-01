import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";

import { MyNavbar } from "./NavbarStyles";

import Logo from "../../assets/img/logo.svg";

/* contexts */
import { Context } from "../../context/UserContext";

// components
import ConfirmModal from "./ConfirmModal.jsx";

/* hooks */

function Navbar() {
  const { authenticated, logout } = useContext(Context);
  const [openModal, setOpenModal] = useState(false);

  function concludeLogout() {
    setOpenModal(false);
    logout();
  }

  return (
    <>
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
                <Link to="/pet/myadoptions">Adoções</Link>
              </li>
              <li>
                <Link to="/pet/mypets">Pets Cadastrados</Link>
              </li>
              <li>
                <Link to="/user/profile">Meu Perfil</Link>
              </li>
              <li className="logout" onClick={() => setOpenModal(true)}>Sair</li>
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
      {openModal && (
        <ConfirmModal
          isOpen={setOpenModal}
          handleDelete={concludeLogout}
          message={"Deseja fazer logout?"}
        />
      )}
    </>
  );
}

export default Navbar;

import { useState, useContext } from "react";
import Input from "../../form/Input";
import { Link } from "react-router-dom";

import { FormContainer } from "../../form/FormStyles";

/* contexts */
import { Context } from "../../../context/UserContext";

function Login() {
  const [user, setUser] = useState({});
  const { login } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Login</h1>

      <Input
        text="E-mail"
        type="email"
        name="email"
        placeholder="Digite o e-mail"
        handleOnChange={handleChange}
      />
      <Input
        text="Senha"
        type="password"
        name="password"
        placeholder="Digite a senha"
        handleOnChange={handleChange}
      />
      <input type="submit" value="Entrar" />

      <p>
        Não tem conta? <Link to="/register">Clique aqui.</Link>
      </p>
    </FormContainer>
  );
}

export default Login;

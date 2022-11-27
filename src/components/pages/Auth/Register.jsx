import { useState, useContext } from "react";
import Input from "../../form/Input";
import { Link } from "react-router-dom";

/* contexts */
import { Context } from "../../../context/UserContext";
import { FormContainer } from "../../form/FormStyles";

function Register() {
  const [user, setUser] = useState({});
  const { register } = useContext(Context);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    register(user);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h1>Registrar</h1>

      <Input
        text="Nome"
        type="text"
        name="name"
        placeholder="Digite o seu nome"
        handleOnChange={handleChange}
      />
      <Input
        text="Telefone"
        type="text"
        name="phone"
        placeholder="Digite o seu telefone"
        handleOnChange={handleChange}
      />
      <Input
        text="E-mail"
        type="email"
        name="email"
        placeholder="Digite o seu e-mail"
        handleOnChange={handleChange}
      />
      <Input
        text="Senha"
        type="password"
        name="password"
        placeholder="Digite a sua senha"
        handleOnChange={handleChange}
      />
      <Input
        text="Confirmação de senha"
        type="password"
        name="confirmpassword"
        placeholder="Confirme a sua senha"
        handleOnChange={handleChange}
      />
      <input type="submit" value="Cadastrar" />

      <p>
        Já tem conta? <Link to="/login">Clique aqui.</Link>
      </p>
    </FormContainer>
  );
}

export default Register;

import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 300px;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  h1,
  p {
    margin: 2rem auto;
  }

  input[type="submit"] {
    border-radius: 8px;
    border: none;
    min-width: 100px;
    min-height: 2.5rem;
    width: 100%;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    background-color: var(--black);
    color: var(--white);
  }

  input[type="submit"]:hover {
    font-weight: bold;
    box-shadow: var(--shadow-2);
    background-color: var(--orange-yellow);
    border: 2px solid var(--fire-opal);
    color: var(--black);
  }

  p {
    margin-top: 1em;
  }

  p a {
    color: var(--black);

    font-weight: bold;

    :hover {
      color: var(--fire-opal);
    }
  }
`;

export const PreviewPetImages = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;

  img {
    width: 100px;
    height: 100px;
    margin-left: 1em;
  }
`;

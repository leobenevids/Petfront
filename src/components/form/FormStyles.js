import styled from "styled-components";

export const FormContainer = styled.form`
  max-width: 300px;
  margin: 0 auto;
  border-radius: 15px;

  input[type="submit"] {
    border-radius: 8px;
    background-color: var(--success-green);
    color: #fff;
    border: none;
    min-width: 100px;
    min-height: 2.5rem;
    width: 100%;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
  }

  input[type="submit"]:hover {
    background-color: #1c8a42;
  }

  p {
    margin-top: 1em;
  }

  p a {
    color: #16479d;
    font-weight: bold;
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

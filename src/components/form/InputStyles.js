import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label {
    margin-bottom: 0.3em;
    font-weight: bold;
    font-size: 0.8em;
  }

  input {
    padding: 0.7em;
    border: 2px solid var(--fire-opal);
    border-radius: 5px;
    background-color: var(--orange-yellow);


    ::placeholder {
      color: var(--black);
    }
  }
`;

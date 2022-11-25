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
    border: 1px solid #777;
    border-radius: 5px;
  }

  input::placeholder {
    color: #7b7b7b;
  }
`;

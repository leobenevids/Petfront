import styled from "styled-components";

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  label {
    margin-bottom: 0.6em;
    font-weight: bold;
  }

  select {
    padding: 0.7em;
    border: 1px solid #777;
    border-radius: 5px;
  }
`;

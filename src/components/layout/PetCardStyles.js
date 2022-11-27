import styled from "styled-components";

export const Card = styled.div`
  width: 200px;
  height: 400px;
  background-color: var(--fire-opal);
  color: var(--mimi-pink);
  display: flex;
  flex-direction: column;

  img {}

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

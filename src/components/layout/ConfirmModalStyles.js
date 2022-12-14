import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const Container = styled.div`
  display: flex;
  width: 400px;
  height: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--fire-opal);
  color: var(--white);
  padding: 2rem;
  border-radius: 5px;

  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
  }

  button {
    color: var(--black);
    border: 2px solid var(--black);
    width: 100px;
    height: 30px;
    border-radius: 5px;

    background: var(--black);
    color: var(--white);

    :hover {
      cursor: pointer;
      background: var(--white);
      color: var(--black);
      font-weight: bold;
      transition: ease-in-out 0.3s;
    }
  }
`;

import styled from "styled-components";

export const PetDetailsContainer = styled.section`
  text-align: center;

  p {
    margin-bottom: 1em;
  }

  div {
    margin-bottom: 2em;
  }

  button {
    border-radius: 8px;
    color: var(--black);
    border: 2px solid var(--black);
    background-color: transparent;
    max-width: 200px;
    min-height: 2.5rem;
    width: 100%;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
  }

  button:hover {
    background-color: var(--black);
    color: var(--white);
  }
`;

export const PetImages = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;

  img {
    max-height: 300px;
    margin-right: 1em;
    border-radius: 5px;
    box-shadow: var(--shadow-3);
  }
`;

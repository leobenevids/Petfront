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
    background-color: #25b456;
    color: #fff;
    border: none;
    max-width: 200px;
    min-height: 2.5rem;
    width: 100%;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
  }

  button:hover {
    background-color: #1c8a42;
  }
`;

export const PetImages = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;


  img {
    max-height: 200px;
    margin-right: 1em;
    border-radius: 5px;
    box-shadow: var(--shadow-3);
  }
`;

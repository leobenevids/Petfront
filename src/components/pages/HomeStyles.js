import styled from "styled-components";

export const PetHomeHeader = styled.div`
  margin-bottom: 2em;

  h1 {
    margin-bottom: 0.3em;
  }
`;

export const PetContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const PetCard = styled.div`
  width: 22%;
  margin: 1.5%;
  display: flex;
  flex-direction: column;
  text-align: center;

  div {
    background-size: cover;
    background-position: center;
    height: 225px;
    width: 100%;
    margin-bottom: 1.2em;
  }

  h3 {
    margin-bottom: 1em;
    font-size: 1.6em;
    padding: 8px;
  }

  p {
    margin-bottom: 1em;
  }

  a {
    border-radius: 8px;
    color: var(--white);
    background-color: var(--success-green);
    border: none;
    min-width: 100px;
    padding: 15px;
    width: 100%;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    background-color: var(--mimi-pink);
    color: var(--black);
  }

  .adopted_text {
    font-weight: bold;
    color: #25b456;
    padding: 15px;
  }
`;

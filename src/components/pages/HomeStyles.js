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
  width: 300px;
  height: 400px;
  margin: 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--fire-opal);
  color: var(--mimi-pink);
  border-radius: 5px;
  box-shadow: var(--shadow-3);
  /* overflow: hidden; */

  div {
    border-radius: 5px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  section {
    display: flex;
    flex-direction: column;
    padding: 8px;
  }

  h3 {
    padding: 8px;
    font-size: 1.6em;
    text-align: left;
  }

  p {
    margin-bottom: 1em;
  }

  span {
    font-weight: bold;
  }

  .details {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: none;
    padding: 8px;
  }

  a {
    border-radius: 5px;
    color: var(--fire-opal);
    background-color: var(--mimi-pink);
    width: 95%;
    margin: 0 auto;
    font-weight: bold;
    text-decoration: none;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
  }

  a:hover {
    background-color: var(--black);
    color: var(--mimi-pink);
  }

  .adopted_text {
    font-weight: bold;
    text-transform: uppercase;
    color: var(--white);
    margin: 1rem auto;
    /* padding: 15px; */
  }
`;

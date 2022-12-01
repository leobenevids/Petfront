import styled from "styled-components";

export const MyNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1em 1.5em;
  color: var(--fire-opal);

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 150px;
    margin-right: 0.8em;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  li,
  a {
    text-decoration: none;
    color: var(--black);
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    padding: 0.5em 0.8em;
    border-radius: 5px;
  }

  li:hover {
    background-color: var(--black);
    transform: scale(1.1);
  }

  li:hover > a {
    color: var(--white);
  }

  .logout:hover {
    background-color: var(--fire-opal);
  }
`;

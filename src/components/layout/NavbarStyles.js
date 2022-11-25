import styled from "styled-components";

export const MyNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1em 1.5em;
  background-color: var(--black);
  color: var(--fire-opal);

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 40px;
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
    color: var(--orange-yellow);
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    padding: 0.5em 0.8em;
    border-radius: 5px;
  }

  li:hover {
    background-color: var(--success-green);
    color: var(--black);
  }

  li:hover > a {
    color: var(--white);
  }
`;

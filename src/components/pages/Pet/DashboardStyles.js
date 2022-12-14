import styled from "styled-components";

export const PetListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
    background-color: var(--black);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    padding: 0.5em 0.8em;
    border-radius: 5px;
    border: 2px solid var(--black);
  }

  a:hover {
    background-color: transparent;
    color: var(--black);
  }
`;

export const PetListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PetListRow = styled.div`
  border-bottom: 1px solid var(--black);
  padding: 1em;
  margin: 1em;
  display: flex;
  align-items: center;
  width: 100%;

  img {
    margin-right: 1em;
    box-shadow: var(--shadow-1);
  }

  span {
    min-width: 100px;
  }
`;

export const Actions = styled.div`
  margin-left: auto;

  a,
  button {
    text-decoration: none;
    color: var(--black);
    border: 2px solid var(--black);
    background-color: transparent;
    border-radius: 5px;
    padding: 7px 12px;
    margin-left: 1em;
    cursor: pointer;
    transition: 0.3s;
    font-size: 12px;
    font-weight: bold;
    box-shadow: var(--shadow-1);

    :hover {
      background-color: var(--black);
      color: #fff;
    }
  }

  .delete_btn {
    :hover {
      color: var(--white);
      background-color: var(--fire-opal);
      border-color: var(--fire-opal);
    }
  }

  .conclude_btn {
    color: var(--success-green);
    border-color: var(--success-green);

    :hover {
      color: #fff;
      background-color: var(--success-green);
      border-color: var(--success-green);
    }
  }
`;

export const Contacts = styled.div`
  margin-left: 2em;

  p {
    margin-bottom: 0.5em;
  }
`;

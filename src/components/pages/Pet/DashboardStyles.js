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
    background-color: #16479d;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s;
    padding: 0.5em 0.8em;
    border-radius: 5px;
    border: 2px solid #16479d;
  }

  a:hover {
    background-color: transparent;
    color: #16479d;
  }
`;

export const PetListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PetListRow = styled.div`
  border-bottom: 1px solid #16479d;
  padding: 1em;
  margin: 1em;
  display: flex;
  align-items: center;
  width: 100%;

  img {
    margin-right: 1em;
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
    color: #16479d;
    border: 2px solid #16479d;
    border-radius: 5px;
    padding: 7px 12px;
    background-color: #fff;
    margin-left: 1em;
    cursor: pointer;
    transition: 0.3s;
    font-size: 12px;

    :hover {
      background-color: #16479d;
      color: #fff;
    }
  }

  .conclude_btn {
    color: #25b456;
    border-color: #25b456;

    :hover {
      color: #fff;
      background-color: #25b456;
    }
  }
`;

export const Contacts = styled.div`
  margin-left: 2em;

  p {
    margin-bottom: 0.5em;
  }
`;

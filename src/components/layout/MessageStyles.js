import styled from "styled-components";

export const MessageContainer = styled.div`
  background: ${({ variant }) =>
    variant === "success" ? "var(--success-green)" : "var(--fire-opal)"};
  color: var(--white);
  position: absolute;
  width: 250px;
  padding: 1em;
  text-align: center;
  max-width: 50%;
  border-radius: 5px;
  margin: 0 auto;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: var(--shadow-3);
`;

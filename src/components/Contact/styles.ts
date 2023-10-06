import styled from "styled-components";

export const ContactWrapper = styled.ul`
  display: grid;
  padding: 6px 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 8px;
  border-spacing: 16px;
  align-items: center;
`

export const ContactStyle = styled.input`
  color: var(--secondaryColor);
  font-size: 1em;
  width: 95%;
  border: none;
  background-color: #ecf0f1;
  border-radius: 4px;
  transition: background-color, 0.2s ease-in-out;

  &:disabled {
    color: var(--secondaryColor);
    background-color: #fff;
    border: none;
  }
`

export const ButtonsWrapper = styled.li`
  display: flex;
  gap: 6px;
`

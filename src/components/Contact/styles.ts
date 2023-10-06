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

export const ContactStyle = styled.li`
  color: var(--secondaryColor);
`

export const ButtonsWrapper = styled.li`
  display: flex;
  gap: 6px;
`

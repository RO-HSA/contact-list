import styled from "styled-components";

export const Wrapper = styled.main`
  display: grid;
  margin-top: 16px;
  width: 100%;
`

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 8px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.4);
`

export const Header = styled.li`
  color: var(--primaryColor);
  font-weight: bold;
  font-size: 1.4em;
`

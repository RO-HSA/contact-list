import { Link } from "react-router-dom";
import styled from "styled-components";

export const Circle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: #2ecc71;
  color: #fff;
  font-size: 3em;
  text-decoration: none;
`

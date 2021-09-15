import styled from "styled-components";
import { Button } from "../buttons/Button";

export const SecondaryButton = styled(Button)`
  transition-duration: 0.4s;
  background-color: white;
  color: black;
  border: 2px solid #4caf50;
  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;

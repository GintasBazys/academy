import styled from "styled-components";
import { Button } from "../buttons/Button";

import { white, black, green } from "../../styles/colors";

export const SecondaryButton = styled(Button)`
  transition-duration: 0.4s;
  background-color: ${white};
  color: ${black};
  border: 2px solid ${green};
  &:hover {
    background-color: ${green};
    color: ${white};
  }
`;

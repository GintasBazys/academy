import styled from "styled-components";
import { black } from "../../styles/colors";

export const TextBase = styled.p`
  margin: ${(props) => props.margin || ""};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || black};
  text-align: ${(props) => props.textAlign || ""};
  text-decoration: ${(props) => props.textDecoratiom || ""};
  text-transform: ${(props) => props.textTransform || ""};
`;

export const TextBaseBold = styled(TextBase).attrs((props) => ({
  fontWeight: props.fontWeight || 700,
}))``;

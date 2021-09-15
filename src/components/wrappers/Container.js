import styled from "styled-components";

export const Container = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const ContainerSmall = styled.div`
  padding: 0 1rem;
  max-width: 48rem;
  display: block;
  position: ${(props) => props.position || "relative"};
  margin: ${(props) => props.margin || "auto"};
`;

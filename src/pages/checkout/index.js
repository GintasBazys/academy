import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { useRouter } from "../../apis/history";

import {
  PrimaryButton,
  Image,
  TextBaseBold,
  HeadingH1,
  Container,
  HeadingH2,
  HeadingH3,
  RegularText,
  SmallText,
  CaptionText,
  ContainerSmall,
} from "../../components";

import { useQuery } from "../../styles/breakpoints";
import { SecondaryButton } from "../../components/buttons/SecondaryButton";

const Checkout = () => {
  const { isMobile, isTablet } = useQuery();
  const { goToLanding } = useRouter();

  return (
    <SectionWrapper>
      <ContainerSmall>
        <TextBaseBold>Bold text</TextBaseBold>
        <HeadingH1>Heading 1</HeadingH1>
        <HeadingH2>Heading 2</HeadingH2>
        <HeadingH3>Heading 3</HeadingH3>
        <RegularText>Regular text</RegularText>
        <SmallText>Small text</SmallText>
        <CaptionText>Caption text</CaptionText>

        <Link to="/">
          <PrimaryButton backgroundColor="blue" margin="0 0.8rem">
            Primary
          </PrimaryButton>
        </Link>
        <SecondaryButton onClick={goToLanding}>Secondary</SecondaryButton>
      </ContainerSmall>

      {/* {isMobile && (
        <Link to="/">
          <PrimaryButton backgroundColor="blue">Click</PrimaryButton>
        </Link>
      )}
      {isTablet && (
        <SecondaryButton onClick={goToLanding}>Secondary</SecondaryButton>
      )} */}
      <Container>
        <Image src="undraw_Gaming" />
      </Container>
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  margin: 3rem 0;
  padding: 2rem 0;
`;

export default Checkout;

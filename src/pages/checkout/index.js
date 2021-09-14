import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { useRouter } from "../../apis/history";

import { Button, PrimaryButton, Image } from "../../components";

import { useQuery } from "../../styles/breakpoints";

const Checkout = () => {
  const { isMobile, isTablet } = useQuery();
  const { goToLanding } = useRouter();

  return (
    <SectionWrapper>
      Checkout
      {isMobile && (
        <Link to="/">
          <Button>Click</Button>
        </Link>
      )}
      {isTablet && (
        <PrimaryButton backgroundColor="green" onClick={goToLanding}>
          Primary
        </PrimaryButton>
      )}
      <Image src="undraw_Gaming" />
    </SectionWrapper>
  );
};

const SectionWrapper = styled.div`
  margin: 3rem 0;
  padding: 2rem 0;
  background-color: red;
`;

export default Checkout;

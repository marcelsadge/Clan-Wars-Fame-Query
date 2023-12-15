import React from "react";

import {
  FBox,
  Container,
  Column,
  Row,
  FooterLink,
  Heading,
  AuthorHeading
} from './styles';

function Footer () {
  return (
    <FBox>
      <Container>
        <Row>
          <Column>
          </Column>
        </Row>
        <AuthorHeading>@{' '}
            <FooterLink href="https://worldoftanks.com/en/community/accounts/1002512469-MarceI_/?utm_source=global-nav&utm_medium=link&utm_campaign=wot-portal">
                Marcel 2024
            </FooterLink>
        </AuthorHeading>
      </Container>
    </FBox>
  );
};
export default Footer;
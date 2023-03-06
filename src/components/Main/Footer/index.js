import React from "react";
import styled from 'styled-components';

const FBox = styled.div`
  padding: 1px 10px;
  background: #151515;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
   
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`;
   
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(190px, 1fr));
  grid-gap: 20px;
`;
   
const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #e5e5e5;
      transition: 200ms ease-in;
  }
`;
   
const Heading = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
  margin-top: 20px;
  font-weight: bold;
`;

const AuthorHeading = styled.p`
  font-size: 14px;
  color: #fff;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: 500px;
  font-weight: bold;
`;
  
function Footer () {
  return (
    <FBox>
      <Container>
        <Row>
          <Column>
            <Heading>About Us (Coming Soon)</Heading>
          </Column>
          <Column>
            <Heading>Resources (Coming Soon)</Heading>
          </Column>
          <Column>
            <Heading>Contact (Coming Soon)</Heading>
          </Column>
          <Column>
            <Heading>Blog (Coming Soon)</Heading>
          </Column>
        </Row>
        <AuthorHeading>Created by:{' '}
            <FooterLink href="https://worldoftanks.com/en/community/accounts/1002512469-MarceI_/?utm_source=global-nav&utm_medium=link&utm_campaign=wot-portal">
                Marcel
            </FooterLink>
        </AuthorHeading>
      </Container>
    </FBox>
  );
};
export default Footer;
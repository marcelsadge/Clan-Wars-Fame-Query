import styled from 'styled-components';

const FBox = styled.div`
  padding: 1px 10px;
  background-color: #151515;
  margin-top: 1200px;
  margin-left: 290px;
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
  margin-left: 200px;
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
  margin-left: 400px;
  font-weight: bold;
`;

export {
    FBox,
    Container,
    Column,
    Row,
    FooterLink,
    Heading,
    AuthorHeading
};
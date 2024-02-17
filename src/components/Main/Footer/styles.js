import styled from 'styled-components';

const FBox = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 15vw;
  width: 84vw;
  height: 50px;
  background: #252735;
`;
   
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
   
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
   
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(190px, 1fr));
  grid-gap: 20px;
`;
   
const FooterLink = styled.a`
  color: white;
  margin-bottom: 30px;
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
  color: white;
  margin-bottom: 20px;
  margin-top: 10px;
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
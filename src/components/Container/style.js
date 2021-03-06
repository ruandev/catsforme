import styled from 'styled-components';

const ContainerCustom = styled.div`
  width: 80%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;
  overflow-x: hidden !important;

  @media (max-width: 500px) {
    height: auto; 
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;  
`;

export { ContainerCustom, Header };

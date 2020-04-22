import styled from 'styled-components'

const Area = styled.main`
  display: flex;
  position: relative;
  background-image: url("https://cdn2.thecatapi.com/images/luRSIStaw.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  flex-flow: column-reverse;
  width: 80%;
  min-height: 350px;

  @media (max-width: 1220px) {
    width: 100%;
    height: 80vh;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

export { Area, Buttons }
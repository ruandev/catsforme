import styled from 'styled-components';

const AllArea = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  padding-bottom: 10px;
  padding-top: 10px;

  @media (max-width: 1220px) {
      height: auto;
  }
`;

const SideArea = styled.aside`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 244px;

  @media (max-width: 1220px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export { AllArea, SideArea };

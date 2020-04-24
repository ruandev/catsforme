import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-x: hidden !important;

  @media (min-width: 600px) {
    height: auto;
  }
`;

export { Page };

import styled from 'styled-components';

const Area = styled.main`
  display: flex;
  position: relative;
  background-image: url(${(props) => props.image});
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

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  font-size: 1.5rem;
  color: ${(props) => props.color || 'black'};
`;

export { Area, Buttons, Button };

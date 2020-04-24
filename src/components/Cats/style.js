import styled from 'styled-components';

const Area = styled.main`
  display: flex;
  position: relative;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  flex-flow: column-reverse;
  width: 100%;
  min-height: 500px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
`;

const Button = styled.button`
  padding: 20px 20px;
  border-radius: 50%;
  border: none;
  margin-right: 10px;
  font-size: 3rem;
  background-color: ${(props) => props.color || 'black'};
  color: white;
  align-content: center;
  display: flex;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(80%);
  }
`;

export { Area, Buttons, Button };

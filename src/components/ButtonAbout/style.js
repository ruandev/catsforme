import styled from 'styled-components';

const Button = styled.button`
 top: 10px;
  right: 10px;
  border: none;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: #CEB5E8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export { Button };

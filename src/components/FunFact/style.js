import styled from 'styled-components';

const Facts = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Fact = styled.p`
  padding-left: 20px;
  padding-right: 20px;
  letter-spacing: 2px;
`;

const Button = styled.button`
background-color: #6b645b;
border: none;
padding: 10px 20px;
color: white;
font-size: 1rem;
cursor: pointer;
transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export { Facts, Fact, Button };

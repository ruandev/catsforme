import styled, { keyframes } from 'styled-components';

const fadeOutLeft = keyframes`
    0% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 0;
        transform: translateX(-100px);
    }
`;

const fadeOutRight = keyframes`
    0% {
        opacity: 1;
        transform: translateX(0);
    }
    100% {
        opacity: 0;
        transform: translateX(100px);
    }
`;

const AreaVote = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 500px;

  @media (max-width: 600px) {
    min-height: 300px;
  }
`;

const Image = styled.div`
  display: flex;
  position: relative;
  background-image: url("${(props) => props.image}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  flex-flow: column-reverse;
  width: 100%;
  animation: ${(props) => (props.like ? fadeOutRight : fadeOutLeft)} 2s;

  min-height: 500px;

  @media (min-width: 600px) {
    min-height: 300px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  height: 90px;
  width: 100%;
  position: absolute;
  bottom: 0;
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

const Unlike = styled.span`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Image, Buttons, Button, Unlike, AreaVote,
};

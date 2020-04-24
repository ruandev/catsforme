import styled, { keyframes } from 'styled-components';
import Img from 'react-image';

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

const useKeyframe = (value) => {
  if (value === 0) {
    return fadeOutLeft;
  }
  if (value === 1) {
    return fadeOutRight;
  }
  return null;
};

const AreaVote = styled.main`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 500px;
  justify-content: center;
  align-content: center;

  @media (max-width: 600px) {
    min-height: 300px;
  }
`;

const Image = styled(Img)`
  animation: ${(props) => useKeyframe(props.like)} 2s;
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 500px;  
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

import React from 'react';
import { AllArea, Header } from './style';
import Cats from '../Cats';
import Logo from '../Logo';
import FunFact from '../FunFact';

export default function Container() {
  return (
    <AllArea>
      <Header>
        <Logo />
        <FunFact />
      </Header>
      <Cats />
    </AllArea>
  );
}

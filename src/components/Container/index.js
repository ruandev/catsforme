import React, { useState } from 'react';
import { ContainerCustom, Header } from './style';
import Cats from '../Cats';
import Logo from '../Logo';
import FunFact from '../FunFact';

export default function Container({ analyticsRegister }) {
  const [newVote, setNewVote] = useState(false);

  return (
    <ContainerCustom>
      <Header>
        <Logo />
        <FunFact newFact={newVote} />
      </Header>
      <Cats analyticsRegister={analyticsRegister} handleVote={() => setNewVote(!newVote)} />
    </ContainerCustom>
  );
}

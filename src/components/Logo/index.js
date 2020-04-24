import React from 'react';
import { AreaLogo, TextLogo, NumberLogo } from './style';

export default function Logo() {
  return (
    <AreaLogo>
      <TextLogo>
        Cats
        <NumberLogo>4</NumberLogo>
        me
      </TextLogo>
    </AreaLogo>
  );
}

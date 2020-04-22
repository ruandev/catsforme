import React from 'react'
import { AllArea, SideArea } from './style'
import Cats from '../Cats'
import Logo from '../Logo'
import FunFact from '../FunFact'

export default function Container() {
  return (
    <AllArea>
      <Cats />
      <SideArea>
        <Logo />
        <FunFact />
      </SideArea>
    </AllArea>
  )
}
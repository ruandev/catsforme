import React from 'react'
import './container.scss'
import FunFact from './components/FunFact'
import Cats from './components/Cats'
import Logo from './components/Logo'

export default function Container() {
  return (
    <div className="container">
      <Cats />
      <aside>
        <Logo />
        <FunFact />
      </aside>
    </div>
  )
}
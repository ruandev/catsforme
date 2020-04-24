import React from 'react';
import ReactGA from 'react-ga';
import Container from './components/Container';
import { Page } from './App.style';
import ButtonAbout from './components/ButtonAbout';

export default function App() {
  ReactGA.initialize('UA-164496837-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  function registerEventClick(actionToRegister) {
    ReactGA.event({
      category: 'Click',
      action: actionToRegister,
    });
  }

  return (
    <>
      <ButtonAbout />
      <Page>
        <Container analyticsRegister={registerEventClick} />
      </Page>
    </>
  );
}

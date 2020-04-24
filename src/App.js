import React from 'react';
import ReactGA from 'react-ga';
import Container from './components/Container';
import { Page } from './App.style';

function App() {
  ReactGA.initialize('UA-000000-01');
  ReactGA.pageview(window.location.pathname + window.location.search);

  function registerEventClick(action) {
    ReactGA.event({
      category: 'Click',
      action: { action },
    });
  };

  return (
    <Page>
      <Container analyticsRegister={registerEventClick} />
    </Page>
  );
}

export default App;

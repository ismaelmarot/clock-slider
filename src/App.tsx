import type { JSX } from 'react';
import Clock from './components/Clock/Clock';
import { AppContainer, GlobalReset } from './App.styled';

function App(): JSX.Element {
  return (
    <>
      <GlobalReset />
      <AppContainer>
        <Clock />
      </AppContainer>
    </>
  );
}

export default App;

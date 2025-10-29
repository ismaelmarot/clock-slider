import type { JSX } from 'react';
import Clock from './components/Clock/Clock';
import Footer from './components/Footer/Footer';
import { AppContainer, GlobalReset } from './App.styled';

function App(): JSX.Element {
  return (
    <>
      <GlobalReset />
      <AppContainer>
        <Clock />
      </AppContainer>
      <Footer />
    </>
  );
}

export default App;

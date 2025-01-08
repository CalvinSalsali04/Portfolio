import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';


const AppContainer = styled.div`
  padding-top: 60px; /* Space for fixed navbar */
`;

function App() {
  return (
    <>
      <Navbar />
      <AppContainer>
        <AboutMe />
        <Experience />
        <Projects />
      </AppContainer>
    </>
  );
}

export default App;

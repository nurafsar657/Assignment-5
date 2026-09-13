

import Nav from './components/Nav';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import { Suspense } from 'react';
import type { Itechnology } from './Types/Tech';

const technologiesFetch = async (): Promise<Itechnology[]> => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
};

const technologiesPromise = technologiesFetch();

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
    </>
  );
}

export default App;

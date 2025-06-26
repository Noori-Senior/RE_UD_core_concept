import CoreConcepts from './components/CoreConcepts.jsx';
import Header from './components/Header/Header.jsx';
import { Fragment } from 'react';
import Examples from './components/Examples.jsx';

function App() {
  return (
    <Fragment>
      <Header />
      <main className="container my-5">
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;

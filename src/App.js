import React from 'react';

import Header from './components/Header';

function App() {
  return( 
    <> 
      <Header title="Home Page">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Contats">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header> 
    </>
  );
};

export default App;
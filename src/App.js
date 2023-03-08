
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import Header from './Components/Header';
import Content from './Components/Content';
import React from 'react';

function App() {

 
  return (
    <div className="App w-2/4 mx-auto ">
      <Header />
      <Content />
    </div>
  );
}

export default App;

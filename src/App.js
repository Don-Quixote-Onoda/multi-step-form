
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import Header from './Components/Header';
import Content from './Components/Content';
import { ProgressBar } from 'primereact/progressbar';
import React from 'react';

function App() {

  const valueTemplate = (value) => {
    return (
      <React.Fragment>
        {value}/<b>100</b>
      </React.Fragment>
    );
  };

  return (
    <div className="App w-2/4 mx-auto ">
      <Header />
      <Content />
      <ProgressBar value={40} displayValueTemplate={valueTemplate}></ProgressBar>
    </div>
  );
}

export default App;

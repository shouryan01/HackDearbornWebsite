import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './containers/navbar/App.jsx';
import { CalenderContextProvider } from './Context/calender.context';

const rootElement = document.getElementById('body');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.Fragment>
    <CalenderContextProvider>
      <Nav />
    </CalenderContextProvider>
  </React.Fragment>
);
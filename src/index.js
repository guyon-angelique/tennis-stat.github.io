import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './Components/App';
import NouveauMatch from './Components/NouveauMatch'
import AllStat from './Components/AllStat'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>

      <Route exact path="/" element={<App />}>
        <Route path="/accueil" element={<NouveauMatch />} />
        <Route path="/statistiques" element={<AllStat />} />
      </Route>  

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

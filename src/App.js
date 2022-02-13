import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Search } from './components/Search';
import { InformationUser } from './components/InformatioUser';


export function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Search />} />
          <Route exact path="/page-user" element={<InformationUser />} />
        </Routes>
      </Router>
    </div>
  );
}


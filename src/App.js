import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './navBar.css'
import AddActor from './components/add';
import KeywordSearch from './components/keywordSearch';
import UpdateActor from './components/update';
import DeleteActor from './components/delete';
import ActorSearch from './components/actorSearch';

export default function App() {
  return (
  <Router>
    <div>
      <div id="navBar">
        <Link id="actorSearch" to='/'>Actor search</Link>
        <Link id="addActor" to='/add'>Add actor</Link>
        <Link id="updateActor" to='/update'>Update actor</Link>
        <Link id="deleteActor" to='/delete'>Delete actor</Link>
        <Link id="filmSearch"to='/filmSearch'>Film search</Link>
        </div>
        <Routes>
          <Route exact path='/' element={< ActorSearch />}></Route>
          <Route exact path='/add' element={< AddActor />}></Route>
          <Route exact path='/update' element={< UpdateActor />}></Route>
          <Route exact path='/delete' element={< DeleteActor />}></Route>
          <Route exact path='/filmSearch' element={<KeywordSearch />}></Route>
        </Routes>
        </div>
        </Router>
  );
}
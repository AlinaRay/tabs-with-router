import React from 'react';
import {
  Switch, Route, HashRouter, NavLink,
} from 'react-router-dom';

import './App.css';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage';

const App = () => (
  <div className="App">
    <HashRouter>
      <header>
        <nav className="nav-list">
          <ul>
            <li>
              <NavLink to="/">Go to home page</NavLink>
            </li>
            <li>
              <NavLink to="/tabspage">Go to tabs page</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/tabspage" component={TabsPage} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;

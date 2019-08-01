import { Switch, Route, NavLink } from 'react-router-dom';
import React from 'react';

// eslint-disable-next-line react/prop-types
const Tabs = ({ tabs }) => (
  <section className="tabs">
    <nav className="tabs-list">
      {tabs.map(tab => (
        <NavLink  // eslint-disable-line
          to={`/tabspage/${tab.id}/`}
          key={tab.id}
          className="tabs-list__item"
          activeClassName="tabs-list__item_active"
        >
          <div className="tabs__title">
            {tab.title}
          </div>
        </NavLink>
      ))}
    </nav>
    <div className="tabs__content">
      <Switch>
        {tabs.map(tab => (
          <Route
            key={tab.id}
            path={`/tabspage/${tab.id}`}
            render={() => (
              <span>{tab.content}</span>
            )}
          />
        ))}
      </Switch>
    </div>
  </section>
);

export default Tabs;

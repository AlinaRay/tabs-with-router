import React from 'react';
import tabsList from '../api/tabspage-content';
import Tabs from './Tabs';

const TabsPage = () => (
  <div>
    <header>
      <h1 className="title">Tabs</h1>
    </header>
    <main>
      <Tabs
        tabs={tabsList}
        current="tab-2"
      />
    </main>
  </div>
);

export default TabsPage;

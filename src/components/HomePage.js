import React from 'react';
import homepageText from '../api/homepage-content';

const HomePage = () => (
  <div>
    <header>
      <h1 className="title">Homepage</h1>
    </header>
    <main>
      <p className="text-center text-wrapper">{homepageText}</p>
    </main>
  </div>
);

export default HomePage;

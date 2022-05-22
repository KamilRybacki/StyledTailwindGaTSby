// @ts-nocheck
import React from 'react';
import {Link} from 'gatsby';

const IndexPage = () => {
  return (
    <main className="p-10">
      <h1 className="mb-4">Your site index is working! Woohoo!</h1>
      <Link
        to="/posts"
        className="p-2 bg-primary-500 text-secondary-50 font-bold font-display"
      >Go to posts</Link>
    </main>
  );
};

export default IndexPage;

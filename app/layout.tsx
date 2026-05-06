import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Pressure Washing</title>
        <meta name='description' content='Professional pressure washing services.' />
      </Head>
      <main>{children}</main>
    </div>
  );
};

export default Layout;

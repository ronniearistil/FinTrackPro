// Layout.jsx
import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <NavBar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;

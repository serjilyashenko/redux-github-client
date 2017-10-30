import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Title + Search Input</h1>
    <Link to="/user" href="/user">user</Link>
    <hr />
  </div>
);

export default Header;

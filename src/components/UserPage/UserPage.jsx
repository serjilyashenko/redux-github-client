import React from 'react';
import { Link } from 'react-router-dom';

const UserPage = (props) => (
  <div>
    <div>User: <pre>{JSON.stringify(props, null, 2)}</pre></div>
    <Link to="/user/repo" href="/user/repo">repo</Link>
  </div>
);

export default UserPage;

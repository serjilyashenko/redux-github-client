import React from 'react';

const RepoPage = props => (
  <div>
    Repository Page: <pre>{JSON.stringify(props, null, 2)}</pre>
  </div>
);

export default RepoPage;

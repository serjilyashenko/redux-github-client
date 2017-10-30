import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from 'components/Header';
import UserPageContainer from 'containers/UserPageContainer';
import RepoPageContainer from 'containers/RepoPageContainer';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route exact path="/:user" component={UserPageContainer} />
      <Route exact path="/:user/:repo" component={RepoPageContainer} />
    </div>
  </Router>
);

export default App;

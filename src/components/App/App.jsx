import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderContainer from 'containers/HeaderContainer';
import UserPageContainer from 'containers/UserPageContainer';
import RepoPageContainer from 'containers/RepoPageContainer';

const App = () => (
  <Router>
    <div className="container">
      <Route path="/" component={HeaderContainer} />
      <Switch>
        <Route exact path="/:login" component={UserPageContainer} />
        <Route exact path="/:login/:repo" component={RepoPageContainer} />
        <Route component={() => <h2>404</h2>} />
      </Switch>
    </div>
  </Router>
);

export default App;

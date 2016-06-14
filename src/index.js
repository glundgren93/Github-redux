import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import RepositoryList from './components/RepositoryList';
import Repository from './components/Repository';

const store = configureStore();
store.dispatch(actions.getRepositories());

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={RepositoryList} />
        <Route path="/repository/:Id" component={Repository} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

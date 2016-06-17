import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Home from './components/Home';
import Repository from './components/Repository';
import Blob from './components/Blob';

const store = configureStore();
store.dispatch(actions.getRepositories());
store.dispatch(actions.getProfile());

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/repository/:name" component={Repository} />
        <Route path="/repository/:name/:sha" component={Blob} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

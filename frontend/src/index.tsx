import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import { Context } from './Context/Context';
import allReducers from './Reducers';
let store: any = createStore(allReducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Context.Provider value={store}>
      <App />
    </Context.Provider>
  </Provider>,
  document.getElementById('root')
);



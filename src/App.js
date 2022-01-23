import React from 'react';
import './App.css'
import { Provider } from 'react-redux';
import generateStore from './redux/store';
import RouterMain from './routes/RouterMain';

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <RouterMain />
    </Provider>
  )
}

export default App;

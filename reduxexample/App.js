/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// App.js
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import { store } from './src/redux/store';

export default function App() {
  console.log('store', store)
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

import React from 'react';
import { Provider } from 'react-redux';
import {store} from './store';
import { MyApp } from './components/MyApp/MyApp';

export type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
  EditTask: {title: string, subTitle: string},
  Login: undefined,
  Logout: undefined
};


function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <MyApp/>
      </Provider>
    </>
  );
}

export default App;

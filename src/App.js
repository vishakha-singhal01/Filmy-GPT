import React from 'react'
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import { Provider } from 'react-redux';
import AppStore from './utils/AppStore';

const App = () => {
  return (
    <div>
      <Provider store={AppStore}>
      <Body/>
      </Provider>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

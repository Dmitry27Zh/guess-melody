import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Setting } from './const';
import { questions } from './mock/questions';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './store/reducer';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const store = configureStore({
  reducer,
});

root.render(
  <React.StrictMode>
    <Provider store={store}><App errorsCount={Setting.ErrorsCount} questions={questions} /></Provider>
  </React.StrictMode>,
);

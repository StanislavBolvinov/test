import { createRoot } from 'react-dom/client';
import './shared/styles/reset.scss';
import './shared/styles/global.scss';
import { Provider } from 'react-redux';
import { store } from './shared/store/index.ts';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

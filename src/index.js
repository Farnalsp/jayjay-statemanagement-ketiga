import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Detail from './pages/detail';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import { RecoilRoot } from 'recoil';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'detail/:id',
    element: <Detail />,
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
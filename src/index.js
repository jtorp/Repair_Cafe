import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { store } from "./app/store"
// import { usersApiSlice } from "./features/users/usersSlice"
// import { postsApiSlice } from "./features/posts/postsSlice"

// store.dispatch(usersApiSlice.endpoints.getAllUsers.initiate());
// store.dispatch(postsApiSlice.endpoints.getAllPosts.initiate())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider> */}
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>
);

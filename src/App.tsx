import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '@/store';
import CustomRoute from './sharedComponents/routing/customRoute';
import { defaultRoutes } from './configuration';
import Home from './areas/home';
import Login from './areas/login';


const App: React.FC = () => {

  return (
    <>
      <Provider store={store}>

        <BrowserRouter>
          <Routes>

            <Route 
              index 
              element={<CustomRoute redirectTo={defaultRoutes.home} />} 
            />

            <Route
              path={`${defaultRoutes.home}/*`}
              element={
                <CustomRoute>
                  <Home />
                </CustomRoute>
              }
            />

            <Route
              path={defaultRoutes.login}
              element={
                <CustomRoute noAuth redirectIfAuthenticated>
                  <Login />
                </CustomRoute>
              }
            />
            
          </Routes>
        </BrowserRouter>

      </Provider>
    </>
  )
}


export default App

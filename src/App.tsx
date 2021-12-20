import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import UserContextProvider from './context/authContext';
import { useUserAuthentication } from './context/authContext';
import Protector from './utils/ProtectedRoute';

const App: React.FC<any> = () => {
  // let { user } = useUserAuthentication()

  // useEffect(() => {
  //   if (user)
  // })

  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Protector><Home /></Protector>} />
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;

import React, { useContext } from 'react';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter';
import './styles/theme.css';
import './styles/global.css';

import { AuthContext } from './contexts/AuthContext/AuthContext';
import Login from './pages/Login/index'; 

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      {!isAuthenticated ? (
        <Login />
      ) : (
        <TaskContextProvider>
          <MessagesContainer>
            <MainRouter />
          </MessagesContainer>
        </TaskContextProvider>
      )}
    </>
  );
}
import React from 'react';
import './App.css';
import { createContext } from "react"
import Login from './pages/Login';


import { darkTheme,lightTheme } from './styles/Theme';

export const ThemeContext = createContext(lightTheme)



function App() {
  return (
    <ThemeContext.Provider value={lightTheme}>
   <Login />
</ThemeContext.Provider>
  );
}

export default App;

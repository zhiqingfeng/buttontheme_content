import React from 'react';
import Header from './Header';
import ThemeContext  from './ThemeContext';

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

function App() {
  return (
    <ThemeContext value={ buttonThemes.black}></ThemeContext>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
});
function App() {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <div className="App" dir="rtl">
          <Form />
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;

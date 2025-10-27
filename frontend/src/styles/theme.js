import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#841F9D',
    },
    secondary: {
      main: '#E5DFE0',
    },
    background: {
      default: '#2D272C', 
      paper: '#0f0f0fff',
    },
    text: {
      primary: '#E5DFE0',
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Segoe UI Emoji"', '"Segoe UI Symbol"',
    ].join(','),
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#841F9D',
    },
    secondary: {
      main: '#1D1D1D',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#1D1D1D',
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Segoe UI Emoji"', '"Segoe UI Symbol"',
    ].join(','),
  },
});

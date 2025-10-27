import "@/styles/globals.css";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

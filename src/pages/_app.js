import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({ Component, pageProps }) {
  const themeOptions = {
    palette: {
      mode: 'dark',
      primary: {
        main: '#6234a2',
      },
      secondary: {
        main: '#f50057',
      },
      text: {
        primary: 'rgba(251,250,253,0.87)',
        secondary:'rgba(251,250,253,0.87)',
        disabled: 'rgba(18,6,41,0.87)',
      },
      background: {
        default: '#000000',
        paper: '#230333',
      },
    },
  };
  
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

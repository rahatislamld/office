// pages/_app.js
import React from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  // you can set your custom theme here
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This helps with consistent baseline styling */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

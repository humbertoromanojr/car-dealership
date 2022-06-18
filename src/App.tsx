import { AppBar, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>{/* <=== apply background all app */}

      <AppBar>
        <Toolbar>
          <Typography variant="h5">Full Cycle Delivery</Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;

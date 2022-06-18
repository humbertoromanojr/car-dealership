import { AppBar, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from "./theme";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>{/* <=== apply background all app */}

      <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <IconButton color="inherit">
            <DriveEtaIcon/>
          </IconButton>
          <Typography variant="h5">Full Cycle Delivery</Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;

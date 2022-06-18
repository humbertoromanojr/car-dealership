import React, { useEffect, useRef } from "react";
import {  
  CssBaseline, 
  ThemeProvider,
  Grid, 
  Select,
  MenuItem,
  Button 
} from "@mui/material";
import theme from "./theme";
import { NavBar } from "./components/NavBar";
import { styled } from "@mui/material/styles";
import { Loader } from "google-maps";
import { getCurrentPosition } from "./utils/geolocation";

const Form = styled("form")(({ theme: _theme }) => ({
  margin: _theme.spacing(1)
}));
const MapContainer = styled("div")(({ theme: _theme }) => ({
  width: "100%",
  height: "100%"
}));

function App() {
  const mapRef = useRef<google.maps.Map>()

  useEffect(() => {
    (async () => {
      await loader.load();
      const position = await getCurrentPosition({ enableHighAccuracy: true })
      const divMap = document.getElementById('map') as HTMLDivElement;
      mapRef.current = new google.maps.Map(divMap, { zoom: 15, center: position })
    })();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>{/* <=== apply base background all app */}
      <NavBar />
      <Grid container style={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} sm={3}>
          <Form>
            <Select fullWidth displayEmpty defaultValue={""}>
              <MenuItem value="">
                <em>Selecione uma rota</em>
              </MenuItem>
              <MenuItem value="">
                Rota 01
              </MenuItem>
            </Select>
            <div style={{ textAlign: 'center', margin: theme.spacing(1) }}>
              <Button type="submit" variant="contained">Iniciar Rota</Button>
            </div>
          </Form>
        </Grid>
        <Grid item xs={12} sm={9}>
          <MapContainer id="map"/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

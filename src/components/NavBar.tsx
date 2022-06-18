import { 
    AppBar, 
    IconButton, 
    Toolbar, 
    Typography } from "@mui/material";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

export function NavBar() {
    return (
        <AppBar position="static" enableColorOnDark>
            <Toolbar>
            <IconButton color="inherit">
                <DriveEtaIcon/>
            </IconButton>
            <Typography variant="h5">Full Cycle Delivery</Typography>
            </Toolbar>
        </AppBar>
    )
}

import { Grid } from "@mui/material";
import Logo from "./headeratoms/Logo";
import Cartbutton from "./headeratoms/cartbutton";
import Location from "./headeratoms/location";
import LoginButton from "./headeratoms/loginbutton";
import Searchbar from "./headeratoms/searchbar";

const Header = () => {
  return (
    <>
      <Grid
        container
        style={{
          display: "flex",
          position: "sticky",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          height: "86px",
          width: "100vw",
        }}
      >
        <Grid
          item
          xs={1}
          style={{ display: "flex", padding: "0px", justifyContent: "center" }}
        >
          <Logo />
        </Grid>
        <Grid
          item
          xs={2}
          style={{ display: "flex", padding: "0px", justifyContent: "center" }}
        >
          <Location />
        </Grid>
        <Grid
          item
          xs={6}
          style={{ display: "flex", padding: "0px", justifyContent: "center" }}
        >
          <Searchbar />
        </Grid>
        <Grid
          item
          xs={1}
          style={{ display: "flex", padding: "0px", justifyContent: "center" }}
        >
          <LoginButton />
        </Grid>
        <Grid
          item
          xs={1}
          style={{ display: "flex", padding: "0px", justifyContent: "center" }}
        >
          <Cartbutton />
        </Grid>
      </Grid>
    </>
  );
};
export default Header;

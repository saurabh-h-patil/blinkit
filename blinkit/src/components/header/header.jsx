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
        spacing={3}
        style={{
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "1px solid rgb(238, 238, 238) ",
          position: "sticky",
          width: "100vw",
        }}
      >
        <Grid item xs={1}>
          <Logo />
        </Grid>{" "}
        <Grid item xs={2}>
          <Location />
        </Grid>
        <Grid item xs={6}>
          <Searchbar />
        </Grid>
        <Grid item xs={1}>
          <LoginButton />
        </Grid>
        <Grid item xs={1}>
          <Cartbutton />
        </Grid>
      </Grid>
    </>
  );
};
export default Header;

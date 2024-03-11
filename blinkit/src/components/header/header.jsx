import Logo from "../atoms/Logo";
import Cartbutton from "../atoms/cartbutton";
import Location from "../atoms/location";
import LoginButton from "../atoms/loginbutton";
import Searchbar from "../atoms/searchbar";
import Grid from "@mui/material/Grid";

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

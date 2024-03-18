import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Searchbar = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.04)",
          padding: "0px",
          borderRadius: "12px",
          height: "47px",
          display: "flex",
          justifyContent: "flexstart",
          marginLeft: "10px",
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="search" style={{}}>
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </>
  );
};
export default Searchbar;

import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
const Searchbar = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid rgba(0, 0, 0, 0.04)",
          borderRadius: "12px",
          height: "47px",
          display: "flex",
          alignContent: "center",
          paddingLeft: "10px",
        }}
      >
        <IconButton edge="start" color="inherit" aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          startIcon={<SearchIcon />}
        />
      </div>
    </>
  );
};
export default Searchbar;

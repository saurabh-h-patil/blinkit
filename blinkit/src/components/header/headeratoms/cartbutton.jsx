import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Cartbutton = () => {
  return (
    <>
      <div>
        <Button
          style={{ backgroundColor: "green", width: "122px", height: "52px" }}
          variant="contained"
          startIcon={<AddShoppingCartIcon />}
        >
          My cart
        </Button>
      </div>
    </>
  );
};
export default Cartbutton;

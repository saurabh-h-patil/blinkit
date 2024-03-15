import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const Cartbutton = () => {
  return (
    <>
      <div>
        <Button
          style={{
            width: "100px",
            height: "50px",
            backgroundColor: "green",
            position: "relative",
          }}
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

import { Link } from "react-router-dom";
import Brands from "../../lib/data/brandsList.json";
import Grid from "@mui/material/Grid";
const AllBrands = () => {
  const allBrands = Brands.map((brand) => ({
    text: brand,
  }));
  return (
    <>
      <Grid style={{ display: "grid", fontFamily: "" }}>
        <h4>Brands</h4>
        <ul style={{ columnCount: 10, columnGap: "20px" }}>
          {allBrands.map((brand, i) => (
            <Link
              key={i}
              style={{
                alignItems: "center",
                listStyle: "none",
                textDecoration: "none",
                color: "black",
              }}
            >
              <li>{brand.text}</li>
            </Link>
          ))}
        </ul>
      </Grid>
    </>
  );
};
export default AllBrands;

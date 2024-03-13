import Brands from "../../lib/data/brandsList.json";
import Grid from "@mui/material/Grid";
const AllBrands = () => {
  const allBrands = Brands.map((brand) => ({
    text: brand,
  }));
  return (
    <>
      <h4>Brands</h4>
      <Grid container spacing={1} style={{ marginLeft: "0px" }}>
        {allBrands.map((brand, i) => (
          <Grid xs={1} key={i} style={{ alignItems: "center" }}>
            {brand.text}
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default AllBrands;

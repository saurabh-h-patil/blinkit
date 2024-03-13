import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Categories from "../../lib/data/categories.json";
const UsefulLinks = () => {
  const Links = [
    "About",
    "Careers",
    "Blog",
    "Press",
    "Lead",
    "Value",
    "Privacy",
    "Terms",
    "FAQs",
    "Security",
    "Mobile",
    "Contact",
    "Partner",
    "Express",
    "Local",
    "Spotlight",
    "Warehouse",
    "Deliver",
  ];
  const allCategories = Categories.map((cat) => ({
    id: cat.id,
    text: cat.title,
  }));
  const allLinks = Links.map((link) => ({
    title: link,
  }));
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <h4>Categories</h4>
          <Grid>
            {allCategories.map((cat) => (
              <Grid key={cat.id}>{cat.text} </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid xs={6}>
          <h4>UsefulLinks</h4>
          <Grid style={{ rowGap: "0.5rem" }}>
            {allLinks.map((brand, i) => (
              <Grid xs={1} key={i} style={{ alignItems: "center" }}>
                <div>{brand.title}</div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default UsefulLinks;

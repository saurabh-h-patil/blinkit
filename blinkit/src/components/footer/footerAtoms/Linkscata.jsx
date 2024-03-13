import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Categories from "../../lib/data/categories.json";
import { Box, List, ListItem } from "@mui/material";
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
    "Seller",
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
      {" "}
      <Grid
        xs={12}
        style={{ display: "flex", padding: "0px", marginBottom: "20px" }}
      >
        <Grid container xs={4}>
          <h4>Useful Links</h4>

          <Grid container rowSpacing={0.5} columnSpacing={{ md: 0.5 }}>
            {allLinks.map((cat) => (
              <Grid item xs={4} key={cat.id}>
                <ListItem item key={cat.id} style={{ padding: "0px" }}>
                  {cat.title}
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid>{" "}
        <Grid container xs={8}>
          <h4>Categories</h4>

          <Grid container rowSpacing={0.5} columnSpacing={{ md: 0 }}>
            {allCategories.map((cat) => (
              <Grid item xs={4} key={cat.id}>
                <ListItem style={{ padding: "0px" }}>{cat.text}</ListItem>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default UsefulLinks;

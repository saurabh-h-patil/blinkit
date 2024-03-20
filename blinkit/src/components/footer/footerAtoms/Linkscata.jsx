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
        <Grid item xs={6} style={{ display: "grid" }}>
          <h4>UsefulLinks</h4>
          <ul style={{ rowGap: "0.5rem", listStyle: "none", columnCount: "3" }}>
            {allLinks.map((brand, i) => (
              <Link key={i} style={{ textDecoration: "none" }}>
                <li style={{ alignItems: "center", color: "black" }}>
                  {brand.title}
                </li>
              </Link>
            ))}
          </ul>
        </Grid>
        <Grid item xs={6} style={{ display: "grid" }}>
          <h4>Categories</h4>
          <ul style={{ listStyle: "none", padding: 0, columnCount: 3 }}>
            {allCategories.map((cat, i) => (
              <Link
                key={cat.id}
                style={{ textDecoration: "none", color: "black" }}
              >
                <li key={cat.id}>{cat.text} </li>
              </Link>
            ))}
          </ul>
        </Grid>
      </Grid>
    </>
  );
};
export default UsefulLinks;

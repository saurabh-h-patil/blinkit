import { useEffect, useState } from "react";
import Categorie from "../lib/data/categories.json";

const CategoriesList = () => {
  const [cata, setCata] = useState([]);
  useEffect(() => {
    setCata(Categorie);
  }, []);
  return (
    <section
      style={{
        display: "grid",
        height: "369px",
        width: "1280px",
        position: "relative",
        left: "40px",
        right: "20px",
      }}
    >
      <div style={{ columnCount: 10 }}>
        {cata.map((c) => (
          <div key={c.id}>
            <img
              src={c.images}
              alt={c.title}
              style={{ width: "128px", height: "188px" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;

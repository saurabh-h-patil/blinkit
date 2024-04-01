import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Items from "./productListAtoms/items";

const ProductRow = ({ products }) => {
  console.log("productsproducts", products);
  const Allproduct = products.objects[0].data.products;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div
        style={{
          height: "369px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "19px",
        }}
      >
        <div style={{ maxWidth: "1280px" }}>
          {<h1>{products.data.title}</h1>}
          <Carousel responsive={responsive}>
            {Allproduct.map((item) => {
              return (
                <Link to={`/details/${item[0].product_id}`}>
                  <Items item={item} />{" "}
                </Link>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};
export default ProductRow;

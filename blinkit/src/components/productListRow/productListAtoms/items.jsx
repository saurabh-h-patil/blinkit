import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
const Items = ({ item }) => {
  console.log("items", item);
  const fitem = item[0];
  return (
    <>
      <div
        style={{
          display: "flex ",
          flexDirection: "column",
          minWidth: " 179px",
          maxWidth: " 179px",
          height: "273px",
          paddingBottom: "20px",
          alignItems: "center",
          columnGap: "20px",
          overflow: " auto hidden",
          marginRight: " 12px",
          marginLeft: "12px",
          background: "rgb(255, 255, 255)",
          border: " 0.5px solid rgb(232, 232, 232)",
          boxShadow: "rgba(0, 0, 0, 0.04) 2px 2px 8px",
          borderRadius: "8px",
          padding: "5px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={fitem.image_url}
            style={{ height: "140px", width: "140px", objectFit: "fill" }}
          />
        </div>
        <div
          style={{
            boxSizing: "border-box",
            paddingLeft: "0.75rem",
            paddingRight: "0.75rem",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex ",
              flexDirection: "column",

              width: "100%",
            }}
          >
            <span
              style={{
                overflow: " hidden",
                color: "rgb(31, 31, 31)",
                fontWeight: " 600",
                fontSize: "13px",
                lineHeight: "18px",
                width: " 100%",
                height: " 36px",
                marginBottom: " 6px",
              }}
            >
              {fitem.name}
            </span>
            <span
              style={{
                alignItems: "center",
                display: "flex",
                height: "26px",
                width: "100%",
              }}
            >
              {fitem.unit}
            </span>
          </div>
          <div
            style={{
              display: "flex ",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              justifyContent: " space-between",
            }}
          >
            <div
              style={{
                display: "flex ",
                flexDirection: "column",
              }}
            >
              <span style={{}}> {`₹${fitem.price}`}</span>
              <span
                style={{
                  color: " rgb(130, 130, 130)",
                  fontWeight: " 400",
                  fontSize: "12px",
                  textDecoration: "line-through",
                }}
              >
                {" "}
                {`₹${fitem.mrp}`}
              </span>{" "}
            </div>
            <div>add</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;

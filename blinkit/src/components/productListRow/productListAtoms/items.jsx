const Items = ({ item }) => {
  console.log("itemssssssssssssssssssssssssss", item);
  const fitem = item[0];
  return (
    <>
      <div
        style={{
          width: "179px",
          height: "285px",
          border: "1px solid black",
          objectFit: "cover",
          display: "flex",
          flexDirection: "column",
          marginRight: "20px",
        }}
      >
        <div>
          <img
            style={{
              width: "140px",
              height: "140px",
              objectFit: "cover",
              padding: " 0.5rem",
            }}
            src={fitem.image_url}
            alt=""
          />
        </div>
        <div
          style={{
            display: "flex",
            direction: "rows",
            padding: "0.5rem ",
            fontSize: "13px",
            flexDirection: "column",
          }}
        >
          <div>
            <p>
              <b>{fitem.name}</b>
            </p>
          </div>
          <div>{fitem.unit}</div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "10px",
              }}
            >
              <span
                style={{ fontSize: "14px", fontWeight: " 600 " }}
              >{`₹${fitem.price}`}</span>
              <span
                style={{
                  textDecoration: "line-through",
                  fontSize: "0.75rem",
                  position: "relative",
                }}
              >
                {`₹${fitem.mrp}`}
              </span>
            </div>
            <div> ADD TO CART</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;

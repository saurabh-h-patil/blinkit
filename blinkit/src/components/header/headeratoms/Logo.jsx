import Blinklogo from "../../../assets/blinkitlogo.svg";
const Logo = () => {
  return (
    <>
      <div style={{ height: "86px", width: "176px" }}>
        <img
          src={Blinklogo}
          alt=""
          style={{
            height: "60px",
            width: "134px",
            objectFit: "fit",
            marginTop: "7px",
          }}
        />
      </div>
    </>
  );
};
export default Logo;

import Blinklogo from "../../../assets/blinkitlogo.svg";
const Logo = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",

          position: "relative",
          height: "60px",
          width: "134px",
        }}
      >
        <img
          src={Blinklogo}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",

            position: "absolute",
          }}
        />
      </div>
    </>
  );
};
export default Logo;

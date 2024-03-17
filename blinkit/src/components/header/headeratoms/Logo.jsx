import Blinklogo from "../../../assets/blinkitlogo.svg";
const Logo = () => {
  return (
    <>
      <div>
        <img
          src={Blinklogo}
          alt=""
          style={{
            height: "60px",
            width: "134px",
            objectFit: "contain",
          }}
        />
      </div>
    </>
  );
};
export default Logo;

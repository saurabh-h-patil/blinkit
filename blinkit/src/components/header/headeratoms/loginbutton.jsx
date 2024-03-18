import { NavLink } from "react-router-dom";
const LoginButton = () => {
  return (
    <NavLink
      style={{
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "400Px",
        color: "black",
        position: "relative",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      Login
    </NavLink>
  );
};
export default LoginButton;

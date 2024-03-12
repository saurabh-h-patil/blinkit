import { NavLink } from "react-router-dom";
const LoginButton = () => {
  return (
    <NavLink
      style={{
        textDecoration: "none",
        fontSize: "18px",
        fontWeight: "400Px",
        color: "black",
      }}
    >
      Login
    </NavLink>
  );
};
export default LoginButton;

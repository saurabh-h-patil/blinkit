import UsefulLinks from "./footerAtoms/Linkscata";
import AllBrands from "./footerAtoms/allBrands";
import PaymentPatners from "./footerAtoms/paymentPatners";

const Footer = () => {
  return (
    <div style={{ margin: "48px 119px 119px", position: "absolute" }}>
      <UsefulLinks />
      <AllBrands />
      <PaymentPatners />
    </div>
  );
};
export default Footer;

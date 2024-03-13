import Grid from "@mui/material/Grid";
import { style } from "@mui/system";

const PaymentPatners = () => {
  const PaymentPartners = [
    {
      logoName: "mobikwik",
      alt: "MobikWik",
    },
    {
      logoName: "paytm",
      alt: "PayTm",
    },
    {
      logoName: "visa",
      alt: "Visa",
    },
    {
      logoName: "mastercard",
      alt: "Mastercard",
    },
    {
      logoName: "maestro",
      alt: "Maestro",
    },
    {
      logoName: "rupay",
      alt: "RuPay",
    },
    {
      logoName: "amex",
      alt: "American Express",
    },
    {
      logoName: "sodex",
      alt: "Sodexo",
    },
    {
      logoName: "bhim",
      alt: "BHIM UPI",
    },
    {
      logoName: "",
      alt: "Net Banking",
    },
    {
      logoName: "",
      alt: "Cash on Delivery",
    },
    {
      logoName: "",
      alt: "bringIt cash",
    },
  ];

  return (
    <>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        {PaymentPartners.map((partner, i) => {
          return (
            <Grid
              item
              xs={1}
              key={i}
              style={{
                width: "56px",
                height: "56px",
                display: "flex",
                padding: "0px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={`/${partner.logoName}.webp`}
                alt=""
                style={{ width: "56px", height: "56px", objectFit: "cover" }}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default PaymentPatners;

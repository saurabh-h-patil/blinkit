import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="relative grid lg:grid-cols-2 lg:border-b _border-muted -mt-2">
      <div className="lg:border-r _border-muted">
        <div className="hidden lg:block px-4 lg:px-0 pt-8">
          <h4 className="text-2xl font-bold _text-default">Product Details</h4>
        </div>
      </div>
      <div className="static lg:block">
        <div className="relative top-0 lg:sticky lg:top-[100px]">
          <div className="px-4 lg:pl-12 lg:pt-8">
            <h1 className="text-[28px] leading-tight py-3"></h1>
            <Link to="/">
              <div className="cursor-pointer text-[#0c831f] font-semibold text-lg flex items-center"></div>
            </Link>
            <div className="mt-4 mb-6"></div>
            <div className="my-4 h-12 w-[130px]"></div>
            <div className="lg:hidden mt-8">
              <h4 className="text-2xl font-medium _text-muted">
                Product Details
              </h4>
            </div>
            <div className="pb-4 hidden lg:block">
              <h4 className="font-bold _text-default text-[15px] py-3">
                Why shop from bringit?
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

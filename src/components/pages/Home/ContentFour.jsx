import lockIcon from "../../../assets/lockIcon.svg";
import deliveryIcon from "../../../assets/deliveryIcon.svg";
import customerIcon from "../../../assets/customerIcon.svg";
import paymentIcon from "../../../assets/paymentIcon.svg";
import Icons from "../../component/Icons/Icons";
const ContentFour = () => {
  return (
    <div className="w-full make_even h-[150px]">
      <div className="make_between gap-5 lg:make_row_evenly">
        <Icons src={lockIcon} className={"img_icon_size"} />
        <p className="">100% Safe % Secure Checkout</p>
      </div>

      <div className="make_between gap-5 md:make_row_between">
        <Icons src={deliveryIcon} className={"img_icon_size"} />
        <p className="">We Deliver 28650+ PinCodes</p>
      </div>

      <div className="make_between gap-5 md:make_row_between">
        <Icons src={customerIcon} className={"img_icon_size"} />
        <p className="">Online Support</p>
      </div>
      <div className="make_between gap-5 md:make_row_between">
        <Icons src={paymentIcon} className={"img_icon_size"} />
        <p className="">Flexible Payments</p>
      </div>
    </div>
  );
};

export default ContentFour;

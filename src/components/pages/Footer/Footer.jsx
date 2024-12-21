import questionIcon from "../../../assets/questionIcon.svg";
import accountIcon from "../../../assets/profileIcon.svg";
import returnIcon from "../../../assets/returnIcon.svg";
import locationIcon from "../../../assets/locationIcon.svg";
import Icons from "../../component/Icons/Icons.jsx";
import instagramIcon from "../../../assets/instagramIcon.png";
import facebookIcon from "../../../assets/facebookIcon.png";
import visacardIcon from "../../../assets/visaIcon.png";
import mastercardIcon from "../../../assets/mastercardIcon.png";

const footerInformation = [
  {
    topic: "Helpful Information",
    subInfo: [
      "FAQ's",
      "Delivery",
      "Size Guides",
      "Financial Difficulties",
      "About Asna Garments",
    ],
  },
  {
    topic: "Shop For More",
    subInfo: [
      "Quick Orders",
      "Brand Directory",
      "Our Other Shops",
      "Our App",
      "Flexiway Account",
      "Buy Now Pay Later",
    ],
  },
];
const Footer = () => {
  return (
    <div className="w-9/12 mx-auto mt-10 lg:w-9/12 sm:w-full">
      {/* <div className="make_center">
        <hr className="border-1 flex-1 border-black" />
        <p className="p_1 mx-5">Find Out More</p>
        <hr className="border-1 flex-1 border-black" />
      </div> */}
      {/* ---------------------------- */}

      <div className="make_center">
        <hr className="border-1 flex-1 border-black" />
        <p className="p_1 mx-5">
          Shop Asna Garments for the Custom Hoodies and T shirts and so on
        </p>
        <hr className="border-1 flex-1 border-black" />
      </div>
      {/* ---------------------------- */}

      <div className="make_center h-[60px]">
        <p className="p_3 font-normal">
          Asna Garments is a leading provider of customized t-shirts, hoodies,
          and sports jerseys in Tamil Nadu.
        </p>
      </div>

      {/* ---------------------------- */}

      <div className="w-full border-t border-b border-black">
        <div className="make_between h-[80px] w-8/12 mx-auto md:w-10/12 sm:w-full">
          <div className="make_between">
            <div className="img_icon_size mr-3">
              <img src={questionIcon} className="w-full"></img>
            </div>
            <p>Help & Contact Us</p>
          </div>
          <div className="make_between">
            <div className="img_icon_size mr-3">
              <img src={accountIcon} className="w-full"></img>
            </div>
            <p>My Account</p>
          </div>
          <div className="make_between">
            <div className="img_icon_size mr-3">
              <img src={returnIcon} className="w-full"></img>
            </div>
            <p>Return an Item</p>
          </div>
          <div className="make_between">
            <div className="img_icon_size mr-3">
              <img src={locationIcon} className="w-full"></img>
            </div>
            <p>Track my order</p>
          </div>
        </div>
      </div>
      {/* ---------------------------- */}

      <div className="make_center h-[400px]">
        <div className="w-8/12 mx-auto h-[300px] make_between">
          {footerInformation.map((infos) => {
            return <FooterInfo topic={infos.topic} subTopic={infos.subInfo} />;
          })}

          <div className="make_row_between_start w-5/12">
            <p className="mb-5">Sing up to emails</p>
            <div className="make_between overflow-hidden border rounded-[5px] h-[50px]">
              <input className="h-full pl-3 w-8/12"></input>
              <button className="h-full bg-black text-white w-4/12 flex-1">
                Sign Up
              </button>
            </div>

            <p className="p_4 mt-5">
              By giving an email address, you're agreeing to receive our
              marketing emails and you can opt out at any time. Read our Privacy
              Policy for details on how your data will be used.
            </p>

            <div className="mt-5 w-[100px] make_between">
              <Icons src={facebookIcon} className={"img_icon_size"} />
              <Icons src={instagramIcon} className={"img_icon_size"} />
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------- */}
      <div className="make_center border-black border-t border-b h-[100px]">
        <div className="w-8/12 mx-auto make_between">
          <p className="p_4 font-normal">
            Privacy Policy | Security | Cookie Policy | Terms & Conditions |
            Sitemap | Careers
          </p>
          <div className="p_4 font-normal make_between w-4/12">
            <p className="p_4 font-normal">We accept this payment methods:</p>
            <Icons src={visacardIcon} className={"img_icon_size"} />
            <Icons src={mastercardIcon} className={"img_icon_size"} />
          </div>
        </div>
      </div>

      {/* ---------------------------- */}
      <div className="h-[100px] make_center">
        <p className="p_3 font-normal text-center ">
          Copyright @ Asnagarments. All Rights Reserved. Development by
          catchywebtech
        </p>
      </div>
      {/* ---------------------------- */}
    </div>
  );
};

export const FooterInfo = ({ topic, subTopic }) => {
  const subInfos = subTopic.map((eachInfo) => {
    return (
      <p key={eachInfo} className="p_2 font-normal">
        {eachInfo}
      </p>
    );
  });
  return (
    <div className="h-full  make_row_between_start">
      <p className="p_1">{topic}</p>
      {subInfos}
    </div>
  );
};

export default Footer;

import React from "react";
import PrimaryButton from "../../component/Buttons/PrimaryButton";

const Contact = () => {
  return (
    <div className="w-6/12 mx-auto sm:make_row_between xl:w-6/12 lg:w-9/12 md:w-11/12 md:make_row_evenly mt-20 mb-20">
      <h1 className="h1_tertiary text-center">Contact</h1>
      <div className="w-full make_between_start gap-10">
        {/* ----------------------------- */}
        <div className="">
          <p className="p_0">We would love to hear from you.</p>
          <p className="p_3 mb-2">
            If you’ve got great products your making or looking to work with us
            then drop us a line.
          </p>
          <form className="w-full h-[300px] make_row_between_start">
            <div className="make_between w-full">
              <input
                placeholder="Name"
                className="border p_3 pl-2 border-black w-[48%] h-[40px] rounded-[5px]"
              ></input>
              <input
                placeholder="Email"
                className="border p_3 pl-2 border-black w-[48%] h-[40px] rounded-[5px]"
              ></input>
            </div>
            <textarea
              placeholder="Message"
              className="w-full p_3 resize-none pl-2 pt-2 h-[150px] border border-black rounded-[5px]"
            ></textarea>
            <div className="w-full make_between">
              <input type="checkbox"></input>
              <p className="p_4">
                Save my name, email, and website in this browser for the next
                time I comment.
              </p>
            </div>
            <PrimaryButton
              content={"Submit Now"}
              className={"border-2 px-2 bg-sclr p_3"}
            />
          </form>
        </div>
        {/* ----------------------- */}
        <div className="w-4/12 min-w-[300px]">
          <p className="p_0 mb-2">Information</p>
          <p className="p_2 font-normal">+91 8480005316</p>
          <p className="p_2 font-normal">contact@rooh.in</p>
          <p className="p_3 font-normal">
            #198, 1st Cross, Shirdi Sai Nagar, R K Hegde Nagar, Bangalore,
            Karnataka, India 560077
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

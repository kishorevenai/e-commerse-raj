import React from "react";
import { useState } from "react";
import PrimaryButton from "../../component/Buttons/PrimaryButton";
import { Link } from "react-router-dom";
import { useLoginMutation } from "./AuthApiSlice";
import { useNavigate } from "react-router-dom";

const AccountLogin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  //   ---------------Slices----------------------
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();

  const handle_submit_login = async () => {
    try {
      await login({
        email,
        password,
      }).unwrap();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-2 make_center border-black">
      <form
        onSubmit={handle_submit_login}
        className="w-[500px] py-5 rounded-[30px] shadow-lg my-5 border border-black"
      >
        <p className="p_0 text-center font-normal">Account Login</p>
        <p className="text-center font-normal">
          Please Enter the details of your account
        </p>

        <div className="make_row_between mt-5 h-[150px]">
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="h-[50px] w-10/12 border-2 border-black rounded-xl pl-2 p_2"
          />
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="h-[50px] w-10/12 border-2 border-black rounded-xl pl-2 p_2"
          />
        </div>
        <PrimaryButton
          className={"duration-150 border-2 w-5/12 mx-auto mt-5 hover:bg-sclr"}
          content={"Login"}
        />
        <p className="p_2 font-normal w-10/12 mx-auto mt-5 text_center make_between">
          Dont have an account?{" "}
          <Link to={"/Account Signup"}>
            <p className="p_2 font-normal text-sclr">Sign Up</p>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default AccountLogin;

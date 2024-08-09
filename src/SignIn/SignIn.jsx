import React, { useContext, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "@/context/UserContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // navigate("/user");
    if (email && password) {
      navigate("/overview");
      setUser(true);
    }
    // console.log(email);
  };
  const { setUser } = useContext(UserContext);
  const isEmailError = isSubmitted && !email;
  const isPasswordError = isSubmitted && !password;
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className=" w-[340px] h-[394px] bg-[#fff] py-[24px] px-5 rounded-[8px]">
        <form onSubmit={handleSubmit}>
          <h1 className="text-[#00263E] text-3xl font-semibold ">Sign In</h1>

          <p className="text-[#00263E] text-[14px] mt-[20px]">Email</p>
          <div
            className={`flex items-center h-[49px] border ${
              isEmailError ? "border-red-500" : "border-[#DADCE0]"
            } bg-[#fafafa] px-[16px] py-[16px] rounded-[8px] focus-within:border-green-500`}
          >
            <MdOutlineMail />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" flex-1 outline-none px-2 bg-transparent"
            />
          </div>
          <div className="h-[24px]">
            {isEmailError && (
              <p className="text-red-500  text-[12px] flex items-center gap-[8px]">
                <span className="w-[12px] h-[12px] text-[10px] rounded-[50%] flex items-center justify-center text-[#fff] bg-red-500">
                  !
                </span>
                Enter an email address
              </p>
            )}
          </div>
          <p className="text-[#00263E] text-[14px] mt-[5px]">Password</p>
          <div
            className={`flex items-center h-[49px] border ${
              isPasswordError ? "border-red-500" : "border-[#DADCE0]"
            } bg-[#fafafa] px-[16px] py-[16px] rounded-[8px] focus-within:border-green-500`}
          >
            <CiLock />
            <input
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className=" flex-1 outline-none px-2 bg-transparent"
            />
            <Link
              className="text-[#72849A80] text-[12px]"
              onClick={() => setShow(!show)}
            >
              {show ? "Hide" : "Show"}
            </Link>
          </div>
          <div className="h-[24px]">
            {isPasswordError && (
              <p className="text-red-500  text-[12px] flex items-center gap-[8px]">
                <span className="w-[12px] h-[12px] text-[10px] rounded-[50%] flex items-center justify-center text-[#fff] bg-red-500">
                  !
                </span>
                Plese enter password
              </p>
            )}
          </div>
          <Link to="/ForgotPassword">
            <p className=" text-[#00263E] text-center mt-[10px] underline">
              Forgot your Password?
            </p>
          </Link>
          <button
            type="submit"
            className=" w-[100%] h-[50px] bg-[#00263E] text-[#fff] rounded-[8px] mt-[10px] font-[500]"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

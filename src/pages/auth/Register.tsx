import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../api/userAPI";

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const registerUser = () => {
    createUser({ userName, email, password }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <div className="w-[400px] border rounded-md p-3 ">
        <div className="my-8 font-bold uppercase ">Register</div>
        <hr />
        <div className="my-4">
          <div className="text-[12px] font-[400]">user name</div>
          <input
            className="border w-full rounded-sm py-2 pl-2  "
            placeholder="userName"
            value={userName}
            onChange={(e: any) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="my-4">
          <div className="text-[12px] font-[400]">email</div>
          <input
            className="border w-full rounded-sm py-2 pl-2  "
            placeholder="email"
            value={email}
            onChange={(e: any) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="my-4">
          <div className="text-[12px] font-[400]">password</div>
          <input
            className="border w-full rounded-sm py-2 pl-2  "
            placeholder="password"
            value={password}
            onChange={(e: any) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="my-4">
          <button
            className="text-[18px] font-[400] w-full bg-purple-600 text-white py-3 rounded-sm "
            onClick={registerUser}
          >
            Register
          </button>
        </div>
        <div>
          <div className="flex justify-center text-[12px] ">
            Already have an Account,{" "}
            <Link to="/login" className="font-bold ml-1 capitalize">
              login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

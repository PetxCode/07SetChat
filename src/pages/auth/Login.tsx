import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../../api/userAPI";
import { login } from "../../global/reduxState";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const logInUser = () => {
    signInUser({ email, password }).then((res: any) => {
      console.log(res);
      dispatch(login(res.data));
      navigate("/");
    });
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <div className="w-[400px] border rounded-md p-3 ">
        <div className="my-8 font-bold uppercase ">Login</div>
        <hr />

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
            onClick={logInUser}
          >
            Login
          </button>
        </div>
        <div>
          <div className="flex justify-center text-[12px] ">
            Don't have an Account,{" "}
            <Link to="/register" className="font-bold ml-1 capitalize">
              register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

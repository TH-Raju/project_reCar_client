import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../hooks/useToken";
import { AuthContext } from "./context/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [visible, setVisible] = useState(false);
  const { signIn, googleProviderLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");

  const [token] = useToken(loginUserEmail);
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password, data.role)
      .then((result) => {
        toast.success("Log in Successful.");
        navigate("/");
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleProviderLogin(googleProvider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  let dataType = "";
  if (visible) {
    dataType = "text";
  } else {
    dataType = "password";
  }

  return (
    <div className="max-h-screen py-20">
      <div className=" flex justify-center items-center  ">
        <div className="w-96 p-7 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
          <h2 className="text-4xl font-bold text-center">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">
                  Email <span className="text-red-600">*</span>
                </span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs ">
              <label className="label">
                {" "}
                <span className="label-text">
                  Password <span className="text-red-600">*</span>
                </span>
              </label>
              <div className="relative ">
                <input
                  type={dataType}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                <span className="right-0 absolute inset-y-0 end-0 grid place-content-center px-4">
                  <button onClick={() => setVisible(!visible)} type="button">
                    {visible ? (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </span>
              </div>

              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <input
              className="btn btn-accent w-full mt-6 btn-sm"
              value="Login"
              type="submit"
            />
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
          </form>
          <p className="text-sm mt-4">
            New to ReCar?{" "}
            <Link className="text-secondary underline text-xs" to="/register">
              Create new Account
            </Link>
          </p>
          <div className="divider text-sm">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full btn-sm"
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

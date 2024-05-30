import "./Login.css";
import img from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
  
  const {signIn} = useContext(AuthContext);
  const location = useLocation();
  console.log(location)
  const navigate = useNavigate();
  
  const captchaRef = useRef(null);
  //   const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const captcha = captchaRef.current.value;
    // validation of captcha
    if (validateCaptcha(captcha)) {
      //   setDisabled(false);
    } else {
      //   setDisabled(true);
      return alert("Incorrect Captcha");
    }
    // console.log(email, password);

    signIn(email,password)
    .then(result=>{
      const user = result.user;
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500
      });
      {
        location?.state ? navigate(location.state) : navigate("/")
      }
      // console.log(user)
    })
    .catch(error=>{
      console.log(error.message)
    })
  };

  //   const handleVelidate = (e) => {
  //     const captcha = captchaRef.current.value;
  //     // console.log(captcha)
  //     if (validateCaptcha(captcha)) {
  //       setDisabled(false);
  //     } else {
  //       setDisabled(true);
  //     // return alert("Incorrect Captcha")
  //     }
  //   };
  return (
    <div className="hero h-[100vh]  login">
      <div className="hero-content flex-col lg:flex-row justify-between  w-full lg:py-16 lg:px-20 border-2 login-body">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        {/* <div className="card shrink-0 w-full lg:w-2/3 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div> */}
        <div className=" shrink-0 w-full lg:w-2/3 max-w-sm  ">
          <form onSubmit={handleLogin} className="card-body  ">
            <div>
              <p className="text-3xl font-bold text-center">Login</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="type captcha here"
                className="input input-bordered"
                required
              />

              {/* <button
                onClick={handleVelidate}
                className="btn btn-outline btn-xs mt-4"
              >
                Validate
              </button> */}
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-4">
              <input
                // disabled={disabled}
                className="btn bg-[#D1A054B3] text-white hover:bg-gray-900"
                type="submit"
                value={"Login"}
              />
              {/* <button
                disabled={disabled}
                className="btn bg-[#D1A054B3] text-white hover:bg-gray-900"
              >
                Login
              </button> */}
            </div>
          </form>
          <div className="px-8 text-center">
            <p className="font-semibold">New Here? <Link to="/register" className="text-amber-400">Create an account</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

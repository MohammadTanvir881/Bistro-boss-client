import "./Register.css";
import img from "../../assets/others/authentication2.png";

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name, data.photo)
        .then(() => {
          console.log(result.user);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "user Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch(error=>{
          console.log(error.message)
        })
       
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //   const handleRegister = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const name = form.name.value;
  //     const email = form.email.value;
  //     const password = form.password.value;
  //     console.log(name, email, password);

  //     // console.log(email, password);
  //   };
  return (
    <div className="hero h-[100vh]  login">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between  w-full lg:py-10 lg:px-20 border-2 login-body">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>

        <div className=" shrink-0 w-full lg:w-2/3 max-w-sm  ">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body  ">
            <div>
              <p className="text-3xl font-bold text-center">Register Now</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">PhotoURL</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-500">PhotoURL is required</span>
              )}
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
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">email is required</span>
              )}
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
              />
              {/* {errors.password && (
                <span className="text-red-500">Password is required</span>
              )} */}
              {errors.password?.type === "minLength" && (
                <span className="text-red-500">
                  Password must be 6 character
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-500">
                  Password should smaller than 20 character
                </span>
              )}
              {errors.password?.type === "pattern" && (
                <span className="text-red-500">
                  Password must contain one uppercase , one lowercase one
                  special character and one number
                </span>
              )}
            </div>

            <div className="form-control mt-4">
              <input
                className="btn bg-[#D1A054B3] text-white hover:bg-gray-900"
                type="submit"
                value={"Register"}
              />
            </div>
          </form>
          <div className="px-8 text-center">
            <p className="font-semibold">
              Already Have Account?{" "}
              <Link to="/login" className="text-amber-400">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

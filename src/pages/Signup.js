import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../components/style.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object({
  firstName: Yup.string()
    .required("First Name is required")
    .matches(
      /^[a-zA-Z]+$/,
      "Number and special characters are not allowed here..."
    )
    .min(4, "minimum 4 characters")
    .max(10, "max length is 10 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .matches(
      /^[a-zA-Z]+$/,
      "Number and special characters are not allowed here..."
    )
    .min(4, "minimum 4 characters")
    .max(10, "max length is 10 characters"),
  designation: Yup.string()
    .required("Designation is required")
    .matches(
      /^[a-zA-Z]+$/,
      "Number and special characters are not allowed here..."
    )
    .min(4, "minimum 4 characters")
    .max(10, "max length is 10 characters"),
  city: Yup.string()
    .required("City name is required")
    .matches(
      /^[a-zA-Z]+$/,
      "Number and special characters are not allowed here..."
    )
    .min(4, "minimum 4 characters")
    .max(10, "max length is 10 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  // password: Yup.string()
  //     .required('Password is a required field')
  //     // .min('Password length should be at least 4 characters')
  //     .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'),
  // confirmPassword: Yup.string()
  //     .required('Confirm password is a required field')
  //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //     .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'),
  phone: Yup.string()
    .required("Phone number is a required field")
    .matches(
      /[0-9]/,
      "Phone number contain at least 11 characters only number allowed"
    )
    .min(11, "minimum 11 characters")
    .max(11, "max length is 11 numbers"),
    gender: Yup.string()
    .required("Please choose your gender")
    
}).required();

const Signup = (props) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data, "data");

  return (
    <div className="col-md-6 grid place-content-center vh-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row p-4 p-md-0">
          <h3 className="mb-3 text-uppercase text-center">Signup Form</h3>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              {...register("firstName")}
              className={`form-control position-relative ${
                errors?.firstName && "border-danger"
              }`}
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">First Name</label>
            {errors?.firstName && (
              <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
            )}
            {errors?.firstName?.message && (
              <p className="text-danger">{errors?.firstName?.message}</p>
            )}
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              {...register("lastName")}
              className={`form-control position-relative ${
                errors?.lastName && "border-danger"
              }`}
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Last Name</label>
            {errors?.lastName && (
              <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
            )}
            <p className="text-danger">{errors?.lastName?.message}</p>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              {...register("designation")}
              className={`form-control position-relative ${
                errors?.designation && "border-danger"
              }`}
              id="floatingPassword"
              placeholder="designation"
            />
            <label for="floatingPassword">Designation</label>
            {errors?.designation && (
              <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
            )}
            <p className="text-danger">{errors?.designation?.message}</p>
          </div>
          <div className="form-floating mb-3 col-md-6">
            <input
              type="text"
              {...register("city")}
              className={`form-control position-relative ${
                errors?.city && "border-danger"
              }`}
              id="floatingPassword"
              placeholder="city"
            />
            <label for="floatingPassword">City</label>
            {errors?.city && (
              <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
            )}
            <p className="text-danger">{errors?.city?.message}</p>
          </div>
          <div className="form-floating w-100 mb-3">
            <input
              type="email"
              {...register("email")}
              className={`form-control position-relative ${
                errors?.email && "border-danger"
              }`}
              id="floatingPassword"
              placeholder="email"
              autoComplete="off"
            />
            <label for="floatingPassword">Email</label>
            {errors?.email && (
              <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
            )}
            <p className="text-danger">{errors?.email?.message}</p>
          </div>
          <div className="form-floating w-100 mb-3">
            <input
              type="number"
              {...register("phone")}
              className={`form-control position-relative ${
                errors?.phone && "border-danger"
              }`}
              id="floatingPassword"
              placeholder="phone"
              autoComplete="off"
            />
            <label for="floatingPassword">Phone No...</label>
            {errors?.phone && (
              <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
            )}
            <p className="text-danger">{errors?.phone?.message}</p>
          </div>
          <div
            className={`gender mb-3 position-relative form-control ${
              errors?.gender && "border-danger border"
            }`}
          >
            <label className="me-4">Gender</label>
            <input
              className="form-check-input me-3"
              type="radio"
              name="radioNoLabel"
              id="male"
              value='male'
              {...register("gender", { required: {
                  value: true,
              } })}
            />
            <label htmlFor="male" className="me-4">
              Male
            </label>
            <input
              className="form-check-input me-3"
              type="radio"
              name="radioNoLabel"
              id="female"
              value='female'
              {...register("gender", { required: {
                  value: true,
              } })}
            />
            <label htmlFor="female">
              Female
            </label>
            {errors?.gender && (
              <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
            )}
            <p className="text-danger mb-0">{errors?.gender?.message}</p>
          </div>
          {/* <div className="form-floating w-100 ps-0">
                        <input type="text" {...register("password")} className={`form-control position-relative ${errors?.password && 'border-danger'}`} id="floatingPassword" placeholder="Password" autoComplete="off" />
                        <label for="floatingPassword">Password</label>
                        {errors?.password && <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>}
                        <p className='text-danger'>{errors?.password?.message}</p>
                    </div>
                    <div className="form-floating w-100 ps-0">
                        <input type="text" {...register("confirmPassword")} className={`form-control position-relative ${errors?.confirmPassword && 'border-danger'}`} id="floatingPassword" placeholder="Password" autoComplete="off" />
                        <label for="floatingPassword">Confirm Password</label>
                        {errors?.confirmPassword && <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>}
                        <p className='text-danger'>{errors?.confirmPassword?.message}</p>
                    </div> */}
          <button
            type="submit"
            className="btn btn-primary col-2 ms-3 px-1 py-2"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;

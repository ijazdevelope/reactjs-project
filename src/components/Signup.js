import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { TextField } from "./text-field";
import Buttton from "./button/Buttton";

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
    // .matches(
    //   /^[a-zA-Z]+$/,
    //   "Number and special characters are not allowed here..."
    // )
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
          <div className="col-md-6">
            <TextField
              name='firstName'
              type='text'
              placeholder='first name...'
              label='First Name'
              errorMsg={errors?.firstName?.message}
              register={register}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name='lastName'
              type='text'
              placeholder='last name'
              label='Last Name'
              errorMsg={errors?.lastName?.message}
              register={register}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name='designation'
              type='text'
              placeholder='designation'
              label='Designation'
              errorMsg={errors?.designation?.message}
              register={register}
            />
          </div>
          <div className="col-md-6">
            <TextField
              name='city'
              type='text'
              placeholder='city'
              label='City'
              errorMsg={errors?.city?.message}
              register={register}
            />
          </div>
          <div className="w-100">
            <TextField
              name='email'
              type='email'
              placeholder='email'
              label='Email'
              errorMsg={errors?.email?.message}
              register={register}
            />
          </div>
          <div className="w-100">
            <TextField
              name='phone'
              type='number'
              placeholder='phone'
              label='Phone'
              errorMsg={errors?.phone?.message}
              register={register}
            />
          </div>
          <div
            className={`gender mb-3 position-relative form-control ${errors?.gender && "border-danger border"
              }`}
          >
            <label className="me-4">Gender</label>
            <input
              className="form-check-input me-3"
              type="radio"
              name="radioNoLabel"
              id="male"
              value='male'
              {...register("gender", {
                required: {
                  value: true,
                }
              })}
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
              {...register("gender", {
                required: {
                  value: true,
                }
              })}
            />
            <label htmlFor="female">
              Female
            </label>
            {errors?.gender && (
              <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
            )}
            <p className="text-danger mb-0">{errors?.gender?.message}</p>
          </div>
          <Buttton
            text='Sign Up'
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;

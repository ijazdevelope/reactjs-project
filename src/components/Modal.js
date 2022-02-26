import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import './Modal.css';
import CustomModal from "./CustomModal";
import { TextField } from "./text-field";

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
    .min(4, "minimum 4 characters"),
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
  phone: Yup.string()
    .required("Phone number is a required field")
    .matches(
      /[0-9]/,
      "Phone number contain at least 11 characters only number allowed"
    )
    .min(11, "minimum 11 characters")
    .max(11, "max length is 11 numbers"),
  gender: Yup.string().required("Please choose your gender"),
}).required();

function Modal({ openModal, closeModal }) {
  console.log(openModal, 'openModal in Modal.js');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (items) => {
    console.log("data333");
  };
  return (
    <>
      <CustomModal
        openModal={openModal}
        closeModal={closeModal}
      >
        {/* <button onClick={closeModal} className='position-absolute right-5 top-3' >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> */}
        <div className="grid place-content-center p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row p-4 p-md-0 text-left">
              <h3 className="mb-3 text-uppercase text-center text-primary">Employees Details</h3>
              <div className="col-md-6">
                <TextField
                  name='firstName'
                  type='text'
                  placeholder='type your first name....'
                  label='First Name'
                />
                {/* {errors?.firstName && (
                  <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
                )}
                {errors?.firstName?.message && (
                  <p className="text-danger">{errors?.firstName?.message}</p>
                )} */}
              </div>
              <div className="col-md-6">
                <TextField
                  name='lastName'
                  type='text'
                  placeholder='type your last name...'
                  label='Last Name'
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name='designation'
                  type='text'
                  placeholder='type your designation...'
                  label='Designation'
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name='city'
                  type='text'
                  placeholder='your city...'
                  label='City'
                />
              </div>
              <div className="w-100">
                <TextField
                  name='email'
                  type='email'
                  placeholder='type your email...'
                  label='Email'
                />
              </div>
              <div className="w-100">
                <TextField
                  name='phone'
                  type='number'
                  placeholder='your phone...'
                  label='Phone'
                />
              </div>
              <div className="mb-3 position-relative">
                <label className="me-4">Gender</label>
                <input
                  className="form-check-input me-3"
                  type="radio"
                  name="radioNoLabel"
                  id="male"
                  value="male"
                  {...register("gender", {
                    required: {
                      value: true,
                    },
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
                  value="female"
                  {...register("gender", {
                    required: {
                      value: true,
                    },
                  })}
                />
                <label htmlFor="female">Female</label>
                {errors?.gender && (
                  <i className="bi bi-x-lg position-absolute top-4 right-5 text-danger"></i>
                )}
                <p className="text-danger mb-0">{errors?.gender?.message}</p>
              </div>
              <button type="submit" className="btn btn-primary col col-sm-2 col-md-3 px-1 py-2 ms-2">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
    </>
  );
}

export default Modal;

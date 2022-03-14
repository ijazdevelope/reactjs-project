import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import './Modal.css';
import CustomModal from "./CustomModal";
import { TextField } from "./text-field";
import Buttton from "./button/Buttton";
import { useDispatch } from "react-redux";
import { employeeListAction } from "../redux/actions/Actions";

const Modal = ({ openModal, closeModal, data }) => {
  const dispatch = useDispatch();

  // console.log(data);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    let localStorageValue = JSON.parse(localStorage.getItem('employeeDataList'));

    if (localStorageValue?.length > 0) {
      localStorageValue?.push(data);
      console.log(localStorageValue, 'localStorageValue');
      dispatch(employeeListAction(localStorageValue));
      localStorage.setItem('employeeDataList', JSON.stringify([...localStorageValue]));
    } else {
      localStorage.setItem('employeeDataList', JSON.stringify([data]));
      dispatch(employeeListAction([data]))
    }
  };
  // useEffect(() => {
  //   console.log('useEffect')
  //   const url = 'https://jsonplaceholder.typicode.com/posts';

  //   axios.post(url)
  //     .then((response) => { console.log(response) })
  //     .catch((error) => alert(error));
  // })
  return (
    <>
      <CustomModal
        openModal={openModal}
        closeModal={closeModal}
      >
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
                  // errors={errors?.firstName}
                  errorMsg={errors?.firstName?.message}
                  register={register}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name='lastName'
                  type='text'
                  placeholder='type your last name...'
                  label='Last Name'
                  errorMsg={errors?.lastName?.message}
                  register={register}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name='designation'
                  type='text'
                  placeholder='type your designation...'
                  label='Designation'
                  errorMsg={errors?.designation?.message}
                  register={register}
                />
              </div>
              <div className="col-md-6">
                <TextField
                  name='city'
                  type='text'
                  placeholder='your city...'
                  label='City'
                  errorMsg={errors?.city?.message}
                  register={register}
                />
              </div>
              <div className="w-100">
                <TextField
                  name='email'
                  type='email'
                  placeholder='type your email...'
                  label='Email'
                  errorMsg={errors?.email?.message}
                  register={register}
                />
              </div>
              <div className="w-100">
                <TextField
                  name='phone'
                  type='number'
                  placeholder='your phone...'
                  label='Phone'
                  errorMsg={errors?.phone?.message}
                  register={register}
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
              <Buttton
                text='Sign Up'
              />
            </div>
          </form>
        </div>
      </CustomModal>
    </>
  );
}

export default Modal;

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
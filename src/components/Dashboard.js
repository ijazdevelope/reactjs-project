import React, { useState } from "react";
import Navbar from "./Navbar";
import "./style.css";
// import MyChart from "./MyChart";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
import Modal from "./Modal";

// const schema = Yup.object({
//   firstName: Yup.string()
//     .required("First Name is required")
//     .matches(
//       /^[a-zA-Z]+$/,
//       "Number and special characters are not allowed here..."
//     )
//     .min(4, "minimum 4 characters")
//     .max(10, "max length is 10 characters"),
//   lastName: Yup.string()
//     .required("Last Name is required")
//     .matches(
//       /^[a-zA-Z]+$/,
//       "Number and special characters are not allowed here..."
//     )
//     .min(4, "minimum 4 characters")
//     .max(10, "max length is 10 characters"),
//   designation: Yup.string()
//     .required("Designation is required")
//     .min(4, "minimum 4 characters"),
//   city: Yup.string()
//     .required("City name is required")
//     .matches(
//       /^[a-zA-Z]+$/,
//       "Number and special characters are not allowed here..."
//     )
//     .min(4, "minimum 4 characters")
//     .max(10, "max length is 10 characters"),
//   email: Yup.string()
//     .required("Email is required")
//     .email("Invalid email format"),
//   phone: Yup.string()
//     .required("Phone number is a required field")
//     .matches(
//       /[0-9]/,
//       "Phone number contain at least 11 characters only number allowed"
//     )
//     .min(11, "minimum 11 characters")
//     .max(11, "max length is 11 numbers"),
//   gender: Yup.string().required("Please choose your gender"),
// }).required();

const Dashboard = () => {
  const [array, setArray] = useState([]);
  console.log(array, 'array');
  // custom modal start  
  const [openCustomModal, setOpenCustomModal] = useState(false);
  console.log(openCustomModal, 'openCustomModal in dashboard');
  // custom modal end  

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(schema),
  //   });
  //   const onSubmit = (items) => {
  //     data.push(items);
  //     console.log(data, "data333");
  //   };

  return (
    <div className="w-100">
      <div>
        <Navbar />
      </div>
      <div className="text-center text-primary w-100 h-50">
        <h3 className="mt-2 mb-3">Employees Table</h3>
        {/* <MyChart /> */}
        {/* Modal Form input fields started */}
        {/* <div className="grid place-content-center p-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row p-4 p-md-0 text-left">
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
              <button type="submit" className="btn btn-primary col-2 px-1 py-2">
                Sign Up
              </button>
            </div>
          </form>
        </div> */}
        {/* Modal Form input fields end */}
        <div className="container-fluid">
          <button
            type="submit"
            className="btn btn-primary mb-3 px-1 py-2 d-block"
          >
            Add Employees
          </button>
          <button
            type="submit"
            className="btn btn-primary mb-3 px-1 py-2 d-block"
            onClick={() => setOpenCustomModal(true)}
          >
            Open Custom Modal
          </button>
          {/* set modal start */}
          <Modal openModal={openCustomModal} closeModal={() => setOpenCustomModal(false)} />
          {/* set modal end */}
          <table className="table table-striped table-hover border mb-0">
            <thead className="bg-light">
              <th className="p-3">#</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Designation</th>
              <th className="p-3">City</th>
              <th className="p-3">Phone No</th>
              <th className="p-3">Gender</th>
            </thead>
            <tbody>
              {array?.length === 0 ? (
                <tr>
                  <td colSpan="8" className="fs-1 py-5">
                    Employees Not Found!
                  </td>
                </tr>
              ) : (
                array?.map((employess, index) => {
                  index++;
                  const {
                    firstName,
                    lastName,
                    email,
                    city,
                    designation,
                    phone,
                    gender,
                  } = employess; // object destructuring
                  return (
                    <tr>
                      <td className="text-capitalize font-bold">{index}</td>
                      <td className="text-capitalize">{firstName}</td>
                      <td className="text-capitalize">{lastName}</td>
                      <td className="text-capitalize">{email}</td>
                      <td className="text-capitalize">{designation}</td>
                      <td className="text-capitalize">{city}</td>
                      <td className="text-capitalize">{phone}</td>
                      <td className="text-capitalize">{gender}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

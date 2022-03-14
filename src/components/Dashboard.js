import React, { useState } from "react";
import Navbar from "./Navbar";
import "./style.css";
// import MyChart from "./MyChart";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as Yup from "yup";
import Modal from "./Modal";
import { useSelector } from "react-redux";

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
  const state = useSelector(state => state.reducer);
  console.log(state);
  const [array, setArray] = useState([]);
  // console.log(array, 'array');
  // custom modal start  
  const [openCustomModal, setOpenCustomModal] = useState(false);
  // console.log(openCustomModal, 'openCustomModal in dashboard');
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
  const [data, setData] = useState([]);
  // console.log(data, 'data in parent')
  return (
    <div className="w-100">
      <div>
        <Navbar />
      </div>
      <div className="text-center text-primary w-100 h-50">
        <h3 className="mt-2 mb-3">Employees Table</h3>

        <div className="container-fluid">
          <button
            type="submit"
            className="btn btn-primary mb-3 px-1 py-2 d-block"
            onClick={() => setOpenCustomModal(true)}
          >
            Open Custom Modal
          </button>
          {/* set modal start */}
          <Modal data='my data' openModal={openCustomModal} closeModal={() => setOpenCustomModal(false)} />
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

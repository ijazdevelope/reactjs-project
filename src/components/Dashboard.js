import React, { useState } from "react";
import Navbar from "./Navbar";
import "./style.css";
import Modal from "./Modal";
import { useSelector } from "react-redux";


const Dashboard = () => {
  const state = useSelector(state => state.reducer);
  console.log(state?.employeeData, 'global state');
  const [array, setArray] = useState([]);

  // custom modal start  
  const [openCustomModal, setOpenCustomModal] = useState(false);
  // custom modal end


  const {employeeData} = state;
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
              {employeeData?.length === 0 ? (
                <tr>
                  <td colSpan="8" className="fs-1 py-5">
                    Employees Not Found!
                  </td>
                </tr>
              ) : (
                employeeData?.map((employess, index) => {
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

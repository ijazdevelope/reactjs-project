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
  const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z" /></svg>;

  const editIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z" /></svg>;


  const { employeeData } = state;
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
              <th className="p-3">Actions</th>
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
                      <td className="text-capitalize align-middle font-bold">{index}</td>
                      <td className="text-capitalize align-middle">{firstName}</td>
                      <td className="text-capitalize align-middle">{lastName}</td>
                      <td className="text-capitalize align-middle">{email}</td>
                      <td className="text-capitalize align-middle">{designation}</td>
                      <td className="text-capitalize align-middle">{city}</td>
                      <td className="text-capitalize align-middle">{phone}</td>
                      <td className="text-capitalize align-middle">{gender}</td>
                      <td className="text-capitalize align-middle d-flex justify-content-center align-items-center">
                        <span className="w-25 h-25 d-block pb-1 me-3"> {deleteIcon} </span>
                        <span className="w-25 h-25 d-block pb-1"> {editIcon} </span>
                      </td>
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

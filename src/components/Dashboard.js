import React, { useState } from "react";
import Navbar from "./Navbar";
import "./style.css";
import Modal from "./Modal";
import EmployeesTable from './table/EmployeesTable';


const Dashboard = () => {

  const [openCustomModal, setOpenCustomModal] = useState(false);
  const [rowData, setRowData] = useState({});
  const [updateData, setUpdateData] = useState(false);
  
  // function handleChange() {
    //   setUpdateData(!updateData);
    // }
    
    return (
      <div className="w-100">
      {updateData && alert('state true in parent') }
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
          {openCustomModal &&
            <Modal rowData={rowData} openModal={openCustomModal} closeModal={() => setOpenCustomModal(false)} />
          }
          {/* set modal end */}
          <EmployeesTable setOpenCustomModal={setOpenCustomModal} setRowData={setRowData} setUpdateData={ () => setUpdateData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

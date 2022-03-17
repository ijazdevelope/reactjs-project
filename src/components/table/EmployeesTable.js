import React from "react";
import { useSelector } from "react-redux";
import "./EmployeesTable.scss";
import editIcon from '../.././assets/images/edit.ico';
import deleteIcon from '../.././assets/images/trash.png';

const EmployeesTable = ({ setOpenCustomModal, setRowData, setUpdateData }) => {
  const state = useSelector((state) => state.reducer);
  const { employeeData } = state;

  const updateHandler = (employess) => {
    setOpenCustomModal(true);
    setRowData(employess);
  };
  
  return (
      <>
      {/* {onChange ? <h3>props true4545</h3> :""} */}
      {/* {setUpdateData && alert('state true in child') } */}
      <table className="table table-striped table-hover border mb-0">
        <thead className="bg-light">
          <th className="ps-2 p-3 text-start text-nowrap">#</th>
          <th className="ps-2 p-3 text-start text-nowrap">First Name</th>
          <th className="ps-2 p-3 text-start text-nowrap">Last Name</th>
          <th className="ps-2 p-3 text-start text-nowrap">Email</th>
          <th className="ps-2 p-3 text-start text-nowrap">Designation</th>
          <th className="ps-2 p-3 text-start text-nowrap">City</th>
          <th className="ps-2 p-3 text-start text-nowrap">Phone No</th>
          <th className="ps-2 p-3 text-start text-nowrap">Gender</th>
          <th className="ps-2 p-3 text-start text-nowrap">Actions</th>
        </thead>
        <tbody className="border-top">
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
                <tr className="align-middle" key={index}>
                  <td className="text-capitalize text-start border-0 text-nowrap font-bold">
                    {index}
                  </td>
                  <td className="text-capitalize text-start border-0 text-nowrap">
                    {firstName}
                  </td>
                  <td className="text-capitalize text-start border-0 text-nowrap">
                    {lastName}
                  </td>
                  <td className="text-capitalize text-start border-0 text-nowrap">
                    {email}
                  </td>
                  <td className="text-capitalize text-start border-0 text-nowrap">
                    {designation}
                  </td>
                  <td className="text-capitalize text-start border-0 text-nowrap">
                    {city}
                  </td>
                  <td className="text-capitalize text-start border-0 text-nowrap">
                    {phone}
                  </td>
                  <td className="text-capitalize text-start border-0 text-nowrap">
                    {gender}
                  </td>
                  <td className="text-capitalize text-start border-0 text-nowrap d-flex">
                      <img className='object-contain curso_pointer me-3' onClick={ () => updateHandler(employess)} src={editIcon} alt="edit_image" />
                      <img className='object-contain curso_pointer' src={deleteIcon} alt="delete_image" />
                 
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
};

export default EmployeesTable;

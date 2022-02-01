import React from "react";
import Navbar from "./Navbar";
// import MyChart from "./MyChart";

const Dashboard = () => {
  return (
    <div className="w-100">
      <div>
        <Navbar />
      </div>
      <div className="text-center text-primary w-100 h-50">
        <h3 className='mt-2 mb-3'>Employees Table</h3>
        {/* <MyChart /> */}
        <table class="table table-striped table-hover">
            <thead>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Designation</th>
                <th>City</th>
                <th>Email</th>
                <th>Phone No</th>
            </thead>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;

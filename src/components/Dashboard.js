import React from "react";
import Navbar from "./Navbar";
import MyChart from "./MyChart";

const Dashboard = () => {
  return (
    <div className="w-100">
      <div>
        <Navbar />
      </div>
      <div className="text-center fs-1 text-primary w-100 h-50">
        <h1>Doughnut Chart</h1>
        <MyChart />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="w-100">
        <Navbar />
      </div>
      <div className="w-100 d-flex justify-content-between p-3">
        <h2 className="text-center">Home</h2>
        <button type="button" className="btn btn-danger">
          Logout
        </button>
      </div>
    </>
  );
}

export default Home;

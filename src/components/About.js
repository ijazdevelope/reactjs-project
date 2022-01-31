import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <div className="w-100">
        <Navbar />
      </div>
      <div className="w-100 d-flex justify-content-between p-3">
        <h2 className="text-center">About</h2>
        <button type="button" className="btn btn-danger">
          Logout
        </button>
      </div>
    </>
  );
}

export default About;

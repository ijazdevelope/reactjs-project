import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
    return (
        <div className='w-100'>
            <div>
                <Navbar />
            </div>
            <div className='text-center fs-1 text-primary'>
                My Dashboard
            </div>
        </div>
    )
}

export default Dashboard;
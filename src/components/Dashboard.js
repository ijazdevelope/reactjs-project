import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
    return (
        <div className='w-100'>
            <div>
                <Navbar />
            </div>
            <div className='text-center'>
                My Dashboard
            </div>
        </div>
    )
}

export default Dashboard;
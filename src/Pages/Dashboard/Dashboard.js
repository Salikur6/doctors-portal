import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}

                <div className='my-20'>
                    <h2 className='text-3xl font-bold text-purple-600'>Welcome to your Dashboard</h2>
                    <Outlet />

                </div>





            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">

                    <li><Link to='/dashboard/'>My Appointments</Link></li>
                    <li><Link to='/dashboard/review'>My Reviews</Link></li>
                    <li><Link to='/dashboard/myhistory'>My History</Link></li>
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../components/context/AuthProvider";
import Navbar from "../components/Shared/Navbar";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100">
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content  md:ml-8 ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 bg-gray-200 lg:rounded-xl  text-base-content">
            <li className="hover:bg-slate-300 block hover:rounded-sm text-lg font-bold ">
              <Link to="/dashboard">My Orders</Link>
            </li>

            {(isSeller || isAdmin) && (
              <>
                <li className="hover:bg-slate-300 hover:rounded-sm text-lg font-bold ">
                  <Link to="/dashboard/myproduct">My Product</Link>
                </li>
                <li className="hover:bg-slate-300 hover:rounded-sm text-lg font-bold ">
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="hover:bg-slate-300 hover:rounded-sm text-lg font-bold ">
                  <Link to="/dashboard/addcategoriy">Add Categoriy</Link>
                </li>
                <li className="hover:bg-slate-300 hover:rounded-sm text-lg font-bold ">
                  <Link to="/dashboard/alluser">All User</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

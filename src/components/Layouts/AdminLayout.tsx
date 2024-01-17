import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="bg-purple-500 flex-[1] h-screen">
        <Sidebar />
      </div>

      <div className="bg-white flex-[5] text-center">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;

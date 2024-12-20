import Navbar from "@/components/custom/NavBar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
    <Navbar/>
    <h1 className="text-5xl text-center font-bold pt-28">Default Layout</h1>
      <Outlet />
    </>
  );
};

export default DefaultLayout;

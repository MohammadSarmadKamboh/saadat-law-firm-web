import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
    <h1 className="text-5xl text-center font-bold">Default Layout</h1>
      <Outlet />
    </>
  );
};

export default DefaultLayout;

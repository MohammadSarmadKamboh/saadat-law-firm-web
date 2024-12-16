import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
    <h1 className="text-5xl text-center font-bold">Sarmad</h1>
    {console.log("Sarmad")}
      <Outlet />
    </>
  );
};

export default DefaultLayout;

import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
}

export default AppLayout;

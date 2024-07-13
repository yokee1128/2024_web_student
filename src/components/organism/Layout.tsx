import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate("/mainpage")}>연우가</div>
      <div onClick={() => navigate("/attendance_check")}>영진님</div>
      <div onClick={() => navigate("/students")}>동기님</div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

import { ROUTE } from "@/shared/constants/route";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages";
import { AuthLayout } from "@/shared/layout/auth/authLayout";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={ROUTE.LOGIN} element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

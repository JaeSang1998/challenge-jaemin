import React, { Suspense } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import MenuDetailPage from "./pages/MenuDetailPage";
import OrderPage from "./pages/OrderPage";
import { ErrorBoundary } from "react-error-boundary";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants/:id" element={<RestaurantPage />} />
          <Route path="/menus/:menuId" element={<MenuDetailPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Layout = () => {
  const navigate = useNavigate();
  const onError = (error) => {
    if (errorService.isHandledError(error)) {
      switch (error.type) {
        case "UNAUTHORIZED":
          navigate("/login");
          break;
        case "FORBIDDEN":
          toast();
          break;
        default:
          break;
      }
    }
  };

  return (
    <ErrorBoundary onError={onError}>
      <Suspense fallback={<>loading...</>}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Router;

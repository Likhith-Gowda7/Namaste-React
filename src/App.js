import React from "react";
import ReactDOM from "react-dom/client";
import HeadComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppComponent = () => {
  return (
    <div className="app">
      <HeadComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      { path: "/", element: <BodyComponent /> },
      { path: "/about", element: <AboutComponent /> },
      { path: "/contact", element: <ContactComponent /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeadComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
//import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurntMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import GroceryComponent from "./components/Grocery";

const Grocery = lazy(() => import("./components/GroceryComponent"));

const AboutComponent = lazy(() => import("./components/AboutComponent"));

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
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <AboutComponent />
          </Suspense>
        ),
      },
      { path: "/contact", element: <ContactComponent /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

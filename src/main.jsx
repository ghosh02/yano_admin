import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import ForgotPassword from "./SignIn/ForgotPassword.jsx";
import ResetPasswordLink from "./SignIn/ResetPasswordLink.jsx";
import User from "./pages/User.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<User />} />
      {/* <Route path="" element={<SignIn />} /> */}
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/ResetPasswordLink" element={<ResetPasswordLink />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

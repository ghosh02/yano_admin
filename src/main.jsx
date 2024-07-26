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
import Settings from "./pages/Settings.jsx";
import ChangePassword from "./settings/ChangePassword.jsx";
import AdminList from "./settings/AdminList.jsx";
import CreateAdmin from "./settings/CreateAdmin.jsx";
import CreateUser from "./user/CreateUser.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<SignIn />} />
      <Route path="/user" element={<User />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/adminList" element={<AdminList />} />
      <Route path="/createAdmin" element={<CreateAdmin />} />
      <Route path="/createUser" element={<CreateUser />} />
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

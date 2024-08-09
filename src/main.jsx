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
import Overview from "./pages/Overview.jsx";
import CallCenter from "./pages/CallCenter.jsx";
import VideoCall from "./pages/VideoCall.jsx";
import UserDetail from "./pages/UserDetail.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import CalenderTwoSide from "./pages/CalenderTwoSide.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<SignIn />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/user" element={<User />} />
      <Route path="/callCenter" element={<CallCenter />} />
      <Route path="/videoCall" element={<VideoCall />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/settings/changePassword" element={<ChangePassword />} />
      <Route path="/settings/adminList" element={<AdminList />} />
      <Route path="/settings/adminList/createAdmin" element={<CreateAdmin />} />
      <Route path="/user/createUser" element={<CreateUser />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/ResetPasswordLink" element={<ResetPasswordLink />} />
      <Route path="/user/:userID" element={<UserDetail />} />
      <Route path="/calender" element={<CalenderTwoSide />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </UserContextProvider>
);

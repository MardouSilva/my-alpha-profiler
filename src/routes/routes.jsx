import { Routes, Route } from "react-router-dom";

import { Profile } from "../pages/EditProfile"
import { Home } from "../pages/Home"
import { Initial } from "../pages/Initial";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/editprofile" element={<Profile />} />
    </Routes>
  )
}
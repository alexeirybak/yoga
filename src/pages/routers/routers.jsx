import { Routes, Route } from "react-router-dom";
import { Main } from "../main/main";
import { Login } from "../login";
import Course from "../courses/course";
import Profile from "../profile/profile";
export const AppRoutes = () => {
    return (
    <>
    <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/course" element={<Course />} />
            <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
    );
  };
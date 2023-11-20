
import { Routes, Route } from "react-router-dom";
import { Main } from "../main/main";
import { Login } from "../login/login";
import Course from "../courses/course";
import Profile from "../profile/profile";
import {Register} from '../register/registration'
export const AppRoutes = () => {
    return (
    <>
    <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/course/:id" element={<Course />} />
            <Route path="/profile" element={<Profile />} />
    </Routes>
    </>
    );

  };
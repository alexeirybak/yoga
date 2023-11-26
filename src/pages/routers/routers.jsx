import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Main } from "../main/main";
import { Login } from "../login/login";

import { NotFound } from "../NotFound/not-found";
import { Course } from "../courses/course";
import { Profile } from "../profile/profile";
import { Register } from "../register/registration";
import { Trainings } from "../trainings/trainings";
import { ProtectedRoute } from "../../Components/ProtectedRoute/ProtectedRoute";
 
export const AppRoutes = () => {
  let user = useSelector((state) => state.user.userMail);

  if (!user) {
    user = localStorage.getItem("email");
  }

  const isAuthorized = user !== null;

  return (
    <>

      <Routes>
        <Route element={<ProtectedRoute isAllowed={isAuthorized} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/training/:id" element={<Trainings />} />
        </Route>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/course/:id" element={<Course />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
};

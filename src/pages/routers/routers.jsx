import { Routes, Route } from "react-router-dom";
import { Main } from "../main/main";
import { Login } from "../login";
import Course from "../courses/course";
import WorkoutSelect from "../../Components/WorkoutSelect/WorkoutSelect";
export const AppRoutes = () => {
    return (
    <>
    <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/course" element={<Course />} />
            <Route path="/tran" element={<WorkoutSelect />} />
    </Routes>
    </>
    );
  };
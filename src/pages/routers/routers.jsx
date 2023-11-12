import { Routes, Route } from "react-router-dom";
import { Main } from "../main/main";
import { Login } from "../login";
export const AppRoutes = () => {
    return (
    <>
    <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
    </Routes>
    </>
    );
  };
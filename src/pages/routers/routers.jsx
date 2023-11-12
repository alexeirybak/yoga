import { Routes, Route } from "react-router-dom";
import { Main } from "../main/main";
export const AppRoutes = () => {
    return (
    <>
    <Routes>
            <Route path="/" element={<Main />} />
    </Routes>
    </>
    );
  };
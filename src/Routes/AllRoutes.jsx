import { Route,Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />}/>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
    )
}
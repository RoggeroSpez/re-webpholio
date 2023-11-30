import {Routes, Route, Navigate} from "react-router-dom";
import Home from "../Pages/home";
import Projects from "../Pages/projects";
import Experience from "../Pages/experience";
import Refrences from "../Pages/refrences";

function AppRoute ()
{
  return (
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="../Pages/projects" element={<Projects />}/>
    <Route path="../Pages/experience" element={<Experience />}/>
    <Route path="../Pages/refrences" element={<Refrences/>}/>
    <Route path="*" element={<Navigate to={"/"} />}/>
    </Routes>
  );
}

export default AppRoute;
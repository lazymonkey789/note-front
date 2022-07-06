import { HashRouter, Route, Routes } from "react-router-dom";
import Alarm from "../route/alarm";
import Detail from "../route/detail";
import Home from "../route/home";
import Navi from "./Navgi";

const Approute = () => {
    return (
        <HashRouter>
            <Navi />
            <Routes>
                <Route path="" element={<Home />}></Route>
                <Route path="alarm" element={<Alarm />}></Route>
                <Route path="alarm/:id" element={<Detail />}></Route>
            </Routes>
        </HashRouter>
    );
};

export default Approute;

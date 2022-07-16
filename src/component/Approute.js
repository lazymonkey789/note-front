import { HashRouter, Route, Routes } from "react-router-dom";
import Alarm from "../route/alarm";
import Detail from "../route/detail";
import Home from "../route/home";
import Modify from "../route/Modify";
import New from "../route/new";
import Navi from "./Navgi";

const Approute = () => {
    return (
        <HashRouter>
            <Navi />
            <Routes>
                <Route path="" element={<Home />}></Route>
                <Route path="alarm" element={<Alarm />}></Route>
                <Route path="alarm/:id" element={<Detail />}></Route>
                <Route path="alarm/add" element={<New />}></Route>
                <Route path="alarm/modify/:id" element={<Modify />}></Route>
            </Routes>
        </HashRouter>
    );
};

export default Approute;

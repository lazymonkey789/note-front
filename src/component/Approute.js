import { HashRouter, Route, Routes } from "react-router-dom";
import Alarm from "../route/alarm";
import Detail from "../route/detail";
import Home from "../route/home";
import Modify from "../route/Modify";
import New from "../route/new";
import TestApi from "../route/TestApi";
import Navi from "./Navgi";

const Approute = () => {
    return (
        <div>
            <HashRouter>
                <Navi />
                <Routes>
                    <Route path="test" element={<TestApi />}></Route>
                </Routes>
                <Routes>
                    <Route path="" element={<Home />}></Route>
                    <Route path="alarm" element={<Alarm />}></Route>
                    <Route path="alarm/:id" element={<Detail />}></Route>
                    <Route path="alarm/add" element={<New />}></Route>
                    <Route path="alarm/modify/:id" element={<Modify />}></Route>
                </Routes>
            </HashRouter>
        </div>
    );
};

export default Approute;

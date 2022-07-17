import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alarmlist from "../component/alarmlist";

const Alarm = () => {
    const [Alarms, setAlarms] = useState([]);
    const axios = require("axios").default;
    const [Sel, setSel] = useState("검색");
    const [SearchInput, setSearchInput] = useState("");

    const getAlarms = async () => {
        const json = await axios.get("http://localhost:8080/detail-list");
        setAlarms(json.data);
    };

    useEffect(() => {
        getAlarms();
    }, []);
    const onSearchChange = (e) => {
        const {
            target: { value },
        } = e;
        setSearchInput(value);
    };
    const onSelectChange = (e) => {
        const {
            target: { value },
        } = e;

        setSel(value);
    };

    return (
        <div>
            <h1>Alarmlist</h1>
            <hr></hr>
            <header>
                <select onChange={onSelectChange} placeholder="검색">
                    <option>검색</option>
                    <option id="전용회선번호">전용회선번호</option>
                    <option id="근무자">근무자</option>
                </select>
                <input
                    type="search"
                    placeholder="Item search"
                    value={SearchInput}
                    onChange={onSearchChange}
                />
            </header>
            {Sel === "전용회선번호" && SearchInput !== "" ? (
                <>
                    {Alarms.filter((alarm) =>
                        alarm.LineNo.includes(SearchInput)
                    ).map((alarm) => (
                        <Alarmlist
                            key={alarm.id}
                            id={alarm.id}
                            LineNo={alarm.LineNo}
                            Worker={alarm.Worker}
                        />
                    ))}
                </>
            ) : null}
            {Sel === "근무자" && SearchInput !== "" ? (
                <>
                    {Alarms.filter((alarm) =>
                        alarm.Worker.toLowerCase().includes(
                            SearchInput.toLowerCase()
                        )
                    ).map((alarm) => (
                        <Alarmlist
                            key={alarm.id}
                            id={alarm.id}
                            LineNo={alarm.LineNo}
                            Worker={alarm.Worker}
                        />
                    ))}
                </>
            ) : null}
            {SearchInput === "" ? (
                <>
                    {Alarms.map((alarm) => (
                        <Alarmlist
                            key={alarm.id}
                            id={alarm.id}
                            LineNo={alarm.LineNo}
                            Worker={alarm.Worker}
                        />
                    ))}
                </>
            ) : null}
            <hr></hr>
            <footer>
                <Link to="add">작성하기</Link>
            </footer>
        </div>
    );
};

export default Alarm;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Alarmlist from "../component/alarmlist";

const Alarm = () => {
    const [Alarms, setAlarms] = useState([]);
    const axios = require("axios").default;

    const getAlarms = async () => {
        const json = await axios.get("http://localhost:8080/detail-list");
        setAlarms(json.data);
    };

    useEffect(() => {
        getAlarms();
    }, []);

    return (
        <div>
            <h1>Alarmlist</h1>
            <hr></hr>
            {Alarms.map((alarm) => (
                <Alarmlist
                    key={alarm.id}
                    id={alarm.id}
                    LineNo={alarm.LineNo}
                    Worker={alarm.Worker}
                />
            ))}
            <hr></hr>
            <footer>
                <Link to="add">작성하기</Link>
            </footer>
        </div>
    );
};

export default Alarm;

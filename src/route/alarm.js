import { useEffect, useState } from "react";
import Alarmlist from "../component/alarmlist";

const Alarm = () => {
    const [Alarms, setAlarms] = useState([]);

    const getAlarms = async () => {
        const json = await (
            await fetch("http://localhost:8080/detail-list")
        ).json();
        setAlarms(json);
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
        </div>
    );
};

export default Alarm;

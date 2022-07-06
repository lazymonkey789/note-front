import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailAlarm from "../component/detailAlarm";

const Detail = () => {
    const [alarmDetails, setAlarmDetails] = useState([]);
    const { id } = useParams();

    const getalarmDetail = async () => {
        const json = await (
            await fetch(`http://localhost:8080/detail-list/${id}`)
        ).json();
        setAlarmDetails(json);
    };

    useEffect(() => {
        getalarmDetail();
    }, []);
    return (
        <div>
            <h1>Alarmlist</h1>
            <hr></hr>

            <DetailAlarm
                key={alarmDetails.id}
                LineNo={alarmDetails.LineNo}
                Worker={alarmDetails.Worker}
                ReportTime={alarmDetails.ReportTime}
                Cause={alarmDetails.Cause}
            />
        </div>
    );
};

export default Detail;

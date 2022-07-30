import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailAlarm from "../component/detailAlarm";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Detail = () => {
    const [alarmDetails, setAlarmDetails] = useState([]);
    const { id } = useParams();
    const axios = require("axios").default;
    const [okdata, setOkdata] = useState(false);

    const getalarmDetail = async () => {
        const json = await axios.get(`http://localhost:8080/detail-list/${id}`);
        setAlarmDetails(json.data);
        setOkdata((prev) => !prev);
    };

    useEffect(() => {
        getalarmDetail();
    }, []);
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate("../alarm", { replace: true });
    };

    const changeData = async () => {
        const transDate = await moment(alarmDetails.ReportTime);
        console.log(transDate);
    };
    useEffect(() => {
        changeData();
    }, [okdata]);

    return (
        <div>
            <h1>Alarmlist</h1>
            <hr></hr>
            <DetailAlarm
                key={alarmDetails.id}
                id={alarmDetails.id}
                LineNo={alarmDetails.LineNo}
                Worker={alarmDetails.Worker}
                ReportTime={alarmDetails.ReportTime}
                Cause={alarmDetails.Cause}
            />
            <button onClick={onBackClick}>뒤로가기</button>
        </div>
    );
};

export default Detail;

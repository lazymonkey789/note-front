import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Modifyalarm = (LineNo, Worker, ReportTime, Cause) => {
    const axios = require("axios").default;
    const { id } = useParams();

    const newAlarm = async () => {
        await axios.patch(`http://localhost:8080/detail-list/${id}`, {
            LineNo: `${LineNo}`,
            Worker: `${Worker}`,
            ReportTime: `${ReportTime}`,
            Cause: `${Cause}`,
        });
    };

    useEffect(() => {
        newAlarm();
    }, []);

    return (
        <div>
            <h3>Hi Update</h3>
            <hr></hr>
        </div>
    );
};

export default Modifyalarm;

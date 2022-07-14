import React, { useEffect } from "react";

const NewAlarm = ({ LineNo, Worker, ReportTime, Cause }) => {
    const axios = require("axios").default;

    const addAlarm = async () => {
        await axios.post("http://localhost:8080/detail-list", {
            LineNo: `${LineNo}`,
            Worker: `${Worker}`,
            ReportTime: `${ReportTime}`,
            Cause: `${Cause}`,
        });
    };

    useEffect(() => {
        addAlarm();
    }, []);

    return (
        <div>
            <h3>Hi input</h3>
            <hr></hr>
        </div>
    );
};

export default NewAlarm;

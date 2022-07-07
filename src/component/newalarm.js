import React, { useEffect } from "react";

const NewAlarm = ({ LineNo, Worker, ReportTime, Cause }) => {
    const newOne = [
        {
            LineNo: { LineNo },
            Worker: { Worker },
            ReportTime: { ReportTime },
            Cause: { Cause },
        },
    ];

    const addAlarm = async () => {
        await (
            await fetch("http://localhost:8080/detail-list", {
                method: "post",
                body: JSON.stringify(newOne),
            })
        ).json();
        console.log(newOne);
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

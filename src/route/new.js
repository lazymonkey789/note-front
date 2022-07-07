import NewAlarm from "../component/newalarm";
import React, { useState } from "react";

const New = () => {
    const [addLineNo, setAddLineNo] = useState("");
    const [addWorker, setAddWorker] = useState("");
    const [addReportTime, setAddReportTime] = useState("");
    const [addCause, setAddCause] = useState("");
    const [send, setSend] = useState(false);

    /*     const [addOutCheck, setAddOutCheck] = useState("");
    const [addController, setAddController] = useState("");
    const [addDellReport, setAddDellReport] = useState("");
    const [addNmsTime, setAddNmsTime] = useState("");

    const [addFinishTime, setAddFinishTime] = useState("");
    const [addSpot, setAddSpot] = useState("");
    const [addDellReport, setAddDellReport] = useState("");
    const [addNmsTime, setAddNmsTime] = useState(""); */

    const onChange = (e) => {
        const {
            target: { id, value },
        } = e;

        if (id === "LineNo") {
            setAddLineNo(value);
        }
        if (id === "Worker") {
            setAddWorker(value);
        }
        if (id === "ReportTime") {
            setAddReportTime(value);
        }
        if (id === "Cause") {
            setAddCause(value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setAddLineNo("");
        setAddWorker("");
        setAddReportTime("");
        setAddCause("");
    };

    const onFlipSend = () => {
        setSend((prev) => !prev);
    };

    console.log(send);
    return (
        <div>
            <h1>Register New Alarm</h1>
            <hr></hr>

            <>
                <form onSubmit={onSubmit}>
                    <div>
                        <p>
                            <label htmlFor="LineNo">전용회선번호 : </label>
                            <input
                                type="number"
                                id="LineNo"
                                placeholder="전용회선번호"
                                onChange={onChange}
                                value={addLineNo}
                            />
                            <br></br>
                            <label htmlFor="Worker">근무자 : </label>
                            <input
                                type="text"
                                id="Worker"
                                placeholder="근무자"
                                onChange={onChange}
                                value={addWorker}
                            />
                            <br></br>
                            <label htmlFor="ReportTime">장애시간 : </label>
                            <input
                                type="datetime-local"
                                id="ReportTime"
                                placeholder="장애시간"
                                onChange={onChange}
                                value={addReportTime}
                            />
                            <br></br>
                            <label htmlFor="Cause">원인 : </label>
                            <input
                                type="text"
                                id="Cause"
                                placeholder="원인"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                        </p>
                        <input
                            type="submit"
                            value="등록"
                            onClick={onFlipSend}
                        />
                        <>
                            {send ? (
                                <NewAlarm
                                    LineNo={addLineNo}
                                    Worker={addWorker}
                                    ReportTime={addReportTime}
                                    Cause={addCause}
                                />
                            ) : (
                                ""
                            )}
                        </>
                    </div>
                </form>
            </>
        </div>
    );
};

export default New;

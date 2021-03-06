import NewAlarm from "../component/newalarm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const New = () => {
    const [addLineNo, setAddLineNo] = useState("");
    const [addWorker, setAddWorker] = useState("");
    const [addReportTime, setAddReportTime] = useState("");
    const [addCause, setAddCause] = useState("");

    /*     const [addOutCheck, setAddOutCheck] = useState("");
    const [addController, setAddController] = useState("");
    const [addDellReport, setAddDellReport] = useState("");
    const [addNmsTime, setAddNmsTime] = useState("");

    const [addFinishTime, setAddFinishTime] = useState("");
    const [addSpot, setAddSpot] = useState("");
    const [addContent, setAddContent] = useState("");
    const [addConsider, setAddConsider] = useState("");
    const [addWriter, setAddWriter] = useState(""); */

    const [send, setSend] = useState(false);

    const navigate = useNavigate();

    const onBackClick = () => {
        navigate("../alarm", { replace: true });
    };
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
        /*         
        if (id === "OutCheck") {
            setAddLineNo(value);
        }
        if (id === "Controller") {
            setAddWorker(value);
        }
        if (id === "DellReport") {
            setAddReportTime(value);
        }
        if (id === "NmsTime") {
            setAddCause(value);
        }
        if (id === "FinishTime") {
            setAddLineNo(value);
        }
        if (id === "Spot") {
            setAddWorker(value);
        }
        if (id === "Content") {
            setAddReportTime(value);
        }
        if (id === "Consider") {
            setAddCause(value);
        }
        if (id === "Writer") {
            setAddLineNo(value);
        } */
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setAddLineNo("");
        setAddWorker("");
        setAddReportTime("");
        setAddCause("");

        navigate("../alarm", { replace: true });
    };

    const onClickSend = () => {
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
                            <label htmlFor="LineNo">?????????????????? : </label>
                            <input
                                type="number"
                                id="LineNo"
                                placeholder="??????????????????"
                                onChange={onChange}
                                value={addLineNo}
                            />
                            <br></br>
                            <label htmlFor="Worker">????????? : </label>
                            <input
                                type="text"
                                id="Worker"
                                placeholder="?????????"
                                onChange={onChange}
                                value={addWorker}
                            />
                            <br></br>
                            <label htmlFor="ReportTime">???????????? : </label>
                            <input
                                type="datetime-local"
                                id="ReportTime"
                                placeholder="????????????"
                                onChange={onChange}
                                value={addReportTime}
                            />
                            <br></br>
                            <label htmlFor="Cause">?????? : </label>
                            <input
                                type="text"
                                id="Cause"
                                placeholder="??????"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            {/*                             <label htmlFor="OutCheck">?????? OUT : </label>
                            <input
                                type="text"
                                id="OutCheck"
                                placeholder="?????? OUT"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="Controller">????????? : </label>
                            <input
                                type="text"
                                id="Controller"
                                placeholder="?????????"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="DellReport">????????? ?????? : </label>
                            <input
                                type="text"
                                id="DellReport"
                                placeholder="????????? ??????"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="NmsTime">Nms : </label>
                            <input
                                type="text"
                                id="NmsTime"
                                placeholder="Nms"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="FinishTime">???????????? : </label>
                            <input
                                type="text"
                                id="FinishTime"
                                placeholder="????????????"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="Spot">?????? : </label>
                            <input
                                type="text"
                                id="Spot"
                                placeholder="??????"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="Content">???????????? : </label>
                            <input
                                type="text"
                                id="Content"
                                placeholder="????????????"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="Consider">?????? : </label>
                            <input
                                type="text"
                                id="Consider"
                                placeholder="??????"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="Writer">????????? : </label>
                            <input
                                type="text"
                                id="Writer"
                                placeholder="?????????"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br> */}
                        </p>
                        <input
                            type="submit"
                            value="??????"
                            onClick={onClickSend}
                        />
                        <button onClick={onBackClick}>????????????</button>

                        <>
                            {send ? (
                                <NewAlarm
                                    LineNo={addLineNo}
                                    Worker={addWorker}
                                    ReportTime={addReportTime}
                                    Cause={addCause}

                                    /*                                     
                                    OutCheck={addOutCheck}
                                    Controller={addController}
                                    DellReport={addDellReport}
                                    NmsTime={addNmsTime}
                                    FinishTime={addFinishTime}
                                    Spot={addSpot}
                                    Content={addContent}
                                    Consider={addConsider}
                                    Writer={addWriter} */
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

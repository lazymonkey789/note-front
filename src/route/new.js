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
                            {/*                             <label htmlFor="OutCheck">관제 OUT : </label>
                            <input
                                type="text"
                                id="OutCheck"
                                placeholder="관제 OUT"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="Controller">관제사 : </label>
                            <input
                                type="text"
                                id="Controller"
                                placeholder="관제사"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="DellReport">델몬스 신고 : </label>
                            <input
                                type="text"
                                id="DellReport"
                                placeholder="델몬스 신고"
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
                            <label htmlFor="FinishTime">복구시간 : </label>
                            <input
                                type="text"
                                id="FinishTime"
                                placeholder="복구시간"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="Spot">장소 : </label>
                            <input
                                type="text"
                                id="Spot"
                                placeholder="장소"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="Content">장애내용 : </label>
                            <input
                                type="text"
                                id="Content"
                                placeholder="장애내용"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="Consider">기타 : </label>
                            <input
                                type="text"
                                id="Consider"
                                placeholder="기타"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br>
                            <label htmlFor="Writer">작성자 : </label>
                            <input
                                type="text"
                                id="Writer"
                                placeholder="작성자"
                                onChange={onChange}
                                value={addCause}
                            />
                            <br></br> */}
                        </p>
                        <input
                            type="submit"
                            value="등록"
                            onClick={onClickSend}
                        />
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

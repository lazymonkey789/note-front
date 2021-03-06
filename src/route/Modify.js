import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modifyalarm from "../component/Modifyalarm";
import Container from "react-bootstrap/esm/Container";
import moment from "moment";

const Modify = () => {
    const [newLineNo, setNewLineNo] = useState("");
    const [newWorker, setNewWorker] = useState("");
    const [newReportTime, setNewReportTime] = useState("");
    const [newCause, setNewCause] = useState("");

    /*     const [newOutCheck, setNewOutCheck] = useState("");
    const [newController, setNewController] = useState("");
    const [newDellReport, setNewDellReport] = useState("");
    const [newNmsTime, setNewNmsTime] = useState("");

    const [newFinishTime, setNewFinishTime] = useState("");
    const [newSpot, setNewSpot] = useState("");
    const [newContent, setNewContent] = useState("");
    const [newConsider, setNewConsider] = useState("");
    const [newWriter, setNewWriter] = useState(""); */

    const [oldDataLoading, setOldDataLoading] = useState(false);
    const [oldData, setOldData] = useState("");
    const { id } = useParams();
    const axios = require("axios").default;

    const [okdate, setOkdate] = useState(false);
    const [changeDate, setChangeDate] = useState();
    const changeTime = () => {
        if (oldDataLoading) {
            const transDate = moment(oldData.ReportTime);
            setChangeDate(transDate.format("YYYY-MM-DDTHH:mm:ss"));
            setOkdate((prev) => !prev);
        }
    };
    useEffect(() => {
        changeTime();
    }, [oldDataLoading]);

    const oldAlarm = async () => {
        const json = await axios.get(`http://localhost:8080/detail-list/${id}`);
        setOldData(json.data);
        setOldDataLoading((prev) => !prev);
    };

    useEffect(() => {
        oldAlarm();
    }, []);
    useEffect(() => {
        setNewLineNo(oldData.LineNo);
        setNewWorker(oldData.Worker);
        setNewReportTime(changeDate);
        setNewCause(oldData.Cause);
    }, [okdate]);

    const [updatModi, setUpdateModi] = useState(false);

    const navigate = useNavigate();

    const onChange = (e) => {
        const {
            target: { id, value },
        } = e;

        if (id === "LineNo") {
            setNewLineNo(value);
        }
        if (id === "Worker") {
            setNewWorker(value);
        }
        if (id === "ReportTime") {
            setNewReportTime(value);
        }
        if (id === "Cause") {
            setNewCause(value);
        }
        /*         
        if (id === "OutCheck") {
            setNewOutCheck(value);
        }
        if (id === "Controller") {
            setNewController(value);
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

        setNewLineNo("");
        setNewWorker("");
        setNewReportTime("");
        setNewCause("");

        navigate(`../alarm/${id}`, { replace: true });
    };

    const onClickModi = () => {
        setUpdateModi((prev) => !prev);
    };

    const onBackClick = () => {
        navigate(`../alarm/${id}`, { replace: true });
    };

    return (
        <Container>
            <div>
                <h1>Update Alarm</h1>
                <hr></hr>

                <>
                    <form onSubmit={onSubmit}>
                        <div>
                            {okdate ? (
                                <p>
                                    <label htmlFor="LineNo">
                                        전용회선번호 :{" "}
                                    </label>
                                    <input
                                        type="number"
                                        id="LineNo"
                                        placeholder={"전용회선번호"}
                                        onChange={onChange}
                                        value={newLineNo}
                                    />
                                    <br></br>
                                    <label htmlFor="Worker">근무자 : </label>
                                    <input
                                        type="text"
                                        id="Worker"
                                        placeholder="근무자"
                                        onChange={onChange}
                                        value={newWorker}
                                    />
                                    <br></br>
                                    <label htmlFor="ReportTime">
                                        장애시간 :{" "}
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="ReportTime"
                                        placeholder="장애시간"
                                        onChange={onChange}
                                        value={newReportTime}
                                    />
                                    <br></br>
                                    <label htmlFor="Cause">원인 : </label>
                                    <input
                                        type="text"
                                        id="Cause"
                                        placeholder="원인"
                                        onChange={onChange}
                                        value={newCause}
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
                            ) : (
                                ""
                            )}

                            <input
                                type="submit"
                                value="수정"
                                onClick={onClickModi}
                            />
                            <>
                                {updatModi ? (
                                    <Modifyalarm
                                        LineNo={newLineNo}
                                        Worker={newWorker}
                                        ReportTime={newReportTime}
                                        Cause={newCause}

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
                <>
                    <button onClick={onBackClick}>뒤로가기</button>
                </>
            </div>
        </Container>
    );
};

export default Modify;

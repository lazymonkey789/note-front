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
                                        ?????????????????? :{" "}
                                    </label>
                                    <input
                                        type="number"
                                        id="LineNo"
                                        placeholder={"??????????????????"}
                                        onChange={onChange}
                                        value={newLineNo}
                                    />
                                    <br></br>
                                    <label htmlFor="Worker">????????? : </label>
                                    <input
                                        type="text"
                                        id="Worker"
                                        placeholder="?????????"
                                        onChange={onChange}
                                        value={newWorker}
                                    />
                                    <br></br>
                                    <label htmlFor="ReportTime">
                                        ???????????? :{" "}
                                    </label>
                                    <input
                                        type="datetime-local"
                                        id="ReportTime"
                                        placeholder="????????????"
                                        onChange={onChange}
                                        value={newReportTime}
                                    />
                                    <br></br>
                                    <label htmlFor="Cause">?????? : </label>
                                    <input
                                        type="text"
                                        id="Cause"
                                        placeholder="??????"
                                        onChange={onChange}
                                        value={newCause}
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
                            ) : (
                                ""
                            )}

                            <input
                                type="submit"
                                value="??????"
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
                    <button onClick={onBackClick}>????????????</button>
                </>
            </div>
        </Container>
    );
};

export default Modify;

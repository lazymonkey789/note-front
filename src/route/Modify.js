import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modifyalarm from "../component/Modifyalarm";
import Container from "react-bootstrap/esm/Container";
import moment from "moment";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/Button";

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
            <Form onSubmit={onSubmit}>
                <Row className="align-items-center">
                    <Col>
                        <h1>Update Alarm</h1>
                    </Col>
                    <Col>
                        <Stack
                            direction="horizontal"
                            style={{ float: "right" }}
                            gap={3}
                        >
                            <Button
                                type="submit"
                                variant="outline-secondary"
                                onClick={onClickModi}
                                style={{ width: 70, float: "right" }}
                            >
                                수정
                            </Button>
                            <Button
                                onClick={onBackClick}
                                variant="outline-secondary"
                                style={{
                                    width: 110,
                                }}
                            >
                                뒤로가기
                            </Button>
                        </Stack>
                    </Col>
                    <hr></hr>
                </Row>

                <Col>
                    <div>
                        {okdate ? (
                            <>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridLineNo"
                                >
                                    <Form.Label htmlFor="LineNo">
                                        전용회선번호
                                    </Form.Label>
                                    <Form.Control
                                        style={{ width: 400 }}
                                        id="LineNo"
                                        type="number"
                                        placeholder="전용회선번호"
                                        onChange={onChange}
                                        value={newLineNo}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridWorker"
                                >
                                    <Form.Label htmlFor="Worker">
                                        근무자
                                    </Form.Label>
                                    <Form.Control
                                        style={{ width: 400 }}
                                        type="text"
                                        id="Worker"
                                        placeholder="근무자"
                                        onChange={onChange}
                                        value={newWorker}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridReportTime"
                                >
                                    <Form.Label htmlFor="ReportTime">
                                        장애시간
                                    </Form.Label>
                                    <Form.Control
                                        style={{ width: 400 }}
                                        type="datetime-local"
                                        id="ReportTime"
                                        placeholder="장애시간"
                                        onChange={onChange}
                                        value={newReportTime}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formGridCause"
                                >
                                    <Form.Label htmlFor="Cause">
                                        원인
                                    </Form.Label>
                                    <Form.Control
                                        style={{ height: 200, width: 700 }}
                                        type="text"
                                        id="Cause"
                                        placeholder="원인"
                                        onChange={onChange}
                                        value={newCause}
                                    />
                                </Form.Group>
                            </>
                        ) : (
                            ""
                        )}

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
                </Col>
            </Form>
        </Container>
    );
};

export default Modify;

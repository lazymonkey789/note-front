import NewAlarm from "../component/newalarm";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/Button";

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

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Row className="align-items-center">
                    <Col>
                        <h1>Register New Alarm</h1>
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
                                onClick={onClickSend}
                                style={{ width: 70, float: "right" }}
                            >
                                등록
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

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formGridLineNo">
                            <Form.Label htmlFor="LineNo">
                                전용회선번호
                            </Form.Label>
                            <Form.Control
                                style={{ width: 400 }}
                                id="LineNo"
                                type="number"
                                placeholder="전용회선번호"
                                onChange={onChange}
                                value={addLineNo}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridWorker">
                            <Form.Label htmlFor="Worker">근무자</Form.Label>
                            <Form.Control
                                style={{ width: 400 }}
                                type="text"
                                id="Worker"
                                placeholder="근무자"
                                onChange={onChange}
                                value={addWorker}
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
                                value={addReportTime}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridCause">
                            <Form.Label htmlFor="Cause">원인</Form.Label>
                            <Form.Control
                                style={{ height: 200, width: 700 }}
                                type="text"
                                id="Cause"
                                placeholder="원인"
                                onChange={onChange}
                                value={addCause}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
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
                </Row>
            </Form>
        </Container>
    );
};

export default New;

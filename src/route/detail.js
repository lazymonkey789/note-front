import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailAlarm from "../component/detailAlarm";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import moment from "moment";
import "moment/locale/ko";

const Detail = () => {
    const [alarmDetails, setAlarmDetails] = useState([]);
    const { id } = useParams();
    const axios = require("axios").default;
    const [okdate, setOkdate] = useState(false);
    const [changeDate, setChanteDate] = useState();

    const getalarmDetail = async () => {
        const json = await axios.get(`http://localhost:8080/detail-list/${id}`);
        setAlarmDetails(json.data);
        setOkdate((prev) => !prev);
    };

    useEffect(() => {
        getalarmDetail();
    }, []);
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate("../alarm", { replace: true });
    };

    const changeTime = () => {
        if (okdate) {
            const transDate = moment(alarmDetails.ReportTime);
            setChanteDate(transDate.format("YYYY-MM-DD a hh:mm:ss "));
        }
    };
    const onDeleteClick = () => {
        axios.delete(`http://localhost:8080/detail-list/${id}`);
        navigate("../alarm", { replace: true });
    };
    const onUpdate = () => {
        window.location.replace(`#/alarm/modify/${id}`);
    };

    useEffect(() => {
        changeTime();
    }, [okdate]);
    return (
        <Container>
            <Row className="align-items-center">
                <Col>
                    <h1>Alarmlist</h1>
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
                            style={{ width: 100, float: "right" }}
                            onClick={onDeleteClick}
                        >
                            삭제하기
                        </Button>
                        <Button
                            type="submit"
                            variant="outline-secondary"
                            style={{ width: 100, float: "right" }}
                            onClick={onUpdate}
                        >
                            수정하기
                        </Button>
                        <Button
                            type="submit"
                            variant="outline-secondary"
                            style={{ width: 100, float: "right" }}
                            onClick={onBackClick}
                        >
                            뒤로가기
                        </Button>
                    </Stack>
                </Col>
                <hr></hr>
            </Row>

            <Form>
                <Row>
                    <DetailAlarm
                        key={alarmDetails.id}
                        id={alarmDetails.id}
                        LineNo={alarmDetails.LineNo}
                        Worker={alarmDetails.Worker}
                        ReportTime={changeDate}
                        Cause={alarmDetails.Cause}
                    />
                </Row>
            </Form>
        </Container>
    );
};

export default Detail;

import { useParams } from "react-router-dom";
import DetailAlarm from "../component/detailAlarm";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/esm/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useQuery } from "react-query";

const Detail = () => {
    const { id } = useParams();
    const axios = require("axios").default;

    /*     const getalarmDetail = async () => {
        const json = await axios.get(`http://localhost:8080/detail-list/${id}`);
        setAlarmDetails(json.data);
        setOkdate((prev) => !prev);
    };

    useEffect(() => {
        getalarmDetail();
    }, []); */

    const FetchDetail = async () => {
        const axios = require("axios").default;

        const { data } = await axios.get(
            `http://localhost:8080/detail-list/${id}`
        );
        return data;
    };

    const { data, isLoading, isError, error } = useQuery("detail", FetchDetail);

    const navigate = useNavigate();

    const onBackClick = () => {
        navigate("../alarm", { replace: true });
    };
    /* 
    const changeTime = () => {
        if (okdate) {
            const transDate = moment(data.ReportTime);
            setChanteDate(transDate.format("YYYY-MM-DD a hh:mm:ss "));
        }
    };

    useEffect(() => {
        changeTime();
    }, [okdate]); */

    const onDeleteClick = () => {
        axios.delete(`http://localhost:8080/detail-list/${id}`);
        navigate("../alarm", { replace: true });
    };
    const onUpdate = () => {
        window.location.replace(`#/alarm/modify/${id}`);
    };

    if (isError) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
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
                                key={data.id}
                                id={data.id}
                                LineNo={data.LineNo}
                                Worker={data.Worker}
                                ReportTime={data.ReportTime}
                                Cause={data.Cause}
                            />
                        </Row>
                    </Form>
                </Container>
            )}
        </div>
    );
};

export default Detail;

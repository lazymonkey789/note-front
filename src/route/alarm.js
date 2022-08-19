import { useEffect, useState } from "react";
import Alarmlist from "../component/alarmlist";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/esm/Stack";

const Alarm = () => {
    const [Alarms, setAlarms] = useState([]);
    const axios = require("axios").default;
    const [Sel, setSel] = useState("전용회선번호");
    const [SearchInput, setSearchInput] = useState("");

    const getAlarms = async () => {
        const json = await axios.get("http://localhost:8080/detail-list");
        setAlarms(json.data);
    };

    useEffect(() => {
        getAlarms();
    }, []);

    const onSearchChange = (e) => {
        const {
            target: { value },
        } = e;
        setSearchInput(value);
    };
    const onSelectChange = (e) => {
        const {
            target: { value },
        } = e;

        setSel(value);
    };

    const onAdd = () => {
        window.location.replace("#/alarm/add");
    };
    return (
        <Container>
            <Row className="align-items-center">
                <Col>
                    <h1>Alarm</h1>
                </Col>
                <Col md={6}>
                    <Stack direction="horizontal" gap={3}>
                        <Button
                            variant="outline-secondary"
                            style={{
                                width: 110,
                                float: "right",
                            }}
                            onClick={onAdd}
                        >
                            작성하기
                        </Button>

                        <InputGroup>
                            <Form.Select
                                aria-label="Default select example"
                                onChange={onSelectChange}
                                placeholder="검색"
                            >
                                <option id="전용회선번호">전용회선번호</option>
                                <option id="근무자">근무자</option>
                            </Form.Select>

                            <Form.Control
                                type="search"
                                placeholder="search"
                                value={SearchInput}
                                onChange={onSearchChange}
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Text id="basic-addon1">
                                @
                            </InputGroup.Text>
                        </InputGroup>
                    </Stack>
                </Col>
                <hr></hr>
            </Row>

            <Row>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>전용회선번호</th>
                            <th>근무자</th>
                        </tr>
                    </thead>

                    {Sel === "전용회선번호" && SearchInput !== "" ? (
                        <>
                            {Alarms.filter((alarm) =>
                                alarm.LineNo.includes(SearchInput)
                            ).map((alarm) => (
                                <Alarmlist
                                    key={alarm.id}
                                    id={alarm.id}
                                    LineNo={alarm.LineNo}
                                    Worker={alarm.Worker}
                                />
                            ))}
                        </>
                    ) : null}
                    {Sel === "근무자" && SearchInput !== "" ? (
                        <>
                            {Alarms.filter((alarm) =>
                                alarm.Worker.toLowerCase().includes(
                                    SearchInput.toLowerCase()
                                )
                            ).map((alarm) => (
                                <Alarmlist
                                    key={alarm.id}
                                    id={alarm.id}
                                    LineNo={alarm.LineNo}
                                    Worker={alarm.Worker}
                                />
                            ))}
                        </>
                    ) : null}
                    {SearchInput === "" ? (
                        <>
                            {Alarms.map((alarm) => (
                                <Alarmlist
                                    key={alarm.id}
                                    id={alarm.id}
                                    LineNo={alarm.LineNo}
                                    Worker={alarm.Worker}
                                />
                            ))}
                        </>
                    ) : null}
                </Table>
            </Row>
        </Container>
    );
};

export default Alarm;

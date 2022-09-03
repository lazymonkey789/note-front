import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import moment from "moment";
import "moment/locale/ko";
import { useState } from "react";
import Modifyalarm from "./Modifyalarm";

const DetailAlarm = ({
    LineNo,
    Worker,
    ReportTime,
    Cause,
    Updatekey,
    Updatedkey,
}) => {
    const transDate = moment(ReportTime);
    const changeDate = transDate.format("YYYY-MM-DD a hh:mm:ss ");

    const [TestLineNo, setTestLineNo] = useState(LineNo);

    const onChange = (e) => {
        const {
            target: { id, value },
        } = e;

        if (id === "LineNo") {
            setTestLineNo(value);
        }
    };
    console.log(Updatekey);

    console.log(Updatedkey);
    if (!Updatedkey) {
        Modifyalarm(TestLineNo, TestLineNo, TestLineNo, TestLineNo);
    }

    return (
        <Col>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="LineNo">전용회선번호</Form.Label>
                <Form.Control
                    style={{ width: 400 }}
                    id="LineNo"
                    type="number"
                    placeholder="전용회선번호"
                    disabled={Updatekey}
                    onChange={onChange}
                    value={TestLineNo}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="Worker">근무자</Form.Label>
                <Form.Control
                    style={{ width: 400 }}
                    type="text"
                    id="Worker"
                    placeholder="근무자"
                    disabled
                    value={Worker}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="ReportTime">장애시간</Form.Label>
                <Form.Control
                    style={{ width: 400 }}
                    type="text"
                    id="ReportTime"
                    placeholder="장애시간"
                    disabled
                    value={changeDate}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="Cause">원인</Form.Label>
                <Form.Control
                    style={{ height: 200, width: 700 }}
                    type="text"
                    id="Cause"
                    placeholder="원인"
                    disabled
                    value={Cause}
                />
            </Form.Group>
        </Col>
    );
};

export default DetailAlarm;

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const DetailAlarm = ({ LineNo, Worker, ReportTime, Cause }) => {
    return (
        <Col>
            <Form.Group className="mb-3" controlId="formGridLineNo">
                <Form.Label htmlFor="LineNo">전용회선번호</Form.Label>
                <Form.Control
                    style={{ width: 400 }}
                    id="LineNo"
                    type="number"
                    placeholder="전용회선번호"
                    disabled
                    value={LineNo}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridWorker">
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
            <Form.Group className="mb-3" controlId="formGridReportTime">
                <Form.Label htmlFor="ReportTime">장애시간</Form.Label>
                <Form.Control
                    style={{ width: 400 }}
                    type="text"
                    id="ReportTime"
                    placeholder="장애시간"
                    disabled
                    value={ReportTime}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridCause">
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

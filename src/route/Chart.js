import { useEffect, useState } from "react";
import SetChart from "../component/SetChart";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Chart = () => {
    const [Datas, setDatas] = useState([]);
    const [ButtonId, setButtonId] = useState("전용회선");
    const [Xindex, setXindex] = useState([]);
    const [Loading, setLoading] = useState(false);

    const axios = require("axios").default;

    const getDatas = async () => {
        const json = await axios.get("http://localhost:8080/detail-list");
        setDatas(json.data);
        setLoading((prev) => !prev);
    };

    const getChart = async () => {
        const LineTemp = await Datas.map((data) => data.LineNo);
        const LTemp = await Array.from(new Set(LineTemp));

        const LineInfo = await LTemp.map((d) => {
            return {
                name: d,
                count: LineTemp.filter((element) => d === element).length,
            };
        });
        setXindex(LineInfo);
    };

    useEffect(() => {
        getDatas();
    }, []);

    useEffect(() => {
        getChart();
    }, [Loading]);

    const onChartClick = (e) => {
        const {
            target: { id },
        } = e;

        setButtonId(id);
        getChart();
    };
    return (
        <div>
            <>
                <h2>Chart</h2>
            </>
            <Container>
                <Row>
                    <div
                        style={{ height: 440, width: 750 }}
                        className="bg-secondary bg-opacity-25 border border-secondary"
                    >
                        <Stack gap={3}>
                            <div></div>

                            <div>
                                <Stack gap={3}>
                                    <div>
                                        <Row className="align-items-center">
                                            <Col>
                                                <span>전용회선 알람 현황</span>
                                                <br></br>
                                                <span>
                                                    회선별, 기간별 알람 현황을
                                                    조회할 수 있습니다.
                                                </span>
                                            </Col>
                                            <Col md={{ span: 3 }}>
                                                <Stack
                                                    direction="horizontal"
                                                    gap={1}
                                                    style={{
                                                        float: "right",
                                                    }}
                                                >
                                                    <Button
                                                        className="rounded-pill"
                                                        size="sm"
                                                        variant="outline-secondary"
                                                        id="전용회선"
                                                        onClick={onChartClick}
                                                    >
                                                        전용회선
                                                    </Button>

                                                    <Button
                                                        className="rounded-pill"
                                                        size="sm"
                                                        variant="outline-secondary"
                                                        id="근무자"
                                                        onClick={onChartClick}
                                                    >
                                                        근무자
                                                    </Button>
                                                </Stack>
                                            </Col>
                                        </Row>
                                    </div>

                                    <div className="bg-white ">
                                        <SetChart
                                            ButtonId={ButtonId}
                                            Index={Xindex}
                                        />
                                    </div>
                                </Stack>
                            </div>
                        </Stack>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Chart;

import Chart from "./Chart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
    return (
        <Container>
            <h1>Home</h1>
            <hr></hr>
            <Row>
                <Col md="auto">
                    <div>
                        <Chart />
                    </div>
                </Col>
                <Col>
                    <div
                        style={{ height: 440, width: 520 }}
                        className=" bg-secondary bg-opacity-25 border border-secondary"
                    ></div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;

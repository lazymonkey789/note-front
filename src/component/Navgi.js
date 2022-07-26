import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const Navi = () => {
    return (
        <>
            <h4>
                <Navbar bg="secondary" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand>Incheon ACC</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#/">Home</Nav.Link>
                            <Nav.Link href="#/alarm">Alarm</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </h4>
        </>
    );
};

export default Navi;

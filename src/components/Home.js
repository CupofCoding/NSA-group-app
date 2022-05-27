import { Container } from "react-bootstrap"
import { Row, Col } from 'react-bootstrap'


export default function Home () {
    return (
        <div>
            <Container className="Container">
                <Row className="justify-content-md-center">
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                </Row>
                <Row>
                    <Col>1</Col>
                    <Col>2</Col>
                    <Col>3</Col>
                </Row>
            </Container>
        </div>
    )
};
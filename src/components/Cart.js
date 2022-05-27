import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Cart () {
    return (
        <Container>
            <Card>
                <Card.Img />
                <Card.Body>
                    <Card.Title>Bag</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan lacus justo, sit amet malesuada mauris porta non. Aliquam id mi mollis, fermentum risus at.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
};
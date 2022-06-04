import { Container, Nav } from "react-bootstrap"
import { Row, Col } from 'react-bootstrap';

export default function Home () {
    return (
        <div>
            <Container className="Container" fluid>
                <h2>PRODUCT PAGE</h2>
                <Row className='Row'>
                <Col>
                    <div>
                        <img src='public/placeholder.png'/>
                        <h3>Item #1</h3>
                        <form>
                        <label for="colors">Colors: </label>
                        <input type="radio" id="colors" name="colors" className='color-1'/>
                        <input type="radio" id="colors" name="colors" className='color-2'/>
                        <input type="radio" id="colors" name="colors" className='color-3'/>
                        <input type="radio" id="colors" name="colors" className='color-4'/>
                        </form>
                        <h4>$</h4>
                        <button type="submit"
                            value="Submit"
                            className='right'>
                            Add to cart
                        </button>
                        <button type="submit"
                            className='right'>
                            Add to wishlist
                        </button>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src='#'/>
                        <h3>Item #2</h3>
                        <p>Color</p>
                        <p>$</p>
                    </div>
                </Col>
                </Row>
                <Row className='Row'>
                <Col>
                    <div>
                        <img src='#'/>
                        <h3>Item #3</h3>
                        <p>Color</p>
                        <p>$</p>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src='#'/>
                        <h3>Item #4</h3>
                        <p>Color</p>
                        <p>$</p>
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    )
};
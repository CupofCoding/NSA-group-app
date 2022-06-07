import { Container } from "react-bootstrap"
import Product from "./Product";
import { Form } from "react-bootstrap";

export default function Home (props) {
    const { products, addToCart, addToWishList } = props;

    return (
        <div>
            <Container className='head-container'>
                <h2>Category</h2>
            </Container>
            
            <Container className='nav-container'>
                <Form>
                    <select>
                        <option>Brand</option>
                        <option>Nike</option>
                        <option>UnderArmor</option>
                        <option>Adidas</option>
                        <option>Polo</option>
                    </select>
                    <select>
                        <option>Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select>
                    <select>
                        <option>Color</option>
                        <option>Black</option>
                        <option>White</option>
                        <option>Grey</option>
                        <option>Blue</option>
                    </select>
                    <select>
                        <option>Order by</option>
                    </select>
                </Form>
            </Container>
            
            <Container className="Container">
                <h2>Products</h2>
                <hr></hr>
                <div>
                    {products.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} addToWishList={addToWishList} ></Product>
                    ))}
                </div>
            </Container>
        </div>
    )
};
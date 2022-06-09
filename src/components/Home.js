import { Container } from "react-bootstrap"
import Product from "../components/Product";
import { Form } from "react-bootstrap";

export default function Home (props) {
    const { products, addToCart, addToWishList } = props;

    return (
        <div>
            <Container className='head-container'>
                <h2>Category</h2>
            </Container>
            
            <Container className='filter-container'>
                <Form className="form-left">
                    <select className="filter-option">
                        <option>Brand</option>
                        <option>Nike</option>
                        <option>UnderArmor</option>
                        <option>Adidas</option>
                        <option>Polo</option>
                    </select>
                    <select className="filter-option">
                        <option>Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select>
                    <select className="filter-option">
                        <option>Color</option>
                        <option>Black</option>
                        <option>White</option>
                        <option>Grey</option>
                        <option>Blue</option>
                    </select>
                </Form>
                <Form className="form-right">
                    <select className="filter-option">
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
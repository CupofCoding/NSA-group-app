import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Cart (props) {
    const { items, addToCart, removeFromCart } = props;

    const initialValue = 0;
    const itemPrice = items.reduce((total, c) => total + c.price * c.qty, initialValue);
    const taxPrice = itemPrice * 0.095;
    const discountPrice = itemPrice > 200 ? - 20 : 0
    const shippingPrice = itemPrice > 150 ? 0 : 10;
    const totalPrice = itemPrice + taxPrice + discountPrice + shippingPrice;

    return (
        <div>
            <Container >
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h2 className="header">Cart Items</h2>
                        </Card.Title>
                        <Card.Text>
                            <div className="header">{items.length === 0 &&     <div>Bag Is Empty</div>}
                            </div>
                            <div className="cart-container">
                            {items.map((item) => (
                                <div key={item.id} className="cart-div">
                                    <Card.Img className="small" src={item.image} />
                                    <h3>{item.name}</h3>
                                    <div>{item.size}</div>
                                    <p className="description">{item.description}</p>
                                    <div className="text-right">
                                        {item.qty} x ${item.price.toFixed(2)}
                                    </div>
                                    <div className="div-btn">
                                        <button className="btn-add" onClick={() => addToCart(item)}>+</button>
                                        <button className="btn-remove"onClick={() => removeFromCart(item)}>-</button>   
                                    </div>
                                    
                                </div>
                            ))}
                            </div>
                            <div className="total">
                            {items.length !== 0 && (
                                <>
                                    <hr></hr>
                                    <div>
                                        <div>Items Price</div>
                                        <div className="right">${itemPrice.toFixed(2)}</div>
                                    </div>
                                    <div>
                                        <div>Sales Tax</div>
                                        <div className="right">${taxPrice.toFixed(2)}</div>
                                    </div>
                                    <div>
                                        <div>Discounted Price</div>
                                        <div className="right">${discountPrice.toFixed(2)}</div>
                                    </div>
                                    <div>
                                        <div>Shipping Price</div>
                                        <div className="right">${shippingPrice.toFixed(2)}</div>
                                    </div>
                                    <div>
                                        <div><strong>Total Price</strong></div>
                                        <div className="right">${totalPrice.toFixed(2)}</div>
                                    </div>
                                </>
                            )}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};
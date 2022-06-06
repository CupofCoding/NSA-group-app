import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Wishlist (props) {
    const { items, addToWishList, removeFromWishList } = props;

    const initialValue = 0;
    const itemPrice = items.reduce((total, c) => total + c.price * c.qty, initialValue)

    return (
        <Container>
            <Card className="header">
                <Card.Body>
                    <h2> Wish-List Items</h2>
                    {items.length === 0 && <div>Wish-list is empty</div>}
                    <Card.Text>
                        <div className="cart-container">
                            {items.map((item) => (
                                <div key={item.id}>
                                    <Card.Img className="small" src={item.image} />
                                    <h3>{item.name}</h3>
                                    <p className="description">{item.description}</p>
                                    <div className="text-right">
                                        {item.qty} x ${item.price.toFixed(2)}
                                    </div>
                                    <div className="div-btn">
                                        <button className="btn-add" onClick={() => addToWishList(item)}>+</button>
                                        <button className="btn-remove" onClick={() => removeFromWishList(item)}>-</button>   
                                    </div>      
                                </div>
                            ))}
                        </div>
                        <div className="total">
                            {items.length !== 0 && (
                                <>
                                    <hr></hr>
                                    <div>
                                        <div><strong>Items Total Price</strong>
                                        </div>
                                        <div className="item-price">${itemPrice.toFixed(2)}
                                        </div>
                                    </div>
                                </>
                            )}
                            </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
};

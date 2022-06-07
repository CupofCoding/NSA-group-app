import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export default function ProductPage(props) {
    const { products } = props;

  return (
    <div className='product-container'>
      <Container className='img-container'>
        <Card>
            <Card.Img src="https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png" />
        </Card>
      </Container>

      <Container className='info-container'>
        <header>
            <h2>Product Detail</h2>
        </header>
        <div>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
        <div>
            ${products.price}
        </div>
        <div>
            <Form>
                <label for="color">Color</label>
                <input type="radio" id="color" name="color" />
                <input type="radio" id="color" name="color" />
                <input type="radio" id="color" name="color" />
                
                <label for='size'>Size</label>
                <select id='size'>
                    <option>----</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                    <option>Extra Large</option>
                </select>
            </Form>
            <div>
                <button>-</button>
                <button>+</button>
            </div>
        </div>
      </Container>
    </div>
  );
}

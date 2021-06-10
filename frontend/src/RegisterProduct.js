import { useRef, useState } from "react";
import {
    Form,
    Button
} from "react-bootstrap";

const RegisterProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const stockRef = useRef();
    const imageRef = useRef();

    const [notification, setNotification] = useState("");

    const registerProduct = async (event) => {
        event.preventDefault();

        const product = {
            name: nameRef.current.value,
            price: parseInt(priceRef.current.value),
            stock: parseInt(stockRef.current.value),
            image: imageRef.current.value
        }

        await fetch("http://localhost:8000/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product) 
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setNotification("The product has been registered");
            event.target.reset();
        })
        .catch(error => {
            console.log(error);
            setNotification(String(error));
        });
    }

    return (
        <Form onSubmit={registerProduct}>
            <br /><br />
            <h1>Register Product</h1><br />
            <p>{notification}</p>
            <Form.Group controlId="name">
                <Form.Label>Product Name</Form.Label>
                <Form.Control ref={nameRef} placeholder="Name" />
            </Form.Group>
            <Form.Group controlId="price">
                <Form.Label>Product Price</Form.Label>
                <Form.Control ref={priceRef} type="number" step={100} placeholder="Price" />
            </Form.Group>
            <Form.Group controlId="stock">
                <Form.Label>Product Stock</Form.Label>
                <Form.Control ref={stockRef} type="number" step={10} placeholder="Stock" />
            </Form.Group>
            <Form.Group controlId="image">
                <Form.Label>Product Image URL</Form.Label>
                <Form.Control ref={imageRef} placeholder="URL" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
}

export default RegisterProduct;
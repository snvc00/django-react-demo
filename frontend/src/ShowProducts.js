import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

const ShowProducts = () => {
    const [products, setProducts] = useState(null);
    const [notification, setNotification] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProducts(data);
            })
            .catch(error => {
                console.log(error);
                setNotification(String(error));
            });
    }, []);

    return (
        <>
            <br /><br />
            <h1>Registered Products</h1><br />
            <p>{notification}</p>
            {
                products !== null ? (
                    products.map(product => (
                        <>
                            <Card style={{ width: '50%' }}>
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                        The price is ${product.price}, and we have {product.stock} in stock.
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => { window.open(product.image, "_blank") }}>Open Image</Button>
                                </Card.Body>
                            </Card>
                            <br />
                        </>
                    ))

                ) : (
                    <h1>No products :(</h1>
                )
            }
        </>
    );
}

export default ShowProducts;
import React,{useEffect} from "react";
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProductHead from "./heading/producthead";

function Product() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    // Product data array
    const products = [
        {
            title: 'Basic Consultation',
            price: '$50',
            description: 'Standard medical consultation with our healthcare professionals',
            variant: 'Primary'
        },
        {
            title: 'Specialist Visit',
            price: '$120',
            description: 'In-depth consultation with specialist doctors',
            variant: 'Info'
        },
        {
            title: 'Health Check-up',
            price: '$199',
            description: 'Comprehensive health screening and basic lab tests',
            variant: 'Success'
        },
        {
            title: 'Emergency Care',
            price: '$299',
            description: 'Immediate medical attention for urgent health concerns',
            variant: 'Danger'
        }
    ];

    return(
        <>
            {!isHomePage && <ProductHead/>}
            <Container className="py-5 my-4">
                <h2 className="text-center mb-4">Our Products</h2>
                <Row>
                    {products.map((product) => (
                        <Col key={product.title} xs={12} sm={6} md={4} lg={3}>
                            <Card
                                bg={product.variant.toLowerCase()}
                                text={product.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                className="mb-4 h-100 shadow-sm"
                            >
                                <Card.Header className="d-flex justify-content-between align-items-center">
                                    <span>Medical Service</span>
                                    <span className="fw-bold">{product.price}</span>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <button className="btn btn-light mt-2 w-100">Book Now</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}



export default Product;


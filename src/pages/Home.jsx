import { ProductCard } from "../components/index"
import { useStateContext } from "../context/ContextProvider";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const { ecommerceData } = useStateContext();

  if (!ecommerceData || !ecommerceData.products) {
    return <div>Loading...</div>;
  }
  
  const { products } = ecommerceData;
  return (
    <>
      <h2 className="font-bold mt-3 mb-3">Best Seller</h2>
      <Container className="mb-5">
        <Row md={2} xs={1} lg={4} className="g-5">
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Home
import { Container } from "react-bootstrap";
import { ProductDetails } from "../components"
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useStateContext } from "../context/ContextProvider";

const ProductDetail = () => {
  const { id } = useParams();

  const { setProduct } = useStateContext();

  // Set the productId in the context and fetch details
  useEffect(() => {
    setProduct(id);
  }, [id, setProduct]);

  return (
    <>
      <Container>
        <ProductDetails id={id}/>
      </Container>
    </>
  )
}

export default ProductDetail
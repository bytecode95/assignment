
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import { useParams } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';

const ProductDetails = () => {
  const { id } = useParams();
  
  const { ecommerceData } = useStateContext();
  console.log(ecommerceData.products);

  // const product = ecommerceData.filter((product) => product.id === id);
  // console.log(product);
  
  //const { name, description, price, status, rating, ratedBy, image } = product;

  return (
    
    <Container>
      {/* <Card className="d-flex flex-row flex-sm-wrap m-auto border-1 p-3 w-50 mt-3 mb-5 border-1 align-items-center ">
        <Card.Img style={{ maxWidth: '300px', maxHeight: '300px' }} src="" alt={'productimage'} />
        <Card.Body>
          <Card.Title className="fs-3">{name}</Card.Title>
          <Card.Text className="mt-2 fw-bold">
            $: 18
          </Card.Text>
          <Card.Text className="mt-2">
            Goodproduct
          </Card.Text>
          <div>
            <input type="number" id="typeNumber" onChange={() => {}} defaultValue={1} min={1}  className="form-control w-auto mb-3 " />
          </div>
          <Button
            style={{ backgroundColor: '#76d300', border: 'none', color: 'black', fontWeight: 'bold', padding: '10px', paddingInline: '25px' }}
            className="d-flex justify-content-center"
            onClick={() => {}}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card> */}
    </Container>
  )
}

export default ProductDetails
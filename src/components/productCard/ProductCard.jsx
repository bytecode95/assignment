import { Card, Button } from 'react-bootstrap';
import { useStateContext } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({id, name, description, price, status, rating, ratedBy, image }) => {
  
  const navigate = useNavigate();
  const { addtoCart } = useStateContext();

  return (
    <>
      <Card style={{ width: '20rem', cursor: 'pointer' }}>
        <Card.Body onClick={() => { navigate(`/productdetail/${id}`) }} >
          <Card.Img variant="top" src={image} alt={name} style={{ padding: '15px', height: '300px', backgroundColor: '#bdc3c7' }} />
        </Card.Body>
        <Card.Body>
          <div className='d-flex align-items-center justify-content-between'>
            <h6 className='font-bold'>{name}</h6>
            <h6>Price: ${price}</h6>
          </div>

          <Card.Text>{description}</Card.Text>

          <Card.Text>Status: {status}</Card.Text>
          <Card.Text>Rating: {rating} (Rated by {ratedBy} users)</Card.Text>
          <Button onClick={() => { addtoCart(id, name, price, image) }} variant="success" style={{ borderRadius: '20px' }}>Add to Cart</Button>
        </Card.Body>
      </Card>

    </>
  )
}

export default ProductCard
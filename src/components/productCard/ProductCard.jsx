import { Card, Button } from 'react-bootstrap';
import { useStateContext } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import Ratings from '../rating/Ratings';


const ProductCard = ({id, name, description, price, status, rating, ratedBy, image }) => {
  
  const navigate = useNavigate();
  const { addtoCart } = useStateContext();

  const handleAddToCart = () => {
    addtoCart({
      id,
      name,
      description,
      price,
      status,
      rating,
      ratedBy,
      image,
    });
  };

  return (
    <>
      <Card style={{ width: '20rem', cursor: 'pointer' }}>
        <Card.Body onClick={() => { navigate(`/productdetail/${id}`) }} >
          <Card.Img variant="top" src={image} alt={name} style={{ padding: '15px', height: '300px', backgroundColor: '#ecf0f1' }} />
        </Card.Body>
        <Card.Body>
          <div className='d-flex align-items-center justify-content-between'>
            <h6 className='font-bold'>{name}</h6>
            <h6>Price: ${price}</h6>
          </div>
          <Card.Text style={{fontSize:'12px'}}>{description}</Card.Text>
          <div className='d-flex align-items-center justify-content-start mb-2'>
            <Ratings rating={rating} />
            <Card.Text>({ratedBy})</Card.Text>
          </div>
          <Button onClick={handleAddToCart} variant="outline-secondary" style={{ borderRadius: '20px' }}>Add to Cart</Button>
        </Card.Body>
      </Card>

    </>
  )
}

export default ProductCard
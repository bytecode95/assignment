/* eslint-disable react/prop-types */
import { Card, Button } from 'react-bootstrap';
import { useStateContext } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import Ratings from '../rating/Ratings';


const ProductCard = ({ id, name, description, price, rating, ratedBy, image }) => {

  const navigate = useNavigate();
  const { addtoCart } = useStateContext();

  const handleAddToCart = () => {
    addtoCart({
      id,
      name,
      description,
      price,
      image,
    });
  };

  return (
    <>
      <Card className='shadow-md' style={{ width: '20rem', cursor: 'pointer', border: 'none' }}>
        <Card.Body onClick={() => { navigate(`/productdetail/${id}`) }} >
          <Card.Img variant="top" src={image} alt={name} style={{ padding: '15px', height: '300px', backgroundColor: '#ecf0f1' }} />
          <div className='position-absolute' style={{top:'20px', right:'25px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>

        </Card.Body>
        <Card.Body>
          <div className='d-flex align-items-center justify-content-between'>
            <h6 className='font-bold'>{name}</h6>
            <h6>Price: ${price}</h6>
          </div>
          <Card.Text style={{ fontSize: '12px' }}>{description}</Card.Text>
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
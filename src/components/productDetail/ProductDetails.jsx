import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { Ratings, ThemeSetting } from '../index';
import { useStateContext } from '../../context/ContextProvider';

const ProductDetails = () => {
  const { details, increaseQuantity, decreaseQuantity, getItemQuantity, currentColor } = useStateContext();
  const { id, name, description, price, rating, ratedBy, image } = details;
  const roundPrice = Math.round(price / 6).toFixed(2);
  const amount = getItemQuantity(id);

  return (

    <Container className=' d-flex  align-items-center justify-content-evenly mt-5 mb-5'>
      <div >
        <div>
          <img className='rounded' style={{ width: '500px', maxHeight: '500px', backgroundColor: currentColor }} src={image} alt={'productimage'} />
          <div className="d-flex align-items-center justify-content-between mt-3">
            <img className="p-1 rounded" style={{ width: '100px', backgroundColor: '#c0392b' }} src={image} alt={'productimage'} />
            <img className="p-1 rounded" style={{ width: '100px', backgroundColor: '#2980b9' }} src={image} alt={'productimage'} />
            <img className="p-1 rounded" style={{ width: '100px', backgroundColor: '#27ae60' }} src={image} alt={'productimage'} />
            <img className="p-1 rounded" style={{ width: '100px', backgroundColor: '#d35400' }} src={image} alt={'productimage'} />
          </div>
        </div>
      </div>
      <div className=' d-flex flex-column justify-content-start mx-5'>
        <h2>{name}</h2>
        <p className="mt-2">
          {description}
        </p>
        <div className='d-flex'>
          <Ratings rating={rating} />
          <span className='ms-2'>({ratedBy})</span>
        </div>

        <hr />
        <h3 className="mt-2 fw-bold">
          $: {price} or {roundPrice}/month
        </h3>
        <p>Suggested Payments with 6 months special financing</p>
        <hr />
        <div>
          <p className='fs-4'>Choose Color</p>
          <ThemeSetting />
        </div>


        <hr />
        <div className="d-flex align-items-center flex-row" style={{ gap: "1rem" }}>
          <div style={{ backgroundColor: '#ecf0f1' }} className="d-flex align-items-center justify-content-center" >
            <button style={{ border: 'none', padding: '10px' }} onClick={() => { decreaseQuantity({ id, name, description, price, image }) }} >-</button>
            <div>
              <span className="fs-6 p-3">{amount}</span>
            </div>
            <button style={{ border: 'none', padding: '10px' }} onClick={() => { increaseQuantity({ id, name, description, price, image }) }}>+</button>
          </div>
          <div className='d-flex flex-column'>
            <div >Only <span style={{ color: 'orange', fontWeight: 'bold' }}>{12} items</span> Left</div>
            <div>Dont miss it</div>
          </div>
        </div>
        <div className='mt-3'>
          <Button onClick={() => { }} variant="success" style={{ borderRadius: '20px', paddingInline: '40px', marginInlineEnd: '20px' }}>Buy Now</Button>
          <Button onClick={() => { }} variant="outline-secondary" style={{ borderRadius: '20px', paddingInline: '40px' }}>Add to Cart</Button>
        </div>
        <div>
          <div className='mt-3 border p-3 shadow-sm'>
            <div className='d-flex '>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
              </svg>
              <h6 className='ms-2'>Free Delivery</h6>
            </div>
            <p className='text-decoration-underline'>Enter your Postal Code for delivery avaiablity</p>
            <hr />
            <div className='d-flex '>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z" />
              </svg>
              <h6 className='ms-2'>Return Delivery</h6>
            </div>
            <p className='text-decoration-underline'>Free 30 Days delivery Returns</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductDetails
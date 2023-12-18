import { Container, Button } from 'react-bootstrap';
import { useStateContext } from '../../context/ContextProvider';

const Header = () => {

  const { ecommerceData, openCart } = useStateContext();
  const { name, logo } = ecommerceData;
  return (
    <>
      <div className='bg-white shadow-sm mx-auto' style={{ padding: '15px' }}>
        <Container>
          <div className='d-flex align-items-center justify-content-between '>
            <img src={logo} alt={`${name} Logo`} style={{ width: '100px' }} />
            <Button onClick={openCart} style={{ width: '3rem', height: '3rem', paddingInline: '10px', position: 'relative' }} variant='outline-light' className='rounded-circle'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black"  viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
              </svg>
              <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{ color: "white", position: 'absolute', width: '25px', left: 0, top: 0, transform: "translate(-25%, -5%)" }}>{2}</div>
            </Button>

          </div>

        </Container>

      </div>

    </>

  )
}

export default Header
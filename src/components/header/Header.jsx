import { Container } from 'react-bootstrap';
import SideBar from '../sidebar/SideBar';
import { useStateContext } from '../../context/ContextProvider';

const Header = () => {

  const { ecommerceData } = useStateContext();
  const { name, logo, } = ecommerceData;
  return (
    <>
      <div className='bg-white shadow-sm mx-auto' style={{ padding: '15px' }}>
        <Container>
          <div className='d-flex align-items-center justify-content-between '>
            <img src={logo} alt={`${name} Logo`} style={{ width: '100px' }} />
            <div className='d-flex align-items-center justify-content-between'>
              <SideBar />
            </div>
          </div>
        </Container>
      </div>

    </>

  )
}

export default Header
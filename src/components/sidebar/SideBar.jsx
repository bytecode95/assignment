import Dropdown from 'react-bootstrap/Dropdown';
import { useStateContext } from '../../context/ContextProvider';
import { Stack, Button } from "react-bootstrap"

const SideBar = () => {

  const { cartItem, cartQuantity } = useStateContext();
  //console.log(cartItem);

 let total=0;
  cartItem.forEach(item => {
     total+=item.price*item.quantity;
  });



  return (
    <>
      <Dropdown>
        <Dropdown.Toggle style={{ backgroundColor: 'white', color: 'black', border: 'none' }} id="dropdown-basic">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>
          <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{ color: "white", position: 'absolute', width: '25px', left: 0, top: 0, transform: "translate(-25%, -15%)" }}>{cartQuantity}</div>
        </Dropdown.Toggle>
        {
          cartQuantity > 0 && (
            <Dropdown.Menu className='shadow-lg p-3' style={{ border: 'none' }}>
              {
                cartItem.map((val) => (
                  <Dropdown.Item key={val.id}>
                    <Stack direction="horizontal" gap={5} className="d-flex align-items-center">
                      <img src={val.image} style={{ width: '80px', height: '80px', padding: '10px' }} />
                      <div className="me-auto mt-3">
                        <div style={{ fontWeight: 'bold' }}>
                          {val.name}
                        </div>
                        <p style={{ fontSize: '10px' }}>{val.description}</p>
                      </div>
                      <div style={{ fontSize: '15px', fontWeight: 'bold' }}>
                        ${`${val.quantity * val.price}`}
                      </div>
                    </Stack>
                  </Dropdown.Item>
                ))
              }
              <hr />
              <div className='ms-auto d-flex flex-column w-25 '>
                <div style={{fontWeight:'bold'}}>Total: ${total}</div>
                <Button onClick={() => {}} variant="outline-secondary" style={{ borderRadius: '20px', paddingInline: '15px', marginTop: '10px', marginBottom: '15px' }}>Checkout</Button>
              </div>
            </Dropdown.Menu>
          )}

      </Dropdown>

    </>
  )
}

export default SideBar
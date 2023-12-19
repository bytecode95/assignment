
import { useContext } from "react";
import { createContext, useState , useEffect } from "react"


const ShoppingCartContext = createContext();

export const ContextProvider = ({children}) => {
  const [ecommerceData, setEcommerceData] = useState([]);
  const [isopen, setIsOpen] = useState(false);
  const[cartItem, setCartItem] = useState([]);
  const [details, setDetails] = useState({});
  //console.log(productDetails);
  //console.log(cartItem);
  //console.log(ecommerceData);
  const cartQuantity = cartItem.reduce((quantity, item)=> item.quantity + quantity, 0)
  //console.log(cartQuantity);

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const setProduct = (id) => {
    const details = getProductDetails(id);
    setDetails(details);
  };

  const getProductDetails = (id) => {
    //console.log(id);
    const details = ecommerceData.products.find(product => product.id === id);
    console.log(details);
    return details;
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db');
        const data = await response.json();
        //console.log(data.ecommerce);
        setEcommerceData(data.ecommerce);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addtoCart = (item) =>{
    //console.log(item);
    const productExist = cartItem.find((val) => val.id === item.id); 

    if(!productExist){
        setCartItem([...cartItem, {...item, quantity:1}])
    }else{
      console.log('Product is already added');
    }
  }




  return (
    <ShoppingCartContext.Provider value={{ecommerceData, openCart, isopen, closeCart, cartItem, addtoCart, cartQuantity, details, setProduct}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useStateContext = () => useContext(ShoppingCartContext);


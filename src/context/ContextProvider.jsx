
import { useContext } from "react";
import { createContext, useState , useEffect } from "react"


const ShoppingCartContext = createContext();

export const ContextProvider = ({children}) => {
  const [ecommerceData, setEcommerceData] = useState([]);
  const [isopen, setIsOpen] = useState(false);
  const[cartItem, setCartItem] = useState([]);
  console.log(cartItem);
  

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  
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
    const productExist = cartItem.find(val => val.id === item.id); 

    if(!productExist){
        setCartItem([...cartItem, {...item, qty:1}])
    }
  }




  return (
    <ShoppingCartContext.Provider value={{ecommerceData, openCart, isopen, closeCart, cartItem, addtoCart}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useStateContext = () => useContext(ShoppingCartContext);


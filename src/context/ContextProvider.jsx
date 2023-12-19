/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext, useState, useEffect } from "react"
import { PRODUCT_API_URL } from '../service/CommonAPI'
import { setCartItemsCookie } from "../hooks/setCookie";
import { getCartItemsFromCookie } from "../hooks/getCookie";


const ShoppingCartContext = createContext();

export const ContextProvider = ({ children }) => {
  const [ecommerceData, setEcommerceData] = useState({});
  const [cartItem, setCartItem] = useState(getCartItemsFromCookie());
  const [details, setDetails] = useState([]);
  const [currentColor, setCurrentColor] = useState('#c0392b');
  const cartQuantity = cartItem.reduce((quantity, item) => item.quantity + quantity, 0)
  //const currencyValues = ecommerceData.currency;


  const setProduct = (id) => {
    const details = getProductDetails(id);
    setDetails(details);
  };

  const getProductDetails = (id) => {
    const details = ecommerceData.products.find(product => product.id === id);
    return details;
  };

  useEffect(() => {
    setCartItemsCookie(cartItem);
  }, [cartItem]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${PRODUCT_API_URL}/pr-re-ec-products/db`);
        const data = await response.json();
        setEcommerceData(data.ecommerce);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addtoCart = (item) => {
    const productExist = cartItem.find((val) => val.id === item.id);

    if (!productExist) {
      setCartItem([...cartItem, { ...item, quantity: 1 }])
    } else {
      console.log('Product is already added');
    }
  }

  const getItemQuantity = (id) => {
    const qty = cartItem.find(item => item.id === id)?.quantity || 0
    return qty;
  }


  const increaseQuantity = (item) => {
    const productExist = cartItem.find((val) => val.id === item.id);
    if (!productExist) {
      setCartItem([...cartItem, { ...item, quantity: 1 }])
    } else {
      setCartItem(cartItem.map((val) => val.id === item.id ?
        { ...val, quantity: val.quantity + 1 } : val
      ));
    }
  }

  const decreaseQuantity = (item) => {
    const updatedCart = cartItem.map((val) =>
      val.id === item.id ? { ...val, quantity: Math.max(val.quantity - 1, 0) } : val
    );
    // Filter out items with a quantity of 0
    const filteredCart = updatedCart.filter(item => item.quantity > 0);
    setCartItem(filteredCart);
  }

  const setColor = (color) => {
    setCurrentColor(color);
  }



  return (
    <ShoppingCartContext.Provider value={{ ecommerceData, cartItem, addtoCart, cartQuantity, details, setProduct, increaseQuantity, decreaseQuantity, getItemQuantity, setColor, currentColor }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export const useStateContext = () => useContext(ShoppingCartContext);


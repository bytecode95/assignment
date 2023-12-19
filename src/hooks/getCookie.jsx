  // Get cart items from cookie
  export const getCartItemsFromCookie = () => {
    const cartItemsCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('cartItem='));
    if (cartItemsCookie) {
      const cartItemsJson = decodeURIComponent(cartItemsCookie.split('=')[1]);
      return JSON.parse(cartItemsJson);
    }
    return [];
  };
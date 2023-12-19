
export const setCartItemsCookie = (cartItem) => {
    const cartItemsJson = JSON.stringify(cartItem);
    document.cookie = `cartItem=${encodeURIComponent(cartItemsJson)}; expires=${new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`;
};
  


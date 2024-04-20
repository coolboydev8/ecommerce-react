import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

/**
 * The function takes in a prop called children, and returns a ShopContext.Provider component with a
 * value of contextValue.
 * @returns The contextValue is being returned.
 */
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  /**
   * If the itemid is in the cartItems object, increment the value by 1, otherwise set the value to 1.
   */
  const addItemToCart = (itemid) => {
    setCartItems((prev) => ({
      ...prev,
      [itemid]: prev[itemid] > 0 ? prev[itemid] + 1 : 1,
    }));
  };

  /**
   * If the itemid is 0, set it to 0, otherwise subtract 1 from it.
   */
  const removeItemFromCart = (itemid) => {
    setCartItems((prev) => ({
      ...prev,
      [itemid]: prev[itemid] > 0 ? prev[itemid] - 1 : 0,
    }));
  };

  const updateCartItemCount = (newAmount, itemid) => {
    setCartItems((prev) => ({ ...prev, [itemid]: newAmount }));
  };

  // Update total quantity whenever cart items change
  useEffect(() => {
    const newTotalQuantity = Object.values(cartItems).reduce(
      (acc, curr) => acc + curr,
      0
    );
    setTotalQuantity(newTotalQuantity);
  }, [cartItems]);

  const contextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateCartItemCount,
    totalQuantity,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

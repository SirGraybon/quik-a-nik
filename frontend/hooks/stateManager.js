import { useReducer, useEffect } from "react";
import axios from "axios";

const stateManager = function () {
  const defaultState = {
    cart: [],
    products: [],
    isLoading: true,
  };

  const reducer = function (state, action) {
    switch (action.type) {
      case "addToCart":
        if (!state.cart.some((i) => i.id === action.item.id)) {
          let lineItem = action.item;
          lineItem.qty = 1;
          return {
            ...state,
            cart: [...state.cart, lineItem],
          };
        } else {
          const index = state.cart.findIndex((i) => i.id === action.item.id);
          //I have a feeling this is bad practice need to review (but it works)
          state.cart[index].qty++;
        }

      case "generateProducts":
        console.log(action.prods)
        return {
          ...state,
          isLoading: false,
          products: action.prods,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      const prods = res.data.products
      dispatch({ type: "generateProducts", prods });
    });
  }, []);

  const addItem = function (item) {
    dispatch({ type: "addToCart", item });
  };

  return {
    state,
    addItem,
  };
};

export default stateManager;
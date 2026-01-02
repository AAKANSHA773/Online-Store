import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails"
import favoritesReducer from "../utils/favoritesSlice";


const mockProducts = [
  {
    id: 1,
    title: "Laptop",
    category: "electronics",
    price: 1000,
    image: "",
    rating: { rate: 4.5, count: 10 },
  },
  {
    id: 2,
    title: "Shirt",
    category: "men's clothing",
    price: 500,
    image: "",
    rating: { rate: 3.8, count: 8 },
  },
];


beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProducts),
    })
  );
});



test("search filters products", async () => {
  const store = configureStore({
    reducer: { favorites: favoritesReducer },
  });

  render(
    <Provider store={store}>
        <ProductList />
    </Provider>
  );

  expect(await screen.findByText("Laptop")).toBeInTheDocument();


  fireEvent.change(
    screen.getByPlaceholderText(/search/i),
    { target: { value: "shirt" } }
  );

  expect(screen.getByText("Shirt")).toBeInTheDocument();
});

test("filters by category", async () => {
  const store = configureStore({
    reducer: { favorites: favoritesReducer },
  });

  render(
    <Provider store={store}>
        <ProductList />
    </Provider>
  );

  expect(await screen.findByText("Laptop")).toBeInTheDocument();


  fireEvent.change(
    screen.getByDisplayValue("All Categories"),
    { target: { value: "electronics" } }
  );

  expect(screen.getByText("Laptop")).toBeInTheDocument();
});


test("user can add product to favorites", async () => {
  const store = configureStore({
    reducer: { favorites: favoritesReducer },
  });

 
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProducts[0]),
    })
  );

  render(
    <Provider store={store}>
        <ProductDetails/>
    </Provider>
  );

  expect(await screen.findByText("Laptop")).toBeInTheDocument();


  fireEvent.click(screen.getByText(/add to favorites/i));

  const state = store.getState();
  expect(state.favorites.items.length).toBe(1);
});

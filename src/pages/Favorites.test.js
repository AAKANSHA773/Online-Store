import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import FavoritesList from "./FavoritesList";
import favoritesReducer from "../utils/favoritesSlice";

const renderWithStore = (items = []) => {
  const store = configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
    preloadedState: {
      favorites: { items },
    },
  });

  return render(
    <Provider store={store}>
        <FavoritesList />
    </Provider>
  );
};

test("shows empty favorites message", () => {
  renderWithStore([]);

  expect(screen.getByText(/No favorite products yet/i)).toBeInTheDocument();
});

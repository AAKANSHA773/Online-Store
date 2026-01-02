
import favoritesReducer , { addFavorite, removeFavorite,}  from "./favoritesSlice";

describe("favoritesSlice", () => {
  it("should add a product", () => {
    const product = { id: 1, title: "Test Product" };

    const state = favoritesReducer(
      { items: [] },
      addFavorite (product)
    );

    expect(state.items.length).toBe(1);
  });

  it("should remove a product", () => {
    const product = { id: 1, title: "Test Product" };

    const state = favoritesReducer(
      { items: [product] },
      removeFavorite(1)
    );

    expect(state.items.length).toBe(0);
  });
});
